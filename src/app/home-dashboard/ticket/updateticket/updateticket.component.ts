import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SparkService } from 'src/app/service/spark.service';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss']
})
export class UpdateticketComponent implements OnInit {

  updateticketForm: any;
  ticketdata: any;
  id: any;
  ticketbyId: any;

  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private api: SparkService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateticketForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      subject: ["", Validators.required],
      date: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params["id"];
      this.getTicketbyId(this.id);
    });
  }

  getTicketbyId(id: any) {
    this.api.getTicketbyId(this.id).subscribe((res) => {
      this.ticketbyId = res.result;
      this.editTicket(res.result);
    });
  }

  editTicket(data: any) {
    this.updateticketForm.patchValue({
      name: this.ticketbyId.name,
      date: this.ticketbyId.date,
      subject: this.ticketbyId.subject,
      email: this.ticketbyId.email,
      description: this.ticketbyId.description,
    });
  }

  onSubmit() {
    let log = this.updateticketForm.value;

    this.api.updateTicket(this.id, log).subscribe(
      (res: any) => {
        console.log(res);
        this.ticketdata = res;
        this.toast.success("submitted");
        this.getTicketbyId(this.id);
      },
      (err: any) => {
        this.toast.error("not submitted");
      }
    );
  }


}
