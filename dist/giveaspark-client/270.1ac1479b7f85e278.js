(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[270],{6270:(w,_,d)=>{"use strict";d.r(_),d.d(_,{PlanModule:()=>Q});var g=d(6895),m=d(3262),e=d(1571),h=d(7177),T=d(8423);function P(t,a){1&t&&e._UZ(0,"img",28)}function S(t,a){if(1&t&&e._UZ(0,"img",29),2&t){const n=e.oxw();e.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==n.userDetails?null:n.userDetails.profile,"",e.LSH)}}function Z(t,a){if(1&t&&(e.TgZ(0,"h6",30),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(null==n.plandetails?null:n.plandetails.designation)}}function q(t,a){if(1&t&&(e.TgZ(0,"p",31),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(null==n.plandetails?null:n.plandetails.email)}}function C(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("Plan Name : Pro ( ",null==n.plandetails?null:n.plandetails.SelectPlan,")")}}function U(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("Plan Name : Pro ( ",null==n.plandetails||null==n.plandetails.planId?null:n.plandetails.planId.planName,")")}}function v(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("Plan Name : Pro ( ",null==n.plandetails?null:n.plandetails.SelectPlan,")")}}function b(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("Plan Name : Pro ( ",null==n.plandetails||null==n.plandetails.planId?null:n.plandetails.planId.planName,")")}}function x(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("Price : ",null==n.plandetails||null==n.plandetails.planId?null:n.plandetails.planId.amount,"")}}function u(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("Time Duration : ",null==n.plandetails||null==n.plandetails.planId?null:n.plandetails.planId.timeDuration,"")}}function l(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("From : ",e.xi3(2,1,null==n.plandetails?null:n.plandetails.fromDate,"dd/MM/yyyy"),"")}}function r(t,a){if(1&t&&(e.TgZ(0,"p",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij("To : ",e.xi3(2,1,null==n.plandetails?null:n.plandetails.expireDate,"dd/MM/yyyy"),"")}}let s=(()=>{class t{constructor(n,i,o){this.api=n,this.router=i,this.spinner=o}ngOnInit(){this.myPlans(),this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3),this.profile()}myPlans(){this.api.getMyPlan().subscribe(n=>{this.plandetails=n?.result[0],console.log(this.plandetails,"planmkkgdfkg")})}navigate(){this.router.navigate(["/plan/plan-dashboard"])}profile(){this.api.myProfile().subscribe(n=>{this.userDetails=n,console.log(this.userDetails?.address[0]?.addressline1,"addddd")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.O),e.Y36(m.F0),e.Y36(T.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-myplan"]],decls:46,vars:13,consts:[[1,"col-md-7","col-lg-10"],[1,"row","m-0","p-0","align-items-center"],[1,"col-md-2","col-lg-2","mt-2","m-0","p-0"],[1,"rounded-circle","bg-darkgray","wh-225","position-relative"],[1,"position-absolute","top-50","start-50","translate-middle"],["class","wh-225 p-2","src","assets/images/profile-image.png",4,"ngIf"],["class","wh-225 p-2","alt","",3,"src",4,"ngIf"],[1,"position-absolute","top-50","start-0","ps-5","translate-middle"],[1,"rounded-circle","bg-black","position-relative"],[1,"col-md-10","col-lg-10","mt-2","m-0","p-0"],[1,"bg-darkblue","details-plan","p-0"],[1,"row","ps-5","p-3"],[1,"col-md-5","col-lg-5"],[1,"text-white"],["class","text-yellow",4,"ngIf"],[0,"mailto","class","text-gray",4,"ngIf"],[1,"col-md-7","col-lg-7"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"row","m-0","p-0","mt-4"],[1,"col-md-6","col-lg-6"],[1,"mt-3"],[1,"border-bottom","w-50"],[1,"mt-4"],["class","fw-400 fs-14",4,"ngIf"],[1,"pink-btn","p-2","fs-12","pe-3","ps-3",3,"click"],[1,"d-flex","justify-content-between"],["src","assets/images/profile-image.png",1,"wh-225","p-2"],["alt","",1,"wh-225","p-2",3,"src"],[1,"text-yellow"],[0,"mailto","class","text-gray"],[1,"fw-400","fs-14"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.YNc(5,P,1,0,"img",5),e.YNc(6,S,1,1,"img",6),e.qZA(),e.TgZ(7,"div",7),e._UZ(8,"div",8),e.qZA()()(),e.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"h4",13),e._uU(14),e.qZA(),e.YNc(15,Z,2,1,"h6",14),e.YNc(16,q,2,1,"p",15),e.qZA(),e._UZ(17,"div",16),e.qZA()()()(),e.TgZ(18,"div",17)(19,"div",18)(20,"div",19)(21,"h3"),e._uU(22,"My Plans"),e.qZA()(),e.TgZ(23,"div",20)(24,"div",21)(25,"div",22)(26,"h5",23),e._uU(27,"Plan Details"),e.qZA()(),e.TgZ(28,"div",24),e.YNc(29,C,2,1,"p",25),e.YNc(30,U,2,1,"p",25),e.TgZ(31,"button",26),e.NdJ("click",function(){return i.navigate()}),e._uU(32,"Upgrade Plan"),e.qZA()()(),e.TgZ(33,"div",21)(34,"div",22)(35,"h5",23),e._uU(36,"Billing Details"),e.qZA()(),e.TgZ(37,"div",24),e.YNc(38,v,2,1,"p",25),e.YNc(39,b,2,1,"p",25),e.YNc(40,x,2,1,"p",25),e.YNc(41,u,2,1,"p",25),e.TgZ(42,"div",27),e.YNc(43,l,3,4,"p",25),e.YNc(44,r,3,4,"p",25),e.qZA()()()()(),e._uU(45,"` "),e.qZA()()),2&n&&(e.xp6(5),e.Q6J("ngIf",!(null!=i.userDetails&&i.userDetails.profile)),e.xp6(1),e.Q6J("ngIf",null==i.userDetails?null:i.userDetails.profile),e.xp6(8),e.hij(" ",null==i.plandetails?null:i.plandetails.firstName," "),e.xp6(1),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.designation),e.xp6(1),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.email),e.xp6(13),e.Q6J("ngIf",!(null!=i.plandetails&&null!=i.plandetails.planId&&i.plandetails.planId.planName)),e.xp6(1),e.Q6J("ngIf",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.planName),e.xp6(8),e.Q6J("ngIf",!(null!=i.plandetails&&null!=i.plandetails.planId&&i.plandetails.planId.planName)),e.xp6(1),e.Q6J("ngIf",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.planName),e.xp6(1),e.Q6J("ngIf",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.amount),e.xp6(1),e.Q6J("ngIf",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.timeDuration),e.xp6(2),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.fromDate),e.xp6(1),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.expireDate))},dependencies:[g.O5,g.uU]}),t})();var p=d(5861),c="https://js.stripe.com/v3",y=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,M="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",A=null,I=Promise.resolve().then(function(){return a=null,null!==A||(A=new Promise(function(n,i){if(typeof window>"u"||typeof document>"u")n(null);else if(window.Stripe&&a&&console.warn(M),window.Stripe)n(window.Stripe);else try{var o=function(){for(var a=document.querySelectorAll('script[src^="'.concat(c,'"]')),n=0;n<a.length;n++){var i=a[n];if(y.test(i.src))return i}return null}();o&&a?console.warn(M):o||(o=function(a){var n=a&&!a.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(c).concat(n);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(i),i}(a)),o.addEventListener("load",function(){window.Stripe?n(window.Stripe):i(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){i(new Error("Failed to load Stripe.js"))})}catch(f){return void i(f)}})),A;var a});I.catch(function(t){console.warn(t)});var D=d(7649),J=d(433);const L=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-plan"]],decls:1,vars:0,template:function(n,i){1&n&&e._UZ(0,"router-outlet")},dependencies:[m.lC]}),t})(),children:[{path:"",redirectTo:"plan-dashboard",pathMatch:"full"},{path:"plan-dashboard",component:(()=>{class t{constructor(n,i,o,f){this.elementRef=n,this.api=i,this.spinner=o,this.fb=f,this.amount=0}ngOnInit(){this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3)}paymentSelectC(){this.api.makePayment({SelectPlan:"Plan C",quantity:"1"}).subscribe(function(){var i=(0,p.Z)(function*(o){(yield(0,D.loadStripe)("pk_live_51Mds83SEEnMfzbAjs4DBJPc0LR3eaVUxn3zz6dJVeIQZVHEfXhgw648VGZI5OSetcVJFUkImaNHDAnPGDmnDsJ22001CDI558x"))?.redirectToCheckout({sessionId:o.id}),console.log(o,"paymentdata")});return function(o){return i.apply(this,arguments)}}())}paymentSelectB(){this.api.makePayment({SelectPlan:"Plan B",quantity:"1"}).subscribe(function(){var i=(0,p.Z)(function*(o){(yield(0,D.loadStripe)("pk_live_51Mds83SEEnMfzbAjs4DBJPc0LR3eaVUxn3zz6dJVeIQZVHEfXhgw648VGZI5OSetcVJFUkImaNHDAnPGDmnDsJ22001CDI558x"))?.redirectToCheckout({sessionId:o.id}),console.log(o,"paymentdata")});return function(o){return i.apply(this,arguments)}}())}profileData(){this.api.myProfile().subscribe(n=>{this.userDetails=n,this.planDetails=n?.SelectPlan,console.log(this.userDetails?.address[0]?.addressline1,"addddd")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(h.O),e.Y36(T.t2),e.Y36(J.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-plan-dashboard"]],decls:172,vars:4,consts:[[1,"row","m-0","p-0"],[1,"col-md-4","col-lg-4","mt-2"],[1,"border-10","bg-darkgray","position-relative"],["src","assets/images/plans-image.png",1,"img-fluid"],[1,"position-relative"],[1,"text-center","mb-0","plan-heading","position-absolute","start-50","translate-middle"],[1,"fw-bold","fs-1"],[1,"text-yellow","fs-2"],[1,"text-center","p-3","mt-2","border-white"],[1,"text-darkblue","fw-semibold","fs-14"],[1,"text-lgblack","fs-14"],[1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"disabled"],[1,"text-center","p-3","mt-2"],[1,"d-flex","align-items-center"],[1,"text-green","pe-2"],[1,"fa","fa-check"],[1,"fs-14"],[1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"click"],["type","button","id","getThisPlan",1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"click"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],["id","payment-form"],["id","link-authentication-element"],["id","payment-element"],["id","submit"],["id","spinner",1,"spinner","hidden"],["id","button-text"],["id","payment-message",1,"hidden"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4)(5,"div",5)(6,"h2",6),e._uU(7,"Plan (A)"),e.qZA(),e.TgZ(8,"h3",7),e._uU(9,"FREE"),e.qZA()()(),e.TgZ(10,"div",8)(11,"p",9),e._uU(12,"For Personal Use "),e.qZA(),e.TgZ(13,"p",10),e._uU(14,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(15,"button",11),e._uU(16," Get This Plan "),e.qZA()(),e.TgZ(17,"div",12)(18,"div",13)(19,"p",14),e._UZ(20,"i",15),e.qZA(),e.TgZ(21,"p",16),e._uU(22,"Create Free Signature "),e.qZA()(),e.TgZ(23,"div",13)(24,"p",14),e._UZ(25,"i",15),e.qZA(),e.TgZ(26,"p",16),e._uU(27,"Only For Single User "),e.qZA()(),e.TgZ(28,"div",13)(29,"p",14),e._UZ(30,"i",15),e.qZA(),e.TgZ(31,"p",16),e._uU(32,"Create Single Signature "),e.qZA()(),e.TgZ(33,"div",13)(34,"p",14),e._UZ(35,"i",15),e.qZA(),e.TgZ(36,"p",16),e._uU(37,"Limited Quotes & Stories "),e.qZA()(),e.TgZ(38,"div",13)(39,"p",14),e._UZ(40,"i",15),e.qZA(),e.TgZ(41,"p",16),e._uU(42,"No Customizations In Design "),e.qZA()(),e.TgZ(43,"div",13)(44,"p",14),e._UZ(45,"i",15),e.qZA(),e.TgZ(46,"p",16),e._uU(47,"Give A Spark Ad On Signature "),e.qZA()()()()(),e.TgZ(48,"div",1)(49,"div",2),e._UZ(50,"img",3),e.TgZ(51,"div",4)(52,"div",5)(53,"h2",6),e._uU(54,"Plan (B)"),e.qZA(),e.TgZ(55,"h3",7),e._uU(56,"$ 5.5"),e.qZA(),e.TgZ(57,"p",16),e._uU(58,"Per Month"),e.qZA()()(),e.TgZ(59,"div",8)(60,"p",9),e._uU(61,"For 2 Users "),e.qZA(),e.TgZ(62,"p",10),e._uU(63,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(64,"button",17),e.NdJ("click",function(){return i.paymentSelectB()}),e._uU(65," Get This Plan "),e.qZA()(),e.TgZ(66,"div",12)(67,"div",13)(68,"p",14),e._UZ(69,"i",15),e.qZA(),e.TgZ(70,"p",16),e._uU(71,"Create 2 Professional Email Signature "),e.qZA()(),e.TgZ(72,"div",13)(73,"p",14),e._UZ(74,"i",15),e.qZA(),e.TgZ(75,"p",16),e._uU(76,"Upload Profile Image "),e.qZA()(),e.TgZ(77,"div",13)(78,"p",14),e._UZ(79,"i",15),e.qZA(),e.TgZ(80,"p",16),e._uU(81,"3 Email Templates Fully Customizable "),e.qZA()(),e.TgZ(82,"div",13)(83,"p",14),e._UZ(84,"i",15),e.qZA(),e.TgZ(85,"p",16),e._uU(86,"Additional Quotes & Stories "),e.qZA()(),e.TgZ(87,"div",13)(88,"p",14),e._UZ(89,"i",15),e.qZA(),e.TgZ(90,"p",16),e._uU(91,"No Give A Spark Logo On Signature "),e.qZA()()()()(),e.TgZ(92,"div",1)(93,"div",2),e._UZ(94,"img",3),e.TgZ(95,"div",4)(96,"div",5)(97,"h2",6),e._uU(98,"Plan (C)"),e.qZA(),e.TgZ(99,"h3",7),e._uU(100,"$ 10"),e.qZA(),e.TgZ(101,"p",16),e._uU(102,"Per Month"),e.qZA()()(),e.TgZ(103,"div",8)(104,"p",9),e._uU(105,"For Personal Use "),e.qZA(),e.TgZ(106,"p",10),e._uU(107,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(108,"button",18),e.NdJ("click",function(){return i.paymentSelectC()}),e._uU(109," Get This Plan "),e.qZA()(),e.TgZ(110,"div",12)(111,"div",13)(112,"p",14),e._UZ(113,"i",15),e.qZA(),e.TgZ(114,"p",16),e._uU(115,"Create 3 Professional User Signature. "),e.qZA()(),e.TgZ(116,"div",13)(117,"p",14),e._UZ(118,"i",15),e.qZA(),e.TgZ(119,"p",16),e._uU(120,"Unlimited Customization "),e.qZA()(),e.TgZ(121,"div",13)(122,"p",14),e._UZ(123,"i",15),e.qZA(),e.TgZ(124,"p",16),e._uU(125,"Unlimited Quotes & Stories "),e.qZA()(),e.TgZ(126,"div",13)(127,"p",14),e._UZ(128,"i",15),e.qZA(),e.TgZ(129,"p",16),e._uU(130,"Custom Quotes & Stories "),e.qZA()(),e.TgZ(131,"div",13)(132,"p",14),e._UZ(133,"i",15),e.qZA(),e.TgZ(134,"p",16),e._uU(135,"Unlimited Email Templates "),e.qZA()(),e.TgZ(136,"div",13)(137,"p",14),e._UZ(138,"i",15),e.qZA(),e.TgZ(139,"p",16),e._uU(140,"Social Media Links "),e.qZA()(),e.TgZ(141,"div",13)(142,"p",14),e._UZ(143,"i",15),e.qZA(),e.TgZ(144,"p",16),e._uU(145,"Social Media Sharing With Custom Logo "),e.qZA()(),e.TgZ(146,"div",13)(147,"p",14),e._UZ(148,"i",15),e.qZA(),e.TgZ(149,"p",16),e._uU(150,"Social Media Story With Audio "),e.qZA()()()()()(),e.TgZ(151,"div",19)(152,"div",20)(153,"div",21)(154,"div",22)(155,"h1",23),e._uU(156,"Plan B"),e.qZA(),e._UZ(157,"button",24),e.qZA(),e.TgZ(158,"div",25)(159,"form",26),e._UZ(160,"div",27)(161,"div",28),e.TgZ(162,"button",29),e._UZ(163,"div",30),e.TgZ(164,"span",31),e._uU(165,"Pay now"),e.qZA()(),e._UZ(166,"div",32),e.qZA()(),e.TgZ(167,"div",33)(168,"button",34),e._uU(169,"Close"),e.qZA(),e.TgZ(170,"button",35),e._uU(171,"Save changes"),e.qZA()()()()()),2&n&&(e.xp6(64),e.ekj("disableTab","Plan A"!=i.planDetails),e.xp6(44),e.ekj("disableTab","Plan C"==i.planDetails))},styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;-webkit-font-smoothing:antialiased;display:flex;justify-content:center;align-content:center;height:100vh;width:100vw}form[_ngcontent-%COMP%]{width:30vw;min-width:500px;align-self:center;box-shadow:0 0 0 .5px #32325d1a,0 2px 5px #32325d1a,0 1px 1.5px #00000012;border-radius:7px;padding:40px}.hidden[_ngcontent-%COMP%]{display:none}#payment-message[_ngcontent-%COMP%]{color:#697386;font-size:16px;line-height:20px;padding-top:12px;text-align:center}#payment-element[_ngcontent-%COMP%]{margin-bottom:24px}button[_ngcontent-%COMP%]{background:#5469d4;font-family:Arial,sans-serif;color:#fff;border-radius:4px;border:0;padding:12px 16px;font-size:16px;font-weight:600;cursor:pointer;display:block;transition:all .2s ease;box-shadow:0 4px 5.5px #00000012;width:100%}button[_ngcontent-%COMP%]:hover{filter:contrast(115%)}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.spinner[_ngcontent-%COMP%], .spinner[_ngcontent-%COMP%]:before, .spinner[_ngcontent-%COMP%]:after{border-radius:50%}.spinner[_ngcontent-%COMP%]{color:#fff;font-size:22px;text-indent:-99999px;margin:0 auto;position:relative;width:20px;height:20px;box-shadow:inset 0 0 0 2px;transform:translateZ(0)}.spinner[_ngcontent-%COMP%]:before, .spinner[_ngcontent-%COMP%]:after{position:absolute;content:""}.spinner[_ngcontent-%COMP%]:before{width:10.4px;height:20.4px;background:#5469d4;border-radius:20.4px 0 0 20.4px;top:-.2px;left:-.2px;transform-origin:10.4px 10.2px;animation:loading 2s infinite ease 1.5s}.spinner[_ngcontent-%COMP%]:after{width:10.4px;height:10.2px;background:#5469d4;border-radius:0 10.2px 10.2px 0;top:-.1px;left:10.2px;transform-origin:0px 10.2px;animation:loading 2s infinite ease}@keyframes loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media only screen and (max-width: 600px){form[_ngcontent-%COMP%]{width:80vw;min-width:initial}}.disableTab[_ngcontent-%COMP%]:disabled, .disableTab[_ngcontent-%COMP%]{background-color:var(--pink);color:var(--white);border:1px solid var;pointer-events:none}.dis[_ngcontent-%COMP%]:disabled, .dis[_ngcontent-%COMP%]{background-color:var(--pink);color:var(--white);border:1px solid var;pointer-events:none}']}),t})()},{path:"myplan",component:s},{path:"plan-purchase",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-plan-purchase"]],decls:85,vars:0,consts:[[1,"col-md-11","col-lg-11"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-6","col-lg-6","p-0"],[1,"text-center","box-hight","bg-black","p-5","position-relative"],[1,"text-white","pb-3"],[1,"text-yellow"],[1,"text-white","pb-3","fs-1"],[1,"text-center"],[1,"d-flex"],[1,"fa","fa-check","text-green","pe-4"],[1,"text-gray"],[1,"position-absolute","end-0","top-50"],["alt","","src","assets/images/s-line.png"],[1,"text-center","box-hight","bg-white","p-5"],[1,"mb-3"],["aria-label","Default select example",1,"form-select","p-3","rounded-pill","text-gray"],["selected",""],["value","1"],["value","2"],["value","3"],["type","text","aria-describedby","textHelp","placeholder","Enter card number",1,"form-control","p-3","text-gray","rounded-pill"],["type","email","placeholder","Enter email address","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control","p-3","text-gray","rounded-pill"],["type","submit",1,"btn","pink-btn","w-100","p-3"],[1,"d-flex","mt-4","justify-content-around"],["src","assets/images/visa.png","alt","",1,"img-fluid"],["src","assets/images/gpay.png","alt","",1,"img-fluid"],["src","assets/images/paypal.png","alt","",1,"img-fluid"],["src","assets/images/card.png","alt","",1,"img-fluid"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Get "),e.TgZ(6,"span",5),e._uU(7,"Give A Spark"),e.qZA(),e._UZ(8,"br"),e._uU(9,"Pro Plan"),e.qZA(),e.TgZ(10,"h2",6),e._uU(11,"$ 10"),e.qZA(),e.TgZ(12,"div",7)(13,"div",8),e._UZ(14,"i",9),e.TgZ(15,"p",10),e._uU(16,"Create 3 Professional User Signature."),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"i",9),e.TgZ(19,"p",10),e._uU(20,"Create 3 Professional User Signature."),e.qZA()(),e.TgZ(21,"div",8),e._UZ(22,"i",9),e.TgZ(23,"p",10),e._uU(24,"Unlimited Customization"),e.qZA()(),e.TgZ(25,"div",8),e._UZ(26,"i",9),e.TgZ(27,"p",10),e._uU(28,"Unlimited Quotes & Stories"),e.qZA()(),e.TgZ(29,"div",8),e._UZ(30,"i",9),e.TgZ(31,"p",10),e._uU(32,"Custom Quotes & Stories"),e.qZA()(),e.TgZ(33,"div",8),e._UZ(34,"i",9),e.TgZ(35,"p",10),e._uU(36,"Unlimited Email Templates"),e.qZA()(),e.TgZ(37,"div",8),e._UZ(38,"i",9),e.TgZ(39,"p",10),e._uU(40,"Social Media Links"),e.qZA()(),e.TgZ(41,"div",8),e._UZ(42,"i",9),e.TgZ(43,"p",10),e._uU(44,"Social Media Sharing With Custom Logo"),e.qZA()(),e.TgZ(45,"div",8),e._UZ(46,"i",9),e.TgZ(47,"p",10),e._uU(48,"Social Media Story With Audio"),e.qZA()()(),e.TgZ(49,"div",11),e._UZ(50,"img",12),e.qZA()()(),e.TgZ(51,"div",2)(52,"div",13)(53,"form")(54,"div",14)(55,"select",15)(56,"option",16),e._uU(57,"Select payment method"),e.qZA(),e.TgZ(58,"option",17),e._uU(59,"One"),e.qZA(),e.TgZ(60,"option",18),e._uU(61,"Two"),e.qZA(),e.TgZ(62,"option",19),e._uU(63,"Three"),e.qZA()()(),e.TgZ(64,"div",14),e._UZ(65,"input",20),e.qZA(),e.TgZ(66,"div",14),e._UZ(67,"input",21),e.qZA(),e.TgZ(68,"div",14)(69,"select",15)(70,"option",16),e._uU(71,"Select Country "),e.qZA(),e.TgZ(72,"option",17),e._uU(73,"One"),e.qZA(),e.TgZ(74,"option",18),e._uU(75,"Two"),e.qZA(),e.TgZ(76,"option",19),e._uU(77,"Three"),e.qZA()()(),e.TgZ(78,"button",22),e._uU(79,"Purchase Continue"),e.qZA()(),e.TgZ(80,"div",23),e._UZ(81,"img",24)(82,"img",25)(83,"img",26)(84,"img",27),e.qZA()()()()())}}),t})()}]}];let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(L),m.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,G,T.ef]}),t})()},8796:(w,_)=>{"use strict";function g(u){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(l){return typeof l}:function(l){return l&&"function"==typeof Symbol&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(u)}var v,m="https://js.stripe.com/v3",e=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,h="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Z=null,q=function(l){return null!==Z||(Z=new Promise(function(r,s){if(typeof window>"u"||typeof document>"u")r(null);else if(window.Stripe&&l&&console.warn(h),window.Stripe)r(window.Stripe);else try{var p=function(){for(var l=document.querySelectorAll('script[src^="'.concat(m,'"]')),r=0;r<l.length;r++){var s=l[r];if(e.test(s.src))return s}return null}();p&&l?console.warn(h):p||(p=function(l){var r=l&&!l.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(m).concat(r);var p=document.head||document.body;if(!p)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return p.appendChild(s),s}(l)),p.addEventListener("load",function(){window.Stripe?r(window.Stripe):s(new Error("Stripe.js not available"))}),p.addEventListener("error",function(){s(new Error("Failed to load Stripe.js"))})}catch(c){return void s(c)}})),Z},C=function(l,r,s){if(null===l)return null;var p=l.apply(void 0,r);return function(l,r){!l||!l._registerWrapper||l._registerWrapper({name:"stripe-js",version:"1.51.0",startTime:r})}(p,s),p},U=function(l){var r="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(l),"\n");if(null===l||"object"!==g(l))throw new Error(r);if(1===Object.keys(l).length&&"boolean"==typeof l.advancedFraudSignals)return l;throw new Error(r)},b=!1,x=function(){for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];b=!0;var p=Date.now();return q(v).then(function(c){return C(c,r,p)})};x.setLoadParameters=function(u){if(b&&v){var l=U(u);if(Object.keys(l).reduce(function(p,c){var y;return p&&u[c]===(null===(y=v)||void 0===y?void 0:y[c])},!0))return}if(b)throw new Error("You cannot change load parameters after calling loadStripe");v=U(u)},_.loadStripe=x},7649:(w,_,d)=>{w.exports=d(8796)}}]);