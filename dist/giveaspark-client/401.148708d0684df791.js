"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[401],{9401:(U,c,r)=>{r.r(c),r.d(c,{UpdateticketModule:()=>h});var s=r(6895),l=r(3262),o=r(433),t=r(1571),m=r(8423),u=r(4383),p=r(7177);const b=[{path:"",component:(()=>{class e{constructor(i,a,d,g,f,v){this.spinner=i,this.toast=a,this.api=d,this.fb=g,this.router=f,this.route=v,this.updateticketForm=this.fb.group({name:["",o.kI.required],email:["",o.kI.required],subject:["",o.kI.required],date:["",o.kI.required],description:["",o.kI.required]})}ngOnInit(){this.route.queryParams.subscribe(i=>{this.id=i.id,this.getTicketbyId(this.id)})}getTicketbyId(i){this.api.getTicketbyId(this.id).subscribe(a=>{this.ticketbyId=a.result,this.editTicket(a.result)})}editTicket(i){this.updateticketForm.patchValue({name:this.ticketbyId.name,date:this.ticketbyId.date,subject:this.ticketbyId.subject,email:this.ticketbyId.email,description:this.ticketbyId.description})}onSubmit(){this.api.updateTicket(this.id,this.updateticketForm.value).subscribe(a=>{console.log(a),this.ticketdata=a,this.toast.success("submitted"),this.getTicketbyId(this.id)},a=>{this.toast.error("not submitted")})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(m.t2),t.Y36(u._W),t.Y36(p.O),t.Y36(o.qu),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-updateticket"]],decls:32,vars:1,consts:[[1,"row","mt-5","p-1","align-items-center",3,"formGroup","ngSubmit"],[1,"col-md-6","col-lg-6"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label","text-blue","fs-12"],["type","text","id","exampleFormControlInput1","placeholder","Name","formControlName","name",1,"form-control","text-black","bg-semiblack","p-3"],["type","email","id","exampleFormControlInput1","placeholder","Email","formControlName","email",1,"form-control","text-black","bg-semiblack","p-3"],["type","date","id","exampleFormControlInput1","placeholder","Date","formControlName","date",1,"form-control","text-black","bg-semiblack","p-3"],["type","text","id","exampleFormControlInput1","placeholder","Subject","formControlName","subject",1,"form-control","text-black","bg-semiblack","p-3"],[1,"align-self-start"],[1,"mt-3","col-md-6","col-lg-6"],["for","",1,"upload-document","p-2","fs-14","pt-3","text-black-50"],["type","text","a","","formControlName","description","placeholder","Description",1,"form-control","text-black","bg-semiblack","p-3"],[1,"col-md-12"],[1,"row","align-items-center"],[1,"col-md-2","col-lg-2"],[1,"text-center","mt-4"],["type","submit",1,"button","blue-btn","w-20","pt-1","pb-1"]],template:function(i,a){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4," Name "),t.qZA(),t._UZ(5,"input",4),t.qZA()(),t.TgZ(6,"div",1)(7,"div",2)(8,"label",3),t._uU(9,"Email "),t.qZA(),t._UZ(10,"input",5),t.qZA()(),t.TgZ(11,"div",1)(12,"div",2)(13,"label",3),t._uU(14,"Date"),t.qZA(),t._UZ(15,"input",6),t.qZA()(),t.TgZ(16,"div",1)(17,"div",2)(18,"label",3),t._uU(19,"Subject"),t.qZA(),t._UZ(20,"input",7),t.qZA()(),t.TgZ(21,"div",8)(22,"div",9)(23,"label",10),t._uU(24,"Description "),t.qZA(),t._UZ(25,"input",11),t.qZA()(),t.TgZ(26,"div",12)(27,"div",13),t._UZ(28,"div",14),t.TgZ(29,"div",15)(30,"button",16),t._uU(31," Submit "),t.qZA()()()()()),2&i&&t.Q6J("formGroup",a.updateticketForm)},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(b),l.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,k,o.UX,o.u5]}),e})()}}]);