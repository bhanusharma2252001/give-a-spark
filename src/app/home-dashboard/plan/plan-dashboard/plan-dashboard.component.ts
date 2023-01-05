import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private api: SparkService) { }

  ngOnInit(): void {
    this.invokeStripe();
  }
  // var stripe = Stripe('<<YOUR-PUBLISHABLE-API-KEY>>');
  // var elements = stripe.elements();


    makePayment(amount: number,plan:string) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51MBbpvSIdADNOmjRYROfVBFFqQAIYAIDuhhtXRcc48QwGumM0cjiC0LmMqwQ8TSzZ0f4pzGNp5EuywRbO7iXbcOY00ZRZ7osjZ',
        locale: 'auto',
        token: function (stripeToken: any) {
          if(plan == 'planB') {
            stripeToken.SelectPlan= "Plan B"
          } else if(plan == 'planC') {
            stripeToken.SelectPlan= "Plan C"
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
            key: 'pk_test_51MBbpvSIdADNOmjRYROfVBFFqQAIYAIDuhhtXRcc48QwGumM0cjiC0LmMqwQ8TSzZ0f4pzGNp5EuywRbO7iXbcOY00ZRZ7osjZ',
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

}






    

    
}