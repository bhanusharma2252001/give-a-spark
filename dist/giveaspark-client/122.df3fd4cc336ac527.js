"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[122],{6122:(P,c,l)=>{l.r(c),l.d(c,{UserProfileModule:()=>w});var h=l(6895),g=l(4173),n=l(433),p=l(8246),e=l(8274),b=l(7177),Z=l(7185),f=l(334);function v(o,r){1&o&&(e.TgZ(0,"h4",64),e._uU(1,"Hi John Doe,"),e.qZA())}function _(o,r){if(1&o&&(e.TgZ(0,"h4",64),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Oqu(i.userName)}}function U(o,r){1&o&&(e.TgZ(0,"div",65)(1,"small"),e._uU(2,"Name is required "),e.qZA()())}function T(o,r){1&o&&(e.TgZ(0,"div",65),e._uU(1," Company Name is required "),e.qZA())}function x(o,r){1&o&&(e.TgZ(0,"div",65),e._uU(1," Company website is required "),e.qZA())}function q(o,r){1&o&&(e.TgZ(0,"div",65)(1,"small"),e._uU(2,"*Phone no. is required"),e.qZA()())}function C(o,r){1&o&&(e.TgZ(0,"div",65),e._uU(1," *Please enter valid no. "),e.qZA())}function y(o,r){1&o&&(e.TgZ(0,"p",40),e._uU(1,"984395709 "),e.qZA())}function N(o,r){1&o&&(e.TgZ(0,"p",40),e._uU(1,"www.perfectiongeeks.com"),e.qZA())}const A=[{path:"",component:(()=>{class o{constructor(i,t,a,s,m,d){this.fb=i,this.api=t,this.router=a,this.toast=s,this._ngZone=m,this.spinner=d,this.Submitted=!1,this.elementType=p.TT.URL,this.correctionLevel=p.Jk.HIGH,this.value="",this.profileForm=this.fb.group({firstName:["",[n.kI.required]],companyName:["",[n.kI.required]],companyWebsite:["",[n.kI.required]],phone:["",n.kI.compose([n.kI.required,n.kI.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")])]}),"/home-dashboard/user-profile"==a.url&&(this.api.getLatestValue(a.url),this.api.content.subscribe(u=>{console.log(u,"result"),a.routeReuseStrategy.shouldReuseRoute=()=>!1}))}get f(){return this.profileForm.controls}ngOnInit(){this.getbasicDetails(),sessionStorage.getItem("username")&&(this.userName=sessionStorage.getItem("username")),sessionStorage.getItem("email"),sessionStorage.getItem("email")&&(this.gemail=sessionStorage.getItem("gg")),console.log(this.gemail,"k;kdfg;kl"),this.getScanText(),this.qrCodeByApi()}getScanText(){let i=sessionStorage.getItem("ClientSpark");this.value="https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token="+btoa(i)}onSubmit(i){this.Submitted=!0;let t={firstName:i.firstName,companyName:i.companyName,companyWebsite:i.companyWebsite,phone:i.phone,email:this.Email};this.spinner.show(),this.api.basicDetailofUser(t).subscribe(a=>{this.spinner.hide(),this.toast.success(" Details added successfully"),this.router.navigate(["home-dashboard/basicdetails-company"])},a=>{this.spinner.hide()})}getbasicDetails(){this.api.getbasicDetaiofUseer().subscribe(i=>{this.details=i.result,this.userName=i.result[0]?.firstName,this.Email=i.result[0]?.email,this.compname=i.result[0]?.companyName,this.compwebsite=i.result[0]?.companyWebsite,this.number=i.result[0]?.phone})}onSelectImage(i){}logout(){sessionStorage.clear(),this.api.isLoggedIn=!1,this._ngZone.run(()=>{this.router.navigate([""])})}qrCodeByApi(){this.api.getQrCode().subscribe(i=>{this.qrCode=i,console.log(this.qrCode)})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(n.qu),e.Y36(b.O),e.Y36(g.F0),e.Y36(Z._W),e.Y36(e.R0b),e.Y36(f.t2))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-profile"]],decls:105,vars:22,consts:[[1,"container-fluid"],[1,"mt-5"],[1,"container-fluid","p-0"],[1,"row","m-0","p-0"],[1,"col-lg-12"],[1,"row"],[1,"col-md-6","col-lg-6"],[1,"form-box","bg-white","p-4","shadow","border-10"],[1,""],["class","fw-semibold",4,"ngIf"],[1,"fw-color"],[1,"row","position-relative",3,"formGroup","ngSubmit"],[1,"col-md-11","col-lg-9"],[1,"mb-2"],["for","exampleInputfiled",1,"form-label"],["type","text","pattern","[A-Za-z]+","id","exampleInputfiled","aria-describedby","textHelp","formControlName","firstName",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["class","text-danger text-sm",4,"ngIf"],["type","text","id","exampleInputfiled","aria-describedby","textHelp","formControlName","companyName",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","id","exampleInputfiled","aria-describedby","textHelp","formControlName","companyWebsite",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],[1,"mb-4"],["type","text","maxlength","13","minlength","10","id","exampleInputfiled","aria-describedby","textHelp","formControlName","phone",1,"form-control","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","submit",1,"green-btn","shadow","pe-3","ps-3","p-2",3,"disabled"],[1,"col-md-1","col-lg-3"],[1,"image-square"],["src","assets/images/square-image.png",1,"wh-150"],["data-bs-toggle","modal","data-bs-target","#change-image",1,"text-blue","fs-12","mb-0","mt-2","text-nowrap","pe-2"],[1,"text-blue","fs-12","mb-0"],[1,"card-box","bg-white","p-4","shadow","border-10","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"col-md-7","col-lg-6","ps-2","pe-0","position-relative"],[1,"position-absolute","start-0"],[1,"ms-4"],[1,"text-darkblue"],[1,"mb-3"],[1,"text-black"],[1,"d-flex"],["aria-hidden","true",1,"fa","fa-phone","text-blue","fs-12","pe-3"],["class"," fs-12",4,"ngIf"],[1,"fs-12"],["aria-hidden","true",1,"fa","fa-map-marker","text-blue","fs-12","pe-3"],["aria-hidden","true",1,"fa","fa-envelope","text-blue","fs-12","pe-3"],["aria-hidden","true",1,"fa","fa-globe","text-blue","fs-12","pe-3"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["cssClass","bshadow",2,"width","150px","height","150px",3,"elementType","errorCorrectionLevel","value"],[1,"text-center","pt-3","fs-12"],["id","change-image","data-bs-backdrop","static","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","quotes-box"],[1,"modal-content"],[1,"modal-body"],[1,"text-end"],["data-bs-dismiss","modal","aria-label","Close","aria-hidden","true",1,"fa","fa-times"],[1,"Neon","Neon-theme-dragdropbox"],["name","files[]","id","filer_input2","multiple","multiple","type","file","accept","image/*",2,"z-index","999","opacity","0","width","320px","height","200px","position","absolute","right","0px","left","0px","margin-right","auto","margin-left","auto",3,"change"],[1,"Neon-input-dragDrop"],[1,"Neon-input-inner"],[1,"Neon-input-icon"],[1,"fa","fa-file-image-o"],[1,"Neon-input-text"],[2,"display","inline-block","margin","15px 0"],[1,"Neon-input-choose-btn","blue"],["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"],[1,"fw-semibold"],[1,"text-danger","text-sm"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),e.YNc(10,v,2,0,"h4",9),e.YNc(11,_,2,1,"h4",9),e.TgZ(12,"p",10),e._uU(13,"Start with basic details for your signature"),e.qZA()(),e.TgZ(14,"form",11),e.NdJ("ngSubmit",function(){return t.onSubmit(t.profileForm.value)}),e.TgZ(15,"div",12)(16,"div",13)(17,"label",14),e._uU(18,"Your Name"),e.qZA(),e.TgZ(19,"input",15),e.NdJ("ngModelChange",function(s){return t.userName=s}),e.qZA(),e.YNc(20,U,3,0,"div",16),e.qZA(),e.TgZ(21,"div",13)(22,"label",14),e._uU(23,"Company Name"),e.qZA(),e.TgZ(24,"input",17),e.NdJ("ngModelChange",function(s){return t.compname=s}),e.qZA(),e.YNc(25,T,2,0,"div",16),e.qZA(),e.TgZ(26,"div",13)(27,"label",14),e._uU(28,"Company Website"),e.qZA(),e.TgZ(29,"input",18),e.NdJ("ngModelChange",function(s){return t.compwebsite=s}),e.qZA(),e.YNc(30,x,2,0,"div",16),e.qZA(),e.TgZ(31,"div",19)(32,"label",14),e._uU(33,"Your Phone"),e.qZA(),e.TgZ(34,"input",20),e.NdJ("ngModelChange",function(s){return t.number=s}),e.qZA(),e.YNc(35,q,3,0,"div",16),e.YNc(36,C,2,0,"div",16),e.qZA(),e.TgZ(37,"button",21),e._uU(38,"Create"),e.qZA()(),e.TgZ(39,"div",22)(40,"div",23),e._UZ(41,"img",24),e.TgZ(42,"p",25),e._uU(43," Change Photo"),e.qZA(),e.TgZ(44,"p",26),e._uU(45,"Remove"),e.qZA()()()()()(),e.TgZ(46,"div",6)(47,"div",27)(48,"div",28)(49,"div",29),e._UZ(50,"img",30),e.qZA(),e.TgZ(51,"div",31),e._UZ(52,"div",32),e.TgZ(53,"div",33)(54,"h4",8)(55,"span",34),e._uU(56),e.qZA()(),e.TgZ(57,"h6",35),e._uU(58,"Marketing Expert"),e.qZA(),e._UZ(59,"hr",36),e.TgZ(60,"div",37),e._UZ(61,"i",38),e.YNc(62,y,2,0,"p",39),e.TgZ(63,"p",40),e._uU(64),e.qZA()(),e.TgZ(65,"div",37),e._UZ(66,"i",41),e.TgZ(67,"p",40),e._uU(68,"309-310, Udyog Vihar-4, Phase-IV, Gurugram, Haryana 122015 "),e.qZA()(),e.TgZ(69,"div",37),e._UZ(70,"i",42),e.TgZ(71,"p",40),e._uU(72),e.qZA()(),e.TgZ(73,"div",37),e._UZ(74,"i",43),e.YNc(75,N,2,0,"p",39),e.TgZ(76,"p",40),e._uU(77),e.qZA()()()(),e.TgZ(78,"div",44),e._UZ(79,"ngx-qrcode",45),e.TgZ(80,"p",46),e._uU(81,"Scan/Click QR"),e.qZA()()()()()(),e._uU(82," ` "),e.qZA()()()()()(),e.TgZ(83,"div",47)(84,"div",48)(85,"div",49)(86,"div",50)(87,"div",51),e._UZ(88,"i",52),e.qZA(),e.TgZ(89,"div",53)(90,"input",54),e.NdJ("change",function(s){return t.onSelectImage(s)}),e.qZA(),e.TgZ(91,"div",55)(92,"div",56)(93,"div",57),e._UZ(94,"i",58),e.qZA(),e.TgZ(95,"div",59)(96,"h3"),e._uU(97,"Drag&Drop files here"),e.qZA(),e.TgZ(98,"span",60),e._uU(99,"or"),e.qZA()(),e.TgZ(100,"a",61),e._uU(101,"Browse Files"),e.qZA()()()()()()()(),e.TgZ(102,"ngx-spinner",62)(103,"p",63),e._uU(104,"Loading..."),e.qZA()()),2&i){let a,s,m,d,u;e.xp6(10),e.Q6J("ngIf",!t.userName),e.xp6(1),e.Q6J("ngIf",t.userName),e.xp6(3),e.Q6J("formGroup",t.profileForm),e.xp6(5),e.Q6J("ngModel",t.userName),e.xp6(1),e.Q6J("ngIf",null==(a=t.profileForm.get("firstName"))?null:a.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.compname),e.xp6(1),e.Q6J("ngIf",null==(s=t.profileForm.get("companyName"))?null:s.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.compwebsite),e.xp6(1),e.Q6J("ngIf",null==(m=t.profileForm.get("companyWebsite"))?null:m.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.number),e.xp6(1),e.Q6J("ngIf",null==(d=t.profileForm.get("phone"))?null:d.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(u=t.profileForm.get("phone"))?null:u.hasError("pattern")),e.xp6(1),e.Q6J("disabled",!t.profileForm.valid),e.xp6(19),e.Oqu(t.userName),e.xp6(6),e.Q6J("ngIf",!t.number),e.xp6(2),e.hij("",t.number," "),e.xp6(8),e.Oqu(t.Email),e.xp6(3),e.Q6J("ngIf",!t.compwebsite),e.xp6(2),e.Oqu(t.compwebsite),e.xp6(2),e.Q6J("elementType",t.elementType)("errorCorrectionLevel",t.correctionLevel)("value",t.value)}},dependencies:[h.O5,n._Y,n.Fj,n.JJ,n.JL,n.wO,n.nD,n.c5,n.sg,n.u,p.zF,f.Ro],styles:[".bshadow[_ngcontent-%COMP%]{width:150px;height:150px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(5px 5px 5px #222222);opacity:.5}  .bshadow img{max-height:140px;min-width:100px}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(A),g.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.ez,I,n.UX,n.u5,p.F5,f.ef]}),o})()}}]);