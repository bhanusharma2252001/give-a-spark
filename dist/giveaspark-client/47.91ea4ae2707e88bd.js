"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[47],{3047:(N,d,s)=>{s.r(d),s.d(d,{BasicTemplateModule:()=>U});var p=s(6895),g=s(6773),e=s(8256),u=s(7177),r=s(433),c=s(7185),m=s(2851);function b(i,l){1&i&&(e.TgZ(0,"span",124),e._uU(1,"John \xa0 Doe"),e.qZA())}function f(i,l){if(1&i&&(e.TgZ(0,"span",124),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.Udp("color",o.color18),e.xp6(1),e.Oqu(o.username)}}function Z(i,l){if(1&i&&(e.TgZ(0,"h6",125),e._uU(1,"Marketing Expert"),e.qZA()),2&i){const o=e.oxw();e.Udp("color",o.color4)}}function h(i,l){if(1&i&&(e.TgZ(0,"h6",125),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.Udp("color",o.color4),e.xp6(1),e.Oqu(o.desig)}}function _(i,l){1&i&&(e.TgZ(0,"p",106),e._uU(1,"+1129457850 | +1129457850 "),e.qZA())}function T(i,l){if(1&i&&(e.TgZ(0,"p",106),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.number," ")}}function v(i,l){1&i&&(e.TgZ(0,"p",106),e._uU(1,"shreybhardwaj@gmail.com "),e.qZA())}function C(i,l){if(1&i&&(e.TgZ(0,"p",106),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij("",o.Email," ")}}function x(i,l){1&i&&(e.TgZ(0,"p",106),e._uU(1,"www.perfectiongeek.com"),e.qZA())}function y(i,l){if(1&i&&(e.TgZ(0,"p",106),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Oqu(o.compWebsite)}}const A=[{path:"",component:(()=>{class i{constructor(o,t,a){this.api=o,this.fb=t,this.toast=a,this.planShow=!1,this.toggle=!1,this.rgbaText="rgba(165, 26, 214, 0.2)",this.arrayColors={color1:"#2883e9",color2:"#e920e9",color3:"rgb(255,245,0)",color4:"rgb(236,64,64)",color5:"rgba(45,208,45,1)"},this.selectedColor="color18",this.color1="#2889e9",this.color2="#e920e9",this.color3="#fff500",this.color4="rgb(236,64,64)",this.color5="rgba(45,208,45,1)",this.color6="#1973c0",this.color7="#f200bd",this.color8="#a8ff00",this.color9="#278ce2",this.color10="#0a6211",this.color11="#f2ff00",this.color12="#f200bd",this.color13="rgba(0,255,0,0.5)",this.color14="rgb(0,255,255)",this.color15="rgb(255,0,0)",this.color16="#a51ad633",this.color17="#666666",this.color18="#2d5964",this.color19="#070606",this.signatureDetailsForm=this.fb.group({yourName:[""],designation:[""],email:[""],phoneNo:[""],companyWebsite:[""],address:[""],fbProfile:[""],instagramProfile:[""],linkedInProfile:[""],youtubeChannel:[""],quotesId:[""]})}ngOnInit(){this.getMyStories(),this.getmyQuote(),this.getBasicProfile()}getBasicProfile(){this.api.getbasicDetaiofUseer().subscribe(o=>{this.details=o.result[0],this.username=o.result[0]?.firstName,this.Email=o.result[0]?.email,this.compName=o.result[0]?.companyName,this.compWebsite=o.result[0]?.companyWebsite,this.number=o.result[0]?.phone,this.desig=o.result[0]?.designation,this.addr=o.result[0]?.addressne,this.insta=o.result[0]?.instagramProfile,this.uTube=o.result[0]?.youtubeChannel,this.Linkedin=o.result[0]?.linkedInProfile,this.Twitter=o.result[0]?.addressne,this.faceB=o.result[0]?.fbProfile,console.log(this.compWebsite,"jojo"),console.log(this.details)})}onSubmit(o){this.api.addsignatureDetails({yourName:o.yourName,designation:o.designation,email:o.email,phoneNo:o.phoneNo,companyWebsite:o.companyWebsite,address:[{addressline:o.address,addressline2:o.address,landmark:o.address,city:o.address,state:o.address,pincode:"",country:o.address}],fbProfile:o.fbProfile,instagramProfile:o.instagramProfile,linkedInProfile:o.linkedInProfile,youtubeChannel:o.youtubeChannel,quotesId:o.quotesId}).subscribe(a=>{console.log(a),this.toast.success("Template  Created Successfully")},a=>{this.toast.error("please try again")})}showOnPlan(){}onClick(){}getMyStories(){this.api.getMyStory().subscribe(o=>{this.storyList=o?.result})}getmyQuote(){this.api.getQuoteById().subscribe(o=>{this.quotesList=o?.result})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(u.O),e.Y36(r.qu),e.Y36(c._W))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-basic-template"]],decls:276,vars:32,consts:[[1,"container-fluid"],[1,"padding-top"],[1,"container-fluid","p-0","mt-5"],[1,"row","m-0","p-0","mt-3"],[1,"col-md-7","col-lg-10"],[1,"row","pe-5"],[1,"col-md-6","col-lg-6"],["id","myTab","role","tablist",1,"nav","nav-tabs","rounded-pill","p-3","ps-5","pe-5","justify-content-between"],["role","presentation",1,"nav-item"],["id","details-tab","data-bs-toggle","tab","data-bs-target","#details","type","button","role","tab","aria-controls","details","aria-selected","true",1,"nav-link","box-link","m-1","p-2","active"],[1,"box"],["src","assets/images/details.png",1,"wh-35","active-icon"],["src","assets/images/details-black.png",1,"wh-35","active-black"],[1,"mb-0","fs-5","fs-12"],["id","social-tab","data-bs-toggle","tab","data-bs-target","#social","type","button","role","tab","aria-controls","social","aria-selected","true",1,"nav-link","box-link","m-1","p-2","bg-white",3,"click"],["src","assets/images/social-yellow.png",1,"wh-35","active-icon"],["src","assets/images/social.png",1,"wh-35","active-black"],["id","home-tab","data-bs-toggle","tab","data-bs-target","#template","type","button","role","tab","aria-controls","home","aria-selected","true",1,"nav-link","box-link","m-1","p-2"],["src","assets/images/template-yellow.png",1,"wh-35","active-icon"],["src","assets/images/template.png",1,"wh-35","active-black"],["id","home-tab","data-bs-toggle","tab","data-bs-target","#design","type","button","role","tab","aria-controls","home","aria-selected","true",1,"nav-link","box-link","m-1","p-2"],["src","assets/images/design-yellow.png",1,"wh-35","active-icon"],["src","assets/images/design.png",1,"wh-35","active-black"],[3,"formGroup","ngSubmit"],["id","myTabContent",1,"tab-content"],["id","details","role","tabpanel","aria-labelledby","details-tab",1,"tab-pane","fade","show"],[1,"bg-gray","p-4","mb-4","shadow","border-10","mt-4"],[1,""],[1,"mb-4"],[1,"row","position-relative"],[1,"col-md-11","col-lg-9"],[1,"mb-2"],["for","exampleInputfiled",1,"form-label"],["type","text","formControlName","yourName","id","exampleInputfiled","aria-describedby","textHelp","readonly","",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","designation","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","phoneNo","id","exampleInputfiled","aria-describedby","textHelp","readonly","",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","address","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0"],["type","text","formControlName","email","id","exampleInputfiled","aria-describedby","textHelp","readonly","",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","companyWebsite","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0"],["type","text","formControlName","","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0"],[1,"mb-4","d-flex"],[1,"fa","fa-plus-circle","text-blue"],[1,"mb-0","ps-2","text-blue"],[1,"col-md-1","col-lg-3","ps-0"],[1,"position-absolute","top-0"],["src","assets/images/square-image.png",1,"wh-100"],["data-bs-toggle","modal","data-bs-target","#change-image",1,"text-blue","fs-14","mb-0","text-nowrap","pe-2"],[1,"text-blue","fs-14","mb-0"],["id","social","role","tabpanel","aria-labelledby","social-tab",1,"tab-pane","fade"],["type","text","formControlName","fbProfile","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","instagramProfile","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","linkedInProfile","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],["type","text","formControlName","youtubeChannel","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","bg-gray","rounded-0","border-0","border-bottom","p-0",3,"ngModel","ngModelChange"],[1,"col-md-1","col-lg-3"],["id","template","role","tabpanel","aria-labelledby","template-tab",1,"tab-pane","fade"],[1,"mb-1","fw-semibold"],["src","assets/images/free-template.png",1,"img-fluid"],[1,"mt-2"],["src","assets/images/pro-template.png",1,"img-fluid"],["id","design","role","tabpanel","aria-labelledby","design-tab",1,"tab-pane","fade"],[1,"mb-4","fw-semibold"],[1,"mb-2","grid-2"],["for","exampleInputfiled",1,"form-label","mt-1"],["aria-label","Default select example",1,"form-select"],["selected",""],["value","1"],["value","2"],["value","3"],["for","customRange2",1,"form-label"],["type","range","min","0","max","5","id","customRange2",1,"form-range"],[1,"d-flex"],["aria-hidden","true",1,"m-1","fa","fa-align-left"],["aria-hidden","true",1,"m-1","fa","fa-align-center"],["aria-hidden","true",1,"m-1","fa","fa-align-right"],["aria-hidden","true",1,"m-1","fa","fa-align-justify"],[1,"mt-3"],[1,"d-flex","align-items-center"],[1,"mb-0","p-1"],[2,"width","15px","height","14px",3,"colorPicker","colorPickerChange"],[1,"bg-darkgray","w-25"],[1,"row","p-1"],[1,"col-md-4","rounded-3"],["aria-hidden","true",1,"p-2","fa","fa-square"],["aria-hidden","true",1,"p-2","fa","fa-circle"],["aria-hidden","true",1,"p-2","fa","fa-line"],[1,"row","p-1","mt-4"],[1,"col-md-4"],[1,"bg-darkgray","rounded-3"],[1,"grid-2"],[1,"mb-0","p-2"],[1,"mt-4","text-end"],["type","submit",1,"green-btn","p-2","pe-3","ps-3"],[1,"col-md-6","col-lg-6","pe-3"],[1,"card-box","border-10","p-4","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"col-md-7","col-lg-6","ps-2","pe-0"],["class","text-darkblue",4,"ngIf"],["class","text-darkblue",3,"color",4,"ngIf"],["class","mb-3",3,"color",4,"ngIf"],[1,"d-flex","justify-content-between","pe-5","ps-3"],["aria-hidden","true",1,"fa","fa-phone"],["class"," fs-12",4,"ngIf"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["src","assets/images/scan.png",1,"img-fluid"],[1,"fs-12"],[1,"row"],[1,"col-lg-8","offset-lg-2","text-center"],["id","change-image","data-bs-backdrop","static","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","quotes-box"],[1,"modal-content"],[1,"modal-body"],[1,"text-end"],["data-bs-dismiss","modal","aria-label","Close","aria-hidden","true",1,"fa","fa-times"],[1,"Neon","Neon-theme-dragdropbox"],["name","files[]","id","filer_input2","multiple","multiple","type","file",2,"z-index","999","opacity","0","width","320px","height","200px","position","absolute","right","0px","left","0px","margin-right","auto","margin-left","auto"],[1,"Neon-input-dragDrop"],[1,"Neon-input-inner"],[1,"Neon-input-icon"],[1,"fa","fa-file-image-o"],[1,"Neon-input-text"],[2,"display","inline-block","margin","15px 0"],[1,"Neon-input-choose-btn","blue"],[1,"text-darkblue"],[1,"mb-3"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"main",1)(2,"section")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"ul",7)(9,"li",8)(10,"button",9)(11,"div",10),e._UZ(12,"img",11)(13,"img",12),e.TgZ(14,"p",13),e._uU(15,"Details"),e.qZA()()()(),e.TgZ(16,"li",8)(17,"button",14),e.NdJ("click",function(){return t.onClick()}),e.TgZ(18,"div",10),e._UZ(19,"img",15)(20,"img",16),e.TgZ(21,"p",13),e._uU(22,"Social"),e.qZA()()()(),e.TgZ(23,"li",8)(24,"button",17)(25,"div",10),e._UZ(26,"img",18)(27,"img",19),e.TgZ(28,"p",13),e._uU(29,"Template"),e.qZA()()()(),e.TgZ(30,"li",8)(31,"button",20)(32,"div",10),e._UZ(33,"img",21)(34,"img",22),e.TgZ(35,"p",13),e._uU(36,"Design"),e.qZA()()()(),e._uU(37,"Signature Details "),e.qZA(),e.TgZ(38,"form",23),e.NdJ("ngSubmit",function(){return t.onSubmit(t.signatureDetailsForm.value)}),e.TgZ(39,"div",24)(40,"div",25)(41,"div",26)(42,"div",27)(43,"h4",28),e._uU(44,"Signature Details"),e.qZA()(),e.TgZ(45,"div",29)(46,"div",30)(47,"div",31)(48,"label",32),e._uU(49,"Your Name"),e.qZA(),e.TgZ(50,"input",33),e.NdJ("ngModelChange",function(n){return t.username=n}),e.qZA()(),e.TgZ(51,"div",31)(52,"label",32),e._uU(53,"Designation"),e.qZA(),e.TgZ(54,"input",34),e.NdJ("ngModelChange",function(n){return t.desig=n}),e.qZA()(),e.TgZ(55,"div",31)(56,"label",32),e._uU(57,"Phone"),e.qZA(),e.TgZ(58,"input",35),e.NdJ("ngModelChange",function(n){return t.number=n}),e.qZA()(),e.TgZ(59,"div",28)(60,"label",32),e._uU(61,"Address"),e.qZA(),e._UZ(62,"input",36),e.qZA(),e.TgZ(63,"div",28)(64,"label",32),e._uU(65,"Email"),e.qZA(),e.TgZ(66,"input",37),e.NdJ("ngModelChange",function(n){return t.Email=n}),e.qZA()(),e.TgZ(67,"div",28)(68,"label",32),e._uU(69,"Website"),e.qZA(),e._UZ(70,"input",38),e.qZA(),e.TgZ(71,"div",28)(72,"label",32),e._uU(73,"Quotes"),e.qZA(),e._UZ(74,"input",39),e.qZA(),e.TgZ(75,"div",40)(76,"p",27),e._UZ(77,"i",41),e.qZA(),e.TgZ(78,"p",42),e._uU(79," Add Quotes"),e.qZA()()(),e.TgZ(80,"div",43)(81,"div",44),e._UZ(82,"img",45),e.TgZ(83,"p",46),e._uU(84," Change Photo"),e.qZA(),e.TgZ(85,"p",47),e._uU(86,"Remove"),e.qZA()()()()()(),e.TgZ(87,"div",48)(88,"div",26)(89,"div",27)(90,"h4",28),e._uU(91,"Add Social Links"),e.qZA()(),e.TgZ(92,"div",29)(93,"div",30)(94,"div",31)(95,"label",32),e._uU(96,"Facebook "),e.qZA(),e.TgZ(97,"input",49),e.NdJ("ngModelChange",function(n){return t.faceB=n}),e.qZA()(),e.TgZ(98,"div",31)(99,"label",32),e._uU(100,"Instagram"),e.qZA(),e.TgZ(101,"input",50),e.NdJ("ngModelChange",function(n){return t.insta=n}),e.qZA()(),e.TgZ(102,"div",31)(103,"label",32),e._uU(104,"LinkedIn"),e.qZA(),e.TgZ(105,"input",51),e.NdJ("ngModelChange",function(n){return t.Linkedin=n}),e.qZA()(),e.TgZ(106,"div",28)(107,"label",32),e._uU(108,"Youtube"),e.qZA(),e.TgZ(109,"input",52),e.NdJ("ngModelChange",function(n){return t.uTube=n}),e.qZA()(),e.TgZ(110,"div",40)(111,"p",27),e._UZ(112,"i",41),e.qZA(),e.TgZ(113,"p",42),e._uU(114," Add New Field"),e.qZA()()(),e._UZ(115,"div",53),e.qZA()()(),e.TgZ(116,"div",54)(117,"div",26)(118,"div",27)(119,"h4",28),e._uU(120,"Templates"),e.qZA()(),e.TgZ(121,"div",27)(122,"p",55),e._uU(123,"Free"),e.qZA(),e._UZ(124,"img",56),e.qZA(),e._UZ(125,"hr",27),e.TgZ(126,"div",57)(127,"p",55),e._uU(128,"Pro"),e.qZA(),e._UZ(129,"img",58),e.qZA()()(),e.TgZ(130,"div",59)(131,"div",26)(132,"div",27)(133,"h4",28),e._uU(134,"Font Styles & Colors"),e.qZA()(),e.TgZ(135,"div",27)(136,"h6",60),e._uU(137,"Font Styles"),e.qZA(),e.TgZ(138,"form",29)(139,"div",30)(140,"div",61)(141,"label",62),e._uU(142,"Font Family : "),e.qZA(),e.TgZ(143,"select",63)(144,"option",64),e._uU(145,"Arial"),e.qZA(),e.TgZ(146,"option",65),e._uU(147,"One"),e.qZA(),e.TgZ(148,"option",66),e._uU(149,"Two"),e.qZA(),e.TgZ(150,"option",67),e._uU(151,"Three"),e.qZA()()(),e.TgZ(152,"div",61)(153,"label",68),e._uU(154,"Size :"),e.qZA(),e._UZ(155,"input",69),e.qZA(),e.TgZ(156,"div",61)(157,"label",68),e._uU(158,"Line Height :"),e.qZA(),e._UZ(159,"input",69),e.qZA(),e.TgZ(160,"div",61)(161,"div"),e._uU(162,"Align :"),e.qZA(),e.TgZ(163,"div",70),e._UZ(164,"i",71)(165,"i",72)(166,"i",73)(167,"i",74),e.qZA()()(),e._UZ(168,"div",53),e.qZA()(),e.TgZ(169,"div",75)(170,"h6",60),e._uU(171,"Color"),e.qZA(),e.TgZ(172,"div",61)(173,"div",27)(174,"div",76)(175,"p",77),e._uU(176,"First Name:"),e.qZA(),e.TgZ(177,"input",78),e.NdJ("colorPickerChange",function(n){return t.color18=n}),e.qZA()(),e.TgZ(178,"div",76)(179,"p",77),e._uU(180,"Designation :"),e.qZA(),e.TgZ(181,"input",78),e.NdJ("colorPickerChange",function(n){return t.color4=n}),e.qZA()(),e.TgZ(182,"div",76)(183,"p",77),e._uU(184,"Contact Details :"),e.qZA(),e.TgZ(185,"input",78),e.NdJ("colorPickerChange",function(n){return t.color2=n}),e.qZA()()(),e.TgZ(186,"div",27)(187,"div",76)(188,"p",77),e._uU(189,"Last Name:"),e.qZA(),e.TgZ(190,"input",78),e.NdJ("colorPickerChange",function(n){return t.color3=n}),e.qZA()()()()(),e.TgZ(191,"div",27)(192,"h4",28),e._uU(193,"Shapes"),e.qZA()(),e.TgZ(194,"div",79)(195,"div",80)(196,"div",81),e._UZ(197,"i",82),e.qZA(),e.TgZ(198,"div",81),e._UZ(199,"i",83),e.qZA(),e.TgZ(200,"div",81),e._UZ(201,"i",84),e.qZA()()(),e.TgZ(202,"div",85)(203,"div",86)(204,"div",87)(205,"div",88)(206,"p",89),e._uU(207,"Width:"),e.qZA()()()(),e.TgZ(208,"div",86)(209,"div",87)(210,"div",88)(211,"p",89),e._uU(212,"Height:"),e.qZA()()()(),e.TgZ(213,"div",86)(214,"div",87)(215,"div",88)(216,"p",89),e._uU(217,"Color:"),e.qZA()()()()()()()(),e.TgZ(218,"div",90)(219,"button",91),e._uU(220,"Create Signature"),e.qZA()()()(),e.TgZ(221,"div",92)(222,"div",93)(223,"div",94)(224,"div",95),e._UZ(225,"img",96),e.qZA(),e.TgZ(226,"div",97)(227,"h4",27),e.YNc(228,b,2,0,"span",98),e.qZA(),e.TgZ(229,"h4",27),e.YNc(230,f,2,3,"span",99),e.qZA(),e.YNc(231,Z,2,2,"h6",100),e.YNc(232,h,2,3,"h6",100),e.TgZ(233,"div",101),e._UZ(234,"i",102),e.YNc(235,_,2,0,"p",103),e.YNc(236,T,2,1,"p",103),e.qZA(),e.TgZ(237,"div",101),e._UZ(238,"i",102),e.YNc(239,v,2,0,"p",103),e.YNc(240,C,2,1,"p",103),e.qZA(),e.TgZ(241,"div",101),e._UZ(242,"i",102),e.YNc(243,x,2,0,"p",103),e.YNc(244,y,2,1,"p",103),e.qZA()(),e.TgZ(245,"div",104),e._UZ(246,"img",105),e.TgZ(247,"p",106),e._uU(248,"Scan/Click QR"),e.qZA()()(),e.TgZ(249,"div",107)(250,"div",108)(251,"p"),e._uU(252,"\u201cBusiness opportunities are like buses, there\u2019s always another one coming.\u201d "),e.qZA(),e.TgZ(253,"p"),e._uU(254),e.qZA(),e.TgZ(255,"h6"),e._uU(256," \u2013 Richard Branson"),e.qZA()()()()()()()()(),e.TgZ(257,"div",109)(258,"div",110)(259,"div",111)(260,"div",112)(261,"div",113),e._UZ(262,"i",114),e.qZA(),e.TgZ(263,"div",115),e._UZ(264,"input",116),e.TgZ(265,"div",117)(266,"div",118)(267,"div",119),e._UZ(268,"i",120),e.qZA(),e.TgZ(269,"div",121)(270,"h3"),e._uU(271,"Drag&Drop files here"),e.qZA(),e.TgZ(272,"span",122),e._uU(273,"or"),e.qZA()(),e.TgZ(274,"a",123),e._uU(275,"Browse Files"),e.qZA()()()()()()()()()()()),2&o&&(e.xp6(38),e.Q6J("formGroup",t.signatureDetailsForm),e.xp6(12),e.Q6J("ngModel",t.username),e.xp6(4),e.Q6J("ngModel",t.desig),e.xp6(4),e.Q6J("ngModel",t.number),e.xp6(8),e.Q6J("ngModel",t.Email),e.xp6(31),e.Q6J("ngModel",t.faceB),e.xp6(4),e.Q6J("ngModel",t.insta),e.xp6(4),e.Q6J("ngModel",t.Linkedin),e.xp6(4),e.Q6J("ngModel",t.uTube),e.xp6(68),e.Udp("background",t.color18),e.Q6J("colorPicker",t.color18),e.xp6(4),e.Udp("background",t.color4),e.Q6J("colorPicker",t.color4),e.xp6(4),e.Udp("background",t.color2),e.Q6J("colorPicker",t.color2),e.xp6(5),e.Udp("background",t.color3),e.Q6J("colorPicker",t.color3),e.xp6(38),e.Q6J("ngIf",!t.username),e.xp6(2),e.Q6J("ngIf",t.username),e.xp6(1),e.Q6J("ngIf",!t.desig),e.xp6(1),e.Q6J("ngIf",t.desig),e.xp6(3),e.Q6J("ngIf",!t.number),e.xp6(1),e.Q6J("ngIf",t.number),e.xp6(3),e.Q6J("ngIf",!t.Email),e.xp6(1),e.Q6J("ngIf",t.Email),e.xp6(3),e.Q6J("ngIf",!t.compWebsite),e.xp6(1),e.Q6J("ngIf",t.compWebsite),e.xp6(10),e.Oqu(null==t.details||null==t.details.quotesId?null:t.details.quotesId.quotesName))},dependencies:[p.O5,r._Y,r.YN,r.Kr,r.Fj,r.JJ,r.JL,r.sg,r.u,r.F,m.Kk],styles:[".Neon[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14px;color:#494949;position:relative}.Neon[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.Neon-input-dragDrop[_ngcontent-%COMP%]{display:block;width:343px;margin:0 auto 25px;padding:25px;color:#8d9499;color:#97a1a8;background:#fff;border:2px dashed #C8CBCE;text-align:center;transition:box-shadow .3s,border-color .3s}.Neon-input-dragDrop[_ngcontent-%COMP%]   .Neon-input-icon[_ngcontent-%COMP%]{font-size:48px;margin-top:-10px;transition:all .3s ease}.Neon-input-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px}.Neon-input-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.Neon-input-choose-btn.blue[_ngcontent-%COMP%]{color:#008bff;border:1px solid #008BFF}.Neon-input-choose-btn[_ngcontent-%COMP%]{display:inline-block;padding:8px 14px;outline:none;cursor:pointer;text-decoration:none;text-align:center;white-space:nowrap;font-size:12px;font-weight:700;color:#8d9496;border-radius:3px;border:1px solid #c6c6c6;vertical-align:middle;background-color:#fff;box-shadow:0 1px 5px #0000000d;transition:all .2s}"]}),i})()}];let q=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(A),g.Bz]}),i})(),U=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,q,r.UX,r.u5,m.e4]}),i})()}}]);