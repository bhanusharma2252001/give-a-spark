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
  userDetails: any;
  planDetails: any;
  buttonClicked = false;
  buttonClicked1 = false;
  constructor(private elementRef:ElementRef,private api: SparkService, private spinner:NgxSpinnerService,private fb: FormBuilder) { }

   ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


  paymentSelectC() {
    this.buttonClicked = true;
    let data = {
     "SelectPlan": "Plan C",
     "quantity":"1"
 
      
  
    }
    this.api.makePayment(data).subscribe(async (res: any) => {

      let stripe = await loadStripe('pk_live_51Hj78kE26wvx34FaJqR9v53cKoxbUKaT0mQAfD3b6062td3XMJo3IWPbzNobSlTq22qIpFNJ0dfTxUO9PLincuWp00aArAg1BP');
      stripe?.redirectToCheckout({
        sessionId: res.id,
      });
      console.log(res, 'paymentdata');


    })
  }


  paymentSelectB() {
    this.buttonClicked1 = true;
    let data = {
      "SelectPlan": "Plan B",
      "quantity":"1"
    }
    this.api.makePayment(data).subscribe(async (res: any) => {

      let stripe = await loadStripe('pk_live_51Hj78kE26wvx34FaJqR9v53cKoxbUKaT0mQAfD3b6062td3XMJo3IWPbzNobSlTq22qIpFNJ0dfTxUO9PLincuWp00aArAg1BP');
      stripe?.redirectToCheckout({
        sessionId: res.id,
      });
      console.log(res, 'paymentdata');


    })
  }

  profileData() {
    this.api.myProfile().subscribe((res:any)=>{
      this.userDetails = res;
      this.planDetails=res?.SelectPlan

      console.log(this.userDetails?.address[0]?.addressline1, "addddd")
    })
  }


}

















