"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[794],{9794:(ee,_,m)=>{m.r(_),m.d(_,{BasicdetailsCompanyModule:()=>$});var v=m(6895),b=m(3262),l=m(433),y=m(8246),e=m(1571),T=m(7177),x=m(4383),Z=m(1481);function A(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"button",83),e.NdJ("click",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.route())}),e._uU(1,"Design your Template"),e.qZA()}}function q(t,o){1&t&&e._UZ(0,"img",84)}function I(t,o){if(1&t&&e._UZ(0,"img",85),2&t){const i=e.oxw();e.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==i.details?null:i.details.profile,"",e.LSH)}}function U(t,o){1&t&&(e.TgZ(0,"h4",1)(1,"span",86),e._uU(2,"John"),e.qZA(),e._uU(3," Doe "),e.qZA())}function w(t,o){if(1&t&&(e.TgZ(0,"h4",1)(1,"span",86),e._uU(2),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.username)}}function k(t,o){1&t&&(e.TgZ(0,"p",87),e._uU(1,"+1129457850 | +1129457850 "),e.qZA())}function P(t,o){if(1&t&&(e.TgZ(0,"p",87),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.AsE("",i.stdCode,"",i.number,"")}}function N(t,o){1&t&&(e.TgZ(0,"p",87),e._uU(1,"your Email "),e.qZA())}function B(t,o){if(1&t&&(e.TgZ(0,"p",87),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(i.Email)}}function D(t,o){1&t&&(e.TgZ(0,"p",87),e._uU(1," https://www.perfectiongeeks.com"),e.qZA())}function J(t,o){if(1&t&&(e.TgZ(0,"p",87),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(i.compWebsite)}}function F(t,o){1&t&&(e.TgZ(0,"div",88),e._uU(1," Company Name is required "),e.qZA())}function Y(t,o){1&t&&(e.TgZ(0,"div",88),e._uU(1," *url is required "),e.qZA())}function M(t,o){1&t&&(e.TgZ(0,"div",88),e._uU(1," *Please enter valid url "),e.qZA())}function Q(t,o){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"div",56),e.YNc(2,M,2,0,"div",56),e.qZA()),2&t){const i=e.oxw();let a,n;e.xp6(1),e.Q6J("ngIf",null==(a=i.companyDetailForm.get("companyWebsite"))?null:a.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=i.companyDetailForm.get("companyWebsite"))?null:n.hasError("pattern"))}}function S(t,o){1&t&&e._UZ(0,"div",89)}function H(t,o){1&t&&(e.TgZ(0,"div",88)(1,"small"),e._uU(2,"phone no. is required"),e.qZA()())}function W(t,o){1&t&&(e.TgZ(0,"div",88)(1,"small"),e._uU(2,"*Please enter valid no. "),e.qZA()())}function E(t,o){1&t&&(e.TgZ(0,"div")(1,"small",90),e._uU(2,"please enter valid url"),e.qZA()())}function O(t,o){1&t&&(e.TgZ(0,"div",88)(1,"small"),e._uU(2,"please enter your profile"),e.qZA()())}function L(t,o){1&t&&(e.TgZ(0,"div")(1,"small",90),e._uU(2,"please enter valid url"),e.qZA()())}function j(t,o){1&t&&(e.TgZ(0,"div")(1,"small",90),e._uU(2,"please enter valid url"),e.qZA()())}function R(t,o){1&t&&e._UZ(0,"div")}function z(t,o){1&t&&(e.TgZ(0,"div")(1,"small",90),e._uU(2,"please enter valid url"),e.qZA()())}function G(t,o){1&t&&(e.TgZ(0,"div")(1,"small",90),e._uU(2,"please enter valid url"),e.qZA()())}const X=[{path:"",component:(()=>{class t{constructor(i,a,n,s,r,d){this.api=i,this.fb=a,this.router=n,this.toast=s,this.meta=r,this.title=d,this.tabClose=!1,this.Submitted=!1,this.fileData=[],this.fileImageName="",this.isImage=!0,this.elementType=y.TT.URL,this.correctionLevel=y.Jk.HIGH,this.value="";const p="(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";this.companyDetailForm=this.fb.group({companyName:["",[l.kI.required]],companyWebsite:["",[l.kI.required,l.kI.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],companyAddress:[""],companyPhone:["",[l.kI.required,l.kI.pattern("[0-9 ]+")]],companyFax:[""],companyLogo:[""],fbProfile:["",[l.kI.pattern(p)]],instagramProfile:["",[l.kI.pattern(p)]],linkedInProfile:["",[l.kI.pattern(p)]],youtubeChannel:["",[l.kI.pattern(p)]],twitterProfile:["",[l.kI.pattern(p)]]}),"/home-dashboard/basicdetails-company"==n.url&&(this.api.getLatestValue(n.url),this.api.content.subscribe(h=>{n.routeReuseStrategy.shouldReuseRoute=()=>!1})),n.canceledNavigationResolution="computed",history.pushState(null,"",location.href),window.onpopstate=function(){history.go(1)}}get m(){return this.companyDetailForm.controls}ngOnInit(){this.getBasicProfile(),this.title.setTitle("Give A Spark"),this.getScanText()}getScanText(){let i=sessionStorage.getItem("ClientSpark");this.value="https://app.giveaspark.com/home-dashboard/myprofile/profile-dashboard?token="+btoa(i)}getBasicProfile(){this.api.getbasicDetaiofUseer().subscribe(i=>{this.details=i.result[0],this.username=i.result[0]?.firstName,this.Email=i.result[0]?.email,this.compName=i.result[0]?.companyName,this.compWebsite=i.result[0]?.companyWebsite,this.number=i.result[0]?.phone,this.stdCode=i.result[0]?.stdCode,console.log(this.compWebsite,"jojo"),console.log(this.details)})}onSelectImage(i){this.Submitted=!0;let a=i.target.files;if(this.fileImageName=i.target.files[0].name,a){this.uploadImage=a[0],this.subImageSubmit();for(let s of a){if(!s.type.includes("image"))return void(this.isImage=!1);this.fileData.push(s)}}if(i.target.files&&i.target.files[0]){var n=new FileReader;n.readAsDataURL(i.target.files[0]),n.onload=s=>{this.url=s.target?.result}}}subImageSubmit(){this.Submitted=!0;let i=new FormData;i.append("attachment",this.uploadImage),this.api.addAttachments(i).subscribe(a=>{console.log(a),this.imageData1=a,this.imageData2=this.imageData1[0].key,console.log(this.imageData1[0].key,"image key ")},a=>{console.log(a)})}onSubmit(){this.Submitted=!0;let i=this.companyDetailForm.value;this.api.addCompanyDetails({companyName:i?.companyName,companyWebsite:i?.companyWebsite,companyLogo:this.imageData2,companyPhone:i?.companyPhone,companyAddress:[{addressline:i.companyAddress}],fbProfile:i?.fbProfile,instagramProfile:i?.instagramProfile,linkedInProfile:i?.linkedInProfile,youtubeChannel:i?.youtubeChannel,twitterProfile:i?.twitterProfile}).subscribe(n=>{console.log(n),this.toast.success("submitted"),this.router.navigate(["home-dashboard/basicdetails-company"]),this.getBasicProfile()},n=>{this.toast.error("not submitted")})}route(){this.router.navigate(["home-dashboard/basic-template"])}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(T.O),e.Y36(l.qu),e.Y36(b.F0),e.Y36(x._W),e.Y36(Z.h_),e.Y36(Z.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-basicdetails-company"]],decls:187,vars:40,consts:[[1,"container-fluid"],[1,""],[1,"container-fluid","p-0","mt-4"],[1,"row","m-0","p-0","mt-3"],[1,"col-md-7","col-lg-10"],[1,"row","pe-5"],[1,"col-md-6","col-lg-6"],[1,"timeline"],[1,"timeline-item","mb-5","position-relative"],[1,"fw-bold"],[2,"position","absolute","left","-40px","top","0px","width","44px","z-index","2","margin-bottom","0","color","#ffbf03"],[1,"line-vertical"],[1,"text-muted"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"pink-btn","p-2"],[2,"position","absolute","left","-40px","top","0px","width","44px","z-index","2","margin-bottom","0","color","#fff"],[1,"line-verticalx"],["class","pink-btn p-2",3,"click",4,"ngIf"],[1,"col-md-6","col-lg-6","pe-3"],[1,"card-box","border-10","p-4","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["class","wh-150","src","assets/images/profile-image.png",4,"ngIf"],["class","wh-150",3,"src",4,"ngIf"],[1,"col-md-7","col-lg-6","ps-2","pe-0"],["class","",4,"ngIf"],[1,"mb-3"],[1,"d-flex","pe-5","ps-3"],["aria-hidden","true",1,"fa","fa-phone","pe-2"],["class"," fs-12",4,"ngIf"],["class","fs-12",4,"ngIf"],["aria-hidden","true",1,"fa","fa-envelope","pe-2"],["class"," fs-12",4,"ngif"],["aria-hidden","true",1,"fa","fa-globe","pe-2"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["role","presentation","width","130",1,"sc-cHGsZl","bHiaRe",2,"max-width","130px","display","inline-block",3,"src"],[1,"fs-12","text-center","mt-1"],[1,"row"],[1,"col-lg-8","offset-lg-2","text-center"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content","bg-gray"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","m-4"],["id","","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","home-tab","data-bs-toggle","tab","data-bs-target","#home","type","button","role","tab","aria-controls","home","aria-selected","true",1,"nav-link","active"],["id","profile-tab","data-bs-toggle","tab","data-bs-target","#profile","type","button","role","tab","aria-controls","profile","aria-selected","false",1,"nav-link"],[3,"formGroup","ngSubmit"],["id","myTabContent",1,"tab-content","mt-4"],["id","home","role","tabpanel","aria-labelledby","home-tab",1,"tab-pane","fade","show","active"],[1,"row","g-3","align-items-center"],[1,"col-md-4","col-lg-4"],["for","exampleInputtext",1,"form-label"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyName",1,"form-control","border-none","bottom-border",3,"ngModel","ngModelChange"],["class","text-danger text-sm",4,"ngIf"],[1,"d-flex"],["src","assets/images/pen.png",1,"w-10","h-25"],["src","assets/images/cross.png",1,"w-10","h-25"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyWebsite","placeholder","www.domainname.com",1,"form-control","border-none","bottom-border",3,"ngModel","ngModelChange"],[4,"ngIf"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyAddress",1,"form-control","border-none","bottom-border"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyPhone",1,"form-control","border-none","bottom-border"],["class","text-danger text-sm","style","    bottom: 25px;\n                                                position: relative;\n                                                left: 233px;",4,"ngIf"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyFax",1,"form-control","border-none","bottom-border"],["type","file","id","exampleInputtext","accept","image/gif, image/jpeg, image/png","aria-describedby","emailHelp","formControlName","companyLogo",1,"form-control","border-none","bottom-border",3,"change"],["id","profile","role","tabpanel","aria-labelledby","profile-tab",1,"tab-pane","fade"],["for","exampleInputtext",1,"form-label","bg-white","rounded-circle"],["src","assets/images/facebook.png"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","fbProfile","placeholder","https://www.facebook.com/<username>",1,"form-control","border-none","bottom-border"],["src","assets/images/instagram.png"],["type","url","id","exampleInputtext","aria-describedby","emailHelp","formControlName","instagramProfile","placeholder","https://www.instagram.com/<username>",1,"form-control","border-none","bottom-border"],["src","assets/images/linkedin.png"],["type","url","id","exampleInputtext","aria-describedby","emailHelp","formControlName","linkedInProfile","placeholder","https://www.linkedIn.com/<username>",1,"form-control","border-none","bottom-border"],["src","assets/images/youtube.png"],["type","url","id","exampleInputtext","aria-describedby","emailHelp","formControlName","youtubeChannel","placeholder","https://www.youtube.com/<username>",1,"form-control","border-none","bottom-border"],["src","assets/images/twitter.png"],["type","url","id","exampleInputtext","aria-describedby","emailHelp","formControlName","twitterProfile","placeholder","https://www.twitter.com/<username>",1,"form-control","border-none","bottom-border"],[1,"mb-3","mt-3","mt-edit"],[1,"col-md-6"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"pink-btn","pe-3","ps-3","p-2"],["type","submit","data-bs-dismiss","modal","aria-label","Close",1,"green-btn","pe-3","ps-3","p-2",3,"disabled"],[1,"pink-btn","p-2",3,"click"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"wh-150",3,"src"],[1,"text-darkblue"],[1,"fs-12"],[1,"text-danger","text-sm"],[1,"text-danger","text-sm",2,"bottom","25px","position","relative","left","233px"],[2,"color","rgba(206, 10, 10, 0.733)"]],template:function(i,a){if(1&i&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"section",1)(9,"ul",7)(10,"li",8)(11,"h5",9)(12,"p",10),e._uU(13,"1"),e.qZA(),e._UZ(14,"div",11),e._uU(15," Company Details "),e.qZA(),e.TgZ(16,"p",12),e._uU(17," First let\u2019s complete your company details, These details will be used in all of your signatures. "),e.qZA(),e.TgZ(18,"button",13),e._uU(19,"Edit Company Details"),e.qZA()(),e.TgZ(20,"li",8)(21,"h5",9)(22,"p",14),e._uU(23,"2"),e.qZA(),e._UZ(24,"div",15),e._uU(25,"Design Your Company Templates "),e.qZA(),e._UZ(26,"p",12),e.YNc(27,A,2,0,"button",16),e.qZA(),e.TgZ(28,"li",8)(29,"h5",9)(30,"p",14),e._uU(31,"3"),e.qZA(),e._uU(32,"Add Employees "),e.qZA(),e._UZ(33,"p",12),e.qZA()()()(),e.TgZ(34,"div",17)(35,"div",18)(36,"div",19)(37,"div",20),e.YNc(38,q,1,0,"img",21),e.YNc(39,I,1,1,"img",22),e.qZA(),e.TgZ(40,"div",23),e.YNc(41,U,4,0,"h4",24),e.YNc(42,w,3,1,"h4",24),e.TgZ(43,"h6",25),e._uU(44,"Marketing Expert"),e.qZA(),e.TgZ(45,"div",26),e._UZ(46,"i",27),e.YNc(47,k,2,0,"p",28),e.YNc(48,P,2,2,"p",29),e.qZA(),e.TgZ(49,"div",26),e._UZ(50,"i",30),e.YNc(51,N,2,0,"p",31),e.YNc(52,B,2,1,"p",28),e.qZA(),e.TgZ(53,"div",26),e._UZ(54,"i",32),e.YNc(55,D,2,0,"p",28),e.YNc(56,J,2,1,"p",28),e.qZA()(),e.TgZ(57,"div",33),e._UZ(58,"img",34),e.TgZ(59,"p",35),e._uU(60,"Scan & Click QR"),e.qZA()()(),e.TgZ(61,"div",36)(62,"div",37)(63,"p"),e._uU(64,"\u201cBusiness opportunities are like buses, there\u2019s always another one coming.\u201d "),e.qZA(),e.TgZ(65,"h6"),e._uU(66," \u2013 Richard Branson"),e.qZA()()()()()()()()()()(),e.TgZ(67,"div",38)(68,"div",39)(69,"div",40)(70,"div",41)(71,"h5",42),e._uU(72,"Company Details"),e.qZA(),e._UZ(73,"button",43),e.qZA(),e.TgZ(74,"div",44)(75,"ul",45)(76,"li",46)(77,"button",47),e._uU(78,"Company Info"),e.qZA()(),e.TgZ(79,"li",46)(80,"button",48),e._uU(81,"My Social Links"),e.qZA()()(),e.TgZ(82,"form",49),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(83,"div",50)(84,"div",51)(85,"div",25)(86,"div",52)(87,"div",53)(88,"label",54),e._uU(89,"Company Name :"),e.qZA()(),e.TgZ(90,"div",53)(91,"input",55),e.NdJ("ngModelChange",function(s){return a.compName=s}),e.qZA(),e.YNc(92,F,2,0,"div",56),e.qZA(),e.TgZ(93,"div",53)(94,"div",57),e._UZ(95,"img",58)(96,"img",59),e.qZA()()()(),e.TgZ(97,"div",25)(98,"div",52)(99,"div",53)(100,"label",54),e._uU(101,"Company Website :"),e.qZA()(),e.TgZ(102,"div",53)(103,"input",60),e.NdJ("ngModelChange",function(s){return a.compWebsite=s}),e.qZA(),e.YNc(104,Q,3,2,"div",61),e.qZA()()(),e.TgZ(105,"div",25)(106,"div",52)(107,"div",53)(108,"label",54),e._uU(109,"Company Address :"),e.qZA()(),e.TgZ(110,"div",53),e._UZ(111,"input",62),e.qZA()()(),e.TgZ(112,"div",25)(113,"div",52)(114,"div",53)(115,"label",54),e._uU(116,"Company Phone :"),e.qZA()(),e.TgZ(117,"div",53),e._UZ(118,"input",63),e.YNc(119,S,1,0,"div",64),e.YNc(120,H,3,0,"div",56),e.YNc(121,W,3,0,"div",56),e.qZA()()(),e.TgZ(122,"div",25)(123,"div",52)(124,"div",53)(125,"label",54),e._uU(126,"Company Fax :"),e.qZA()(),e.TgZ(127,"div",53),e._UZ(128,"input",65),e.qZA()()(),e.TgZ(129,"div",25)(130,"div",52)(131,"div",53)(132,"label",54),e._uU(133,"Company Logo :"),e.qZA()(),e.TgZ(134,"div",53)(135,"input",66),e.NdJ("change",function(s){return a.onSelectImage(s)}),e.qZA()()()()(),e.TgZ(136,"div",67)(137,"div",25)(138,"div",52)(139,"div",53)(140,"label",68),e._UZ(141,"img",69),e.qZA()(),e.TgZ(142,"div",53),e._UZ(143,"input",70),e.YNc(144,E,3,0,"div",61),e.qZA()()(),e.TgZ(145,"div",25)(146,"div",52)(147,"div",53)(148,"label",68),e._UZ(149,"img",71),e.qZA()(),e.TgZ(150,"div",53),e._UZ(151,"input",72),e.YNc(152,O,3,0,"div",56),e.YNc(153,L,3,0,"div",61),e.qZA()()(),e.TgZ(154,"div",25)(155,"div",52)(156,"div",53)(157,"label",68),e._UZ(158,"img",73),e.qZA()(),e.TgZ(159,"div",53),e._UZ(160,"input",74),e.YNc(161,j,3,0,"div",61),e.qZA()()(),e.TgZ(162,"div",25)(163,"div",52)(164,"div",53)(165,"label",68),e._UZ(166,"img",75),e.qZA()(),e.TgZ(167,"div",53),e._UZ(168,"input",76),e.YNc(169,R,1,0,"div",61),e.YNc(170,z,3,0,"div",61),e.qZA()()(),e.TgZ(171,"div",25)(172,"div",52)(173,"div",53)(174,"label",68),e._UZ(175,"img",77),e.qZA()(),e.TgZ(176,"div",53),e._UZ(177,"input",78),e.YNc(178,G,3,0,"div",61),e.qZA()()()(),e.TgZ(179,"div",79)(180,"div",52)(181,"div",80)(182,"button",81),e._uU(183,"Cancel"),e.qZA()(),e.TgZ(184,"div",80)(185,"button",82),e._uU(186,"Apply Changes"),e.qZA()()()()()()()()()()()),2&i){let n,s,r,d,p,h,c,u,C,g,f;e.xp6(10),e.ekj("timeline-item",(null==a.details?null:a.details.companyPhone)||!(null!=a.details&&a.details.companyPhone)),e.xp6(2),e.ekj("act",!(null!=a.details&&a.details.companyPhone)||(null==a.details?null:a.details.companyPhone)),e.xp6(2),e.ekj("line-vertical",null==a.details?null:a.details.companyPhone),e.xp6(4),e.ekj("disableTab",null==a.details?null:a.details.companyPhone),e.xp6(2),e.ekj("timeline-item",null==a.details?null:a.details.companyPhone),e.xp6(2),e.ekj("smash",null==a.details?null:a.details.companyPhone),e.xp6(5),e.Q6J("ngIf",null==a.details?null:a.details.companyPhone),e.xp6(11),e.Q6J("ngIf",!(null!=a.details&&a.details.profile)),e.xp6(1),e.Q6J("ngIf",null==a.details?null:a.details.profile),e.xp6(2),e.Q6J("ngIf",!a.username),e.xp6(1),e.Q6J("ngIf",a.username),e.xp6(5),e.Q6J("ngIf",!1),e.xp6(1),e.Q6J("ngIf",a.number),e.xp6(3),e.Q6J("ngif",!a.Email),e.xp6(1),e.Q6J("ngIf",a.Email),e.xp6(3),e.Q6J("ngIf",!a.compWebsite),e.xp6(1),e.Q6J("ngIf",a.compWebsite),e.xp6(2),e.MGl("src","https://giveaspark.s3.amazonaws.com/",null==a.details?null:a.details.QrCode,"",e.LSH),e.xp6(24),e.Q6J("formGroup",a.companyDetailForm),e.xp6(9),e.Q6J("ngModel",a.compName),e.xp6(1),e.Q6J("ngIf",null==(n=a.companyDetailForm.get("companyName"))?null:n.hasError("required")),e.xp6(11),e.Q6J("ngModel",a.compWebsite),e.xp6(1),e.Q6J("ngIf",a.m.companyWebsite.touched&&a.m.companyWebsite.invalid),e.xp6(15),e.Q6J("ngIf",null==(s=a.companyDetailForm.get("companyPhone"))?null:s.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(r=a.companyDetailForm.get("companyPhone"))?null:r.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(d=a.companyDetailForm.get("companyPhone"))?null:d.hasError("pattern")),e.xp6(23),e.Q6J("ngIf",(null==(p=a.companyDetailForm.get("fbProfile"))?null:p.value)&&(null==(p=a.companyDetailForm.get("fbProfile"))?null:p.invalid)),e.xp6(8),e.Q6J("ngIf",null==(h=a.companyDetailForm.get("instagramProfile"))?null:h.hasError("required")),e.xp6(1),e.Q6J("ngIf",(null==(c=a.companyDetailForm.get("instagramProfile"))?null:c.value)&&(null==(c=a.companyDetailForm.get("instagramProfile"))?null:c.invalid)),e.xp6(8),e.Q6J("ngIf",(null==(u=a.companyDetailForm.get("linkedInProfile"))?null:u.value)&&(null==(u=a.companyDetailForm.get("linkedInProfile"))?null:u.invalid)),e.xp6(8),e.Q6J("ngIf",1==a.Submitted&&(null==(C=a.companyDetailForm.get("youtubeChannel"))?null:C.invalid)),e.xp6(1),e.Q6J("ngIf",(null==(g=a.companyDetailForm.get("youtubeChannel"))?null:g.value)&&(null==(g=a.companyDetailForm.get("youtubeChannel"))?null:g.invalid)),e.xp6(8),e.Q6J("ngIf",(null==(f=a.companyDetailForm.get("twitterProfile"))?null:f.value)&&(null==(f=a.companyDetailForm.get("twitterProfile"))?null:f.invalid)),e.xp6(7),e.Q6J("disabled",!a.companyDetailForm.valid)}},dependencies:[v.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".mt-edit[_ngcontent-%COMP%]{margin-top:-310px}.bshadow[_ngcontent-%COMP%]{width:150px;height:150px;display:flex;align-items:center;justify-content:center;filter:drop-shadow(5px 5px 5px #222222);opacity:.5}  .bshadow img{max-height:140px;min-width:100px}.disableTab[_ngcontent-%COMP%]:disabled, .disableTab[_ngcontent-%COMP%]{background-color:var(--pink);color:var(--white);border:1px solid var;pointer-events:none;text-decoration:line-through}.act[_ngcontent-%COMP%]{color:#fff!important}.line-vertical[_ngcontent-%COMP%]{border-left:1px solid #0412A6}.smash[_ngcontent-%COMP%]{color:#fff!important}.timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:after{background-color:#0412a6!important}.timeline.timeline-item1[_ngcontent-%COMP%]:after{background-color:#0412a6!important}"]}),t})()}];let K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(X),b.Bz]}),t})();var V=m(8423);let $=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.ez,K,l.UX,l.u5,y.F5,V.ef]}),t})()}}]);