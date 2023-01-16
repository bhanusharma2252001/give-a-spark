import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { ElementOptions, Elements } from 'ngx-stripe';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/service/payment.service';
import { SparkService } from 'src/app/service/spark.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-plan-dashboard',
  templateUrl: './plan-dashboard.component.html',
  styleUrls: ['./plan-dashboard.component.scss']
})
export class PlanDashboardComponent implements OnInit {
   amount:any;
  paymentHandler: any = null


  stripeForm!:FormGroup;

// elements!:Elements;
// card:StripeElement;
// paymentStatus:any;
// stripeData:any;
// submitted:any;
// loading:any;
// elementsOptions:ElementOptions={
//   locale:'en'

  constructor(private api: SparkService, private fb:FormBuilder,private stripeService:SparkService) { }

  ngOnInit(): void {
    this.invokeStripe();

    // this.loading=false;
    this.createForm();




    // this.stripeService['elements'](this.elementsOptions).subscribe(elements:any=>{
    //   this.elements=elements;
    
    //   if(!this.card){this.card=this.elements.create('card',{
    //     iconStyle:'solid',
    //     style:{
    //       base:{
    //         iconColor:'#666EEB',
    //         color:'#31125F',
    //         lineHeight:'40px',
    //         '::placeholder':{
    //           color:'#CFD7EB'
    //         }
    //       }
    //     },
    //   });
    //   this.card.mount('#card-element');}
    // })
    

  }

  createForm(){
    this.stripeForm=this.fb.group({
      name:['',Validators.required],
      amount:['', Validators.required]
    })
  }
  // var stripe = Stripe('<<YOUR-PUBLISHABLE-API-KEY>>');
  // var elements = stripe.elements();


    makePayment(amount:number, plan:string) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_live_51JpbUZSAdRYr9RTGZc0rNy4ldV88uG5czIA8Ym2bhCLJ8cOKLSJUWBCx8w5GgSrfHJoSyApfCBKwtTF1Re6cDxtL00zmWuLBum',
        locale: 'auto',
        token: function (stripeToken: any) {
          if(plan == 'planB') {
            stripeToken.SelectPlan = "Plan B"
          } else if(plan == 'planC') {
            stripeToken.SelectPlan = "Plan C"
          }
          console.log(stripeToken);
  console.log(amount);

          paymentStripe(stripeToken)

        }
      })


      const paymentStripe = (stripeToken: any) => {
        this.api.makePayment(stripeToken).subscribe((data:any)=>{
          console.log(data);
          alert('Payment Successfully')
        })

      }





      paymentHandler.open({
        name: "Email Signature",
        description: "Let's try your unique signature",
        amount: amount * 100
      })
    }



    invokeStripe() {
      if (!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement('script');
        script.id = 'stripe-script';
        script.type = 'text/javascript';
        script.src = 'https://checkout.stripe.com/checkout.js';
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_live_51JpbUZSAdRYr9RTGZc0rNy4ldV88uG5czIA8Ym2bhCLJ8cOKLSJUWBCx8w5GgSrfHJoSyApfCBKwtTF1Re6cDxtL00zmWuLBum',
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken);
            },
          });
        };
        window.document.body.appendChild(script);
      }
    }

    
payment(){
//   this.submitted=true;
//   this.loading=true;
//   this.stripeData=this.stripeForm.value
// this.stripeService.createToken(this.card,{name}).subscribe(result=>{
//   if(result.token)
// })
}


}

    

    
