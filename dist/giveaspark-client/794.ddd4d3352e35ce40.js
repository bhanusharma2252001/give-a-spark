"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[794],{9794:(I,d,r)=>{r.r(d),r.d(d,{BasicdetailsCompanyModule:()=>q});var p=r(6895),m=r(6773),o=r(433),e=r(8256),u=r(7177),g=r(7185),c=r(1481);function b(a,n){1&a&&(e.TgZ(0,"h4",77)(1,"span",78),e._uU(2,"John"),e.qZA(),e._uU(3," Doe "),e.qZA())}function f(a,n){if(1&a&&(e.TgZ(0,"h4",77)(1,"span",78),e._uU(2),e.qZA()()),2&a){const t=e.oxw();e.xp6(2),e.Oqu(t.username)}}function Z(a,n){1&a&&(e.TgZ(0,"p",79),e._uU(1,"+1129457850 | +1129457850 "),e.qZA())}function y(a,n){if(1&a&&(e.TgZ(0,"p",79),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.number)}}function h(a,n){1&a&&(e.TgZ(0,"p",79),e._uU(1,"shreybhardwaj@gmail.com "),e.qZA())}function v(a,n){if(1&a&&(e.TgZ(0,"p",79),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.Email)}}function C(a,n){1&a&&(e.TgZ(0,"p",79),e._uU(1," www.perfectiongeeks.com"),e.qZA())}function _(a,n){if(1&a&&(e.TgZ(0,"p",79),e._uU(1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.compWebsite)}}const T=[{path:"",component:(()=>{class a{constructor(t,i,l,s,x,U){this.api=t,this.fb=i,this.router=l,this.toast=s,this.meta=x,this.title=U,this.Submitted=!1,this.fileData=[],this.fileImageName="",this.isImage=!0,this.companyDetailForm=this.fb.group({companyName:["",o.kI.required],companyWebsite:["",o.kI.required],companyAddress:["",o.kI.required],companyPhone:["",o.kI.required],companyFax:["",o.kI.required],companyLogo:["",o.kI.required],fbProfile:["",o.kI.required],instagramProfile:["",o.kI.required],linkedInProfile:["",o.kI.required],youtubeChannel:["",o.kI.required],twitterProfile:["",o.kI.required]}),this.meta.updateTag({name:"author",content:"angulartpoint.com"})}ngOnInit(){this.getBasicProfile(),this.title.setTitle("Templates")}getBasicProfile(){this.api.getbasicDetaiofUseer().subscribe(t=>{this.details=t.result,this.username=t.result[0]?.firstName,this.Email=t.result[0]?.email,this.compName=t.result[0]?.companyName,this.compWebsite=t.result[0]?.companyWebsite,this.number=t.result[0]?.phone,console.log(this.compWebsite,"jojo"),console.log(this.details)})}onSelectImage(t){this.Submitted=!0;let i=t.target.files;if(this.fileImageName=t.target.files[0].name,i){this.uploadImage=i[0],this.subImageSubmit();for(let s of i){if(!s.type.includes("image"))return void(this.isImage=!1);this.fileData.push(s)}}if(t.target.files&&t.target.files[0]){var l=new FileReader;l.readAsDataURL(t.target.files[0]),l.onload=s=>{this.url=s.target?.result}}}subImageSubmit(){this.Submitted=!0;let t=new FormData;t.append("attachment",this.uploadImage),this.api.addAttachments(t).subscribe(i=>{console.log(i),this.imageData1=i,this.imageData2=this.imageData1[0].key,console.log(this.imageData1[0].key,"image key ")},i=>{console.log(i)})}onSubmit(){this.Submitted=!0;let t=this.companyDetailForm.value;this.api.addCompanyDetails({companyName:t?.companyName,companyWebsite:t?.companyWebsite,companyLogo:this.imageData2,companyPhone:t?.companyPhone,companyAddress:[t?.companyAddress],fbProfile:t?.fbProfile,instagramProfile:t?.instagramProfile,linkedInProfile:t?.linkedInProfile,youtubeChannel:t?.youtubeChannel,twitterProfile:t?.twitterProfile}).subscribe(l=>{console.log(l),this.toast.success("submitted"),this.router.navigate(["home-dashboard/basicdetails-company"])},l=>{this.toast.error("not submitted")})}route(){this.router.navigate(["home-dashboard/basic-template"])}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u.O),e.Y36(o.qu),e.Y36(m.F0),e.Y36(g._W),e.Y36(c.h_),e.Y36(c.Dx))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-basicdetails-company"]],decls:174,vars:11,consts:[[1,"container-fluid"],[1,"padding-top"],[1,"container-fluid","p-0","mt-5"],[1,"row","m-0","p-0","mt-3"],[1,"col-md-7","col-lg-10"],[1,"row","pe-5"],[1,"col-md-6","col-lg-6"],[1,"py-5"],[1,"timeline"],[1,"timeline-item","mb-5"],[1,"fw-bold"],[1,"text-muted"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"pink-btn","p-2"],[1,"pink-btn","p-2",3,"click"],[1,"col-md-6","col-lg-6","pe-3"],[1,"card-box","border-10","p-4","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"col-md-7","col-lg-6","ps-2","pe-0"],["class","",4,"ngIf"],[1,"mb-3"],[1,"d-flex","pe-5","ps-3"],["aria-hidden","true",1,"fa","fa-phone","pe-2"],["class"," fs-12",4,"ngIf"],["class","fs-12",4,"ngIf"],["aria-hidden","true",1,"fa","fa-envelope","pe-2"],["aria-hidden","true",1,"fa","fa-globe","pe-2"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["src","assets/images/scan.png",1,"img-fluid"],[1,"fs-12","text-center","mt-1"],[1,"row"],[1,"col-lg-8","offset-lg-2","text-center"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content","bg-gray"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","m-4"],["id","","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","home-tab","data-bs-toggle","tab","data-bs-target","#home","type","button","role","tab","aria-controls","home","aria-selected","true",1,"nav-link","active"],["id","profile-tab","data-bs-toggle","tab","data-bs-target","#profile","type","button","role","tab","aria-controls","profile","aria-selected","false",1,"nav-link"],[3,"formGroup","ngSubmit"],["id","myTabContent",1,"tab-content","mt-4"],["id","home","role","tabpanel","aria-labelledby","home-tab",1,"tab-pane","fade","show","active"],[1,"row","g-3","align-items-center"],[1,"col-md-4","col-lg-4"],["for","exampleInputtext",1,"form-label"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyName",1,"form-control","border-none","bottom-border",3,"ngModel","ngModelChange"],[1,"d-flex"],["src","assets/images/pen.png",1,"w-10","h-25"],["src","assets/images/cross.png",1,"w-10","h-25"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyWebsite",1,"form-control","border-none","bottom-border",3,"ngModel","ngModelChange"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyAddress",1,"form-control","border-none","bottom-border"],["type","number","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyPhone",1,"form-control","border-none","bottom-border"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyFax",1,"form-control","border-none","bottom-border"],["type","file","id","exampleInputtext","aria-describedby","emailHelp","formControlName","companyLogo",1,"form-control","border-none","bottom-border",3,"change"],["id","profile","role","tabpanel","aria-labelledby","profile-tab",1,"tab-pane","fade"],["for","exampleInputtext",1,"form-label","bg-white","rounded-circle"],["src","assets/images/facebook.png"],["type","text","id","exampleInputtext","aria-describedby","emailHelp","formControlName","fbProfile",1,"form-control","border-none","bottom-border"],["src","assets/images/instagram.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","instagramProfile",1,"form-control","border-none","bottom-border"],["src","assets/images/linkedin.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","linkedInProfile",1,"form-control","border-none","bottom-border"],["src","assets/images/youtube.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","youtubeChannel",1,"form-control","border-none","bottom-border"],["src","assets/images/twitter.png"],["type","email","id","exampleInputtext","aria-describedby","emailHelp","formControlName","twitterProfile",1,"form-control","border-none","bottom-border"],[1,"text-blue"],["aria-hidden","true",1,"fa","fa-plus-circle"],[1,"mb-3","mt-3","mt-edit"],[1,"col-md-6"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn","pink-btn"],["type","submit","data-bs-dismiss","modal","aria-label","Close",1,"btn","green-btn"],[1,""],[1,"text-darkblue"],[1,"fs-12"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"section",7)(9,"ul",8)(10,"li",9)(11,"h5",10),e._uU(12,"Company Details"),e.qZA(),e.TgZ(13,"p",11),e._uU(14," First let\u2019s complete your company details, These details will be used in all of your signatures. "),e.qZA(),e.TgZ(15,"button",12),e._uU(16,"Edit Company Details"),e.qZA()(),e.TgZ(17,"li",9)(18,"h5",10),e._uU(19,"Design Your Company Templates"),e.qZA(),e._UZ(20,"p",11),e.TgZ(21,"button",13),e.NdJ("click",function(){return i.route()}),e._uU(22,"Design your Template"),e.qZA()(),e.TgZ(23,"li",9)(24,"h5",10),e._uU(25,"Add Employees"),e.qZA(),e._UZ(26,"p",11),e.qZA()()()(),e.TgZ(27,"div",14)(28,"div",15)(29,"div",16)(30,"div",17),e._UZ(31,"img",18),e.qZA(),e.TgZ(32,"div",19),e.YNc(33,b,4,0,"h4",20),e.YNc(34,f,3,1,"h4",20),e.TgZ(35,"h6",21),e._uU(36,"Marketing Expert"),e.qZA(),e.TgZ(37,"div",22),e._UZ(38,"i",23),e.YNc(39,Z,2,0,"p",24),e.YNc(40,y,2,1,"p",25),e.qZA(),e.TgZ(41,"div",22),e._UZ(42,"i",26),e.YNc(43,h,2,0,"p",24),e.YNc(44,v,2,1,"p",24),e.qZA(),e.TgZ(45,"div",22),e._UZ(46,"i",27),e.YNc(47,C,2,0,"p",24),e.YNc(48,_,2,1,"p",24),e.qZA()(),e.TgZ(49,"div",28),e._UZ(50,"img",29),e.TgZ(51,"p",30),e._uU(52,"Scan/Click QR"),e.qZA()()(),e.TgZ(53,"div",31)(54,"div",32)(55,"p"),e._uU(56,"\u201cBusiness opportunities are like buses, there\u2019s always another one coming.\u201d "),e.qZA(),e.TgZ(57,"h6"),e._uU(58," \u2013 Richard Branson"),e.qZA()()()()()()()()()()(),e.TgZ(59,"div",33)(60,"div",34)(61,"div",35)(62,"div",36)(63,"h5",37),e._uU(64,"Company Details"),e.qZA(),e._UZ(65,"button",38),e.qZA(),e.TgZ(66,"div",39)(67,"ul",40)(68,"li",41)(69,"button",42),e._uU(70,"Company Info"),e.qZA()(),e.TgZ(71,"li",41)(72,"button",43),e._uU(73,"My Social Links"),e.qZA()()(),e.TgZ(74,"form",44),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(75,"div",45)(76,"div",46)(77,"div",21)(78,"div",47)(79,"div",48)(80,"label",49),e._uU(81,"Company Name :"),e.qZA()(),e.TgZ(82,"div",48)(83,"input",50),e.NdJ("ngModelChange",function(s){return i.compName=s}),e.qZA()(),e.TgZ(84,"div",48)(85,"div",51),e._UZ(86,"img",52)(87,"img",53),e.qZA()()()(),e.TgZ(88,"div",21)(89,"div",47)(90,"div",48)(91,"label",49),e._uU(92,"Company Website :"),e.qZA()(),e.TgZ(93,"div",48)(94,"input",54),e.NdJ("ngModelChange",function(s){return i.compWebsite=s}),e.qZA()()()(),e.TgZ(95,"div",21)(96,"div",47)(97,"div",48)(98,"label",49),e._uU(99,"Company Address :"),e.qZA()(),e.TgZ(100,"div",48),e._UZ(101,"input",55),e.qZA()()(),e.TgZ(102,"div",21)(103,"div",47)(104,"div",48)(105,"label",49),e._uU(106,"Company Phone :"),e.qZA()(),e.TgZ(107,"div",48),e._UZ(108,"input",56),e.qZA()()(),e.TgZ(109,"div",21)(110,"div",47)(111,"div",48)(112,"label",49),e._uU(113,"Company Fax :"),e.qZA()(),e.TgZ(114,"div",48),e._UZ(115,"input",57),e.qZA()()(),e.TgZ(116,"div",21)(117,"div",47)(118,"div",48)(119,"label",49),e._uU(120,"Company Logo :"),e.qZA()(),e.TgZ(121,"div",48)(122,"input",58),e.NdJ("change",function(s){return i.onSelectImage(s)}),e.qZA()()()()(),e.TgZ(123,"div",59)(124,"div",21)(125,"div",47)(126,"div",48)(127,"label",60),e._UZ(128,"img",61),e.qZA()(),e.TgZ(129,"div",48),e._UZ(130,"input",62),e.qZA()()(),e.TgZ(131,"div",21)(132,"div",47)(133,"div",48)(134,"label",60),e._UZ(135,"img",63),e.qZA()(),e.TgZ(136,"div",48),e._UZ(137,"input",64),e.qZA()()(),e.TgZ(138,"div",21)(139,"div",47)(140,"div",48)(141,"label",60),e._UZ(142,"img",65),e.qZA()(),e.TgZ(143,"div",48),e._UZ(144,"input",66),e.qZA()()(),e.TgZ(145,"div",21)(146,"div",47)(147,"div",48)(148,"label",60),e._UZ(149,"img",67),e.qZA()(),e.TgZ(150,"div",48),e._UZ(151,"input",68),e.qZA()()(),e.TgZ(152,"div",21)(153,"div",47)(154,"div",48)(155,"label",60),e._UZ(156,"img",69),e.qZA()(),e.TgZ(157,"div",48),e._UZ(158,"input",70),e.qZA()()(),e.TgZ(159,"div",21)(160,"div",47),e._UZ(161,"div",48),e.TgZ(162,"div",48)(163,"p",71),e._UZ(164,"i",72),e._uU(165," Add New Field"),e.qZA()()()()(),e.TgZ(166,"div",73)(167,"div",47)(168,"div",74)(169,"button",75),e._uU(170,"Cancel"),e.qZA()(),e.TgZ(171,"div",74)(172,"button",76),e._uU(173,"Apply Changes"),e.qZA()()()()()()()()()()()),2&t&&(e.xp6(33),e.Q6J("ngIf",!i.username),e.xp6(1),e.Q6J("ngIf",i.username),e.xp6(5),e.Q6J("ngIf",!i.number),e.xp6(1),e.Q6J("ngIf",i.number),e.xp6(3),e.Q6J("ngIf",!i.Email),e.xp6(1),e.Q6J("ngIf",i.Email),e.xp6(3),e.Q6J("ngIf",!i.compWebsite),e.xp6(1),e.Q6J("ngIf",i.compWebsite),e.xp6(26),e.Q6J("formGroup",i.companyDetailForm),e.xp6(9),e.Q6J("ngModel",i.compName),e.xp6(11),e.Q6J("ngModel",i.compWebsite))},dependencies:[p.O5,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u],styles:[".mt-edit[_ngcontent-%COMP%]{margin-top:-310px}"]}),a})()}];let A=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(T),m.Bz]}),a})(),q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.ez,A,o.UX,o.u5]}),a})()}}]);