"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[122],{6122:(P,f,a)=>{a.r(f),a.d(f,{UserProfileModule:()=>w});var c=a(6895),u=a(9965),r=a(433),p=a(8246),e=a(8256),b=a(7177),Z=a(7185),g=a(334);function v(o,n){1&o&&(e.TgZ(0,"h4",48),e._uU(1,"Hi John Doe,"),e.qZA())}function _(o,n){if(1&o&&(e.TgZ(0,"h4",48),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.userName)}}function U(o,n){1&o&&(e.TgZ(0,"div",49)(1,"small"),e._uU(2,"Name is required "),e.qZA()())}function T(o,n){1&o&&(e.TgZ(0,"div",49),e._uU(1," Company Name is required "),e.qZA())}function C(o,n){1&o&&(e.TgZ(0,"div",49),e._uU(1," Company website is required "),e.qZA())}function q(o,n){1&o&&(e.TgZ(0,"div",49)(1,"small"),e._uU(2,"*Phone no. is required"),e.qZA()())}function y(o,n){1&o&&(e.TgZ(0,"div",49),e._uU(1," *Please enter valid no. "),e.qZA())}function x(o,n){1&o&&(e.TgZ(0,"p",39),e._uU(1,"984395709 "),e.qZA())}function N(o,n){1&o&&(e.TgZ(0,"p",39),e._uU(1,"www.perfectiongeeks.com"),e.qZA())}const A=[{path:"",component:(()=>{class o{constructor(t,i,l,s,m,d){this.fb=t,this.api=i,this.router=l,this.toast=s,this._ngZone=m,this.spinner=d,this.Submitted=!1,this.elementType=p.TT.URL,this.correctionLevel=p.Jk.HIGH,this.value="",this.profileForm=this.fb.group({firstName:["",[r.kI.required]],companyName:["",[r.kI.required]],companyWebsite:["",[r.kI.required]],phone:["",r.kI.compose([r.kI.required,r.kI.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")])]})}get f(){return this.profileForm.controls}ngOnInit(){this.getbasicDetails(),sessionStorage.getItem("username")&&(this.userName=sessionStorage.getItem("username")),sessionStorage.getItem("email")&&(this.Email=sessionStorage.getItem("email")),console.log(this.userName,this.Email,"kkk;k;k;k"),this.getScanText(),this.qrCodeByApi()}getScanText(){let t=sessionStorage.getItem("ClientSpark");this.value="https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token="+btoa(t)}onSubmit(t){this.Submitted=!0;let i={firstName:t.firstName,companyName:t.companyName,companyWebsite:t.companyWebsite,phone:t.phone,email:this.Email};this.spinner.show(),this.api.basicDetailofUser(i).subscribe(l=>{this.spinner.hide(),this.toast.success(" Details added successfully"),this.router.navigate(["home-dashboard/basicdetails-company"])},l=>{this.spinner.hide()})}getbasicDetails(){this.api.getbasicDetaiofUseer().subscribe(t=>{this.details=t.result,this.userName=t.result[0]?.firstName,this.compname=t.result[0]?.companyName,this.compwebsite=t.result[0]?.companyWebsite,this.number=t.result[0]?.phone})}logout(){sessionStorage.clear(),this.api.isLoggedIn=!1,this._ngZone.run(()=>{this.router.navigate([""])})}qrCodeByApi(){this.api.getQrCode().subscribe(t=>{this.qrCode=t,console.log(this.qrCode)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(b.O),e.Y36(u.F0),e.Y36(Z._W),e.Y36(e.R0b),e.Y36(g.t2))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-profile"]],decls:83,vars:22,consts:[[1,"container-fluid"],[1,"mt-5"],[1,"container-fluid","p-0"],[1,"row","m-0","p-0"],[1,"col-lg-12"],[1,"row"],[1,"col-md-6","col-lg-6"],[1,"form-box","bg-white","p-4","shadow","border-10"],[1,""],["class","fw-semibold",4,"ngIf"],[1,"fw-color"],[1,"row","position-relative",3,"formGroup","ngSubmit"],[1,"col-md-11","col-lg-9"],[1,"mb-2"],["for","exampleInputfiled",1,"form-label"],["type","text","pattern","[A-Za-z]+","id","exampleInputfiled","aria-describedby","textHelp","formControlName","firstName",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["class","text-danger text-sm",4,"ngIf"],["type","text","id","exampleInputfiled","aria-describedby","textHelp","formControlName","companyName",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","id","exampleInputfiled","aria-describedby","textHelp","formControlName","companyWebsite",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],[1,"mb-4"],["type","text","maxlength","13","minlength","10","id","exampleInputfiled","aria-describedby","textHelp","formControlName","phone",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","submit",1,"green-btn","pe-3","ps-3","p-2",3,"disabled"],[1,"col-md-1","col-lg-3"],[1,"image-square"],["src","assets/images/square-image.png",1,"wh-150"],[1,"card-box","bg-white","p-4","shadow","border-10","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"col-md-7","col-lg-6","ps-2","pe-0","position-relative"],[1,"position-absolute","start-0"],["src","assets/images/vertical-line.png",1,"h-90","pe-3"],[1,"ms-4"],[1,"text-darkblue"],[1,"mb-3"],[1,"text-yellow"],[1,"d-flex"],["aria-hidden","true",1,"fa","fa-phone","fs-12","pe-3"],["class"," fs-12",4,"ngIf"],[1,"fs-12"],["aria-hidden","true",1,"fa","fa-map-marker","fs-12","pe-3"],["aria-hidden","true",1,"fa","fa-envelope","fs-12","pe-3"],["aria-hidden","true",1,"fa","fa-globe","fs-12","pe-3"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["cssClass","bshadow",2,"width","150px","height","150px",3,"elementType","errorCorrectionLevel","value"],[1,"text-center","pt-3","fs-12"],["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"],[1,"fw-semibold"],[1,"text-danger","text-sm"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),e.YNc(10,v,2,0,"h4",9),e.YNc(11,_,2,1,"h4",9),e.TgZ(12,"p",10),e._uU(13,"Start with basic details for your signature"),e.qZA()(),e.TgZ(14,"form",11),e.NdJ("ngSubmit",function(){return i.onSubmit(i.profileForm.value)}),e.TgZ(15,"div",12)(16,"div",13)(17,"label",14),e._uU(18,"Your Name"),e.qZA(),e.TgZ(19,"input",15),e.NdJ("ngModelChange",function(s){return i.userName=s}),e.qZA(),e.YNc(20,U,3,0,"div",16),e.qZA(),e.TgZ(21,"div",13)(22,"label",14),e._uU(23,"Company Name"),e.qZA(),e.TgZ(24,"input",17),e.NdJ("ngModelChange",function(s){return i.compname=s}),e.qZA(),e.YNc(25,T,2,0,"div",16),e.qZA(),e.TgZ(26,"div",13)(27,"label",14),e._uU(28,"Company Website"),e.qZA(),e.TgZ(29,"input",18),e.NdJ("ngModelChange",function(s){return i.compwebsite=s}),e.qZA(),e.YNc(30,C,2,0,"div",16),e.qZA(),e.TgZ(31,"div",19)(32,"label",14),e._uU(33,"Your Phone"),e.qZA(),e.TgZ(34,"input",20),e.NdJ("ngModelChange",function(s){return i.number=s}),e.qZA(),e.YNc(35,q,3,0,"div",16),e.YNc(36,y,2,0,"div",16),e.qZA(),e.TgZ(37,"button",21),e._uU(38,"Create"),e.qZA()(),e.TgZ(39,"div",22)(40,"div",23),e._UZ(41,"img",24),e.qZA()()()()(),e.TgZ(42,"div",6)(43,"div",25)(44,"div",26)(45,"div",27),e._UZ(46,"img",28),e.qZA(),e.TgZ(47,"div",29)(48,"div",30),e._UZ(49,"img",31),e.qZA(),e.TgZ(50,"div",32)(51,"h4",8)(52,"span",33),e._uU(53),e.qZA()(),e.TgZ(54,"h6",34),e._uU(55,"Marketing Expert"),e.qZA(),e._UZ(56,"hr",35),e.TgZ(57,"div",36),e._UZ(58,"i",37),e.YNc(59,x,2,0,"p",38),e.TgZ(60,"p",39),e._uU(61),e.qZA()(),e.TgZ(62,"div",36),e._UZ(63,"i",40),e.TgZ(64,"p",39),e._uU(65,"309-310, Udyog Vihar-4, Phase-IV, Gurugram, Haryana 122015 "),e.qZA()(),e.TgZ(66,"div",36),e._UZ(67,"i",41),e.TgZ(68,"p",39),e._uU(69),e.qZA()(),e.TgZ(70,"div",36),e._UZ(71,"i",42),e.YNc(72,N,2,0,"p",38),e.TgZ(73,"p",39),e._uU(74),e.qZA()()()(),e.TgZ(75,"div",43),e._UZ(76,"ngx-qrcode",44),e.TgZ(77,"p",45),e._uU(78,"Scan/Click QR"),e.qZA()()()()()(),e._uU(79," ` "),e.qZA()()()()()(),e.TgZ(80,"ngx-spinner",46)(81,"p",47),e._uU(82,"Loading..."),e.qZA()()),2&t){let l,s,m,d,h;e.xp6(10),e.Q6J("ngIf",!i.userName),e.xp6(1),e.Q6J("ngIf",i.userName),e.xp6(3),e.Q6J("formGroup",i.profileForm),e.xp6(5),e.Q6J("ngModel",i.userName),e.xp6(1),e.Q6J("ngIf",null==(l=i.profileForm.get("firstName"))?null:l.hasError("required")),e.xp6(4),e.Q6J("ngModel",i.compname),e.xp6(1),e.Q6J("ngIf",null==(s=i.profileForm.get("companyName"))?null:s.hasError("required")),e.xp6(4),e.Q6J("ngModel",i.compwebsite),e.xp6(1),e.Q6J("ngIf",null==(m=i.profileForm.get("companyWebsite"))?null:m.hasError("required")),e.xp6(4),e.Q6J("ngModel",i.number),e.xp6(1),e.Q6J("ngIf",null==(d=i.profileForm.get("phone"))?null:d.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(h=i.profileForm.get("phone"))?null:h.hasError("pattern")),e.xp6(1),e.Q6J("disabled",!i.profileForm.valid),e.xp6(16),e.Oqu(i.userName),e.xp6(6),e.Q6J("ngIf",!i.number),e.xp6(2),e.hij("",i.number," "),e.xp6(8),e.Oqu(i.Email),e.xp6(3),e.Q6J("ngIf",!i.compwebsite),e.xp6(2),e.Oqu(i.compwebsite),e.xp6(2),e.Q6J("elementType",i.elementType)("errorCorrectionLevel",i.correctionLevel)("value",i.value)}},dependencies:[c.O5,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.c5,r.sg,r.u,p.zF,g.Ro],styles:[".bshadow[_ngcontent-%COMP%]{width:150px;height:150px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(5px 5px 5px #222222);opacity:.5}  .bshadow img{max-height:140px;min-width:100px}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(A),u.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,I,r.UX,r.u5,p.F5,g.ef]}),o})()}}]);