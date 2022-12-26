"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[675],{9675:(A,a,r)=>{r.r(a),r.d(a,{HomepageModule:()=>v});var c=r(6895),n=r(6773),g=r(727),e=r(8256),Z=r(7177),d=r(9009);function m(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"div")(2,"p",48),e._uU(3),e.qZA()(),e.BQk()),2&i){const t=s.$implicit;e.xp6(3),e.hij('"',t,'"')}}const p=[{path:"",component:(()=>{class i{constructor(t,o,l,T){this.router=t,this.api=o,this._ngZone=l,this.socialAuthService=T,this.quotesList=[],this.subscription$=new g.w0,this.profileData=[]}ngOnInit(){this.getQuotesListforProfile()}getQuotes(){let t=0;this.quotesData=this.quotesList[t]?.quotesName,this.source=setInterval(()=>{this.profileData=[],this.profileData.push(this.quotesData),this.quotesData=this.quotesList[t+1].quotesName,t++,t==this.quotesList.length&&clearInterval(this.source)},8e3)}logout(){this.socialAuthService.signOut(),sessionStorage.clear(),this.api.isLoggedIn=!1,this._ngZone.run(()=>{this.router.navigate([""])})}ngOnDestroy(){this.source&&clearInterval(this.source)}getQuotesListforProfile(){this.api.getAllQuotesList().subscribe(t=>{this.quotesList=t.result,this.getQuotes()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.F0),e.Y36(Z.O),e.Y36(e.R0b),e.Y36(d.xE))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-homepage"]],decls:324,vars:2,consts:[[1,"container-fluid"],[1,"row","align-items-center","position-relative"],[1,"mouse_move"],["id","img1","src","assets/images/logo-an.png","value","5",1,"mouse"],["id","img2","src","assets/images/btn-an.png","value","-5",1,"mouse"],[1,"col-md-3","col-lg-3","align-self-center","logo-bg"],["href","index.html",1,"navbar-brand"],["src","assets/images/logo.png",1,"img-fl"],[1,"col-md-8","col-lg-8","position-relative"],[1,"nav-bg"],["src","assets/images/Vector 1.png"],[1,"navbar","navbar-expand-lg","navbar-light","mt-4","ps-5"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["aria-current","page","href","#",1,"nav-link"],[1,"nav-item","dropdown"],["href","#","id","navbarDropdown","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["aria-labelledby","navbarDropdown",1,"dropdown-menu"],["href","#",1,"dropdown-item"],["href","#","tabindex","-1","aria-disabled","true",1,"nav-link"],["href","#",1,"nav-link"],[1,"col-md-1","col-lg-1","p-0"],[1,"d-flex"],["type","submit",1,"btn","pink-btn"],[1,"section-padding"],[1,"container"],[1,"text-center"],[1,"row","m-0","p-0","mt-5","pt-5"],[1,"col-md-4","col-lg-6","position-relative"],[1,"circle-width","bg-darkgray","rounded-circle"],["aria-label","Hi! I'm a developer",1,"p-1","position-absolute","top-50","start-50","translate-middle"],[1,"typewriter"],["src","assets/images/gif-circle.gif",1,"img-edit"],[1,"col-md-6","col-lg-6"],[1,"card-box","bg-darkgray","p-4","pe-2","ps-2"],[1,"row","m-0"],[1,"col-md-3","col-lg-3","self-align-center"],["src","assets/images/profile-image.png",1,"wh-150"],[1,"col-md-7","col-lg-6","ps-2","pe-0"],[1,""],[1,"text-darkblue"],[1,"mb-3"],[1,"d-flex","justify-content-between","pe-5","ps-3"],["aria-hidden","true",1,"fa","fa-phone"],[1,"fs-12"],[1,"col-md-2","col-lg-3","pe-0","ps-0"],["src","assets/images/scan.png",1,"img-fluid"],[1,"row"],[1,"col-lg-8","offset-lg-2","text-center"],[4,"ngFor","ngForOf"],[1,"bg-gray","section-padding"],[1,"col-lg-8","offset-lg-2"],["data-wow-duration","1s","data-wow-delay","0.5s",1,"section-heading","text-center",2,"visibility","visible","-webkit-animation-duration","1s","-moz-animation-duration","1s","animation-duration","1s","-webkit-animation-delay","0.5s","-moz-animation-delay","0.5s","animation-delay","0.5s"],["src","assets/images/heading-line-dec.png","alt","",1,"line"],[1,"col-lg-12","position-relative"],[1,"outside-circle","position-absolute","top-50","start-50","translate-middle"],["src","assets/images/outside-circle.png"],["id","wrapper"],["id","circle"],[1,"prems-fading-circle"],[1,"prems-circle1","prems-circle"],[1,"circle-6-1"],[1,"prems-circle2","prems-circle"],[1,"prems-circle3","prems-circle"],[1,"prems-circle4","prems-circle"],[1,"prems-circle5","prems-circle"],[1,"prems-circle6","prems-circle"],[1,"circle-1-2"],[1,"prems-circle7","prems-circle"],[1,"prems-circle8","prems-circle"],[1,"prems-circle9","prems-circle"],[1,"prems-circle10","prems-circle"],[1,"prems-circle11","prems-circle"],[1,"prems-circle12","prems-circle"],[1,"circle-2-3"],[1,"prems-circle13","prems-circle"],[1,"prems-circle14","prems-circle"],[1,"prems-circle15","prems-circle"],[1,"prems-circle16","prems-circle"],[1,"prems-circle17","prems-circle"],[1,"prems-circle18","prems-circle"],[1,"circle-3-4"],[1,"prems-circle19","prems-circle"],[1,"prems-circle20","prems-circle"],[1,"prems-circle21","prems-circle"],[1,"prems-circle22","prems-circle"],[1,"prems-circle23","prems-circle"],[1,"prems-circle24","prems-circle"],[1,"prems-circle25","prems-circle"],[1,"prems-circle26","prems-circle"],[1,"circle-4-5"],[1,"prems-circle27","prems-circle"],[1,"prems-circle28","prems-circle"],[1,"prems-circle29","prems-circle"],[1,"prems-circle30","prems-circle"],[1,"prems-circle31","prems-circle"],[1,"prems-circle32","prems-circle"],[1,"circle-5-6"],[1,"prems-circle33","prems-circle"],[1,"prems-circle34","prems-circle"],[1,"prems-circle35","prems-circle"],[1,"prems-circle36","prems-circle"],[1,"prems-circle37","prems-circle"],[1,"prems-circle38","prems-circle"],[1,"prems-circle39","prems-circle"],[1,"prems-circle40","prems-circle"],[1,"prems-circle41","prems-circle"],["id","inner"],["src","assets/images/center-circle.png"],[1,"containr","d-flex","align-items-center","container1"],["src","assets/images/door.png",1,"img-fluid"],[1,"fs-14"],[1,"containr","d-flex","align-items-center","container2"],["src","assets/images/emoji.png",1,"w-25","h-25"],[1,"containr","d-flex","align-items-center","container3"],["src","assets/images/man.png",1,"w-25","h-25"],[1,"containr","d-flex","align-items-center","container4"],["src","assets/images/dollor.png",1,"w-25","h-25"],[1,"containr","d-flex","align-items-center","container5"],["src","assets/images/group.png",1,"w-25","h-25"],[1,"containr","d-flex","align-items-center","container6"],["src","assets/images/six.png",1,"w-25","h-25"],[1,"section-padding","text-center"],[1,"d-flex","justify-content-around"],[1,"white-btn","p-2","pe-4","ps-4"],[1,"d-flex","justify-content-around","mt-4"],["id","carouselExampleSlidesOnly","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner","row","position-relative"],[1,"col-md-4","col-lg-4"],["data-bs-interval","500",1,"carousel-item","active","testimonial-first"],["src","assets/images/templates 1.png",1,"testimonial-first"],[1,"carousel-item","testimonial-center"],["src","assets/images/templates 2.png",1,"position-absolute","top-46","start-50","translate-middle"],[1,"carousel-item","testimonial-last"],["src","assets/images/templates3.png",1,"testimonial-last"],[1,"container","mt-5"],[1,"row","align-items-center"],[1,"col-md-6","col-lg-8"],[1,"bg-darkblue","rounded-5","p-2","pe-4","ps-4"],[1,"col-md-6","col-lg-4"],["src","assets/images/girl-animation.gif",1,"img-fluid"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"header")(2,"div",1)(3,"div",2),e._UZ(4,"img",3)(5,"img",4),e.qZA(),e.TgZ(6,"div",5)(7,"a",6),e._UZ(8,"img",7),e.qZA()(),e.TgZ(9,"div",8)(10,"div",9),e._UZ(11,"img",10),e.qZA(),e.TgZ(12,"nav",11)(13,"div",0)(14,"button",12),e._UZ(15,"span",13),e.qZA(),e.TgZ(16,"div",14)(17,"ul",15)(18,"li",16)(19,"a",17),e._uU(20,"Home"),e.qZA()(),e.TgZ(21,"li",16)(22,"a",18),e._uU(23,"What We Do"),e.qZA()(),e.TgZ(24,"li",19)(25,"a",20),e._uU(26," About Us "),e.qZA(),e.TgZ(27,"ul",21)(28,"li")(29,"a",22),e._uU(30,"Our Mission"),e.qZA()(),e.TgZ(31,"li")(32,"a",22),e._uU(33,"Our Vision"),e.qZA()()()(),e.TgZ(34,"li",16)(35,"a",23),e._uU(36,"Product"),e.qZA()(),e.TgZ(37,"li",16)(38,"a",24),e._uU(39," Quotes "),e.qZA()(),e.TgZ(40,"li",16)(41,"a",24),e._uU(42," Stories "),e.qZA()(),e.TgZ(43,"li",16)(44,"a",24),e._uU(45," Contact US "),e.qZA()(),e._UZ(46,"li"),e.qZA()()()()(),e.TgZ(47,"div",25)(48,"form",26)(49,"button",27),e._uU(50,"Search"),e.qZA()()()()()(),e.TgZ(51,"div",28)(52,"div",29)(53,"div",30)(54,"h3"),e._uU(55,' "Inspire Someone Today...... Including Yourself"'),e.qZA()(),e.TgZ(56,"div",31)(57,"div",32)(58,"div",33)(59,"p",34),e._uU(60,' " \xa0'),e.TgZ(61,"span",35),e._uU(62),e.qZA(),e._uU(63,'" '),e.qZA(),e._UZ(64,"img",36),e.qZA()(),e.TgZ(65,"div",37)(66,"div",38)(67,"div",39)(68,"div",40),e._UZ(69,"img",41),e.qZA(),e.TgZ(70,"div",42)(71,"h4",43)(72,"span",44),e._uU(73,"John"),e.qZA(),e._uU(74," Doe"),e.qZA(),e.TgZ(75,"h6",45),e._uU(76,"Marketing Expert"),e.qZA(),e.TgZ(77,"div",46),e._UZ(78,"i",47),e.TgZ(79,"p",48),e._uU(80,"+1129457850 | +1129457850 "),e.qZA()(),e.TgZ(81,"div",46),e._UZ(82,"i",47),e.TgZ(83,"p",48),e._uU(84,"shreybhardwaj@gmail.com "),e.qZA()(),e.TgZ(85,"div",46),e._UZ(86,"i",47),e.TgZ(87,"p",48),e._uU(88,"www.perfectiongeeks.com"),e.qZA()()(),e.TgZ(89,"div",49),e._UZ(90,"img",50),e.TgZ(91,"p",48),e._uU(92,"Scan/Click QR"),e.qZA()()(),e.TgZ(93,"div",51)(94,"div",52),e.YNc(95,m,4,1,"ng-container",53),e.qZA()()()()()()(),e.TgZ(96,"div",54)(97,"div",29)(98,"div",51)(99,"div",55)(100,"div",56),e._UZ(101,"img",57),e.TgZ(102,"h4"),e._uU(103,"When You Belong To"),e.TgZ(104,"em"),e._uU(105," Our Give A Spark"),e.qZA(),e._uU(106," Community. "),e.qZA()()(),e.TgZ(107,"div",58)(108,"div",59),e._UZ(109,"img",60),e.qZA(),e.TgZ(110,"div",61)(111,"div",62)(112,"div",63)(113,"div",64),e._UZ(114,"div",65),e.qZA(),e.TgZ(115,"div",66),e._UZ(116,"div",65),e.qZA(),e.TgZ(117,"div",67),e._UZ(118,"div",65),e.qZA(),e.TgZ(119,"div",68),e._UZ(120,"div",65),e.qZA(),e.TgZ(121,"div",69),e._UZ(122,"div"),e.qZA(),e.TgZ(123,"div",70),e._UZ(124,"div",71),e.qZA(),e.TgZ(125,"div",72),e._UZ(126,"div",71),e.qZA(),e.TgZ(127,"div",73),e._UZ(128,"div",71),e.qZA(),e.TgZ(129,"div",74),e._UZ(130,"div",71),e.qZA(),e.TgZ(131,"div",75),e._UZ(132,"div",71),e.qZA(),e.TgZ(133,"div",76),e._UZ(134,"div"),e.qZA(),e.TgZ(135,"div",77),e._UZ(136,"div",78),e.qZA(),e.TgZ(137,"div",79),e._UZ(138,"div",78),e.qZA(),e.TgZ(139,"div",80),e._UZ(140,"div",78),e.qZA(),e.TgZ(141,"div",81),e._UZ(142,"div",78),e.qZA(),e.TgZ(143,"div",82),e._UZ(144,"div",78),e.qZA(),e.TgZ(145,"div",83),e._UZ(146,"div"),e.qZA(),e.TgZ(147,"div",84),e._UZ(148,"div",85),e.qZA(),e.TgZ(149,"div",86),e._UZ(150,"div",85),e.qZA(),e.TgZ(151,"div",87),e._UZ(152,"div",85),e.qZA(),e.TgZ(153,"div",88),e._UZ(154,"div",85),e.qZA(),e.TgZ(155,"div",89),e._UZ(156,"div",85),e.qZA(),e.TgZ(157,"div",90),e._UZ(158,"div",85),e.qZA(),e.TgZ(159,"div",91),e._UZ(160,"div",85),e.qZA(),e.TgZ(161,"div",92),e._UZ(162,"div"),e.qZA(),e.TgZ(163,"div",93),e._UZ(164,"div",94),e.qZA(),e.TgZ(165,"div",95),e._UZ(166,"div",94),e.qZA(),e.TgZ(167,"div",96),e._UZ(168,"div",94),e.qZA(),e.TgZ(169,"div",97),e._UZ(170,"div",94),e.qZA(),e.TgZ(171,"div",98),e._UZ(172,"div",94),e.qZA(),e.TgZ(173,"div",99),e._UZ(174,"div"),e.qZA(),e.TgZ(175,"div",100),e._UZ(176,"div",101),e.qZA(),e.TgZ(177,"div",102),e._UZ(178,"div",101),e.qZA(),e.TgZ(179,"div",103),e._UZ(180,"div",101),e.qZA(),e.TgZ(181,"div",104),e._UZ(182,"div",101),e.qZA(),e.TgZ(183,"div",105),e._UZ(184,"div",101),e.qZA(),e.TgZ(185,"div",106),e._UZ(186,"div"),e.qZA(),e.TgZ(187,"div",107),e._UZ(188,"div",65),e.qZA(),e.TgZ(189,"div",108),e._UZ(190,"div",65),e.qZA(),e.TgZ(191,"div",109),e._UZ(192,"div",65),e.qZA(),e.TgZ(193,"div",110),e._UZ(194,"div",65),e.qZA(),e.TgZ(195,"div",111),e._UZ(196,"img",112),e.qZA()()(),e.TgZ(197,"div",113),e._UZ(198,"img",114),e.TgZ(199,"p",115),e._uU(200,"You open doors to new relationships... personal and business"),e.qZA()(),e.TgZ(201,"div",116),e._UZ(202,"img",117),e.TgZ(203,"p",115),e._uU(204,"You Give A Spark to someone who really needs it"),e.qZA()(),e.TgZ(205,"div",118),e._UZ(206,"img",119),e.TgZ(207,"p",115),e._uU(208,"Your reputation will soar "),e.qZA()(),e.TgZ(209,"div",120),e._UZ(210,"img",121),e.TgZ(211,"p",115),e._uU(212,"Your business will increase "),e.qZA()(),e.TgZ(213,"div",122),e._UZ(214,"img",123),e.TgZ(215,"p",115),e._uU(216,"You will get inspired when you inspire someone "),e.qZA()(),e.TgZ(217,"div",124),e._UZ(218,"img",125),e.TgZ(219,"p",115),e._uU(220,"\u201cSend inspirational quotes the easiest way\u201d "),e.qZA()()()()()()(),e.TgZ(221,"div",126)(222,"div",29)(223,"div",127)(224,"button",128),e._uU(225," CEOs "),e.qZA(),e.TgZ(226,"button",128),e._uU(227," TEAMS "),e.qZA(),e.TgZ(228,"button",128),e._uU(229," INDIVIDUALS "),e.qZA(),e.TgZ(230,"button",128),e._uU(231," ORGANIZATIONS "),e.qZA(),e.TgZ(232,"button",128),e._uU(233," COMPANIES "),e.qZA(),e.TgZ(234,"button",128),e._uU(235," MARKETERS "),e.qZA(),e.TgZ(236,"button",128),e._uU(237," IT "),e.qZA(),e.TgZ(238,"button",128),e._uU(239," HR TEAMS "),e.qZA()(),e.TgZ(240,"div",129)(241,"button",128),e._uU(242," REALTORES "),e.qZA(),e.TgZ(243,"button",128),e._uU(244," PHOTOGRAPHERS"),e.qZA(),e.TgZ(245,"button",128),e._uU(246," CONSULTANTS "),e.qZA(),e.TgZ(247,"button",128),e._uU(248," BRAND MANAGERS "),e.qZA(),e.TgZ(249,"button",128),e._uU(250," LEGAL "),e.qZA(),e.TgZ(251,"button",128),e._uU(252," SUPPORT "),e.qZA(),e.TgZ(253,"button",128),e._uU(254," ACADEMICS"),e.qZA()()()(),e.TgZ(255,"div",54)(256,"div",29)(257,"div",51)(258,"div",55)(259,"div",56),e._UZ(260,"img",57),e.TgZ(261,"h4"),e._uU(262,"Templates"),e.qZA()()(),e.TgZ(263,"div",130)(264,"div",131)(265,"div",132)(266,"div",133),e._UZ(267,"img",134),e.qZA()(),e.TgZ(268,"div",132)(269,"div",135),e._UZ(270,"img",136),e.qZA()(),e.TgZ(271,"div",132)(272,"div",137),e._UZ(273,"img",138),e.qZA()()()()()()(),e.TgZ(274,"div",126)(275,"div",55)(276,"div",56),e._UZ(277,"img",57),e.TgZ(278,"h4"),e._uU(279,"Looks Great In:"),e.qZA()()(),e.TgZ(280,"div",139)(281,"div",127)(282,"button",128),e._uU(283," Gmail "),e.qZA(),e.TgZ(284,"button",128),e._uU(285," TEAMS "),e.qZA(),e.TgZ(286,"button",128),e._uU(287," INDIVIDUALS "),e.qZA(),e.TgZ(288,"button",128),e._uU(289," ORGANIZATIONS "),e.qZA()(),e.TgZ(290,"div",129)(291,"button",128),e._uU(292," REALTORES "),e.qZA(),e.TgZ(293,"button",128),e._uU(294," PHOTOGRAPHERS"),e.qZA(),e.TgZ(295,"button",128),e._uU(296," CONSULTANTS "),e.qZA()()()(),e.TgZ(297,"div",54)(298,"div",55)(299,"div",56),e._UZ(300,"img",57),e.TgZ(301,"h4"),e._uU(302,"Fully Customizable Email Signature Generator:"),e.qZA()()(),e.TgZ(303,"div",139)(304,"div",140)(305,"div",141)(306,"div",51)(307,"div",37)(308,"h5"),e._uU(309,"Control your signature design"),e.qZA(),e.TgZ(310,"p"),e._uU(311,"Choose the right layout, font, colors, image-shapes and more with our easy-to-use email signature designer."),e.qZA(),e.TgZ(312,"button",142),e._uU(313," CONSULTANTS "),e.qZA()(),e.TgZ(314,"div",37),e._uU(315," Gmail "),e.qZA(),e.TgZ(316,"div",37),e._uU(317," Gmail "),e.qZA(),e.TgZ(318,"div",37),e._uU(319," Gmail "),e.qZA()()(),e.TgZ(320,"div",143),e._UZ(321,"img",144),e.qZA(),e.TgZ(322,"button",145),e.NdJ("click",function(){return o.logout()}),e._uU(323,"logout"),e.qZA()()()()),2&t&&(e.xp6(62),e.Oqu(o.quotesData),e.xp6(33),e.Q6J("ngForOf",o.profileData))},dependencies:[c.sg],styles:[".mouse_move[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute}#img1[_ngcontent-%COMP%]{top:-75px;left:0}#img2[_ngcontent-%COMP%]{bottom:-20px;right:50px;height:250px;width:250px;z-index:-1}"]}),i})()}];let u=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[n.Bz.forChild(p),n.Bz]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,u]}),i})()}}]);