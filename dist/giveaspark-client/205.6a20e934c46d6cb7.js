"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[205],{9205:(C,u,n)=>{n.r(u),n.d(u,{QuoteDashboardModule:()=>v});var r=n(6895),g=n(6773),o=n(8256),c=n(7177),l=n(433);function d(t,a){if(1&t&&(o.TgZ(0,"option",30),o._uU(1),o.qZA()),2&t){const e=a.$implicit;o.Q6J("value",e._id),o.xp6(1),o.Oqu(e.name)}}function m(t,a){if(1&t&&(o.TgZ(0,"option",30),o._uU(1),o.qZA()),2&t){const e=a.$implicit;o.Q6J("value",null==e?null:e._id),o.xp6(1),o.Oqu(null==e?null:e.name)}}function b(t,a){if(1&t&&(o.TgZ(0,"option",30),o._uU(1),o.qZA()),2&t){const e=a.$implicit;o.Q6J("value",null==e?null:e._id),o.xp6(1),o.hij(" ",null==e?null:e.name," ")}}function p(t,a){if(1&t&&(o.TgZ(0,"div",31)(1,"figure",32)(2,"blockquote",33)(3,"p",34),o._uU(4),o.qZA()(),o.TgZ(5,"figcaption",35)(6,"cite",36),o._uU(7),o.qZA()()()()),2&t){const e=a.$implicit;o.xp6(4),o.hij(" ",null==e?null:e.longQuotes," "),o.xp6(3),o.AsE("",null==e||null==e.authorId?null:e.authorId.firstName,"",null==e||null==e.authorId?null:e.authorId.lastName,"")}}const h=[{path:"",component:(()=>{class t{constructor(e,s){this.api=e,this.fb=s,this.showQuotesForm=this.fb.group({categoriesId:[""],subCategoriesId:[""],subSubCategoriesId:[""]})}ngOnInit(){this.getCategory()}getCategory(){this.api.getCategoryList().subscribe(e=>{this.category=e,console.log(this.category)})}getSubCategory(){let e=this.showQuotesForm.value;console.log(e),this.api.getSubCategoryList(e.categoriesId).subscribe(s=>{this.subCategory=s,console.log(this.subCategory)})}getSubsubCategory(){let e=this.showQuotesForm.value;console.log(e),this.api.getSubSubCat(e.subCategoriesId).subscribe(s=>{this.subSubCategory=s,console.log(this.subSubCategory)})}showQuote(e){let s={filters:{categoriesId:e.categoriesId,subCategoriesId:e.subCategoriesId,subSubCategoriesId:e.subSubCategoriesId}};console.log(s,"body"),this.api.motivaionalQuotebyFilter(s).subscribe(i=>{this.quoteList=i?.result,console.log(i),console.log(s),console.log(this.quoteList,"qqqq")},i=>{})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.O),o.Y36(l.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-quote-dashboard"]],decls:45,vars:5,consts:[[1,"row","align-items-center","position-relative"],[1,"mouse_move"],["id","img1","src","assets/images/logo-an.png","value","5",1,"mouse"],["id","img2","src","assets/images/btn-an.png","value","-5",1,"mouse"],[1,"col-md-3","col-lg-3","align-self-center","logo-bg"],["href","index.html",1,"navbar-brand"],["src","assets/images/logo.png",1,"img-fl"],[1,"col-md-8","col-lg-8","position-relative"],[1,"mt-4","container"],[1,"d-flex","align-items-start"],[1,"bg-yellow","p-2","mb-0"],["type","submit",1,"btn","pink-btn","p-2","ms-3"],[1,"col-md-1","col-lg-1","p-0"],[1,"d-flex"],["src","assets/images/profile.png"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"row","m-0","p-0","mt-4"],[3,"formGroup"],[1,"row"],[1,"col-md-4","col-lg-4"],["aria-label","Default select example","formControlName","categoriesId",1,"form-select","light-bg","p-3",3,"change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["aria-label","Default select example","formControlName","subCategoriesId",1,"form-select","light-bg","p-3",3,"change"],["aria-label","Default select example","formControlName","subSubCategoriesId",1,"form-select","light-bg","p-3",3,"change"],[1,"row","mt-4"],[1,"col-md-6","col-lg-6"],["class","border-10 box-border p-2",4,"ngFor","ngForOf"],[3,"value"],[1,"border-10","box-border","p-2"],[1,"text-center"],[1,"blockquote"],[1,"fs-14"],[1,"blockquote-footer"],["title","Source Title",1,"fs-24"]],template:function(e,s){1&e&&(o.TgZ(0,"header")(1,"div",0)(2,"div",1),o._UZ(3,"img",2)(4,"img",3),o.qZA(),o.TgZ(5,"div",4)(6,"a",5),o._UZ(7,"img",6),o.qZA()(),o.TgZ(8,"div",7)(9,"nav",8)(10,"div",9)(11,"p",10),o._uU(12,"Your free trial ends in 10 days.Upgrade now and get 15% early bird discount. "),o.qZA(),o.TgZ(13,"button",11),o._uU(14,"Upgrade Plan"),o.qZA()()()(),o.TgZ(15,"div",12)(16,"form",13),o._UZ(17,"img",14),o.qZA()()()(),o.TgZ(18,"div",15)(19,"div",16)(20,"div",17)(21,"h3"),o._uU(22,"Motivational Quotes"),o.qZA()(),o.TgZ(23,"div",18)(24,"div",16)(25,"form",19)(26,"div",20)(27,"div",21)(28,"select",22),o.NdJ("change",function(){return s.getSubCategory()}),o.TgZ(29,"option",23),o._uU(30,"Open this select menu"),o.qZA(),o.YNc(31,d,2,2,"option",24),o.qZA()(),o.TgZ(32,"div",21)(33,"select",25),o.NdJ("change",function(){return s.getSubsubCategory()}),o.TgZ(34,"option",23),o._uU(35,"Select Sub Category"),o.qZA(),o.YNc(36,m,2,2,"option",24),o.qZA()(),o.TgZ(37,"div",21)(38,"select",26),o.NdJ("change",function(){return s.showQuote(s.showQuotesForm.value)}),o.TgZ(39,"option",23),o._uU(40,"Select Sub Sub Category"),o.qZA(),o.YNc(41,b,2,2,"option",24),o.qZA()()()(),o.TgZ(42,"div",27)(43,"div",28),o.YNc(44,p,8,3,"div",29),o.qZA()()()()()()),2&e&&(o.xp6(25),o.Q6J("formGroup",s.showQuotesForm),o.xp6(6),o.Q6J("ngForOf",s.category),o.xp6(5),o.Q6J("ngForOf",s.subCategory),o.xp6(5),o.Q6J("ngForOf",null==s.subSubCategory?null:s.subSubCategory.subSubCategories),o.xp6(3),o.Q6J("ngForOf",s.quoteList))},dependencies:[r.sg,l._Y,l.YN,l.Kr,l.EJ,l.JJ,l.JL,l.sg,l.u,l.F]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.Bz.forChild(h),g.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[r.ez,f,l.UX,l.u5]}),t})()}}]);