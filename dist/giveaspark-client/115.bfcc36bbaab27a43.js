"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[115],{3115:(Z,m,n)=>{n.r(m),n.d(m,{AddticketModule:()=>b});var c=n(6895),d=n(3262),o=n(433),t=n(1571),s=n(8423),u=n(4383),p=n(7177);const f=[{path:"",component:(()=>{class e{constructor(i,r,a,k,v,A){this.spinner=i,this.toast=r,this.api=a,this.fb=k,this.router=v,this.route=A,this.addticketForm=this.fb.group({name:["",o.kI.required],email:["",o.kI.required],subject:["",o.kI.required],date:["",o.kI.required],description:["",o.kI.required]})}ngOnInit(){}addticket(){this.api.createTicket(this.addticketForm.value).subscribe(r=>{console.log(r),this.ticketdata=r,this.toast.success("submitted")},r=>{this.toast.error("not submitted")})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(s.t2),t.Y36(u._W),t.Y36(p.O),t.Y36(o.qu),t.Y36(d.F0),t.Y36(d.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-addticket"]],decls:33,vars:1,consts:[[1,"row","mt-5","p-1","align-items-center",3,"formGroup","ngSubmit"],[1,"col-md-6","col-lg-6"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label","text-blue","fs-14","fw-500"],["type","text","id","exampleFormControlInput1","placeholder","Name","formControlName","name",1,"form-control","bg-semiblack","p-3"],["type","email","id","exampleFormControlInput1","placeholder","Email","formControlName","email",1,"form-control","bg-semiblack","p-3"],["type","date","id","exampleFormControlInput1","placeholder","Date","formControlName","date",1,"form-control","bg-semiblack","p-3"],["type","text","id","exampleFormControlInput1","placeholder","Subject","formControlName","subject",1,"form-control","bg-semiblack","p-3"],[1,"align-self-start"],[1,"mt-3"],[1,"upload-file","bg-semiblack"],["for","",1,"upload-document","text-blue","fs","p-2","fs-14","pt-3-50"],["type","text","a","","formControlName","description","placeholder","Description",1,"p-3","form-control","fs-14","fw-light"],[1,"col-md-12"],[1,"row","align-items-center"],[1,"col-md-2","col-lg-2"],[1,"mt-4"],["type","submit",1,"button","green","-btn","w-20","px-3","py-2"]],template:function(i,r){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.addticket()}),t.TgZ(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4," Name "),t.qZA(),t._UZ(5,"input",4),t.qZA()(),t.TgZ(6,"div",1)(7,"div",2)(8,"label",3),t._uU(9,"Email "),t.qZA(),t._UZ(10,"input",5),t.qZA()(),t.TgZ(11,"div",1)(12,"div",2)(13,"label",3),t._uU(14,"Date"),t.qZA(),t._UZ(15,"input",6),t.qZA()(),t.TgZ(16,"div",1)(17,"div",2)(18,"label",3),t._uU(19,"Subject"),t.qZA(),t._UZ(20,"input",7),t.qZA()(),t.TgZ(21,"div",8)(22,"div",9)(23,"div",10)(24,"label",11),t._uU(25,"Description "),t.qZA(),t._UZ(26,"input",12),t.qZA()()(),t.TgZ(27,"div",13)(28,"div",14),t._UZ(29,"div",15),t.TgZ(30,"div",16)(31,"button",17),t._uU(32," Submit "),t.qZA()()()()()),2&i&&t.Q6J("formGroup",r.addticketForm)},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(f),d.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,g,o.UX,o.u5]}),e})()}}]);