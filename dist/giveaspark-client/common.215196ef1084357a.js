"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[592],{4025:(u,d,c)=>{c.d(d,{Iq:()=>l,TU:()=>a});var r=c(6895),s=c(8274);class p{constructor(e,t){this._document=t;const i=this._textarea=this._document.createElement("textarea"),n=i.style;n.position="fixed",n.top=n.opacity="0",n.left="-999em",i.setAttribute("aria-hidden","true"),i.value=e,i.readOnly=!0,this._document.body.appendChild(i)}copy(){const e=this._textarea;let t=!1;try{if(e){const i=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),t=this._document.execCommand("copy"),i&&i.focus()}}catch{}return t}destroy(){const e=this._textarea;e&&(e.remove(),this._textarea=void 0)}}let a=(()=>{class o{constructor(t){this._document=t}copy(t){const i=this.beginCopy(t),n=i.copy();return i.destroy(),n}beginCopy(t){return new p(t,this._document)}}return o.\u0275fac=function(t){return new(t||o)(s.LFG(r.K0))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),l=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({}),o})()}}]);