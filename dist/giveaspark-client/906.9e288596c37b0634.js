"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[906],{1906:(f,a,n)=>{n.r(a),n.d(a,{StoryDashboardModule:()=>y});var s=n(6895),l=n(6773),o=n(8256),c=n(7177);function d(t,e){if(1&t&&(o.TgZ(0,"div"),o._UZ(1,"img",17),o.qZA()),2&t){const r=o.oxw().$implicit;o.xp6(1),o.MGl("src","https://giveaspark.s3.us-west-1.amazonaws.com/",null==r?null:r.writerProfile,"",o.LSH)}}function u(t,e){if(1&t&&(o.TgZ(0,"div"),o._UZ(1,"img",18),o.qZA()),2&t){const r=o.oxw().$implicit;o.xp6(1),o.s9C("src",null==r?null:r.writerProfile,o.LSH)}}function p(t,e){if(1&t&&(o.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),o.YNc(4,d,2,1,"div",10),o.YNc(5,u,2,1,"div",10),o.qZA(),o.TgZ(6,"div",11)(7,"div",12)(8,"figure")(9,"blockquote",13)(10,"p",14),o._uU(11),o.qZA()(),o.TgZ(12,"figcaption",15)(13,"cite",16),o._uU(14),o.qZA()()()()()()()()),2&t){const r=e.$implicit;o.xp6(4),o.Q6J("ngIf","https://stargazeevents.s3.ap-south-1.amazonaws.com/pfiles/profile.png"!=(null==r?null:r.writerProfile)),o.xp6(1),o.Q6J("ngIf","https://stargazeevents.s3.ap-south-1.amazonaws.com/pfiles/profile.png"==(null==r?null:r.writerProfile)),o.xp6(6),o.Oqu(null==r?null:r.enterStories),o.xp6(3),o.Oqu(null==r?null:r.writerName)}}const m=[{path:"",component:(()=>{class t{constructor(r,i){this.api=r,this.router=i}ngOnInit(){this.getMyStories()}getMyStories(){this.api.getMyStory().subscribe(r=>{this.storyList=r?.result})}navigate(){this.router.navigate(["mystory/add-story"])}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(c.O),o.Y36(l.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-story-dashboard"]],decls:9,vars:1,consts:[[1,"col-md-11","col-lg-11"],[1,"row","m-0","p-0","mt-5","align-items-center"],[1,"col-md-12","col-lg-12"],[1,"border-bottom"],[1,"btn","btn-green",3,"click"],["class","row mt-4",4,"ngFor","ngForOf"],[1,"row","mt-4"],[1,"col-md-6","col-lg-6"],[1,"row","align-items-center"],[1,"col-md-3","col-lg-3","p-0"],[4,"ngIf"],[1,"col-md-9","col-lg-9","p-0","pe-1"],[1,"bg-darkgray","p-2"],[1,"blockquote"],[1,"fs-12"],[1,"blockquote-footer","text-black"],["title","Source Title ",1,"fs-16"],[1,"img-fluid","w-40","rounded-circle",3,"src"],[1,"w-40","p-2",3,"src"]],template:function(r,i){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),o._uU(5,"My Story"),o.qZA(),o.TgZ(6,"button",4),o.NdJ("click",function(){return i.navigate()}),o._uU(7,"Add story"),o.qZA()(),o.YNc(8,p,15,4,"div",5),o.qZA()()()),2&r&&(o.xp6(8),o.Q6J("ngForOf",i.storyList))},dependencies:[s.sg,s.O5]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.Bz.forChild(m),l.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,g]}),t})()}}]);