"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[205],{9205:(Q,l,r)=>{r.r(l),r.d(l,{QuoteDashboardModule:()=>C});var i=r(6895),g=r(6773),o=r(8256),c=r(7177),u=r(433);function d(t,a){if(1&t&&(o.TgZ(0,"option",10),o._uU(1),o.qZA()),2&t){const e=a.$implicit;o.Q6J("value",e._id),o.xp6(1),o.Oqu(e.name)}}function b(t,a){if(1&t&&(o.TgZ(0,"option",10),o._uU(1),o.qZA()),2&t){const e=a.$implicit;o.Q6J("value",null==e?null:e._id),o.xp6(1),o.Oqu(null==e?null:e.name)}}function p(t,a){if(1&t&&(o.TgZ(0,"option",10),o._uU(1),o.qZA()),2&t){const e=a.$implicit;o.Q6J("value",null==e?null:e._id),o.xp6(1),o.hij(" ",null==e?null:e.name," ")}}function m(t,a){if(1&t&&(o.TgZ(0,"div",11)(1,"h3"),o._uU(2," Quotes Name "),o.qZA(),o.TgZ(3,"p"),o._uU(4),o.qZA(),o.TgZ(5,"h3"),o._uU(6,"Author Name :-"),o.qZA(),o.TgZ(7,"div"),o._uU(8),o.qZA()()),2&t){const e=a.$implicit;o.xp6(4),o.Oqu(null==e?null:e.longQuotes),o.xp6(4),o.AsE("",null==e||null==e.authorId?null:e.authorId.firstName,"",null==e||null==e.authorId?null:e.authorId.lastName,"")}}const h=[{path:"",component:(()=>{class t{constructor(e,s){this.api=e,this.fb=s,this.showQuotesForm=this.fb.group({categoriesId:[""],subCategoriesId:[""],subSubCategoriesId:[""]})}ngOnInit(){this.getCategory()}getCategory(){this.api.getCategoryList().subscribe(e=>{this.category=e,console.log(this.category)})}getSubCategory(){let e=this.showQuotesForm.value;console.log(e),this.api.getSubCategoryList(e.categoriesId).subscribe(s=>{this.subCategory=s,console.log(this.subCategory)})}getSubsubCategory(){let e=this.showQuotesForm.value;console.log(e),this.api.getSubSubCat(e.subCategoriesId).subscribe(s=>{this.subSubCategory=s,console.log(this.subSubCategory)})}showQuote(e){let s={filters:{categoriesId:e.categoriesId,subCategoriesId:e.subCategoriesId,subSubCategoriesId:e.subSubCategoriesId}};console.log(s,"body"),this.api.motivaionalQuotebyFilter(s).subscribe(n=>{this.quoteList=n?.result,console.log(n),console.log(s)},n=>{})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.O),o.Y36(u.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-quote-dashboard"]],decls:19,vars:5,consts:[[3,"formGroup"],[1,"row","m-0","p-0","justify-content-center","mt-3"],[1,"col-md-4","col-lg-4"],["aria-label","Default select example","formControlName","categoriesId",1,"form-select","fs-12","text-light","bg-dark","border-1","p-3","w-100",3,"change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["aria-label","Default select example","formControlName","subCategoriesId",1,"form-select","fs-12","text-light","bg-dark","border-1","p-3","w-100",3,"change"],["aria-label","Default select example","formControlName","subSubCategoriesId",1,"form-select","fs-12","text-light","bg-dark","border-1","p-3","w-100",3,"change"],[1,"col-6","m-3"],["class","border border-dark p-3 m-2",4,"ngFor","ngForOf"],[3,"value"],[1,"border","border-dark","p-3","m-2"]],template:function(e,s){1&e&&(o.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"select",3),o.NdJ("change",function(){return s.getSubCategory()}),o.TgZ(4,"option",4),o._uU(5,"Select Category"),o.qZA(),o.YNc(6,d,2,2,"option",5),o.qZA()(),o.TgZ(7,"div",2)(8,"select",6),o.NdJ("change",function(){return s.getSubsubCategory()}),o.TgZ(9,"option",4),o._uU(10,"Select Sub Category"),o.qZA(),o.YNc(11,b,2,2,"option",5),o.qZA()(),o.TgZ(12,"div",2)(13,"select",7),o.NdJ("change",function(){return s.showQuote(s.showQuotesForm.value)}),o.TgZ(14,"option",4),o._uU(15,"Select Sub Sub Category"),o.qZA(),o.YNc(16,p,2,2,"option",5),o.qZA()()()(),o.TgZ(17,"div",8),o.YNc(18,m,9,3,"div",9),o.qZA()),2&e&&(o.Q6J("formGroup",s.showQuotesForm),o.xp6(6),o.Q6J("ngForOf",s.category),o.xp6(5),o.Q6J("ngForOf",s.subCategory),o.xp6(5),o.Q6J("ngForOf",null==s.subSubCategory?null:s.subSubCategory.subSubCategories),o.xp6(2),o.Q6J("ngForOf",s.quoteList))},dependencies:[i.sg,u._Y,u.YN,u.Kr,u.EJ,u.JJ,u.JL,u.sg,u.u]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.Bz.forChild(h),g.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.ez,f,u.UX,u.u5]}),t})()}}]);