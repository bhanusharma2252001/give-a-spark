import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-ticketdashboard',
  templateUrl: './ticketdashboard.component.html',
  styleUrls: ['./ticketdashboard.component.scss']
})
export class TicketdashboardComponent implements OnInit {

  ticketlist: any;
  ticketdata: any;

  constructor(private spinner:NgxSpinnerService,private toastr:ToastrService, private _Router: Router, private api: SparkService, private fb: FormBuilder, private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTicket();


    }

  getTicket() {
    this.api.getTicketList().subscribe((res: { result: any; }) => {
      this.ticketlist = res.result;
    });
  }
  ticketEvent(event:any, data:any){
    this.ticketdata = data;
    console.log(this.ticketdata);

  }

  deleteTicket(id:any) {
    this.api.deleteTicket(id).subscribe((res: any) => {
    this.toastr.success('Ticket deleted')   ;
    this.getTicket();
});
  }


  updateTicket(){
    this._Router.navigateByUrl('/home-dashboard/ticket/updateticket?id='+this.ticketdata._id);  }



}
