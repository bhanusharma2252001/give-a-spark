"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[906],{1906:(v,a,n)=>{n.r(a),n.d(a,{StoryDashboardModule:()=>y});var s=n(6895),l=n(6773),t=n(8256),c=n(7177);function d(r,e){if(1&r&&(t.TgZ(0,"div"),t._UZ(1,"img",18),t.qZA()),2&r){const o=t.oxw().$implicit;t.xp6(1),t.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==o?null:o.writerProfile,"",t.LSH)}}function p(r,e){if(1&r&&(t.TgZ(0,"div"),t._UZ(1,"img",19),t.qZA()),2&r){const o=t.oxw().$implicit;t.xp6(1),t.s9C("src",null==o?null:o.writerProfile,t.LSH)}}function u(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8),t.YNc(4,d,2,1,"div",9),t.YNc(5,p,2,1,"div",9),t.qZA(),t.TgZ(6,"div",10)(7,"div",11)(8,"figure")(9,"blockquote",12)(10,"p",13),t._uU(11),t.qZA()(),t.TgZ(12,"figcaption",14)(13,"cite",15),t._uU(14),t.qZA()()()()()()(),t.TgZ(15,"div",16)(16,"button",17),t.NdJ("click",function(){t.CHM(o);const f=t.oxw();return t.KtG(f.navigate())}),t._uU(17,"Add story"),t.qZA()()()}if(2&r){const o=e.$implicit;t.xp6(4),t.Q6J("ngIf","https://stargazeevents.s3.ap-south-1.amazonaws.com/pfiles/profile.png"!=(null==o?null:o.writerProfile)),t.xp6(1),t.Q6J("ngIf","https://stargazeevents.s3.ap-south-1.amazonaws.com/pfiles/profile.png"==(null==o?null:o.writerProfile)),t.xp6(6),t.Oqu(null==o?null:o.enterStories),t.xp6(3),t.Oqu(null==o?null:o.writerName)}}const m=[{path:"",component:(()=>{class r{constructor(o,i){this.api=o,this.router=i}ngOnInit(){this.getMyStories()}getMyStories(){this.api.getMyStory().subscribe(o=>{this.storyList=o?.result})}navigate(){this.router.navigate(["mystory/add-story"])}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(c.O),t.Y36(l.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-story-dashboard"]],decls:7,vars:1,consts:[[1,"col-md-11","col-lg-11"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],["class","row mt-4",4,"ngFor","ngForOf"],[1,"row","mt-4"],[1,"col-md-6","col-lg-6"],[1,"row","align-items-center"],[1,"col-md-3","col-lg-3","p-0"],[4,"ngIf"],[1,"col-md-9","col-lg-9","p-0","pe-1"],[1,"bg-darkgray","p-2"],[1,"blockquote"],[1,"fs-12"],[1,"blockquote-footer","text-black"],["title","Source Title ",1,"fs-16"],[1,"mt-4"],[1,"green-btn","pe-3","ps-3","p-2",3,"click"],[1,"wh-150","rounded-circle",3,"src"],[1,"w-40","p-2",3,"src"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),t._uU(5,"My Story"),t.qZA()(),t.YNc(6,u,18,4,"div",4),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("ngForOf",i.storyList))},dependencies:[s.sg,s.O5]}),r})()}];let g=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[l.Bz.forChild(m),l.Bz]}),r})(),y=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[s.ez,g]}),r})()}}]);