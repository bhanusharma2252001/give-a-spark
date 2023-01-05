"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[332],{3332:(f,s,a)=>{a.r(s),a.d(s,{PlanModule:()=>m});var p=a(6895),l=a(6773),e=a(8256),Z=a(7177);const u=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-plan"]],decls:1,vars:0,template:function(n,o){1&n&&e._UZ(0,"router-outlet")},dependencies:[l.lC]}),t})(),children:[{path:"",redirectTo:"plan-dashboard",pathMatch:"full"},{path:"plan-dashboard",component:(()=>{class t{constructor(n){this.api=n,this.paymentHandler=null}ngOnInit(){this.invokeStripe()}makePayment(n,o){const r=window.StripeCheckout.configure({key:"pk_test_51MBbpvSIdADNOmjRYROfVBFFqQAIYAIDuhhtXRcc48QwGumM0cjiC0LmMqwQ8TSzZ0f4pzGNp5EuywRbO7iXbcOY00ZRZ7osjZ",locale:"auto",token:function(d){"planB"==o?d.SelectPlan="Plan B":"planC"==o&&(d.SelectPlan="Plan C"),console.log(d),console.log(n),c(d)}}),c=d=>{this.api.makePayment(d).subscribe(b=>{console.log(b),alert("Payment Successfully")})};r.open({name:"Email Signature",description:"Let's try your unique signature",amount:100*n})}invokeStripe(){if(!window.document.getElementById("stripe-script")){const n=window.document.createElement("script");n.id="stripe-script",n.type="text/javascript",n.src="https://checkout.stripe.com/checkout.js",n.onload=()=>{this.paymentHandler=window.StripeCheckout.configure({key:"pk_test_51MBbpvSIdADNOmjRYROfVBFFqQAIYAIDuhhtXRcc48QwGumM0cjiC0LmMqwQ8TSzZ0f4pzGNp5EuywRbO7iXbcOY00ZRZ7osjZ",locale:"auto",token:function(o){console.log(o)}})},window.document.body.appendChild(n)}}payment(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(Z.O))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-plan-dashboard"]],decls:213,vars:0,consts:[[1,"row","m-0","p-0"],[1,"col-md-4","col-lg-4","mt-2"],[1,"border-10","bg-darkgray","position-relative"],["src","assets/images/plans-image.png",1,"img-fluid"],[1,"position-relative"],[1,"text-center","mb-0","plan-heading","position-absolute","start-50","translate-middle"],[1,"fw-bold","fs-1"],[1,"text-yellow","fs-2"],[1,"text-center","p-3","mt-2","border-white"],[1,"text-darkblue","fw-semibold","fs-14"],[1,"text-lgblack","fs-14"],[1,"white-btn","fw-semibold","p-2","pe-4","ps-4"],[1,"text-center","p-3","mt-2"],[1,"d-flex","align-items-center"],[1,"text-green","pe-2"],[1,"fa","fa-check"],[1,"fs-14"],[1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"click"],["type","button",1,"white-btn","fw-semibold","p-2","pe-4","ps-4",3,"click"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],["id","payment-form"],["id","link-authentication-element"],["id","payment-element"],["id","submit"],["id","spinner",1,"spinner","hidden"],["id","button-text"],["id","payment-message",1,"hidden"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"],["id","exampleModal1","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["action","/charge","method","post","id","payment-form"],[1,"form-row"],["for","card-element"],["id","card-element"],["id","card-errors","role","alert"],["type","submit","value","Submit Payment",1,"submit"],["id","exampleModalLabel",1,"modal-title"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4)(5,"div",5)(6,"h2",6),e._uU(7,"Plan (A)"),e.qZA(),e.TgZ(8,"h3",7),e._uU(9,"FREE"),e.qZA()()(),e.TgZ(10,"div",8)(11,"p",9),e._uU(12,"For Personal Use "),e.qZA(),e.TgZ(13,"p",10),e._uU(14,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(15,"button",11),e._uU(16," Get This Plan "),e.qZA()(),e.TgZ(17,"div",12)(18,"div",13)(19,"p",14),e._UZ(20,"i",15),e.qZA(),e.TgZ(21,"p",16),e._uU(22,"Create Free Signature "),e.qZA()(),e.TgZ(23,"div",13)(24,"p",14),e._UZ(25,"i",15),e.qZA(),e.TgZ(26,"p",16),e._uU(27,"Only For Single User "),e.qZA()(),e.TgZ(28,"div",13)(29,"p",14),e._UZ(30,"i",15),e.qZA(),e.TgZ(31,"p",16),e._uU(32,"Create Single Signature "),e.qZA()(),e.TgZ(33,"div",13)(34,"p",14),e._UZ(35,"i",15),e.qZA(),e.TgZ(36,"p",16),e._uU(37,"Limited Quotes & Stories "),e.qZA()(),e.TgZ(38,"div",13)(39,"p",14),e._UZ(40,"i",15),e.qZA(),e.TgZ(41,"p",16),e._uU(42,"No Customizations In Design "),e.qZA()(),e.TgZ(43,"div",13)(44,"p",14),e._UZ(45,"i",15),e.qZA(),e.TgZ(46,"p",16),e._uU(47,"Give A Spark Ad On Signature "),e.qZA()()()()(),e.TgZ(48,"div",1)(49,"div",2),e._UZ(50,"img",3),e.TgZ(51,"div",4)(52,"div",5)(53,"h2",6),e._uU(54,"Plan (B)"),e.qZA(),e.TgZ(55,"h3",7),e._uU(56,"$ 5.5"),e.qZA(),e.TgZ(57,"p",16),e._uU(58,"Per Month"),e.qZA()()(),e.TgZ(59,"div",8)(60,"p",9),e._uU(61,"For 2 Users "),e.qZA(),e.TgZ(62,"p",10),e._uU(63,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(64,"button",17),e.NdJ("click",function(){return o.makePayment(5.5,"planB")}),e._uU(65," Get This Plan "),e.qZA()(),e.TgZ(66,"div",12)(67,"div",13)(68,"p",14),e._UZ(69,"i",15),e.qZA(),e.TgZ(70,"p",16),e._uU(71,"Create 2 Professional Email Signature "),e.qZA()(),e.TgZ(72,"div",13)(73,"p",14),e._UZ(74,"i",15),e.qZA(),e.TgZ(75,"p",16),e._uU(76,"Upload Profile Image "),e.qZA()(),e.TgZ(77,"div",13)(78,"p",14),e._UZ(79,"i",15),e.qZA(),e.TgZ(80,"p",16),e._uU(81,"3 Email Templates Fully Customizable "),e.qZA()(),e.TgZ(82,"div",13)(83,"p",14),e._UZ(84,"i",15),e.qZA(),e.TgZ(85,"p",16),e._uU(86,"Additional Quotes & Stories "),e.qZA()(),e.TgZ(87,"div",13)(88,"p",14),e._UZ(89,"i",15),e.qZA(),e.TgZ(90,"p",16),e._uU(91,"No Give A Spark Logo On Signature "),e.qZA()()()()(),e.TgZ(92,"div",1)(93,"div",2),e._UZ(94,"img",3),e.TgZ(95,"div",4)(96,"div",5)(97,"h2",6),e._uU(98,"Plan (C)"),e.qZA(),e.TgZ(99,"h3",7),e._uU(100,"$ 10"),e.qZA(),e.TgZ(101,"p",16),e._uU(102,"Per Month"),e.qZA()()(),e.TgZ(103,"div",8)(104,"p",9),e._uU(105,"For Personal Use "),e.qZA(),e.TgZ(106,"p",10),e._uU(107,"Create a simple email signature for yourself."),e.qZA(),e.TgZ(108,"button",18),e.NdJ("click",function(){return o.makePayment(10,"planC")}),e._uU(109," Get This Plan "),e.qZA()(),e.TgZ(110,"div",12)(111,"div",13)(112,"p",14),e._UZ(113,"i",15),e.qZA(),e.TgZ(114,"p",16),e._uU(115,"Create 3 Professional User Signature. "),e.qZA()(),e.TgZ(116,"div",13)(117,"p",14),e._UZ(118,"i",15),e.qZA(),e.TgZ(119,"p",16),e._uU(120,"Unlimited Customization "),e.qZA()(),e.TgZ(121,"div",13)(122,"p",14),e._UZ(123,"i",15),e.qZA(),e.TgZ(124,"p",16),e._uU(125,"Unlimited Quotes & Stories "),e.qZA()(),e.TgZ(126,"div",13)(127,"p",14),e._UZ(128,"i",15),e.qZA(),e.TgZ(129,"p",16),e._uU(130,"Custom Quotes & Stories "),e.qZA()(),e.TgZ(131,"div",13)(132,"p",14),e._UZ(133,"i",15),e.qZA(),e.TgZ(134,"p",16),e._uU(135,"Unlimited Email Templates "),e.qZA()(),e.TgZ(136,"div",13)(137,"p",14),e._UZ(138,"i",15),e.qZA(),e.TgZ(139,"p",16),e._uU(140,"Social Media Links "),e.qZA()(),e.TgZ(141,"div",13)(142,"p",14),e._UZ(143,"i",15),e.qZA(),e.TgZ(144,"p",16),e._uU(145,"Social Media Sharing With Custom Logo "),e.qZA()(),e.TgZ(146,"div",13)(147,"p",14),e._UZ(148,"i",15),e.qZA(),e.TgZ(149,"p",16),e._uU(150,"Social Media Story With Audio "),e.qZA()()()()()(),e.TgZ(151,"div",19)(152,"div",20)(153,"div",21)(154,"div",22)(155,"h1",23),e._uU(156,"Plan B"),e.qZA(),e._UZ(157,"button",24),e.qZA(),e.TgZ(158,"div",25)(159,"form",26),e._UZ(160,"div",27)(161,"div",28),e.TgZ(162,"button",29),e._UZ(163,"div",30),e.TgZ(164,"span",31),e._uU(165,"Pay now"),e.qZA()(),e._UZ(166,"div",32),e.qZA()(),e.TgZ(167,"div",33)(168,"button",34),e._uU(169,"Close"),e.qZA(),e.TgZ(170,"button",35),e._uU(171,"Save changes"),e.qZA()()()()(),e.TgZ(172,"div",36)(173,"div",20)(174,"div",21)(175,"div",22)(176,"h1",23),e._uU(177,"Plan C"),e.qZA(),e._UZ(178,"button",24),e.qZA(),e.TgZ(179,"div",25)(180,"form",37)(181,"div",38)(182,"label",39),e._uU(183," Credit or debit card "),e.qZA(),e._UZ(184,"div",40)(185,"div",41),e.qZA(),e._UZ(186,"input",42),e.qZA()(),e.TgZ(187,"div",33)(188,"button",34),e._uU(189,"Close"),e.qZA(),e.TgZ(190,"button",35),e._uU(191,"Save changes"),e.qZA()()()()(),e.TgZ(192,"div",19)(193,"div",20)(194,"div",21)(195,"div",22)(196,"h5",43),e._uU(197,"Modal title "),e.qZA(),e._UZ(198,"button",24),e.qZA(),e.TgZ(199,"div",25)(200,"form",26),e._UZ(201,"div",27)(202,"div",28),e.TgZ(203,"button",29),e._UZ(204,"div",30),e.TgZ(205,"span",31),e._uU(206,"Pay now"),e.qZA()(),e._UZ(207,"div",32),e.qZA()(),e.TgZ(208,"div",33)(209,"button",34),e._uU(210,"Close"),e.qZA(),e.TgZ(211,"button",35),e._uU(212,"Save changes"),e.qZA()()()()())},styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:16px;-webkit-font-smoothing:antialiased;display:flex;justify-content:center;align-content:center;height:100vh;width:100vw}form[_ngcontent-%COMP%]{width:30vw;min-width:500px;align-self:center;box-shadow:0 0 0 .5px #32325d1a,0 2px 5px #32325d1a,0 1px 1.5px #00000012;border-radius:7px;padding:40px}.hidden[_ngcontent-%COMP%]{display:none}#payment-message[_ngcontent-%COMP%]{color:#697386;font-size:16px;line-height:20px;padding-top:12px;text-align:center}#payment-element[_ngcontent-%COMP%]{margin-bottom:24px}button[_ngcontent-%COMP%]{background:#5469d4;font-family:Arial,sans-serif;color:#fff;border-radius:4px;border:0;padding:12px 16px;font-size:16px;font-weight:600;cursor:pointer;display:block;transition:all .2s ease;box-shadow:0 4px 5.5px #00000012;width:100%}button[_ngcontent-%COMP%]:hover{filter:contrast(115%)}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.spinner[_ngcontent-%COMP%], .spinner[_ngcontent-%COMP%]:before, .spinner[_ngcontent-%COMP%]:after{border-radius:50%}.spinner[_ngcontent-%COMP%]{color:#fff;font-size:22px;text-indent:-99999px;margin:0 auto;position:relative;width:20px;height:20px;box-shadow:inset 0 0 0 2px;transform:translateZ(0)}.spinner[_ngcontent-%COMP%]:before, .spinner[_ngcontent-%COMP%]:after{position:absolute;content:""}.spinner[_ngcontent-%COMP%]:before{width:10.4px;height:20.4px;background:#5469d4;border-radius:20.4px 0 0 20.4px;top:-.2px;left:-.2px;transform-origin:10.4px 10.2px;animation:loading 2s infinite ease 1.5s}.spinner[_ngcontent-%COMP%]:after{width:10.4px;height:10.2px;background:#5469d4;border-radius:0 10.2px 10.2px 0;top:-.1px;left:10.2px;transform-origin:0px 10.2px;animation:loading 2s infinite ease}@keyframes loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media only screen and (max-width: 600px){form[_ngcontent-%COMP%]{width:80vw;min-width:initial}}']}),t})()}]}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(u),l.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,g]}),t})()}}]);