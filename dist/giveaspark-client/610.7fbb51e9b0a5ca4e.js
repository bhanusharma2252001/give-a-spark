"use strict";(self.webpackChunkGiveaspark_client=self.webpackChunkGiveaspark_client||[]).push([[610],{4025:(z,R,c)=>{c.d(R,{Iq:()=>v,TU:()=>C});var m=c(6895),u=c(1571);class A{constructor(p,h){this._document=h;const g=this._textarea=this._document.createElement("textarea"),D=g.style;D.position="fixed",D.top=D.opacity="0",D.left="-999em",g.setAttribute("aria-hidden","true"),g.value=p,g.readOnly=!0,this._document.body.appendChild(g)}copy(){const p=this._textarea;let h=!1;try{if(p){const g=this._document.activeElement;p.select(),p.setSelectionRange(0,p.value.length),h=this._document.execCommand("copy"),g&&g.focus()}}catch{}return h}destroy(){const p=this._textarea;p&&(p.remove(),this._textarea=void 0)}}let C=(()=>{class d{constructor(h){this._document=h}copy(h){const g=this.beginCopy(h),D=g.copy();return g.destroy(),D}beginCopy(h){return new A(h,this._document)}}return d.\u0275fac=function(h){return new(h||d)(u.LFG(m.K0))},d.\u0275prov=u.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})(),v=(()=>{class d{}return d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({}),d})()},5412:(z,R,c)=>{c.d(R,{uw:()=>E,H8:()=>dt,ZT:()=>lt,xY:()=>rt,Is:()=>ht});var m=c(7253),u=c(8184),A=c(3353),C=c(4080),T=c(6895),i=c(1571),v=c(9521),d=c(7579),p=c(9770),h=c(9646),g=c(445),D=c(8675);function B(o,a){}class O{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}let w=(()=>{class o extends C.en{constructor(t,e,n,s,r,l,_,y){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=s,this._interactivityChecker=r,this._ngZone=l,this._overlayRef=_,this._focusMonitor=y,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=M=>{this._portalOutlet.hasAttached();const H=this._portalOutlet.attachDomPortal(M);return this._contentAttached(),H},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=n}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const n=()=>{t.removeEventListener("blur",n),t.removeEventListener("mousedown",n),t.removeAttribute("tabindex")};t.addEventListener("blur",n),t.addEventListener("mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const n=(0,A.ht)(),s=this._elementRef.nativeElement;(!n||n===this._document.body||n===s||s.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,A.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,A.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(m.qV),i.Y36(T.K0,8),i.Y36(O),i.Y36(m.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(m.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["cdk-dialog-container"]],viewQuery:function(t,e){if(1&t&&i.Gf(C.Pl,7),2&t){let n;i.iGM(n=i.CRH())&&(e._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,e){2&t&&i.uIk("id",e._config.id||null)("role",e._config.role)("aria-modal",e._config.ariaModal)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null)},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,B,0,0,"ng-template",0)},dependencies:[C.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),o})();class x{constructor(a,t){this.overlayRef=a,this.config=t,this.closed=new d.x,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===v.hY&&!this.disableClose&&!(0,v.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(a,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}}const S=new i.OlP("DialogScrollStrategy"),N=new i.OlP("DialogData"),W=new i.OlP("DefaultDialogConfig"),K={provide:S,deps:[u.aV],useFactory:function U(o){return()=>o.scrollStrategies.block()}};let X=0,P=(()=>{class o{constructor(t,e,n,s,r,l){this._overlay=t,this._injector=e,this._defaultOptions=n,this._parentDialog=s,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new d.x,this._afterOpenedAtThisLevel=new d.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,p.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,D.O)(void 0))),this._scrollStrategy=l}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(t,e){(e={...this._defaultOptions||new O,...e}).id=e.id||"cdk-dialog-"+X++,e.id&&this.getDialogById(e.id);const s=this._getOverlayConfig(e),r=this._overlay.create(s),l=new x(r,e),_=this._attachContainer(r,l,e);return l.containerInstance=_,this._attachDialogContent(t,l,_,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){F(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){F(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),F(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new u.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){const s=n.injector||n.viewContainerRef?.injector,r=[{provide:O,useValue:n},{provide:x,useValue:e},{provide:u.Iu,useValue:t}];let l;n.container?"function"==typeof n.container?l=n.container:(l=n.container.type,r.push(...n.container.providers(n))):l=w;const _=new C.C5(l,n.viewContainerRef,i.zs3.create({parent:s||this._injector,providers:r}),n.componentFactoryResolver);return t.attach(_).instance}_attachDialogContent(t,e,n,s){if(t instanceof i.Rgc){const r=this._createInjector(s,e,n,void 0);let l={$implicit:s.data,dialogRef:e};s.templateContext&&(l={...l,..."function"==typeof s.templateContext?s.templateContext():s.templateContext}),n.attachTemplatePortal(new C.UE(t,null,l,r))}else{const r=this._createInjector(s,e,n,this._injector),l=n.attachComponentPortal(new C.C5(t,s.viewContainerRef,r,s.componentFactoryResolver));e.componentInstance=l.instance}}_createInjector(t,e,n,s){const r=t.injector||t.viewContainerRef?.injector,l=[{provide:N,useValue:t.data},{provide:x,useValue:e}];return t.providers&&("function"==typeof t.providers?l.push(...t.providers(e,t,n)):l.push(...t.providers)),t.direction&&(!r||!r.get(g.Is,null,i.XFs.Optional))&&l.push({provide:g.Is,useValue:{value:t.direction,change:(0,h.of)()}}),i.zs3.create({parent:r||s,providers:l})}_removeOpenDialog(t,e){const n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,r)=>{s?r.setAttribute("aria-hidden",s):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){const s=e[n];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(u.aV),i.LFG(i.zs3),i.LFG(W,8),i.LFG(o,12),i.LFG(u.Xj),i.LFG(S))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})();function F(o,a){let t=o.length;for(;t--;)a(o[t])}let Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[P,K],imports:[u.U8,C.eL,m.rt,C.eL]}),o})();var Y=c(3238),$=c(6451),k=c(9300),I=c(5698),f=c(7340);function Q(o,a){}const b={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},J={dialogContainer:(0,f.X$)("dialogContainer",[(0,f.SB)("void, exit",(0,f.oB)({opacity:0,transform:"scale(0.7)"})),(0,f.SB)("enter",(0,f.oB)({transform:"none"})),(0,f.eR)("* => enter",(0,f.ru)([(0,f.jt)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,f.oB)({transform:"none",opacity:1})),(0,f.IO)("@*",(0,f.pV)(),{optional:!0})]),b),(0,f.eR)("* => void, * => exit",(0,f.ru)([(0,f.jt)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,f.oB)({opacity:0})),(0,f.IO)("@*",(0,f.pV)(),{optional:!0})]),b)])};class L{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0,this.enterAnimationDuration=b.params.enterAnimationDuration,this.exitAnimationDuration=b.params.exitAnimationDuration}}let q=(()=>{class o extends w{constructor(t,e,n,s,r,l,_,y){super(t,e,n,s,r,l,_,y),this._animationStateChanged=new i.vpe}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(m.qV),i.Y36(T.K0,8),i.Y36(L),i.Y36(m.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(m.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["ng-component"]],features:[i.qOj],decls:0,vars:0,template:function(t,e){},encapsulation:2}),o})(),tt=(()=>{class o extends q{constructor(t,e,n,s,r,l,_,y,M){super(t,e,n,s,r,l,_,M),this._changeDetectorRef=y,this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?this._openAnimationDone(e):"exit"===t&&this._animationStateChanged.next({state:"closed",totalTime:e})}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):("exit"===t||"void"===t)&&this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}_getAnimationState(){return{value:this._state,params:{enterAnimationDuration:this._config.enterAnimationDuration||b.params.enterAnimationDuration,exitAnimationDuration:this._config.exitAnimationDuration||b.params.exitAnimationDuration}}}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(i.SBq),i.Y36(m.qV),i.Y36(T.K0,8),i.Y36(L),i.Y36(m.ic),i.Y36(i.R0b),i.Y36(u.Iu),i.Y36(i.sBO),i.Y36(m.tE))},o.\u0275cmp=i.Xpm({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-dialog-container"],hostVars:7,hostBindings:function(t,e){1&t&&i.WFA("@dialogContainer.start",function(s){return e._onAnimationStart(s)})("@dialogContainer.done",function(s){return e._onAnimationDone(s)}),2&t&&(i.Ikx("id",e._config.id),i.uIk("aria-modal",e._config.ariaModal)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),i.d8E("@dialogContainer",e._getAnimationState()))},features:[i.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&i.YNc(0,Q,0,0,"ng-template",0)},dependencies:[C.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions.mat-dialog-actions-align-center,.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions.mat-dialog-actions-align-end,.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],encapsulation:2,data:{animation:[J.dialogContainer]}}),o})();class G{constructor(a,t,e){this._ref=a,this._containerInstance=e,this._afterOpened=new d.x,this._beforeClosed=new d.x,this._state=0,this.disableClose=t.disableClose,this.id=a.id,e._animationStateChanged.pipe((0,k.h)(n=>"opened"===n.state),(0,I.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,k.h)(n=>"closed"===n.state),(0,I.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,$.T)(this.backdropClick(),this.keydownEvents().pipe((0,k.h)(n=>n.keyCode===v.hY&&!this.disableClose&&!(0,v.Vb)(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),V(this,"keydown"===n.type?"keyboard":"mouse"))})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe((0,k.h)(t=>"closing"===t.state),(0,I.q)(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function V(o,a,t){return o._closeInteractionType=a,o.close(t)}const et=new i.OlP("MatDialogData"),it=new i.OlP("mat-dialog-default-options"),j=new i.OlP("mat-dialog-scroll-strategy"),nt={provide:j,deps:[u.aV],useFactory:function ot(o){return()=>o.scrollStrategies.block()}};let at=0,st=(()=>{class o{constructor(t,e,n,s,r,l,_,y,M,H){this._overlay=t,this._defaultOptions=n,this._parentDialog=s,this._dialogRefConstructor=_,this._dialogContainerType=y,this._dialogDataToken=M,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new d.x,this._afterOpenedAtThisLevel=new d.x,this._idPrefix="mat-dialog-",this.afterAllClosed=(0,p.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,D.O)(void 0))),this._scrollStrategy=l,this._dialog=e.get(P)}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){let n;(e={...this._defaultOptions||new L,...e}).id=e.id||`${this._idPrefix}${at++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();const s=this._dialog.open(t,{...e,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:L,useValue:e},{provide:O,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(r,l,_)=>(n=new this._dialogRefConstructor(r,e,_),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:_},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:n}])});return n.componentInstance=s.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{const r=this.openDialogs.indexOf(n);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return o.\u0275fac=function(t){i.$Z()},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})(),E=(()=>{class o extends st{constructor(t,e,n,s,r,l,_,y){super(t,e,s,l,_,r,G,tt,et,y)}}return o.\u0275fac=function(t){return new(t||o)(i.LFG(u.aV),i.LFG(i.zs3),i.LFG(T.Ye,8),i.LFG(it,8),i.LFG(j),i.LFG(o,12),i.LFG(u.Xj),i.LFG(i.QbO,8))},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac}),o})(),lt=(()=>{class o{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=function ct(o,a){let t=o.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-dialog-container");)t=t.parentElement;return t?a.find(e=>e.id===t.id):null}(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){V(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return o.\u0275fac=function(t){return new(t||o)(i.Y36(G,8),i.Y36(i.SBq),i.Y36(E))},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.NdJ("click",function(s){return e._onButtonClick(s)}),2&t&&i.uIk("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[i.TTD]}),o})(),rt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),o})(),dt=(()=>{class o{constructor(){this.align="start"}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=i.lG2({type:o,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"],hostVars:4,hostBindings:function(t,e){2&t&&i.ekj("mat-dialog-actions-align-center","center"===e.align)("mat-dialog-actions-align-end","end"===e.align)},inputs:{align:"align"}}),o})(),ht=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[E,nt],imports:[Z,u.U8,C.eL,Y.BQ,Y.BQ]}),o})()}}]);