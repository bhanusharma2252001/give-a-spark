"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[617],{3617:(q,p,n)=>{n.r(p),n.d(p,{HomeDashboardModule:()=>C});var s=n(6895),l=n(6239),e=n(1571),d=n(8423),u=n(7177);function m(t,a){if(1&t){const i=e.EpF();e.TgZ(0,"div",1)(1,"ul",2)(2,"li",3)(3,"a",4)(4,"p",5),e._UZ(5,"img",6),e.TgZ(6,"span",7),e._uU(7,"Home"),e.qZA()()()(),e.TgZ(8,"li",3)(9,"a",8)(10,"p",5),e._UZ(11,"img",9),e.TgZ(12,"span",10),e._uU(13,"Signature Template"),e.qZA()()()(),e.TgZ(14,"li",3)(15,"a",11)(16,"p",5),e._UZ(17,"img",12),e.TgZ(18,"span",13),e._uU(19,"Saved Signature"),e.qZA()()()(),e.TgZ(20,"li",3)(21,"a",14)(22,"p",5),e._UZ(23,"img",15),e.TgZ(24,"span",13),e._uU(25,"Motivational Quotes"),e.qZA()()()(),e.TgZ(26,"li",3)(27,"a",16)(28,"p",5),e._UZ(29,"img",17),e.TgZ(30,"span",13),e._uU(31,"Social Media Flyers"),e.qZA()()()(),e.TgZ(32,"li",3)(33,"a",18)(34,"p",5),e._UZ(35,"img",12),e.TgZ(36,"span",13),e._uU(37,"Saved Flyers "),e.qZA()()()(),e.TgZ(38,"li",3)(39,"a",19)(40,"p",5),e._UZ(41,"img",15),e.TgZ(42,"span",13),e._uU(43,"My Quotes"),e.qZA()()()(),e.TgZ(44,"li",3)(45,"a",20)(46,"p",5),e._UZ(47,"img",21),e.TgZ(48,"span",13),e._uU(49,"My Profile"),e.qZA()()()(),e.TgZ(50,"li",3)(51,"a",22)(52,"p",5),e._UZ(53,"img",23),e.TgZ(54,"span",13),e._uU(55,"My Plans"),e.qZA()()()(),e.TgZ(56,"li",3)(57,"a",24)(58,"p",5),e._UZ(59,"img",23),e.TgZ(60,"span",13),e._uU(61,"My Order"),e.qZA()()()(),e.TgZ(62,"li",3)(63,"a",25)(64,"p",5),e._UZ(65,"img",26),e.TgZ(66,"span",13),e._uU(67,"My Settings"),e.qZA()()()(),e.TgZ(68,"li",3)(69,"a",27)(70,"div",28)(71,"img",29),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.logout())}),e.qZA(),e.TgZ(72,"p",13),e._uU(73,"Logout"),e.qZA()()()()()()}}let g=(()=>{class t{constructor(i,o,r){this.api=i,this._ngZone=o,this.router=r,this.href=""}ngOnInit(){this.href=this.router.url,console.log(this.router.url,"jjjjjjjjjjjjjjjj")}logout(){sessionStorage.clear(),this.api.isLoggedIn=!1,this.api.signOutExternal(),this._ngZone.run(()=>{this.router.navigate([""]).then(()=>window.location.reload())})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.O),e.Y36(e.R0b),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidebar"]],decls:1,vars:1,consts:[["class","d-flex flex-column ms-4 mt-5 flex-shrink-0 bg-blue rounded-2","style","width: 3.5rem;",4,"ngIf"],[1,"d-flex","flex-column","ms-4","mt-5","flex-shrink-0","bg-blue","rounded-2",2,"width","3.5rem"],[1,"nav","nav-pills","nav-flush","flex-column","mb-auto","text-center",2,"z-index","99999"],[1,"nav-item"],["routerLink","./home-page","aria-current","page","title","Free","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","rounded-0"],[1,"mb-0"],["src","assets/images/dashboard.png","width","20","height","20>",1,"img-menu"],[1,"menu-text","py-2","rounded-2","p-1"],["routerLink","./templates/template-dashboard","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","active","border-0"],["src","assets/images/signature-template.png","width","20","height","20",1,"img-menu"],[1,"menu-text","py-2","rounded-2","text-nowrap"],["routerLink","./templates/saved-templates","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["src","assets/images/saved-signature.png","width","17","height","17",1,"img-menu"],[1,"menu-text","py-2","rounded-2","mb-0"],["routerLink","./motivational-quote","title","quotes","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["src","assets/images/quotes.png","width","18","height","18",1,"img-menu"],["routerLink","./flyer/edit-flyer","title","quotes","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["src","assets/images/social-media-flyers.png","width","20","height","20",1,"img-menu"],["routerLink","./flyer/saved-flyer","title","quotes","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["routerLink","./myquote","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["routerLink","./myprofile/profile-dashboard","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","active","border-0"],["src","assets/images/profile-1.png","width","18","height","18",1,"img-menu"],["routerLink","./plan/myplan","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["src","assets/images/my-plans.png","width","20","height","20",1,"img-menu"],["routerLink","/home-dashboard/myorder","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],["href","#","title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","active","border-0"],["src","assets/images/settings.png","width","20","height","20",1,"img-menu"],["title","Dashboard","data-bs-toggle","tooltip","data-bs-placement","right",1,"nav-link","border-0"],[1,""],["src","assets/images/logout.png","width","20","height","20",1,"img-menu",3,"click"]],template:function(i,o){1&i&&e.YNc(0,m,74,0,"div",0),2&i&&e.Q6J("ngIf","/home-dashboard/user-profile"!=o.href)},dependencies:[s.O5,l.yS]}),t})();function c(t,a){1&t&&e._UZ(0,"img",18)}function h(t,a){if(1&t&&e._UZ(0,"img",19),2&t){const i=e.oxw(2);e.s9C("src",null==i.userDetails?null:i.userDetails.profile,e.LSH)}}function Z(t,a){if(1&t&&(e.TgZ(0,"header",1)(1,"div",2)(2,"div",3)(3,"div",4),e._UZ(4,"img",5),e.TgZ(5,"a",6),e._UZ(6,"img",7),e.qZA()()(),e.TgZ(7,"div",8)(8,"nav",9)(9,"div",10)(10,"p",11),e._uU(11,"Your free trial ends in 10 days.Upgrade now and get 15% early bird discount. "),e.qZA(),e.TgZ(12,"button",12),e._uU(13,"Upgrade Plan"),e.qZA()()()(),e.TgZ(14,"div",13)(15,"div",4),e._UZ(16,"img",14),e.TgZ(17,"form",15),e.YNc(18,c,1,0,"img",16),e.YNc(19,h,1,1,"img",17),e.qZA()()()()()),2&t){const i=e.oxw();e.xp6(18),e.Q6J("ngIf",!(null!=i.userDetails&&i.userDetails.profile)),e.xp6(1),e.Q6J("ngIf",null==i.userDetails?null:i.userDetails.profile)}}let v=(()=>{class t{constructor(i,o){this.router=i,this.api=o,this.href=""}ngOnInit(){this.profileData(),this.href=this.router.url,console.log(this.router.url)}profileData(){this.api.myProfile().subscribe(i=>{this.userDetails=i,console.log(this.userDetails?.address[0]?.addressline1,"addddd")})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.F0),e.Y36(u.O))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],decls:1,vars:1,consts:[["class","header-shadow","style","z-index: 99999;",4,"ngIf"],[1,"header-shadow",2,"z-index","99999"],[1,"row","align-items-center","back_clr"],[1,"col-md-2","col-lg-2","align-self-center","text-center","logo-bg","position-relative"],[1,"gif_img"],["src","assets/images/gif_left.gif","alt","",1,"gif_style"],["href","assets/index.html",1,"navbar-brand","d-flex","justify-content-center"],["src","assets/images/logo(round).png",1,"img-fl","ms-4","position-absolute"],[1,"col-md-8","col-lg-8"],[1,"container"],[1,"d-flex","align-items-center","justify-content-evenly"],[1,"bg-yellow","text-white","header-center"],["type","submit","routerLink","/home-dashboard/plan/plan-dashboard",1,"pink-btn","rounded-pill","shadow","upgrade_btn"],[1,"col-md-2","col-lg-2","user_back"],["src","assets/images/gif-right.gif","alt","",1,"right_new_gif"],[1,"d-flex","justify-content-center"],["alt","profile","class","wh-50 cur","src","https://giveaspark.s3.us-west-1.amazonaws.com/Soical_icons/user_icon_second.png","routerLink","/home-dashboard/myprofile/profile-dashboard",4,"ngIf"],["class","wh-50 cur","alt","",3,"src",4,"ngIf"],["alt","profile","src","https://giveaspark.s3.us-west-1.amazonaws.com/Soical_icons/user_icon_second.png","routerLink","/home-dashboard/myprofile/profile-dashboard",1,"wh-50","cur"],["alt","",1,"wh-50","cur",3,"src"]],template:function(i,o){1&i&&e.YNc(0,Z,20,2,"header",0),2&i&&e.Q6J("ngIf","/home-dashboard/user-pro-md-2file"!=o.href)},dependencies:[s.O5,l.rH]}),t})();function f(t,a){1&t&&(e.TgZ(0,"div",11),e._UZ(1,"app-sidebar"),e.qZA())}let b=(()=>{class t{constructor(i,o){this.router=i,this.spinner=o,this.href=""}ngOnInit(){this.href=this.router.url,console.log(this.router.url)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.F0),e.Y36(d.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-dashboard"]],decls:13,vars:2,consts:[[1,"container-fluid","p-0"],[1,"row"],[1,"col-md-12","col-lg-12"],[1,"h-160"],[1,"row","m-0","p-0"],[1,"col-md-12","col-lg-12","p-0"],[1,"col-md-1","col-lg-1","p-0","side-nav-sec","dekstop-menu"],["class","position-relative h-100",4,"ngIf"],[1,"col-md-11","col-lg-11","pb-4","mt-4","all-pages_padding"],["bdColor","rgba(0, 0, 0, 0.8)","size","large","color","#fff","type","ball-clip-rotate-pulse",3,"fullScreen"],["src","assets/images/spinner.gif"],[1,"position-relative","h-100"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5),e._UZ(6,"app-header"),e.qZA(),e.TgZ(7,"div",6),e.YNc(8,f,2,0,"div",7),e.qZA(),e.TgZ(9,"div",8),e._UZ(10,"router-outlet"),e.qZA()()(),e.TgZ(11,"ngx-spinner",9),e._UZ(12,"img",10),e.qZA()),2&i&&(e.xp6(8),e.Q6J("ngIf","/home-dashboard/user-profile"!=o.href),e.xp6(3),e.Q6J("fullScreen",!0))},dependencies:[s.O5,l.lC,d.Ro,g,v]}),t})(),T=(()=>{class t{constructor(i){this.spinner=i}ngOnInit(){this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(d.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-page"]],decls:102,vars:0,consts:[[1,"banner_slider","pt-3"],[1,"row","position-relative"],[1,"col-md-11","col-lg-11","z-indexss"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide","position-relative"],[1,"carousel-indicators","button-yellow"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item","active","position-relative"],["src","assets/images/banner_one.png","alt","Banner-Temp",1,"d-block","w-100"],[1,"carousel-caption","d-none","d-md-block","banner_content","position-absolute"],[1,"banner_heading"],[1,"banner_yellow_txt"],[1,"banner_paragraph"],[1,"banner_btn"],[1,"carousel-item","position-relative"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon","prev-btn"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon","next-btn"],[1,"col-md-1","col-lg-1","position-absolute","banner_main_img"],["src","assets/images/signature-one.png","alt","",1,"banner_msg"],[1,"row"],[1,"col-md-11","col-lg-11","mt-5"],[1,"bannner_one"],[1,"row","justify-content-evenly"],[1,"red_temp","position-relative"],[1,"position-absolute","order_img"],["src","assets/images/quo.png","alt",""],[1,"position-absolute","order_content"],[1,"count"],[1,"exp"],[1,"pink_temp","position-relative"],["src","assets/images/stories.png","alt",""],[1,"yellow_temp","position-relative"],["src","assets/images/order.png","alt",""],[1,"position-absolute","order_content","d-flex","align-items-center","justify-content-center"],[1,"black_temp","position-relative"],[1,"d-flex","justify-content-center","mt-5"],[1,"buy_manage","p-2"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"button",5)(6,"button",6)(7,"button",7),e.qZA(),e.TgZ(8,"div",8)(9,"div",9),e._UZ(10,"img",10),e.TgZ(11,"div",11)(12,"h2",12),e._uU(13,"Create Professional "),e.TgZ(14,"span",13),e._uU(15,"Email Signature"),e.qZA(),e._uU(16,"Template"),e.qZA(),e.TgZ(17,"p",14),e._uU(18,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit magnam quisquam earum voluptas est temporibus eaque delectus inventore quas dolore ipsum, totam voluptatum nostrum minima ex harum ipsam. Qui, aliquam?"),e.qZA(),e.TgZ(19,"button",15),e._uU(20,"Buy Now"),e.qZA()()(),e.TgZ(21,"div",16),e._UZ(22,"img",10),e.TgZ(23,"div",11)(24,"h2",12),e._uU(25,"Create Professional "),e.TgZ(26,"span",13),e._uU(27,"Email Signature"),e.qZA(),e._uU(28," Template"),e.qZA(),e.TgZ(29,"p",14),e._uU(30,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit magnam quisquam earum voluptas est temporibus eaque delectus inventore quas dolore ipsum, totam voluptatum nostrum minima ex harum ipsam. Qui, aliquam?"),e.qZA(),e.TgZ(31,"button",15),e._uU(32,"Buy Now"),e.qZA()()(),e.TgZ(33,"div",16),e._UZ(34,"img",10),e.TgZ(35,"div",11)(36,"h2",12),e._uU(37,"Create Professional "),e.TgZ(38,"span",13),e._uU(39,"Email Signature"),e.qZA(),e._uU(40," Template"),e.qZA(),e.TgZ(41,"p",14),e._uU(42,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit magnam quisquam earum voluptas est temporibus eaque delectus inventore quas dolore ipsum, totam voluptatum nostrum minima ex harum ipsam. Qui, aliquam?"),e.qZA(),e.TgZ(43,"button",15),e._uU(44,"Buy Now"),e.qZA()()()(),e.TgZ(45,"button",17),e._UZ(46,"span",18),e.TgZ(47,"span",19),e._uU(48,"Previous"),e.qZA()(),e.TgZ(49,"button",20),e._UZ(50,"span",21),e.TgZ(51,"span",19),e._uU(52,"Next"),e.qZA()()()(),e.TgZ(53,"div",22),e._UZ(54,"img",23),e.qZA()(),e.TgZ(55,"div",24)(56,"div",25)(57,"div",26)(58,"div",27)(59,"div",28)(60,"div",29),e._UZ(61,"img",30),e.qZA(),e.TgZ(62,"div",31)(63,"h6"),e._uU(64,"Total Quotes"),e.qZA(),e.TgZ(65,"p",32),e._uU(66,"42"),e.qZA(),e.TgZ(67,"p",33),e._uU(68,"Expiry"),e.qZA()()(),e.TgZ(69,"div",34)(70,"div",29),e._UZ(71,"img",35),e.qZA(),e.TgZ(72,"div",31)(73,"h6"),e._uU(74,"Total Stories"),e.qZA(),e.TgZ(75,"p",32),e._uU(76,"42"),e.qZA(),e.TgZ(77,"p",33),e._uU(78," Expiry"),e.qZA()()(),e.TgZ(79,"div",36)(80,"div",29),e._UZ(81,"img",37),e.qZA(),e.TgZ(82,"div",38)(83,"h6"),e._uU(84,"Active Plan"),e.qZA(),e.TgZ(85,"p",32),e._uU(86," Pro"),e.qZA(),e.TgZ(87,"p",33),e._uU(88,"Expiry"),e.qZA()()(),e.TgZ(89,"div",39)(90,"div",29),e._UZ(91,"img",37),e.qZA(),e.TgZ(92,"div",31)(93,"h6"),e._uU(94,"Total Orders"),e.qZA(),e.TgZ(95,"p",32),e._uU(96,"3"),e.qZA(),e.TgZ(97,"p",33),e._uU(98,"Expiry"),e.qZA()()()(),e.TgZ(99,"div",40)(100,"button",41),e._uU(101,"Buy Package For Someome"),e.qZA()()()()()())}}),t})();function y(t,a){1&t&&e._UZ(0,"img",34)}function U(t,a){if(1&t&&e._UZ(0,"img",35),2&t){const i=e.oxw();e.s9C("src",null==i.currentDetails?null:i.currentDetails.profile,e.LSH)}}function A(t,a){if(1&t&&(e.TgZ(0,"div",36)(1,"div",37)(2,"p",38),e._uU(3),e.qZA(),e.TgZ(4,"p",38),e._uU(5),e.qZA(),e.TgZ(6,"p",38),e._uU(7),e.qZA(),e.TgZ(8,"p",39),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"p",39),e._uU(12),e.ALo(13,"date"),e.qZA()()()),2&t){const i=a.$implicit;e.xp6(3),e.hij("Plan Name : Pro ( ",null==i?null:i.planName,")"),e.xp6(2),e.hij("Price : ",null==i?null:i.amount,"$"),e.xp6(2),e.hij("Time Duration : ",null==i||null==i.orderId?null:i.orderId.timeDuration,""),e.xp6(2),e.hij("From : ",e.xi3(10,5,null==i||null==i.senderId?null:i.senderId.fromDate,"dd/MM/yyyy"),""),e.xp6(3),e.hij("To : ",e.xi3(13,8,null==i||null==i.senderId?null:i.senderId.expireDate,"dd/MM/yyyy"),"")}}const x=[{path:"",component:b,children:[{path:"",redirectTo:"user-profile",pathMatch:"full"},{path:"user-profile",loadChildren:()=>Promise.all([n.e(246),n.e(122)]).then(n.bind(n,6122)).then(t=>t.UserProfileModule)},{path:"basicdetails-company",loadChildren:()=>Promise.all([n.e(246),n.e(794)]).then(n.bind(n,9794)).then(t=>t.BasicdetailsCompanyModule)},{path:"basic-template",loadChildren:()=>Promise.all([n.e(246),n.e(201),n.e(610),n.e(234)]).then(n.bind(n,8234)).then(t=>t.BasicTemplateModule)},{path:"mystory",loadChildren:()=>n.e(366).then(n.bind(n,1366)).then(t=>t.MystoryModule)},{path:"myquote",loadChildren:()=>n.e(647).then(n.bind(n,6647)).then(t=>t.MyquoteModule)},{path:"motivational-quote",loadChildren:()=>n.e(263).then(n.bind(n,2263)).then(t=>t.MotivationalQuoteModule)},{path:"motivational-story",loadChildren:()=>n.e(20).then(n.bind(n,3020)).then(t=>t.MotivationalStoryModule)},{path:"plan",loadChildren:()=>Promise.all([n.e(592),n.e(270)]).then(n.bind(n,4951)).then(t=>t.PlanModule)},{path:"myprofile",loadChildren:()=>n.e(37).then(n.bind(n,6037)).then(t=>t.MyprofileModule)},{path:"flyer",loadChildren:()=>Promise.all([n.e(246),n.e(201),n.e(592),n.e(840)]).then(n.bind(n,3840)).then(t=>t.FlyerModule)},{path:"templates",loadChildren:()=>Promise.all([n.e(246),n.e(201),n.e(610),n.e(309)]).then(n.bind(n,7309)).then(t=>t.TemplatesModule)},{path:"myorder",component:(()=>{class t{constructor(i,o,r){this.router=i,this.api=o,this.spinner=r}ngOnInit(){this.myOrder(),this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3)}navigate(){this.router.navigate(["/plan/plan-dashboard"])}myOrder(){this.api.getOrder().subscribe(i=>{this.currentDetails=i?.currentPlan[0][0],this.previousDetails=i?.previousPlan[0]})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.F0),e.Y36(u.O),e.Y36(d.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-myorder"]],decls:64,vars:18,consts:[[1,"col-md-7","col-lg-10"],[1,"row","m-0","p-0","align-items-center"],[1,"col-md-2","col-lg-2","mt-2","m-0","p-0"],[1,"rounded-circle","bg-darkgray","wh-225","position-relative"],[1,"position-absolute","top-50","start-50","translate-middle"],["class","wh-225 p-2","src","assets/images/profile-image.png",4,"ngIf"],["class","wh-225 p-2","alt","",3,"src",4,"ngIf"],[1,"position-absolute","top-50","start-0","ps-5","translate-middle"],[1,"rounded-circle","bg-black","position-relative"],[1,"col-md-10","col-lg-10","mt-2","m-0","p-0"],[1,"bg-darkblue","details-plan","p-0"],[1,"row","ps-5","p-3"],[1,"col-md-5","col-lg-5"],[1,"text-white"],[1,"text-yellow"],[1,"text-gray"],[1,"col-md-7","col-lg-7"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"row","m-0","p-0","mt-4"],[1,"col-md-6","col-lg-6"],[1,"mt-3"],[1,"w-50"],[2,"height","1px","background-color","black","width","100px"],[1,"mt-4"],[1,"fw-600","fs-14"],[1,"green-btn","p-2","fs-12","pe-3","ps-3",3,"click"],[1,"d-flex"],[1,"fw-600","fs-14","pe-3"],[1,"fw-600","fs-14","ps-3"],[2,"height","2px","background-color","black","width","100px"],[1,"row"],["class","col-md-4 col-lg-4",4,"ngFor","ngForOf"],["src","assets/images/profile-image.png",1,"wh-225","p-2"],["alt","",1,"wh-225","p-2",3,"src"],[1,"col-md-4","col-lg-4"],[1,"my-orders","p-3","mt-4","m-1"],[1,"fw-600","fs-12","mb-0"],[1,"fw-600","fs-12","mb-0","text-nowrap"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.YNc(5,y,1,0,"img",5),e.YNc(6,U,1,1,"img",6),e.qZA(),e.TgZ(7,"div",7),e._UZ(8,"div",8),e.qZA()()(),e.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"h4",13),e._uU(14),e.qZA(),e.TgZ(15,"h6",14),e._uU(16),e.qZA(),e.TgZ(17,"p",15),e._uU(18),e.qZA()(),e._UZ(19,"div",16),e.qZA()()()(),e.TgZ(20,"div",17)(21,"div",18)(22,"div",19)(23,"h3"),e._uU(24,"My Plans"),e.qZA()(),e.TgZ(25,"div",20)(26,"div",21)(27,"div",22)(28,"h5",23),e._uU(29,"Current Plan"),e.qZA(),e._UZ(30,"div",24),e.qZA(),e.TgZ(31,"div",25)(32,"p",26),e._uU(33),e.qZA(),e.TgZ(34,"button",27),e.NdJ("click",function(){return o.navigate()}),e._uU(35,"Upgrade Plan"),e.qZA()()(),e.TgZ(36,"div",21)(37,"div",22)(38,"h5",23),e._uU(39,"Billing Details"),e.qZA(),e._UZ(40,"div",24),e.qZA(),e.TgZ(41,"div",25)(42,"p",26),e._uU(43),e.qZA(),e.TgZ(44,"p",26),e._uU(45),e.qZA(),e.TgZ(46,"p",26),e._uU(47),e.qZA(),e.TgZ(48,"div",28)(49,"p",29),e._uU(50),e.ALo(51,"date"),e.qZA(),e.TgZ(52,"p",30),e._uU(53),e.ALo(54,"date"),e.qZA()()()()(),e.TgZ(55,"div",20)(56,"div",18)(57,"div",22)(58,"h5",23),e._uU(59,"Previous Plan"),e.qZA(),e._UZ(60,"div",31),e.qZA(),e.TgZ(61,"div",32),e.YNc(62,A,14,11,"div",33),e.qZA()(),e._UZ(63,"div",21),e.qZA()()()()),2&i&&(e.xp6(5),e.Q6J("ngIf",!(null!=o.currentDetails&&o.currentDetails.profile)),e.xp6(1),e.Q6J("ngIf",null==o.currentDetails?null:o.currentDetails.profile),e.xp6(8),e.hij(" ",null==o.currentDetails?null:o.currentDetails.firstName," "),e.xp6(2),e.Oqu(null==o.currentDetails?null:o.currentDetails.designation),e.xp6(2),e.Oqu(null==o.currentDetails?null:o.currentDetails.email),e.xp6(15),e.hij("Plan Name : Pro ( ",null==o.currentDetails||null==o.currentDetails.planId?null:o.currentDetails.planId.planName,")"),e.xp6(10),e.hij("Plan Name : Pro ( ",null==o.currentDetails||null==o.currentDetails.planId?null:o.currentDetails.planId.planName,")"),e.xp6(2),e.hij("Price : ",null==o.currentDetails||null==o.currentDetails.planId?null:o.currentDetails.planId.amount,""),e.xp6(2),e.hij("Time Duration : ",null==o.currentDetails||null==o.currentDetails.planId?null:o.currentDetails.planId.timeDuration,""),e.xp6(3),e.hij("From : ",e.xi3(51,12,null==o.currentDetails?null:o.currentDetails.fromDate,"dd/MM/yyyy"),""),e.xp6(3),e.hij("To : ",e.xi3(54,15,null==o.currentDetails?null:o.currentDetails.expireDate,"dd/MM/yyyy"),""),e.xp6(9),e.Q6J("ngForOf",o.previousDetails))},dependencies:[s.sg,s.O5,s.uU]}),t})()},{path:"home-page",component:T}]}];let D=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(x),l.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,D,d.ef]}),t})()}}]);