"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[794],{9794:(F,u,m)=>{m.r(u),m.d(u,{BasicdetailsCompanyModule:()=>P});var g=m(6895),c=m(9965),l=m(433),r=m(8246),e=m(8256),f=m(7177),y=m(7185),b=m(1481);function h(t,o){1&t&&(e.TgZ(0,"h4",80)(1,"span",81),e._uU(2,"John"),e.qZA(),e._uU(3," Doe "),e.qZA())}function Z(t,o){if(1&t&&(e.TgZ(0,"h4",80)(1,"span",81),e._uU(2),e.qZA()()),2&t){const a=e.oxw();e.xp6(2),e.Oqu(a.username)}}function v(t,o){1&t&&(e.TgZ(0,"p",82),e._uU(1,"+1129457850 | +1129457850 "),e.qZA())}function _(t,o){if(1&t&&(e.TgZ(0,"p",82),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.number)}}function C(t,o){1&t&&(e.TgZ(0,"p",82),e._uU(1,"shreybhardwaj@gmail.com "),e.qZA())}function x(t,o){if(1&t&&(e.TgZ(0,"p",82),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.Email)}}function T(t,o){1&t&&(e.TgZ(0,"p",82),e._uU(1," www.perfectiongeeks.com"),e.qZA())}function A(t,o){if(1&t&&(e.TgZ(0,"p",82),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.compWebsite)}}function q(t,o){1&t&&(e.TgZ(0,"div",83),e._uU(1," Company Name is required "),e.qZA())}function U(t,o){1&t&&(e.TgZ(0,"div",83),e._uU(1," *url is required "),e.qZA())}function I(t,o){1&t&&(e.TgZ(0,"div",83),e._uU(1," *Please enter valid url "),e.qZA())}function N(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,U,2,0,"div",51),e.YNc(2,I,2,0,"div",51),e.qZA()),2&t){const a=e.oxw();let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=a.companyDetailForm.get("companyWebsite"))?null:i.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=a.companyDetailForm.get("companyWebsite"))?null:n.hasError("pattern"))}}function B(t,o){1&t&&(e.TgZ(0,"div",84),e._uU(1," * "),e.qZA())}function k(t,o){1&t&&(e.TgZ(0,"div",83)(1,"small"),e._uU(2,"phone no. is required"),e.qZA()())}function w(t,o){1&t&&(e.TgZ(0,"div",83)(1,"small"),e._uU(2,"*Please enter valid no. (+*******)"),e.qZA()())}const D=[{path:"",component:(()=>{class t{constructor(a,i,n,s,p,d){this.api=a,this.fb=i,this.router=n,this.toast=s,this.meta=p,this.title=d,this.Submitted=!1,this.fileData=[],this.fileImageName="",this.isImage=!0,this.elementType=r.TT.URL,this.correctionLevel=r.Jk.HIGH,this.value="",this.companyDetailForm=this.fb.group({companyName:["",[l.kI.required]],companyWebsite:["",[l.kI.required,l.kI.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],companyAddress:[""],companyPhone:["",l.kI.compose([l.kI.required,l.kI.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")])],companyFax:[""],companyLogo:[""],fbProfile:[""],instagramProfile:[""],linkedInProfile:[""],youtubeChannel:[""],twitterProfile:[""]}),"/home-dashboard/basicdetails-company"==n.url&&(this.api.getLatestValue(n.url),this.api.content.subscribe(S=>{n.routeReuseStrategy.shouldReuseRoute=()=>!1}))}get m(){return this.companyDetailForm.controls}ngOnInit(){this.getBasicProfile(),this.title.setTitle("Templates"),this.getScanText()}getScanText(){let a=sessionStorage.getItem("ClientSpark");this.value="https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token="+btoa(a)}getBasicProfile(){this.api.getbasicDetaiofUseer().subscribe(a=>{this.details=a.result,this.username=a.result[0]?.firstName,this.Email=a.result[0]?.email,this.compName=a.result[0]?.companyName,this.compWebsite=a.result[0]?.companyWebsite,this.number=a.result[0]?.phone,console.log(this.compWebsite,"jojo"),console.log(this.details)})}onSelectImage(a){this.Submitted=!0;let i=a.target.files;if(this.fileImageName=a.target.files[0].name,i){this.uploadImage=i[0],this.subImageSubmit();for(let s of i){if(!s.type.includes("image"))return void(this.isImage=!1);this.fileData.push(s)}}if(a.target.files&&a.target.files[0]){var n=new FileReader;n.readAsDataURL(a.target.files[0]),n.onload=s=>{this.url=s.target?.result}}}subImageSubmit(){this.Submitted=!0;let a=new FormData;a.append("attachment",this.uploadImage),this.api.addAttachments(a).subscribe(i=>{console.log(i),this.imageData1=i,this.imageData2=this.imageData1[0].key,console.log(this.imageData1[0].key,"image key ")},i=>{console.log(i)})}onSubmit(){this.Submitted=!0;let a=this.companyDetailForm.value;this.api.addCompanyDetails({companyName:a?.companyName,companyWebsite:a?.companyWebsite,companyLogo:this.imageData2,companyPhone:a?.companyPhone,companyAddress:[{addressline:a.companyAddress}],fbProfile:a?.fbProfile,instagramProfile:a?.instagramProfile,linkedInProfile:a?.linkedInProfile,youtubeChannel:a?.youtubeChannel,twitterProfile:a?.twitterProfile}).subscribe(n=>{console.log(n),this.toast.success("submitted"),this.router.navigate(["home-dashboard/basicdetails-company"])},n=>{this.toast.error("not submitted")})}route(){this.router.navigate(["home-dashboard/basic-template"])}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(f.O),e.Y36(l.qu),e.Y36(c.F0),e.Y36(y._W),e.Y36(b.h_),e.Y36(b.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-basicdetails-company"]],decls:179,vars:20,consts:[[1,"container-fluid"],[1,"padding-top"],[1,"container-fluid","p-0","mt-5"],[1,"row","m-0","p-0","mt-3"],[1,"col-md-7","col-lg-10"],[1,"row","pe-5"],[1,"col-md-6","col-lg-6"],[1,"py-5"],[1,"timeline"],[1,"timeline-item","mb-5"],[1,"fw-bold"],[1,"text-muted"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"pink-btn","p-2"],[1,"pink-btn","p-2",3,"click"],[1,"col-md-6","col-lg-6","pe-3"],[1,"card-box","border-10","p-4","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"col-md-7","col-lg-6","ps-2","pe-0"],["class","",4,"ngIf"],[1,"mb-3"],[1,"d-flex","pe-5","ps-3"],["aria-hidden","true",1,"fa","fa-phone","pe-2"],["class"," fs-12",4,"ngIf"],["class","fs-12",4,"ngIf"],["aria-hidden","true",1,"fa","fa-envelope","pe-2"],["aria-hidden","true",1,"fa","fa-globe","pe-2"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["cssClass","bshadow",2,"width","150px","height","150px",3,"elementType","errorCorrectionLevel","value"],[1,"fs-12","text-center","mt-1"],[1,"row"],[1,"col-lg-8","offset-lg-2","text-center"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content","bg-gray"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","m-4"],["id","","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","home-tab","data-bs-toggle","tab","data-bs-target","#home","type","button","role","tab","aria-controls","home","aria-selected","true",1,"nav-link","active"],["id","profile-tab","data-bs-toggle","tab","data-bs-target","#profile","type","button","role","tab","aria-controls","profile","aria-selected","false",1,"nav-link"],[3,"formGroup","ngSubmit"],["id","myTabContent",1,"tab-content","mt-4"],["id","home","role","tabpanel","aria-labelledby","home-tab",1,"tab-pane","fade","show","active"],[1,"row","g-3","align-items-center"],[1,"col-md-4","col-lg-4"],["for","exampleInputtext",1,"form-label"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyName",1,"form-control","border-none","bottom-border",3,"ngModel","ngModelChange"],["class","text-danger text-sm",4,"ngIf"],[1,"d-flex"],["src","assets/images/pen.png",1,"w-10","h-25"],["src","assets/images/cross.png",1,"w-10","h-25"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyWebsite",1,"form-control","border-none","bottom-border",3,"ngModel","ngModelChange"],[4,"ngIf"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyAddress",1,"form-control","border-none","bottom-border"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","maxlength","13","minlength","10","formControlName","companyPhone",1,"form-control","border-none","bottom-border"],["class","text-danger text-sm","style","    bottom: 25px;\n                                                position: relative;\n                                                left: 233px;",4,"ngIf"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyFax",1,"form-control","border-none","bottom-border"],["type","file","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyLogo",1,"form-control","border-none","bottom-border",3,"change"],["id","profile","role","tabpanel","aria-labelledby","profile-tab",1,"tab-pane","fade"],["for","exampleInputtext",1,"form-label","bg-white","rounded-circle"],["src","assets/images/facebook.png"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","fbProfile",1,"form-control","border-none","bottom-border"],["src","assets/images/instagram.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","instagramProfile",1,"form-control","border-none","bottom-border"],["src","assets/images/linkedin.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","linkedInProfile",1,"form-control","border-none","bottom-border"],["src","assets/images/youtube.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","youtubeChannel",1,"form-control","border-none","bottom-border"],["src","assets/images/twitter.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","twitterProfile",1,"form-control","border-none","bottom-border"],[1,"text-blue"],["aria-hidden","true",1,"fa","fa-plus-circle"],[1,"mb-3","mt-3","mt-edit"],[1,"col-md-6"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"pink-btn","pe-3","ps-3","p-2"],["type","submit","data-bs-dismiss","modal","aria-label","Close",1,"green-btn","pe-3","ps-3","p-2",3,"disabled"],[1,""],[1,"text-darkblue"],[1,"fs-12"],[1,"text-danger","text-sm"],[1,"text-danger","text-sm",2,"bottom","25px","position","relative","left","233px"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"section",7)(9,"ul",8)(10,"li",9)(11,"h5",10),e._uU(12,"Company Details"),e.qZA(),e.TgZ(13,"p",11),e._uU(14," First let\u2019s complete your company details, These details will be used in all of your signatures. "),e.qZA(),e.TgZ(15,"button",12),e._uU(16,"Edit Company Details"),e.qZA()(),e.TgZ(17,"li",9)(18,"h5",10),e._uU(19,"Design Your Company Templates"),e.qZA(),e._UZ(20,"p",11),e.TgZ(21,"button",13),e.NdJ("click",function(){return i.route()}),e._uU(22,"Design your Template"),e.qZA()(),e.TgZ(23,"li",9)(24,"h5",10),e._uU(25,"Add Employees"),e.qZA(),e._UZ(26,"p",11),e.qZA()()()(),e.TgZ(27,"div",14)(28,"div",15)(29,"div",16)(30,"div",17),e._UZ(31,"img",18),e.qZA(),e.TgZ(32,"div",19),e.YNc(33,h,4,0,"h4",20),e.YNc(34,Z,3,1,"h4",20),e.TgZ(35,"h6",21),e._uU(36,"Marketing Expert"),e.qZA(),e.TgZ(37,"div",22),e._UZ(38,"i",23),e.YNc(39,v,2,0,"p",24),e.YNc(40,_,2,1,"p",25),e.qZA(),e.TgZ(41,"div",22),e._UZ(42,"i",26),e.YNc(43,C,2,0,"p",24),e.YNc(44,x,2,1,"p",24),e.qZA(),e.TgZ(45,"div",22),e._UZ(46,"i",27),e.YNc(47,T,2,0,"p",24),e.YNc(48,A,2,1,"p",24),e.qZA()(),e.TgZ(49,"div",28),e._UZ(50,"ngx-qrcode",29),e.TgZ(51,"p",30),e._uU(52,"Scan/Click QR"),e.qZA()()(),e.TgZ(53,"div",31)(54,"div",32)(55,"p"),e._uU(56,"\u201cBusiness opportunities are like buses, there\u2019s always another one coming.\u201d "),e.qZA(),e.TgZ(57,"h6"),e._uU(58," \u2013 Richard Branson"),e.qZA()()()()()()()()()()(),e.TgZ(59,"div",33)(60,"div",34)(61,"div",35)(62,"div",36)(63,"h5",37),e._uU(64,"Company Details"),e.qZA(),e._UZ(65,"button",38),e.qZA(),e.TgZ(66,"div",39)(67,"ul",40)(68,"li",41)(69,"button",42),e._uU(70,"Company Info"),e.qZA()(),e.TgZ(71,"li",41)(72,"button",43),e._uU(73,"My Social Links"),e.qZA()()(),e.TgZ(74,"form",44),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(75,"div",45)(76,"div",46)(77,"div",21)(78,"div",47)(79,"div",48)(80,"label",49),e._uU(81,"Company Name :"),e.qZA()(),e.TgZ(82,"div",48)(83,"input",50),e.NdJ("ngModelChange",function(s){return i.compName=s}),e.qZA(),e.YNc(84,q,2,0,"div",51),e.qZA(),e.TgZ(85,"div",48)(86,"div",52),e._UZ(87,"img",53)(88,"img",54),e.qZA()()()(),e.TgZ(89,"div",21)(90,"div",47)(91,"div",48)(92,"label",49),e._uU(93,"Company Website :"),e.qZA()(),e.TgZ(94,"div",48)(95,"input",55),e.NdJ("ngModelChange",function(s){return i.compWebsite=s}),e.qZA(),e.YNc(96,N,3,2,"div",56),e.qZA()()(),e.TgZ(97,"div",21)(98,"div",47)(99,"div",48)(100,"label",49),e._uU(101,"Company Address :"),e.qZA()(),e.TgZ(102,"div",48),e._UZ(103,"input",57),e.qZA()()(),e.TgZ(104,"div",21)(105,"div",47)(106,"div",48)(107,"label",49),e._uU(108,"Company Phone :"),e.qZA()(),e.TgZ(109,"div",48),e._UZ(110,"input",58),e.YNc(111,B,2,0,"div",59),e.YNc(112,k,3,0,"div",51),e.YNc(113,w,3,0,"div",51),e.qZA()()(),e.TgZ(114,"div",21)(115,"div",47)(116,"div",48)(117,"label",49),e._uU(118,"Company Fax :"),e.qZA()(),e.TgZ(119,"div",48),e._UZ(120,"input",60),e.qZA()()(),e.TgZ(121,"div",21)(122,"div",47)(123,"div",48)(124,"label",49),e._uU(125,"Company Logo :"),e.qZA()(),e.TgZ(126,"div",48)(127,"input",61),e.NdJ("change",function(s){return i.onSelectImage(s)}),e.qZA()()()()(),e.TgZ(128,"div",62)(129,"div",21)(130,"div",47)(131,"div",48)(132,"label",63),e._UZ(133,"img",64),e.qZA()(),e.TgZ(134,"div",48),e._UZ(135,"input",65),e.qZA()()(),e.TgZ(136,"div",21)(137,"div",47)(138,"div",48)(139,"label",63),e._UZ(140,"img",66),e.qZA()(),e.TgZ(141,"div",48),e._UZ(142,"input",67),e.qZA()()(),e.TgZ(143,"div",21)(144,"div",47)(145,"div",48)(146,"label",63),e._UZ(147,"img",68),e.qZA()(),e.TgZ(148,"div",48),e._UZ(149,"input",69),e.qZA()()(),e.TgZ(150,"div",21)(151,"div",47)(152,"div",48)(153,"label",63),e._UZ(154,"img",70),e.qZA()(),e.TgZ(155,"div",48),e._UZ(156,"input",71),e.qZA()()(),e.TgZ(157,"div",21)(158,"div",47)(159,"div",48)(160,"label",63),e._UZ(161,"img",72),e.qZA()(),e.TgZ(162,"div",48),e._UZ(163,"input",73),e.qZA()()(),e.TgZ(164,"div",21)(165,"div",47),e._UZ(166,"div",48),e.TgZ(167,"div",48)(168,"p",74),e._UZ(169,"i",75),e._uU(170," Add New Field"),e.qZA()()()()(),e.TgZ(171,"div",76)(172,"div",47)(173,"div",77)(174,"button",78),e._uU(175,"Cancel"),e.qZA()(),e.TgZ(176,"div",77)(177,"button",79),e._uU(178,"Apply Changes"),e.qZA()()()()()()()()()()()),2&a){let n,s,p,d;e.xp6(33),e.Q6J("ngIf",!i.username),e.xp6(1),e.Q6J("ngIf",i.username),e.xp6(5),e.Q6J("ngIf",!i.number),e.xp6(1),e.Q6J("ngIf",i.number),e.xp6(3),e.Q6J("ngIf",!i.Email),e.xp6(1),e.Q6J("ngIf",i.Email),e.xp6(3),e.Q6J("ngIf",!i.compWebsite),e.xp6(1),e.Q6J("ngIf",i.compWebsite),e.xp6(2),e.Q6J("elementType",i.elementType)("errorCorrectionLevel",i.correctionLevel)("value",i.value),e.xp6(24),e.Q6J("formGroup",i.companyDetailForm),e.xp6(9),e.Q6J("ngModel",i.compName),e.xp6(1),e.Q6J("ngIf",null==(n=i.companyDetailForm.get("companyName"))?null:n.hasError("required")),e.xp6(11),e.Q6J("ngModel",i.compWebsite),e.xp6(1),e.Q6J("ngIf",i.m.companyWebsite.touched&&i.m.companyWebsite.invalid),e.xp6(15),e.Q6J("ngIf",null==(s=i.companyDetailForm.get("companyPhone"))?null:s.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(p=i.companyDetailForm.get("companyPhone"))?null:p.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(d=i.companyDetailForm.get("companyPhone"))?null:d.hasError("pattern")),e.xp6(64),e.Q6J("disabled",!i.companyDetailForm.valid)}},dependencies:[g.O5,l._Y,l.Fj,l.JJ,l.JL,l.wO,l.nD,l.sg,l.u,r.zF],styles:[".mt-edit[_ngcontent-%COMP%]{margin-top:-310px}.bshadow[_ngcontent-%COMP%]{width:150px;height:150px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(5px 5px 5px #222222);opacity:.5}  .bshadow img{max-height:100px;min-width:100px}"]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(D),c.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,J,l.UX,l.u5,r.F5]}),t})()}}]);