import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss']
})
export class AddticketComponent implements OnInit {

  addticketForm: any;
  ticketdata: any;

  constructor(private spinner:NgxSpinnerService,private toast:ToastrService, private api: SparkService, private fb: FormBuilder, private router:Router,
    private route: ActivatedRoute) {
    this.addticketForm=this.fb.group({
     name: ['', Validators.required],
     email: ['', Validators.required],
     subject: ['', Validators.required],
     date: ['', Validators.required],
     description: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }


addticket(){
  let log = this.addticketForm.value

  this.api.createTicket(log).subscribe(
    (res: any) => {
      console.log(res);
      this.ticketdata = res;
      this.toast.success('submitted');
      this.router.navigate(['home-dashboard/ticket/ticketdashboard'])
    },
    (err: any) => {

      this.toast.error('not submitted');

    }
  )
}

}
