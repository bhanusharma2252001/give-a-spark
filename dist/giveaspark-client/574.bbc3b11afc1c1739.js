(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[574],{3574:(S,_,p)=>{"use strict";p.r(_),p.d(_,{PlanModule:()=>L});var c=p(6895),g=p(6239),e=p(1571),b=p(7177),T=p(8423);function q(n,a){1&n&&e._UZ(0,"img",28)}function w(n,a){if(1&n&&e._UZ(0,"img",29),2&n){const t=e.oxw();e.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==t.plandetails?null:t.plandetails.profile,"",e.LSH)}}function f(n,a){if(1&n&&(e.TgZ(0,"h6",30),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.plandetails?null:t.plandetails.designation)}}function P(n,a){if(1&n&&(e.TgZ(0,"p",31),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.plandetails?null:t.plandetails.email)}}let x=(()=>{class n{constructor(t,i,r){this.api=t,this.router=i,this.spinner=r}ngOnInit(){this.myPlans(),this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3)}myPlans(){this.api.getMyPlan().subscribe(t=>{this.plandetails=t?.result[0]})}navigate(){this.router.navigate(["/plan/plan-dashboard"])}profile(){this.api.myProfile().subscribe(t=>{this.userDetails=t,console.log(this.userDetails?.address[0]?.addressline1,"addddd")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b.O),e.Y36(g.F0),e.Y36(T.t2))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-myplan"]],decls:52,vars:17,consts:[[1,"col-md-7","col-lg-10"],[1,"row","m-0","p-0","align-items-center"],[1,"col-md-2","col-lg-2","mt-2","m-0","p-0"],[1,"rounded-circle","bg-darkgray","wh-225","position-relative"],[1,"position-absolute","top-50","start-50","translate-middle"],["class","wh-225 p-2","src","assets/images/profile-image.png",4,"ngIf"],["class","wh-225 p-2","alt","",3,"src",4,"ngIf"],[1,"position-absolute","top-50","start-0","ps-5","translate-middle"],[1,"rounded-circle","bg-black","position-relative"],[1,"col-md-10","col-lg-10","mt-2","m-0","p-0"],[1,"bg-darkblue","details-plan","p-0"],[1,"row","ps-5","p-3"],[1,"col-md-5","col-lg-5"],[1,"text-white"],["class","text-yellow",4,"ngIf"],[0,"mailto","class","text-gray",4,"ngIf"],[1,"col-md-7","col-lg-7"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"row","m-0","p-0","mt-4"],[1,"col-md-6","col-lg-6"],[1,"mt-3"],[1,"border-bottom","w-50"],[1,"mt-4"],[1,"fw-400","fs-14"],[1,"pink-btn","p-2","fs-12","pe-3","ps-3",3,"click"],[1,"d-flex","justify-content-between"],["src","assets/images/profile-image.png",1,"wh-225","p-2"],["alt","",1,"wh-225","p-2",3,"src"],[1,"text-yellow"],[0,"mailto","class","text-gray"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.YNc(5,q,1,0,"img",5),e.YNc(6,w,1,1,"img",6),e.qZA(),e.TgZ(7,"div",7),e._UZ(8,"div",8),e.qZA()()(),e.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"h4",13),e._uU(14),e.qZA(),e.YNc(15,f,2,1,"h6",14),e.YNc(16,P,2,1,"p",15),e.qZA(),e._UZ(17,"div",16),e.qZA()()()(),e.TgZ(18,"div",17)(19,"div",18)(20,"div",19)(21,"h3"),e._uU(22,"My Plans"),e.qZA()(),e.TgZ(23,"div",20)(24,"div",21)(25,"div",22)(26,"h5",23),e._uU(27,"Plan Details"),e.qZA()(),e.TgZ(28,"div",24)(29,"p",25),e._uU(30),e.qZA(),e.TgZ(31,"button",26),e.NdJ("click",function(){return i.navigate()}),e._uU(32,"Upgrade Plan"),e.qZA()()(),e.TgZ(33,"div",21)(34,"div",22)(35,"h5",23),e._uU(36,"Billing Details"),e.qZA()(),e.TgZ(37,"div",24)(38,"p",25),e._uU(39),e.qZA(),e.TgZ(40,"p",25),e._uU(41),e.qZA(),e.TgZ(42,"p",25),e._uU(43),e.qZA(),e.TgZ(44,"div",27)(45,"p",25),e._uU(46),e.ALo(47,"date"),e.qZA(),e.TgZ(48,"p",25),e._uU(49),e.ALo(50,"date"),e.qZA()()()()()(),e._uU(51,"` "),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.profileImage),e.xp6(1),e.Q6J("ngIf",!(null!=i.plandetails&&i.plandetails.profileImage)),e.xp6(8),e.hij(" ",null==i.plandetails?null:i.plandetails.firstName," "),e.xp6(1),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.designation),e.xp6(1),e.Q6J("ngIf",null==i.plandetails?null:i.plandetails.email),e.xp6(14),e.hij("Plan Name : Pro ( ",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.planName,")"),e.xp6(9),e.hij("Plan Name : Pro ( ",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.planName,")"),e.xp6(2),e.hij("Price : ",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.amount,""),e.xp6(2),e.hij("Time Duration : ",null==i.plandetails||null==i.plandetails.planId?null:i.plandetails.planId.timeDuration,""),e.xp6(3),e.hij("From : ",e.xi3(47,11,null==i.plandetails?null:i.plandetails.fromDate,"dd/MM/yyyy"),""),e.xp6(3),e.hij("To : ",e.xi3(50,14,null==i.plandetails?null:i.plandetails.expireDate,"dd/MM/yyyy"),""))},dependencies:[c.O5,c.uU]}),n})();var A=p(5861),Z="https://js.stripe.com/v3",y=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,U="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,v=Promise.resolve().then(function(){return a=null,null!==l||(l=new Promise(function(t,i){if(typeof window>"u"||typeof document>"u")t(null);else if(window.Stripe&&a&&console.warn(U),window.Stripe)t(window.Stripe);else try{var r=function(){for(var a=document.querySelectorAll('script[src^="'.concat(Z,'"]')),t=0;t<a.length;t++){var i=a[t];if(y.test(i.src))return i}return null}();r&&a?console.warn(U):r||(r=function(a){var t=a&&!a.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(Z).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(i),i}(a)),r.addEventListener("load",function(){window.Stripe?t(window.Stripe):i(new Error("Stripe.js not available"))}),r.addEventListener("error",function(){i(new Error("Failed to load Stripe.js"))})}catch(h){return void i(h)}})),l;var a});v.catch(function(n){console.warn(n)});var M=p(7649),k=p(433),E=p(529);let I=(()=>{class n{constructor(t){this.http=t}makePayment(t){return this.http.post("https://api.giveaspark.com/api/stripe/paymentIntent",{token:t})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(E.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const O=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-plan"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},dependencies:[g.lC]}),n})(),children:[{path:"",redirectTo:"plan-dashboard",pathMatch:"full"},{path:"plan-dashboard",component:(()=>{class n{constructor(t,i,r,h,F){this.elementRef=t,this.api=i,this.spinner=r,this.fb=h,this.paymentService=F,this.amount=0}ngOnInit(){this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1e3)}paymentSelectC(){this.api.makePayment({SelectPlan:"Plan C",quantity:"1"}).subscribe(function(){var i=(0,A.Z)(function*(r){(yield(0,M.loadStripe)("pk_live_51Mds83SEEnMfzbAjs4DBJPc0LR3eaVUxn3zz6dJVeIQZVHEfXhgw648VGZI5OSetcVJFUkImaNHDAnPGDmnDsJ22001CDI558x"))?.redirectToCheckout({sessionId:r.id}),console.log(r,"paymentdata")});return function(r){return i.apply(this,arguments)}}())}paymentSelectB(){this.api.makePayment({SelectPlan:"Plan B",quantity:"6"}).subscribe(i=>{console.log(i,i.paymentIntent),alert("Payment Successfully")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(b.O),e.Y36(T.t2),e.Y36(k.qu),e.Y36(I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-plan-dashboard"]],decls:207,vars:0,consts:[[1,"row","m-0","p-0"],[1,"col-md-4","col-lg-4","mt-2"],[1,"border-10","bg-darkgray","position-relative"],["src","assets/images/plans-image.png",1,"img-fluid"],[1,"position-relative"],[1,"text-center","mb-0","plan-heading","position-absolute","start-50","translate-middle"],[1,"fw-bold","fs-1"],[1,"text-yellow","fs-2"],[1,"text-center","p-3","mt-2","border-white"],[1,"text-darkblue","fw-semibold","fs-14"],[1,"text-lgblack","fs-14"],[1,"white-btn","fw-semibold","p-2","pe-4","ps-4"],[1,"text-center","p-3","mt-2"],[1,"d-flex","align-items-center"],[1,"text-green","pe-2"],[1,"fa","fa-check"],[1,"fs-14"],[1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"click"],["type","button","id","getThisPlan",1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"click"],["id","payment-form"],["id","link-authentication-element"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],["id","payment-element"],["id","submit"],["id","spinner",1,"spinner","hidden"],["id","button-text"],["id","payment-message",1,"hidden"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"],["id","exampleModal1","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["action","/charge","method","post","id","payment-form"],[1,"form-row"],["for","card-element"],["id","card-element"],["id","card-errors","role","alert"],["type","submit","value","Submit Payment",1,"submit"],["id","exampleModalLabel",1,"modal-title"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4)(5,"div",5)(6,"h2",6),e._uU(7,"Plan (A)"),e.qZA(),e.TgZ(8,"h3",7),e._uU(9,"FREE"),e.qZA()()(),e.TgZ(10,"div",8)(11,"p",9),e._uU(12,"For Personal Use "),e.qZA(),e.TgZ(13,"p",10),e._uU(14,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(15,"button",11),e._uU(16," Get This Plan "),e.qZA()(),e.TgZ(17,"div",12)(18,"div",13)(19,"p",14),e._UZ(20,"i",15),e.qZA(),e.TgZ(21,"p",16),e._uU(22,"Create Free Signature "),e.qZA()(),e.TgZ(23,"div",13)(24,"p",14),e._UZ(25,"i",15),e.qZA(),e.TgZ(26,"p",16),e._uU(27,"Only For Single User "),e.qZA()(),e.TgZ(28,"div",13)(29,"p",14),e._UZ(30,"i",15),e.qZA(),e.TgZ(31,"p",16),e._uU(32,"Create Single Signature "),e.qZA()(),e.TgZ(33,"div",13)(34,"p",14),e._UZ(35,"i",15),e.qZA(),e.TgZ(36,"p",16),e._uU(37,"Limited Quotes & Stories "),e.qZA()(),e.TgZ(38,"div",13)(39,"p",14),e._UZ(40,"i",15),e.qZA(),e.TgZ(41,"p",16),e._uU(42,"No Customizations In Design "),e.qZA()(),e.TgZ(43,"div",13)(44,"p",14),e._UZ(45,"i",15),e.qZA(),e.TgZ(46,"p",16),e._uU(47,"Give A Spark Ad On Signature "),e.qZA()()()()(),e.TgZ(48,"div",1)(49,"div",2),e._UZ(50,"img",3),e.TgZ(51,"div",4)(52,"div",5)(53,"h2",6),e._uU(54,"Plan (B)"),e.qZA(),e.TgZ(55,"h3",7),e._uU(56,"$ 5.5"),e.qZA(),e.TgZ(57,"p",16),e._uU(58,"Per Month"),e.qZA()()(),e.TgZ(59,"div",8)(60,"p",9),e._uU(61,"For 2 Users "),e.qZA(),e.TgZ(62,"p",10),e._uU(63,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(64,"button",17),e.NdJ("click",function(){return i.paymentSelectB()}),e._uU(65," Get This Plan "),e.qZA()(),e.TgZ(66,"div",12)(67,"div",13)(68,"p",14),e._UZ(69,"i",15),e.qZA(),e.TgZ(70,"p",16),e._uU(71,"Create 2 Professional Email Signature "),e.qZA()(),e.TgZ(72,"div",13)(73,"p",14),e._UZ(74,"i",15),e.qZA(),e.TgZ(75,"p",16),e._uU(76,"Upload Profile Image "),e.qZA()(),e.TgZ(77,"div",13)(78,"p",14),e._UZ(79,"i",15),e.qZA(),e.TgZ(80,"p",16),e._uU(81,"3 Email Templates Fully Customizable "),e.qZA()(),e.TgZ(82,"div",13)(83,"p",14),e._UZ(84,"i",15),e.qZA(),e.TgZ(85,"p",16),e._uU(86,"Additional Quotes & Stories "),e.qZA()(),e.TgZ(87,"div",13)(88,"p",14),e._UZ(89,"i",15),e.qZA(),e.TgZ(90,"p",16),e._uU(91,"No Give A Spark Logo On Signature "),e.qZA()()()()(),e.TgZ(92,"div",1)(93,"div",2),e._UZ(94,"img",3),e.TgZ(95,"div",4)(96,"div",5)(97,"h2",6),e._uU(98,"Plan (C)"),e.qZA(),e.TgZ(99,"h3",7),e._uU(100,"$ 10"),e.qZA(),e.TgZ(101,"p",16),e._uU(102,"Per Month"),e.qZA()()(),e.TgZ(103,"div",8)(104,"p",9),e._uU(105,"For Personal Use "),e.qZA(),e.TgZ(106,"p",10),e._uU(107,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(108,"button",18),e.NdJ("click",function(){return i.paymentSelectC()}),e._uU(109," Get This Plan "),e.qZA()(),e.TgZ(110,"div",12)(111,"div",13)(112,"p",14),e._UZ(113,"i",15),e.qZA(),e.TgZ(114,"p",16),e._uU(115,"Create 3 Professional User Signature. "),e.qZA()(),e.TgZ(116,"div",13)(117,"p",14),e._UZ(118,"i",15),e.qZA(),e.TgZ(119,"p",16),e._uU(120,"Unlimited Customization "),e.qZA()(),e.TgZ(121,"div",13)(122,"p",14),e._UZ(123,"i",15),e.qZA(),e.TgZ(124,"p",16),e._uU(125,"Unlimited Quotes & Stories "),e.qZA()(),e.TgZ(126,"div",13)(127,"p",14),e._UZ(128,"i",15),e.qZA(),e.TgZ(129,"p",16),e._uU(130,"Custom Quotes & Stories "),e.qZA()(),e.TgZ(131,"div",13)(132,"p",14),e._UZ(133,"i",15),e.qZA(),e.TgZ(134,"p",16),e._uU(135,"Unlimited Email Templates "),e.qZA()(),e.TgZ(136,"div",13)(137,"p",14),e._UZ(138,"i",15),e.qZA(),e.TgZ(139,"p",16),e._uU(140,"Social Media Links "),e.qZA()(),e.TgZ(141,"div",13)(142,"p",14),e._UZ(143,"i",15),e.qZA(),e.TgZ(144,"p",16),e._uU(145,"Social Media Sharing With Custom Logo "),e.qZA()(),e.TgZ(146,"div",13)(147,"p",14),e._UZ(148,"i",15),e.qZA(),e.TgZ(149,"p",16),e._uU(150,"Social Media Story With Audio "),e.qZA()()()()()(),e.TgZ(151,"form",19),e._UZ(152,"div",20),e.qZA(),e.TgZ(153,"div",21)(154,"div",22)(155,"div",23)(156,"div",24)(157,"h1",25),e._uU(158,"Plan B"),e.qZA(),e._UZ(159,"button",26),e.qZA(),e.TgZ(160,"div",27)(161,"form",19),e._UZ(162,"div",20)(163,"div",28),e.TgZ(164,"button",29),e._UZ(165,"div",30),e.TgZ(166,"span",31),e._uU(167,"Pay now"),e.qZA()(),e._UZ(168,"div",32),e.qZA()(),e.TgZ(169,"div",33)(170,"button",34),e._uU(171,"Close"),e.qZA(),e.TgZ(172,"button",35),e._uU(173,"Save changes"),e.qZA()()()()(),e.TgZ(174,"div",36)(175,"div",22)(176,"div",23)(177,"div",24)(178,"h1",25),e._uU(179,"Plan C"),e.qZA(),e._UZ(180,"button",26),e.qZA(),e.TgZ(181,"div",27)(182,"form",37)(183,"div",38)(184,"label",39),e._uU(185," Credit or debit card "),e.qZA(),e._UZ(186,"div",40)(187,"div",41),e.qZA(),e._UZ(188,"input",42),e.qZA()(),e.TgZ(189,"div",33)(190,"button",34),e._uU(191,"Close"),e.qZA(),e.TgZ(192,"button",35),e._uU(193,"Save changes"),e.qZA()()()()(),e.TgZ(194,"div",21)(195,"div",22)(196,"div",23)(197,"div",24)(198,"h5",43),e._uU(199,"Modal title "),e.qZA(),e._UZ(200,"button",26),e.qZA(),e._UZ(201,"div",27),e.TgZ(202,"div",33)(203,"button",34),e._uU(204,"Close"),e.qZA(),e.TgZ(205,"button",35),e._uU(206,"Save changes"),e.qZA()()()()())},styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;-webkit-font-smoothing:antialiased;display:flex;justify-content:center;align-content:center;height:100vh;width:100vw}form[_ngcontent-%COMP%]{width:30vw;min-width:500px;align-self:center;box-shadow:0 0 0 .5px #32325d1a,0 2px 5px #32325d1a,0 1px 1.5px #00000012;border-radius:7px;padding:40px}.hidden[_ngcontent-%COMP%]{display:none}#payment-message[_ngcontent-%COMP%]{color:#697386;font-size:16px;line-height:20px;padding-top:12px;text-align:center}#payment-element[_ngcontent-%COMP%]{margin-bottom:24px}button[_ngcontent-%COMP%]{background:#5469d4;font-family:Arial,sans-serif;color:#fff;border-radius:4px;border:0;padding:12px 16px;font-size:16px;font-weight:600;cursor:pointer;display:block;transition:all .2s ease;box-shadow:0 4px 5.5px #00000012;width:100%}button[_ngcontent-%COMP%]:hover{filter:contrast(115%)}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.spinner[_ngcontent-%COMP%], .spinner[_ngcontent-%COMP%]:before, .spinner[_ngcontent-%COMP%]:after{border-radius:50%}.spinner[_ngcontent-%COMP%]{color:#fff;font-size:22px;text-indent:-99999px;margin:0 auto;position:relative;width:20px;height:20px;box-shadow:inset 0 0 0 2px;transform:translateZ(0)}.spinner[_ngcontent-%COMP%]:before, .spinner[_ngcontent-%COMP%]:after{position:absolute;content:""}.spinner[_ngcontent-%COMP%]:before{width:10.4px;height:20.4px;background:#5469d4;border-radius:20.4px 0 0 20.4px;top:-.2px;left:-.2px;transform-origin:10.4px 10.2px;animation:loading 2s infinite ease 1.5s}.spinner[_ngcontent-%COMP%]:after{width:10.4px;height:10.2px;background:#5469d4;border-radius:0 10.2px 10.2px 0;top:-.1px;left:10.2px;transform-origin:0px 10.2px;animation:loading 2s infinite ease}@keyframes loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media only screen and (max-width: 600px){form[_ngcontent-%COMP%]{width:80vw;min-width:initial}}']}),n})()},{path:"myplan",component:x},{path:"plan-purchase",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-plan-purchase"]],decls:85,vars:0,consts:[[1,"col-md-11","col-lg-11"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-6","col-lg-6","p-0"],[1,"text-center","box-hight","bg-black","p-5","position-relative"],[1,"text-white","pb-3"],[1,"text-yellow"],[1,"text-white","pb-3","fs-1"],[1,"text-center"],[1,"d-flex"],[1,"fa","fa-check","text-green","pe-4"],[1,"text-gray"],[1,"position-absolute","end-0","top-50"],["alt","","src","assets/images/s-line.png"],[1,"text-center","box-hight","bg-white","p-5"],[1,"mb-3"],["aria-label","Default select example",1,"form-select","p-3","rounded-pill","text-gray"],["selected",""],["value","1"],["value","2"],["value","3"],["type","text","aria-describedby","textHelp","placeholder","Enter card number",1,"form-control","p-3","text-gray","rounded-pill"],["type","email","placeholder","Enter email address","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control","p-3","text-gray","rounded-pill"],["type","submit",1,"btn","pink-btn","w-100","p-3"],[1,"d-flex","mt-4","justify-content-around"],["src","assets/images/visa.png","alt","",1,"img-fluid"],["src","assets/images/gpay.png","alt","",1,"img-fluid"],["src","assets/images/paypal.png","alt","",1,"img-fluid"],["src","assets/images/card.png","alt","",1,"img-fluid"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Get "),e.TgZ(6,"span",5),e._uU(7,"Give A Spark"),e.qZA(),e._UZ(8,"br"),e._uU(9,"Pro Plan"),e.qZA(),e.TgZ(10,"h2",6),e._uU(11,"$ 10"),e.qZA(),e.TgZ(12,"div",7)(13,"div",8),e._UZ(14,"i",9),e.TgZ(15,"p",10),e._uU(16,"Create 3 Professional User Signature."),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"i",9),e.TgZ(19,"p",10),e._uU(20,"Create 3 Professional User Signature."),e.qZA()(),e.TgZ(21,"div",8),e._UZ(22,"i",9),e.TgZ(23,"p",10),e._uU(24,"Unlimited Customization"),e.qZA()(),e.TgZ(25,"div",8),e._UZ(26,"i",9),e.TgZ(27,"p",10),e._uU(28,"Unlimited Quotes & Stories"),e.qZA()(),e.TgZ(29,"div",8),e._UZ(30,"i",9),e.TgZ(31,"p",10),e._uU(32,"Custom Quotes & Stories"),e.qZA()(),e.TgZ(33,"div",8),e._UZ(34,"i",9),e.TgZ(35,"p",10),e._uU(36,"Unlimited Email Templates"),e.qZA()(),e.TgZ(37,"div",8),e._UZ(38,"i",9),e.TgZ(39,"p",10),e._uU(40,"Social Media Links"),e.qZA()(),e.TgZ(41,"div",8),e._UZ(42,"i",9),e.TgZ(43,"p",10),e._uU(44,"Social Media Sharing With Custom Logo"),e.qZA()(),e.TgZ(45,"div",8),e._UZ(46,"i",9),e.TgZ(47,"p",10),e._uU(48,"Social Media Story With Audio"),e.qZA()()(),e.TgZ(49,"div",11),e._UZ(50,"img",12),e.qZA()()(),e.TgZ(51,"div",2)(52,"div",13)(53,"form")(54,"div",14)(55,"select",15)(56,"option",16),e._uU(57,"Select payment method"),e.qZA(),e.TgZ(58,"option",17),e._uU(59,"One"),e.qZA(),e.TgZ(60,"option",18),e._uU(61,"Two"),e.qZA(),e.TgZ(62,"option",19),e._uU(63,"Three"),e.qZA()()(),e.TgZ(64,"div",14),e._UZ(65,"input",20),e.qZA(),e.TgZ(66,"div",14),e._UZ(67,"input",21),e.qZA(),e.TgZ(68,"div",14)(69,"select",15)(70,"option",16),e._uU(71,"Select Country "),e.qZA(),e.TgZ(72,"option",17),e._uU(73,"One"),e.qZA(),e.TgZ(74,"option",18),e._uU(75,"Two"),e.qZA(),e.TgZ(76,"option",19),e._uU(77,"Three"),e.qZA()()(),e.TgZ(78,"button",22),e._uU(79,"Purchase Continue"),e.qZA()(),e.TgZ(80,"div",23),e._UZ(81,"img",24)(82,"img",25)(83,"img",26)(84,"img",27),e.qZA()()()()())}}),n})()}]}];let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(O),g.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,j,T.ef]}),n})()},8796:(S,_)=>{"use strict";function c(u){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(u)}var Z,g="https://js.stripe.com/v3",e=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,b="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",f=null,P=function(o){return null!==f||(f=new Promise(function(s,l){if(typeof window>"u"||typeof document>"u")s(null);else if(window.Stripe&&o&&console.warn(b),window.Stripe)s(window.Stripe);else try{var d=function(){for(var o=document.querySelectorAll('script[src^="'.concat(g,'"]')),s=0;s<o.length;s++){var l=o[s];if(e.test(l.src))return l}return null}();d&&o?console.warn(b):d||(d=function(o){var s=o&&!o.advancedFraudSignals?"?advancedFraudSignals=false":"",l=document.createElement("script");l.src="".concat(g).concat(s);var d=document.head||document.body;if(!d)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return d.appendChild(l),l}(o)),d.addEventListener("load",function(){window.Stripe?s(window.Stripe):l(new Error("Stripe.js not available"))}),d.addEventListener("error",function(){l(new Error("Failed to load Stripe.js"))})}catch(m){return void l(m)}})),f},x=function(o,s,l){if(null===o)return null;var d=o.apply(void 0,s);return function(o,s){!o||!o._registerWrapper||o._registerWrapper({name:"stripe-js",version:"1.47.0",startTime:s})}(d,l),d},A=function(o){var s="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(o),"\n");if(null===o||"object"!==c(o))throw new Error(s);if(1===Object.keys(o).length&&"boolean"==typeof o.advancedFraudSignals)return o;throw new Error(s)},y=!1,U=function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];y=!0;var d=Date.now();return P(Z).then(function(m){return x(m,s,d)})};U.setLoadParameters=function(u){if(y&&Z){var o=A(u);if(Object.keys(o).reduce(function(d,m){var v;return d&&u[m]===(null===(v=Z)||void 0===v?void 0:v[m])},!0))return}if(y)throw new Error("You cannot change load parameters after calling loadStripe");Z=A(u)},_.loadStripe=U},7649:(S,_,p)=>{S.exports=p(8796)}}]);