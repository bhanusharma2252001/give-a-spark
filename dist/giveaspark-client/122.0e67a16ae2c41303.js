"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[122],{6122:(F,h,a)=>{a.r(h),a.d(h,{UserProfileModule:()=>k});var u=a(6895),g=a(6239),l=a(433),f=a(8246),e=a(1571),b=a(7177),_=a(7185),c=a(8423);function Z(o,i){1&o&&(e.TgZ(0,"h4",63),e._uU(1,"Hi John Doe,"),e.qZA())}function v(o,i){if(1&o&&(e.TgZ(0,"h4",63),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.userName)}}function C(o,i){1&o&&(e.TgZ(0,"div",64)(1,"small",65),e._uU(2,"Name is required "),e.qZA()())}function U(o,i){1&o&&(e.TgZ(0,"div",64)(1,"small",65),e._uU(2," Company Name is required"),e.qZA()())}function T(o,i){1&o&&(e.TgZ(0,"div",64)(1,"small",65),e._uU(2,"Company website is required "),e.qZA()())}function x(o,i){if(1&o&&(e.TgZ(0,"option",66),e._uU(1),e.qZA()),2&o){const n=i.$implicit;e.s9C("value",null==n?null:n.name),e.xp6(1),e.hij(" ",null==n?null:n.name,"")}}function y(o,i){1&o&&(e.TgZ(0,"div",64)(1,"small",65),e._uU(2,"*Phone no. is required"),e.qZA()())}function N(o,i){1&o&&(e.TgZ(0,"div",64)(1,"small",65),e._uU(2,"*Please enter valid no."),e.qZA()())}function q(o,i){1&o&&e._UZ(0,"img",67)}function A(o,i){if(1&o&&e._UZ(0,"img",68),2&o){const n=e.oxw();e.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==n.details?null:n.details.profile,"",e.LSH)}}function w(o,i){1&o&&e._UZ(0,"img",67)}function M(o,i){if(1&o&&e._UZ(0,"img",68),2&o){const n=e.oxw();e.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==n.details?null:n.details.profile,"",e.LSH)}}function I(o,i){1&o&&(e.TgZ(0,"p",41),e._uU(1,"984395709 "),e.qZA())}function P(o,i){1&o&&(e.TgZ(0,"p",41),e._uU(1,"https://www.perfectiongeeks.com"),e.qZA())}function J(o,i){if(1&o&&(e.TgZ(0,"div",69),e._UZ(1,"img",70),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.MGl("src","https://giveaspark.s3.amazonaws.com/",null==n.details?null:n.details.QrCode,"",e.LSH)}}const S=function(){return{standalone:!0}},Y=[{path:"",component:(()=>{class o{constructor(n,t,s,r,p,d){this.fb=n,this.api=t,this.router=s,this.toast=r,this._ngZone=p,this.spinner=d,this.Submitted=!1,this.elementType=f.TT.URL,this.correctionLevel=f.Jk.HIGH,this.value="",this.profileForm=this.fb.group({firstName:["",[l.kI.required]],companyName:["",[l.kI.required]],companyWebsite:["",[l.kI.required]],phone:["",[l.kI.required,l.kI.pattern("[0-9 ]+")]],stdCode:[""]}),"/home-dashboard/user-profile"==s.url&&(this.api.getLatestValue(s.url),this.api.content.subscribe(m=>{console.log(m,"result"),s.routeReuseStrategy.shouldReuseRoute=()=>!1}),s.canceledNavigationResolution="computed",history.pushState(null,"",location.href),window.onpopstate=function(){history.go(1)})}get f(){return this.profileForm.controls}ngOnInit(){this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3),this.getPhoneCode(),sessionStorage.getItem("username")&&(this.userName=sessionStorage.getItem("username")),sessionStorage.getItem("email"),sessionStorage.getItem("email")&&(this.gemail=sessionStorage.getItem("gg")),console.log(this.gemail,"k;kdfg;kl"),this.getScanText()}getScanText(){let n=sessionStorage.getItem("ClientSpark");this.value="https://app.giveaspark.com/home-dashboard/myquote/quote-dashboard?token="+btoa(n)}changeCountry(n){console.log(n.value),this.countryList.filter(t=>{t.name==n.value&&(this.countryName=n.value,console.log(this.countryName),this.phoneCode=t.stdCode)}),console.log(this.phoneCode)}onSubmit(n){this.Submitted=!0;let t={firstName:n.firstName,companyName:n.companyName,companyWebsite:n.companyWebsite,phone:n.phone,email:this.Email,stdCode:n.stdCode,country:this.countryName};this.spinner.show(),this.api.basicDetailofUser(t).subscribe(s=>{this.spinner.hide(),this.toast.success(" Details added successfully"),this.router.navigate(["home-dashboard/basicdetails-company"])},s=>{this.spinner.hide()})}getbasicDetails(){this.api.getbasicDetaiofUseer().subscribe(n=>{this.details=n.result[0],this.userName=n.result[0]?.firstName,this.Email=n.result[0]?.email,this.compname=n.result[0]?.companyName,this.compwebsite=n.result[0]?.companyWebsite,this.number=n.result[0]?.phone,this.phoneCode=n.result[0]?.stdCode,this.countryList&&this.countryList.filter(t=>{t?.stdCode==this.phoneCode&&(this.country=t?.name)}),console.log(this.details)})}getPhoneCode(){this.api.phoneValidation().subscribe(n=>{this.countryList=n,this.getbasicDetails(),console.log(this.countryList,"country")})}onSelectImage(n){}logout(){sessionStorage.clear(),this.api.isLoggedIn=!1,this._ngZone.run(()=>{this.router.navigate([""])})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(l.qu),e.Y36(b.O),e.Y36(g.F0),e.Y36(_._W),e.Y36(e.R0b),e.Y36(c.t2))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-profile"]],decls:104,vars:29,consts:[[1,"container-fluid"],[1,"mt-5"],[1,"container-fluid","p-0"],[1,"row","m-0","p-0"],[1,"col-lg-12"],[1,"row"],[1,"col-md-6","col-lg-6"],[1,"bg-white","p-4","shadow","border-10"],[1,""],["class","fw-semibold",4,"ngIf"],[1,"fw-color"],[1,"row","position-relative",3,"formGroup","ngSubmit"],[1,"col-md-11","col-lg-9"],[1,"mb-2"],["for","exampleInputfiled",1,"form-label"],["type","text","pattern","[A-Za-z]+","id","exampleInputfiled","aria-describedby","textHelp","formControlName","firstName",1,"form-control","ps-2","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["class","text-danger text-sm",4,"ngIf"],["type","text","id","exampleInputfiled","aria-describedby","textHelp","formControlName","companyName",1,"form-control","ps-2","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","id","exampleInputfiled","aria-describedby","textHelp","formControlName","companyWebsite",1,"form-control","ps-2","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],[1,"mb-4"],["id","exampleInputfiled",1,"p-2","m-2","border-0","border-bottom","w-100",3,"ngModel","ngModelOptions","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","text","readonly","","formControlName","stdCode",2,"width","33px","position","relative","top","32px","left","-80px","border","none","border-left","none","border-bottom","1px solid black",3,"ngModel","ngModelChange"],["type","text","maxlength","10","minlength","10","id","exampleInputfiled","aria-describedby","textHelp","formControlName","phone",1,"form-control","ps-2","rounded-0","border-0","border-bottom","p-0",2,"width","312px","margin-left","60px",3,"ngModel","ngModelChange"],["type","submit",1,"green-btn","shadow","pe-3","ps-3","p-2"],[1,"col-md-1","col-lg-3"],[1,"image-square"],["class","wh-150","src","assets/images/square-image.png",4,"ngIf"],["class","wh-150",3,"src",4,"ngIf"],[1,"card-box","bg-white","p-4","shadow","border-10","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],[1,"col-md-7","col-lg-6","ps-2","pe-0","position-relative"],[1,"position-absolute","start-0"],[1,"ms-4"],[1,"text-darkblue"],[1,"mb-3"],[1,"text-black"],[1,"d-flex","align-items-center","mb-1"],["aria-hidden","true",1,"fa","fa-phone","text-blue","fs-12","pe-3"],["class","mb-0  fs-14",4,"ngIf"],[1,"mb-0","fs-14"],["aria-hidden","true",1,"fa","fa-envelope","text-blue","fs-12","pe-3"],[1,"fs-14","mb-0"],["aria-hidden","true",1,"fa","fa-globe","text-blue","fs-12","pe-3"],["class","col-md-2 col-lg-3 pe-0 ps-0",4,"ngIf"],["id","change-image","data-bs-backdrop","static","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","quotes-box"],[1,"modal-content"],[1,"modal-body"],[1,"text-end"],["data-bs-dismiss","modal","aria-label","Close","aria-hidden","true",1,"fa","fa-times"],[1,"Neon","Neon-theme-dragdropbox"],["name","files[]","id","filer_input2","multiple","multiple","type","file","accept","image/*",2,"z-index","999","opacity","0","width","320px","height","200px","position","absolute","right","0px","left","0px","margin-right","auto","margin-left","auto",3,"change"],[1,"Neon-input-dragDrop"],[1,"Neon-input-inner"],[1,"Neon-input-icon"],[1,"fa","fa-file-image-o"],[1,"Neon-input-text"],[2,"display","inline-block","margin","15px 0"],[1,"Neon-input-choose-btn","blue"],["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"],[1,"fw-semibold"],[1,"text-danger","text-sm"],[1,"fs-12"],[3,"value"],["src","assets/images/square-image.png",1,"wh-150"],[1,"wh-150",3,"src"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],[1,"img-fluid",3,"src"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),e.YNc(10,Z,2,0,"h4",9),e.YNc(11,v,2,1,"h4",9),e.TgZ(12,"p",10),e._uU(13,"Start with basic details for your signature"),e.qZA()(),e.TgZ(14,"form",11),e.NdJ("ngSubmit",function(){return t.onSubmit(t.profileForm.value)}),e.TgZ(15,"div",12)(16,"div",13)(17,"label",14),e._uU(18,"Your Name"),e.qZA(),e.TgZ(19,"input",15),e.NdJ("ngModelChange",function(r){return t.userName=r}),e.qZA(),e.YNc(20,C,3,0,"div",16),e.qZA(),e.TgZ(21,"div",13)(22,"label",14),e._uU(23,"Company Name"),e.qZA(),e.TgZ(24,"input",17),e.NdJ("ngModelChange",function(r){return t.compname=r}),e.qZA(),e.YNc(25,U,3,0,"div",16),e.qZA(),e.TgZ(26,"div",13)(27,"label",14),e._uU(28,"Company Website"),e.qZA(),e.TgZ(29,"input",18),e.NdJ("ngModelChange",function(r){return t.compwebsite=r}),e.qZA(),e.YNc(30,T,3,0,"div",16),e.qZA(),e._UZ(31,"div",19),e.TgZ(32,"div",19)(33,"label",14),e._uU(34," Country"),e.qZA(),e._UZ(35,"br"),e.TgZ(36,"select",20),e.NdJ("ngModelChange",function(r){return t.country=r})("change",function(r){return t.changeCountry(r.target)}),e.YNc(37,x,2,2,"option",21),e.qZA()(),e.TgZ(38,"div",19)(39,"label",14),e._uU(40,"Your Phone"),e.qZA(),e.TgZ(41,"input",22),e.NdJ("ngModelChange",function(r){return t.phoneCode=r}),e.qZA(),e.TgZ(42,"input",23),e.NdJ("ngModelChange",function(r){return t.number=r}),e.qZA(),e.YNc(43,y,3,0,"div",16),e.YNc(44,N,3,0,"div",16),e.qZA(),e.TgZ(45,"button",24),e._uU(46,"Create"),e.qZA()(),e.TgZ(47,"div",25)(48,"div",26),e.YNc(49,q,1,0,"img",27),e.YNc(50,A,1,1,"img",28),e.qZA()()()()(),e.TgZ(51,"div",6)(52,"div",29)(53,"div",30)(54,"div",31),e.YNc(55,w,1,0,"img",27),e.YNc(56,M,1,1,"img",28),e.qZA(),e.TgZ(57,"div",32),e._UZ(58,"div",33),e.TgZ(59,"div",34)(60,"h4",8)(61,"span",35),e._uU(62),e.qZA()(),e.TgZ(63,"h6",36),e._uU(64,"Marketing Expert"),e.qZA(),e._UZ(65,"hr",37),e.TgZ(66,"div",38),e._UZ(67,"i",39),e.YNc(68,I,2,0,"p",40),e.TgZ(69,"p",41),e._uU(70),e.qZA()(),e.TgZ(71,"div",38),e._UZ(72,"i",42),e.TgZ(73,"p",43),e._uU(74),e.qZA()(),e.TgZ(75,"div",38),e._UZ(76,"i",44),e.YNc(77,P,2,0,"p",40),e.TgZ(78,"p",41),e._uU(79),e.qZA()()()(),e.YNc(80,J,2,1,"div",45),e.qZA()()()(),e._uU(81," ` "),e.qZA()()()()()(),e.TgZ(82,"div",46)(83,"div",47)(84,"div",48)(85,"div",49)(86,"div",50),e._UZ(87,"i",51),e.qZA(),e.TgZ(88,"div",52)(89,"input",53),e.NdJ("change",function(r){return t.onSelectImage(r)}),e.qZA(),e.TgZ(90,"div",54)(91,"div",55)(92,"div",56),e._UZ(93,"i",57),e.qZA(),e.TgZ(94,"div",58)(95,"h3"),e._uU(96,"Drag&Drop files here"),e.qZA(),e.TgZ(97,"span",59),e._uU(98,"or"),e.qZA()(),e.TgZ(99,"a",60),e._uU(100,"Browse Files"),e.qZA()()()()()()()(),e.TgZ(101,"ngx-spinner",61)(102,"p",62),e._uU(103,"Loading..."),e.qZA()()),2&n){let s,r,p,d,m;e.xp6(10),e.Q6J("ngIf",!t.userName),e.xp6(1),e.Q6J("ngIf",t.userName),e.xp6(3),e.Q6J("formGroup",t.profileForm),e.xp6(5),e.Q6J("ngModel",t.userName),e.xp6(1),e.Q6J("ngIf",null==(s=t.profileForm.get("firstName"))?null:s.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.compname),e.xp6(1),e.Q6J("ngIf",null==(r=t.profileForm.get("companyName"))?null:r.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.compwebsite),e.xp6(1),e.Q6J("ngIf",null==(p=t.profileForm.get("companyWebsite"))?null:p.hasError("required")),e.xp6(6),e.Q6J("ngModel",t.country)("ngModelOptions",e.DdM(28,S)),e.xp6(1),e.Q6J("ngForOf",t.countryList),e.xp6(4),e.Q6J("ngModel",t.phoneCode),e.xp6(1),e.Q6J("ngModel",t.number),e.xp6(1),e.Q6J("ngIf",null==(d=t.profileForm.get("phone"))?null:d.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(m=t.profileForm.get("phone"))?null:m.hasError("pattern")),e.xp6(5),e.Q6J("ngIf",!(null!=t.details&&t.details.profile)),e.xp6(1),e.Q6J("ngIf",null==t.details?null:t.details.profile),e.xp6(5),e.Q6J("ngIf",!(null!=t.details&&t.details.profile)),e.xp6(1),e.Q6J("ngIf",null==t.details?null:t.details.profile),e.xp6(6),e.Oqu(t.userName),e.xp6(6),e.Q6J("ngIf",!t.number&&!t.phoneCode),e.xp6(2),e.AsE("",t.phoneCode,"",t.number," "),e.xp6(4),e.Oqu(t.Email),e.xp6(3),e.Q6J("ngIf",!t.compwebsite),e.xp6(2),e.Oqu(t.compwebsite),e.xp6(1),e.Q6J("ngIf",null==t.details?null:t.details.QrCode)}},dependencies:[u.sg,u.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.wO,l.nD,l.c5,l.sg,l.u,l.On,c.Ro],styles:[".bshadow[_ngcontent-%COMP%]{width:150px;height:150px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(5px 5px 5px #222222);opacity:.5}  .bshadow img{max-height:140px;min-width:100px}"]}),o})()}];let Q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(Y),g.Bz]}),o})(),k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,Q,l.UX,l.u5,f.F5,c.ef]}),o})()}}]);