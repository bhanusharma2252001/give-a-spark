"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[628],{9628:(b,d,r)=>{r.r(d),r.d(d,{FlyerModule:()=>u});var m=r(6895),s=r(4173),l=r(433),e=r(8274),p=r(5027);const c=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-flyer"]],decls:1,vars:0,template:function(n,o){1&n&&e._UZ(0,"router-outlet")},dependencies:[s.lC]}),t})(),children:[{path:"edit-flyer",component:(()=>{class t{constructor(){this.quillConfig={toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]}},this.onContentChanged=n=>{}}ngOnInit(){this.form=new l.cw({text:new l.NI("<p><strong>Hello</strong> World!</p>")})}logValue(){let n=document.querySelector(".ql-editor");this.html=n?.innerHTML}logForm(){setTimeout(()=>{console.log(this.form),console.log(`DIRTY: ${this.form.dirty}`),console.log(`TOUCHED: ${this.form.touched}`)})}blur(){console.log("blur")}onSelectionChanged(){console.log("onSelectionChanged")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-flyer"]],decls:52,vars:4,consts:[[1,"col-md-11","col-lg-11"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"row"],[1,"col-md-3","col-lg-3"],[1,"bg-dark"],[1,"mt-3","pt-4","pb-3","p-2"],["type","email","id","","aria-describedby","","placeholder","Find Templates...",1,"form-control","bg-semi-dark","rounded-pill","border-0","box-shadow","text-white-50","fs-14","p-2"],[1,"border-white","mt-3","pb-3","text-center"],[1,"text-yellow"],[1,"mt-4"],["src","assets/images/flyer-1.png",1,"w-250"],["src","assets/images/flyer-2.png",1,"w-250"],["src","assets/images/flyer-3.png",1,"w-250"],[1,"col-md-9","col-lg-9"],[1,"row","mb-3"],[1,"col-md-2"],[1,"blue-btn","text-white","pe-2","p-2","ps-2"],[1,"bg-yellow","rounded-pill","border-0","p-2","pe-3","ps-3","text-white"],[3,"formGroup"],["placeholder","Enter Text","formControlName","text",2,"border","none",3,"modules","ngModel","onBlur","ngModelChange","onSelectionChanged"],[1,"",2,"background-image","url(assets/images/flyer-1.png)","background-position","contain","background-repeat","no-repeat"],[2,"width","1050px","height","600px"],[2,"width","50%"],["src","","alt","abc",2,"width","100px","height","100px"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form"),e._UZ(8,"input",7),e.qZA()(),e.TgZ(9,"div",8)(10,"h6",9),e._uU(11,"Templates"),e.qZA(),e.TgZ(12,"div",10),e._UZ(13,"img",11),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"img",12),e.qZA(),e.TgZ(16,"div",10),e._UZ(17,"img",13),e.qZA()()()(),e.TgZ(18,"div",14)(19,"div",15)(20,"div",16)(21,"button",17),e._uU(22,"Create New"),e.qZA()(),e.TgZ(23,"div",16)(24,"button",18),e._uU(25,"Import"),e.qZA()(),e.TgZ(26,"div",19)(27,"quill-editor",20),e.NdJ("onBlur",function(){return o.blur()})("ngModelChange",function(Z){return o.html=Z})("onSelectionChanged",function(){return o.onSelectionChanged()}),e.qZA()()(),e.TgZ(28,"form")(29,"div",21)(30,"table",22)(31,"tbody")(32,"tr")(33,"td",23)(34,"table")(35,"tr")(36,"td"),e._UZ(37,"img",24),e.qZA()(),e.TgZ(38,"tr")(39,"td")(40,"h4"),e._uU(41,"FUN EXERCISE"),e.qZA()()(),e.TgZ(42,"tr")(43,"td")(44,"h6"),e._uU(45),e.qZA()()(),e.TgZ(46,"tr")(47,"td")(48,"p"),e._uU(49,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."),e.qZA()()(),e._UZ(50,"tr"),e.qZA()(),e._UZ(51,"td",23),e.qZA()()()()()()()()()()),2&n&&(e.xp6(26),e.Q6J("formGroup",o.form),e.xp6(1),e.Q6J("modules",o.quillConfig)("ngModel",o.html),e.xp6(18),e.Oqu(o.html))},dependencies:[l._Y,l.JJ,l.JL,l.F,l.sg,l.u,p.g6]}),t})()},{path:"saved-flyer",component:(()=>{class t{constructor(){this.entities=[{id:1,name:"Netanel Basal",isAdmin:!0},{id:2,name:"John Due",isAdmin:!1}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-saved-flyer"]],decls:0,vars:0,template:function(n,o){}}),t})()},{path:"template-dashboard",component:(()=>{class t{constructor(n){this.router=n}ngOnInit(){}navigate(){this.router.navigate(["./basic-template"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-template-dashboard"]],decls:127,vars:0,consts:[[1,"col-md-11","col-lg-11"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],["id","pills-tab","role","tablist",1,"nav","nav-pills","justify-content-around","mb-3"],["role","presentation",1,"nav-item"],["id","pills-Free-tab","data-bs-toggle","pill","data-bs-target","#pills-Free","type","button","role","tab","aria-controls","pills-Free","aria-selected","true",1,"nav-link","active"],["id","pills-Pro-tab","data-bs-toggle","pill","data-bs-target","#pills-Pro","type","button","role","tab","aria-controls","pills-Pro","aria-selected","false",1,"nav-link"],["id","pills-Pro-Plus-tab","data-bs-toggle","pill","data-bs-target","#pills-Pro-Plus","type","button","role","tab","aria-controls","pills-Pro-Plus","aria-selected","false",1,"nav-link"],["id","pills-tabContent",1,"tab-content"],["id","pills-Free","role","tabpanel","aria-labelledby","pills-Free-tab",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-md-6","col-lg-6"],[1,""],[1,"bg-free-1","border-10","p-1","pe-2","ps-2"],[1,"row","m-0"],["alt","template-logo","src","assets/images/template logo.png"],[1,"col-md-6","col-lg-6","text-end"],["alt","template-logo","src","assets/images/unsave-icon.png"],[1,"col-md-4","col-lg-5","self-align-center"],[1,"col-md-6","col-lg-6","ps-2","pe-0"],[1,"mb-0"],[1,"text-darkblue"],[1,"mb-1"],[1,"d-flex","pe-5","ps-3","p-1"],["aria-hidden","true",1,"fa","fa-phone","pe-3"],[1,"fs-12","mb-0"],[1,"fas","fa-globe","pe-3"],[1,"fs-12","mailto:mb-0"],[1,"fas","fa-map-marker","pe-3"],[1,"fs-12","p-2","mb-1"],[1,"col-md-2","col-lg-1","pe-0","ps-0","pt-5"],["alt","qr","src","assets/images/scan.png",1,"wh-35"],["alt","logo","src","assets/images/logo.png",1,"wh-35","pt-2"],[1,"bg-wheat","text-center"],[1,"fs-12"],[1,"mt-4","text-center"],["type","submit",1,"btn","green-btn",3,"click"],[1,"bg-free-2","border-10","p-1","pe-2","ps-2"],["alt","template-logo","src","assets/images/unsave-icon-ylw.png"],[1,"col-md-4","col-lg-4","self-align-center"],[1,"col-md-6","col-lg-7","ps-2","pe-0"],[1,"d-flex","align-items-center","pe-5","ps-3"],["aria-hidden","true",1,"fa","fa-phone","bg-black","text-white","rounded-circle","p-2","fs-12","me-3","m-1"],[1,"m-1","mb-0","fs-12"],[1,"d-flex","pe-5","ps-3"],[1,"fas","fa-globe","bg-black","text-white","rounded-circle","p-2","fs-12","me-3","m-1"],[1,"fas","fa-map-marker","bg-black","text-white","rounded-circle","p-2","fs-12","me-3","m-1"],[1,"fs-12","p-2","mb-0"],["id","pills-Pro","role","tabpanel","aria-labelledby","pills-Pro-tab",1,"tab-pane","fade"],["alt","","src","assets/images/email-signature-pro-1.png",1,"w-500"],["id","pills-Pro-Plus","role","tabpanel","aria-labelledby","pills-Pro-Plus-tab",1,"tab-pane","fade"],["alt","","src","assets/images/pro-pro-2.png",1,"w-500"],["alt","","src","assets/images/pro-pro-3.png",1,"w-500"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"button",5),e._uU(6,"Free"),e.qZA()(),e.TgZ(7,"li",4)(8,"button",6),e._uU(9,"Pro"),e.qZA()(),e.TgZ(10,"li",4)(11,"button",7),e._uU(12,"Pro"),e.qZA()()(),e.TgZ(13,"div",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",11),e._UZ(21,"img",15),e.qZA(),e.TgZ(22,"div",16),e._UZ(23,"img",17),e.qZA(),e._UZ(24,"div",18),e.TgZ(25,"div",19)(26,"h4",20)(27,"span",21),e._uU(28,"John"),e.qZA(),e._uU(29," Doe"),e.qZA(),e.TgZ(30,"h6",22),e._uU(31,"Marketing Expert"),e.qZA(),e.TgZ(32,"div",23),e._UZ(33,"i",24),e.TgZ(34,"p",25),e._uU(35,"+1129457850 | +1129457850 "),e.qZA()(),e.TgZ(36,"div",23),e._UZ(37,"i",26),e.TgZ(38,"p",27),e._uU(39,"shreybhardwaj@gmail.com "),e.qZA()(),e.TgZ(40,"div",23),e._UZ(41,"i",28),e.TgZ(42,"p",25),e._uU(43,"https://www.perfectiongeeks.com "),e.qZA()(),e.TgZ(44,"div")(45,"p",29),e._uU(46,"\u201cBusiness opportunities are like buses, there\u2019s always another one coming.\u201d \u2013 Richard Branson "),e.qZA()()(),e.TgZ(47,"div",30),e._UZ(48,"img",31)(49,"img",32),e.qZA()(),e._UZ(50,"div",10),e.qZA()(),e.TgZ(51,"div",33)(52,"p",34),e._uU(53," \u201cCONFIDENTIALITY NOTICE: This e-mail message, including any attachments, is for the sole use of the intended recipient(s) and may contain confidential and privileged information. Any unauthorised review, use, disclosure, or distribution is prohibited. If you are not the intended recipient, please contact the sender by reply e-mail and destroy all copies of the original message.\u201c "),e.qZA()(),e.TgZ(54,"div",35)(55,"button",36),e.NdJ("click",function(){return o.navigate()}),e._uU(56,"Edit Signature"),e.qZA()()(),e.TgZ(57,"div",11)(58,"div",12)(59,"div",37)(60,"div",14)(61,"div",11),e._UZ(62,"img",15),e.qZA(),e.TgZ(63,"div",16),e._UZ(64,"img",38),e.qZA(),e._UZ(65,"div",39),e.TgZ(66,"div",40)(67,"h4",20)(68,"span",21),e._uU(69,"John"),e.qZA(),e._uU(70," Doe"),e.qZA(),e.TgZ(71,"h6",22),e._uU(72,"Marketing Expert"),e.qZA(),e.TgZ(73,"div",41),e._UZ(74,"i",42),e.TgZ(75,"p",43),e._uU(76,"+1129457850 | +1129457850 "),e.qZA()(),e.TgZ(77,"div",44),e._UZ(78,"i",45),e.TgZ(79,"p",43),e._uU(80," mailto:shreybhardwaj@gmail.com "),e.qZA()(),e.TgZ(81,"div",44),e._UZ(82,"i",46),e.TgZ(83,"p",43),e._uU(84," https://www.perfectiongeeks.com"),e.qZA()(),e.TgZ(85,"div",12)(86,"p",47),e._uU(87,"\u201cBusiness opportunities are like buses, there\u2019s always another one coming.\u201d\u2013 Richard Branson "),e.qZA()()(),e.TgZ(88,"div",30),e._UZ(89,"img",31)(90,"img",32),e.qZA()(),e._UZ(91,"div",10),e.qZA()(),e.TgZ(92,"div",33)(93,"p",34),e._uU(94," \u201cCONFIDENTIALITY NOTICE: This e-mail message, including any attachments, is for the sole use of the intended recipient(s) and may contain confidential and privileged information. Any unauthorised review, use, disclosure, or distribution is prohibited. If you are not the intended recipient, please contact the sender by reply e-mail and destroy all copies of the original message.\u201c "),e.qZA()(),e.TgZ(95,"div",35)(96,"button",36),e.NdJ("click",function(){return o.navigate()}),e._uU(97,"Edit Signature"),e.qZA()()()()(),e.TgZ(98,"div",48)(99,"div",10)(100,"div",11)(101,"div",12),e._UZ(102,"img",49),e.qZA(),e.TgZ(103,"div",35)(104,"button",36),e.NdJ("click",function(){return o.navigate()}),e._uU(105,"Edit Signature"),e.qZA()()(),e.TgZ(106,"div",11)(107,"div",12)(108,"div",37),e._UZ(109,"img",49),e.qZA()(),e.TgZ(110,"div",35)(111,"button",36),e.NdJ("click",function(){return o.navigate()}),e._uU(112,"Edit Signature"),e.qZA()()()()(),e.TgZ(113,"div",50)(114,"div",10)(115,"div",11)(116,"div",12),e._UZ(117,"img",51),e.qZA(),e.TgZ(118,"div",35)(119,"button",36),e.NdJ("click",function(){return o.navigate()}),e._uU(120,"Edit Signature"),e.qZA()()(),e.TgZ(121,"div",11)(122,"div",12),e._UZ(123,"img",52),e.qZA(),e.TgZ(124,"div",35)(125,"button",36),e.NdJ("click",function(){return o.navigate()}),e._uU(126,"Edit Signature"),e.qZA()()()()()()()()())}}),t})()}]}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(c),s.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,g,l.u5,l.UX,p.fi.forRoot()]}),t})()}}]);