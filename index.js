(function(){"use strict";const ue="";function t(n,e,o,i,c,u,f,re){var l=typeof n=="function"?n.options:n;e&&(l.render=e,l.staticRenderFns=o,l._compiled=!0),i&&(l.functional=!0),u&&(l._scopeId="data-v-"+u);var r;if(f?(r=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!_&&typeof __VUE_SSR_CONTEXT__<"u"&&(_=__VUE_SSR_CONTEXT__),c&&c.call(this,_),_&&_._registeredComponents&&_._registeredComponents.add(f)},l._ssrRegister=r):c&&(r=re?function(){c.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:c),r)if(l.functional){l._injectStyles=r;var ce=l.render;l.render=function(ie,d){return r.call(d),ce(ie,d)}}else{var a=l.beforeCreate;l.beforeCreate=a?[].concat(a,r):[r]}return{exports:n,options:l}}const m={props:["content"],computed:{required(){return this.content.required},label(){return this.content.label||this.content.name},defaultValue(){return this.content.default},empty(){return this.content.empty},options(){var n;return(n=this.content.options)==null?void 0:n.map(({value:e,text:o})=>({value:e,text:o||e}))}}};var p=function(){var e=this,o=e._self._c;return o(e.component,{tag:"component",staticClass:"arnoson-forms-preview",class:{required:e.required},attrs:{placeholder:e.content.placeholder,label:e.label,value:e.defaultValue,buttons:e.buttons,options:e.options,empty:e.empty}})},$=[],v=t(m,p,$,!1,null,null,null,null);const s=v.exports,b=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));var g=t({extends:s,computed:{component:()=>"k-checkboxes-field",defaultValue(){var n;return(n=this.content.default)==null?void 0:n.split(",").map(e=>e.trim())}}},null,null,!1,null,null,null,null);const F=g.exports,y=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));var h=t({extends:s,computed:{component:()=>"k-date-field"}},null,null,!1,null,null,null,null);const x=h.exports,O=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));var R=t({extends:s,computed:{component:()=>"k-email-field"}},null,null,!1,null,null,null,null);const k=R.exports,S=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));var w=t({extends:s,computed:{component:()=>"k-number-field"}},null,null,!1,null,null,null,null);const j=w.exports,T=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));var z=t({extends:s,computed:{component:()=>"k-radio-field"}},null,null,!1,null,null,null,null);const C=z.exports,M=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));var P=t({extends:s,computed:{component:()=>"k-select-field"}},null,null,!1,null,null,null,null);const E=P.exports,I=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));var V=t({extends:s,computed:{component:()=>"k-tel-field"}},null,null,!1,null,null,null,null);const q=V.exports,N=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));var U=t({extends:s,computed:{component:()=>"k-text-field"}},null,null,!1,null,null,null,null);const D=U.exports,W=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));var X=t({extends:s,computed:{component:()=>"k-textarea-field",buttons:()=>!1}},null,null,!1,null,null,null,null);const L=X.exports,A=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));var B=t({extends:s,computed:{component:()=>"k-time-field"}},null,null,!1,null,null,null,null);const G=B.exports,H=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));var J=t({extends:s,computed:{component:()=>"k-url-field"}},null,null,!1,null,null,null,null);const K=J.exports,Q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Y=n=>n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".")).toLowerCase(),Z=Object.freeze({import(n){return Object.entries(n).reduce((o,[i,c])=>(o[Y(i)]=c.default,o),{})}}),ee={extends:"k-slug-field"};var ne=function(){var e=this,o=e._self._c;return o("k-field",e._b({staticClass:"k-slug-field",attrs:{input:e._uid,help:e.preview},scopedSlots:e._u([e.wizard&&e.wizard.text?{key:"options",fn:function(){return[o("k-button",{attrs:{text:e.wizard.text,icon:"wand"},on:{click:e.onWizard}})]},proxy:!0}:null],null,!0)},"k-field",e.$props,!1),[o("k-input",e._g(e._b({ref:"input",attrs:{id:e._uid,value:e.slug,theme:"field",type:"form-identifier"}},"k-input",e.$props,!1),e.$listeners))],1)},te=[],le=t(ee,ne,te,!1,null,null,null,null);const se=le.exports;var oe=t({extends:"k-slug-input",data(){return{wasEmptyOnCreate:!1}},created(){this.wasEmptyOnCreate=!this.value},computed:{sync(){return this.wasEmptyOnCreate?this.$options.propsData.sync:null}},methods:{sluggify(n){return this.$helper.slug(n,[this.slugs,this.$system.ascii],this.allow,"_")}}},null,null,!1,null,null,null,null);const _e=oe.exports;window.panel.plugin("arnoson/kirby-forms",{blocks:Z.import(Object.assign({"./previews/form-field-checkboxes.vue":y,"./previews/form-field-date.vue":O,"./previews/form-field-email.vue":S,"./previews/form-field-number.vue":T,"./previews/form-field-radio.vue":M,"./previews/form-field-select.vue":I,"./previews/form-field-tel.vue":N,"./previews/form-field-text.vue":W,"./previews/form-field-textarea.vue":A,"./previews/form-field-time.vue":H,"./previews/form-field-url.vue":Q,"./previews/form-field.vue":b})),fields:{"form-identifier":se},components:{"k-form-identifier-input":_e}})})();
