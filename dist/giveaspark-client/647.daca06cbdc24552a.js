"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[647],{6647:(y,d,a)=>{a.r(d),a.d(d,{MyquoteModule:()=>h});var u=a(6895),m=a(4173),i=a(433),t=a(8274),p=a(7177),c=a(7185);const g=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-myquote"]],decls:1,vars:0,template:function(o,r){1&o&&t._UZ(0,"router-outlet")},dependencies:[m.lC]}),e})(),children:[{path:"",redirectTo:"quote-dashboard",pathMatch:"full"},{path:"quote-dashboard",loadChildren:()=>a.e(446).then(a.bind(a,4446)).then(e=>e.QuoteDashboardModule)},{path:"add-quote",loadChildren:()=>a.e(569).then(a.bind(a,8569)).then(e=>e.AddQuoteModule)},{path:"add-story",component:(()=>{class e{constructor(o,r,l,s){this.api=o,this.fb=r,this.router=l,this.toast=s,this.imageData=[],this.Submitted=!1,this.imageFile="",this.isImage=!0,this.addStoryForm=this.fb.group({writerName:["",i.kI.required],writerProfile:[""],enterStories:[""]})}ngOnInit(){}onSelectImage(o){let r=o.target.files;if(this.imageFile=o.target.files[0].name,r){this.uploadImage=r[0],this.subImageSubmit();for(let s of r){if(!s.type.includes("image"))return void(this.isImage=!1);this.imageData.push(s)}}if(o.target.files&&o.target.files[0]){var l=new FileReader;l.readAsDataURL(o.target.files[0]),l.onload=s=>{this.url=s.target?.result}}}subImageSubmit(){let o=new FormData;o.append("attachment",this.uploadImage),this.api.addAttachments(o).subscribe(r=>{console.log(r),this.imageData1=r,this.imageData2=this.imageData1[0].key,console.log(this.imageData1[0].key,"image key "),console.log(this.imageData2)},r=>{console.log(r)})}get f(){return this.addStoryForm.controls}saveStory(o){this.api.addMyStory({writerName:o.writerName,writerProfile:this.imageData2,enterStories:o.enterStories}).subscribe(l=>{console.log(l),this.toast.success("Added  Successfully"),this.router.navigate(["home-dashboard/myquote/quote-dashboard"])},l=>{this.toast.error("please try again")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.O),t.Y36(i.qu),t.Y36(m.F0),t.Y36(c._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-story"]],decls:27,vars:1,consts:[[1,"row","m-0","p-0","mt-3"],[1,"col-md-7","col-lg-10"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"row","m-0","p-0","mt-4"],[1,"row","position-relative",3,"formGroup","ngSubmit"],[1,"col-md-6","col-lg-6"],[1,"mb-2"],["for","exampleInputfiled",1,"form-label"],["type","text","formControlName","writerName","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","border-blue","rounded-0","p-2"],[1,"mb-3"],["for","formFile",1,"form-label"],["type","file","accept","image/png, image/gif, image/jpeg","id","formFile","formControlName","writerProfile",1,"form-control","border-blue","p-2",3,"change"],["for","exampleFormControlTextarea1",1,"form-label"],["placeholder","Enter story","id","exampleFormControlTextarea1","rows","3","formControlName","enterStories",1,"form-control","border-blue"],["type","submit",1,"btn","green-btn"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),t._uU(6,"Create Story"),t.qZA()(),t.TgZ(7,"div",5)(8,"div",3)(9,"form",6),t.NdJ("ngSubmit",function(){return r.saveStory(r.addStoryForm.value)}),t.TgZ(10,"div",7)(11,"div",8)(12,"label",9),t._uU(13,"Your Name"),t.qZA(),t._UZ(14,"input",10),t.qZA()(),t.TgZ(15,"div",7)(16,"div",11)(17,"label",12),t._uU(18,"Image"),t.qZA(),t.TgZ(19,"input",13),t.NdJ("change",function(s){return r.onSelectImage(s)}),t.qZA()()(),t.TgZ(20,"div",11)(21,"label",14),t._uU(22,"Enter Story "),t.qZA(),t._UZ(23,"textarea",15),t.qZA(),t.TgZ(24,"div",7)(25,"button",16),t._uU(26,"Create"),t.qZA()()()()()()()()()),2&o&&(t.xp6(9),t.Q6J("formGroup",r.addStoryForm))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),e})()}]}];let f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(g),m.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,f,i.UX,i.u5]}),e})()}}]);