"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[600],{4600:(y,m,l)=>{l.r(m),l.d(m,{AddStoryModule:()=>h});var u=l(6895),d=l(9965),a=l(433),t=l(8256),g=l(7177),c=l(7185);const p=[{path:"",component:(()=>{class o{constructor(e,r,i,n){this.api=e,this.fb=r,this.router=i,this.toast=n,this.imageData=[],this.Submitted=!1,this.imageFile="",this.isImage=!0,this.addStoryForm=this.fb.group({writerName:["",a.kI.required],writerProfile:[""],enterStories:[""]})}ngOnInit(){}onSelectImage(e){let r=e.target.files;if(this.imageFile=e.target.files[0].name,r){this.uploadImage=r[0],this.subImageSubmit();for(let n of r){if(!n.type.includes("image"))return void(this.isImage=!1);this.imageData.push(n)}}if(e.target.files&&e.target.files[0]){var i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=n=>{this.url=n.target?.result}}}subImageSubmit(){let e=new FormData;e.append("attachment",this.uploadImage),this.api.addAttachments(e).subscribe(r=>{console.log(r),this.imageData1=r,this.imageData2=this.imageData1[0].key,console.log(this.imageData1[0].key,"image key "),console.log(this.imageData2)},r=>{console.log(r)})}get f(){return this.addStoryForm.controls}saveStory(e){this.api.addMyStory({writerName:e.writerName,writerProfile:this.imageData2,enterStories:e.enterStories}).subscribe(i=>{console.log(i),this.toast.success("Added  Successfully"),this.router.navigate(["home-dashboard/mystory/story-dashboard"])},i=>{this.toast.error("please try again")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.O),t.Y36(a.qu),t.Y36(d.F0),t.Y36(c._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-story"]],decls:27,vars:1,consts:[[1,"row","m-0","p-0","mt-3"],[1,"col-md-7","col-lg-10"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"row","m-0","p-0","mt-4"],[1,"row","position-relative",3,"formGroup","ngSubmit"],[1,"col-md-6","col-lg-6"],[1,"mb-2"],["for","exampleInputfiled",1,"form-label"],["type","text","formControlName","writerName","id","exampleInputfiled","aria-describedby","textHelp",1,"form-control","border-blue","rounded-0","p-2"],[1,"mb-3"],["for","formFile",1,"form-label"],["type","file","accept","image/png, image/gif, image/jpeg","id","formFile","formControlName","writerProfile",1,"form-control","border-blue","p-2",3,"change"],["for","exampleFormControlTextarea1",1,"form-label"],["placeholder","Enter story","id","exampleFormControlTextarea1","rows","3","formControlName","enterStories",1,"form-control","border-blue"],["type","submit",1,"btn","green-btn"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),t._uU(6,"Create Story"),t.qZA()(),t.TgZ(7,"div",5)(8,"div",3)(9,"form",6),t.NdJ("ngSubmit",function(){return r.saveStory(r.addStoryForm.value)}),t.TgZ(10,"div",7)(11,"div",8)(12,"label",9),t._uU(13,"Your Name"),t.qZA(),t._UZ(14,"input",10),t.qZA()(),t.TgZ(15,"div",7)(16,"div",11)(17,"label",12),t._uU(18,"Image"),t.qZA(),t.TgZ(19,"input",13),t.NdJ("change",function(n){return r.onSelectImage(n)}),t.qZA()()(),t.TgZ(20,"div",11)(21,"label",14),t._uU(22,"Enter Story "),t.qZA(),t._UZ(23,"textarea",15),t.qZA(),t.TgZ(24,"div",7)(25,"button",16),t._uU(26,"Create"),t.qZA()()()()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",r.addStoryForm))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".input-touched[_ngcontent-%COMP%]{border-color:red;background-color:none}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(p),d.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,f,a.u5,a.UX]}),o})()}}]);