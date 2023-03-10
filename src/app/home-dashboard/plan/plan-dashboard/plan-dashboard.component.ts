import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { ElementOptions, Elements } from 'ngx-stripe';
import { ToastrService } from 'ngx-toastr';

import { SparkService } from 'src/app/service/spark.service';

import { StripeCardElement, StripeElements, StripeElementsOptions } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-plan-dashboard',
  templateUrl: './plan-dashboard.component.html',
  styleUrls: ['./plan-dashboard.component.scss']
})
export class PlanDashboardComponent implements OnInit {
  private stripe: any;
  private elements: StripeElements | undefined;
  private cardElement: StripeCardElement | undefined;
  private paymentIntentId: string | undefined;
  private amount: number = 0;
  private cardErrors: string | undefined;

  constructor(private elementRef:ElementRef,private api: SparkService, private spinner:NgxSpinnerService,private fb: FormBuilder) { }

   ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


  paymentSelectC() {
    let data = {
     "SelectPlan": "Plan C",
     "quantity":"1"
 
      
  
    }
    this.api.makePayment(data).subscribe(async (res: any) => {

      let stripe = await loadStripe('pk_live_51Mds83SEEnMfzbAjs4DBJPc0LR3eaVUxn3zz6dJVeIQZVHEfXhgw648VGZI5OSetcVJFUkImaNHDAnPGDmnDsJ22001CDI558x');
      stripe?.redirectToCheckout({
        sessionId: res.id,
      });
      console.log(res, 'paymentdata');


    })
  }


  paymentSelectB() {
    let data = {
      "SelectPlan": "Plan B",
      "quantity":"6"
    }
    this.api.makePayment(data).subscribe((res: any) => {
      var paymentdata = res.paymentIntent;
      console.log(res, paymentdata);
      alert('Payment Successfully');

    })
  }




}

















