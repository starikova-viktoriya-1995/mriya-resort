(self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[]).push([[221],{4414:(a,e,n)=>{"use strict";n.d(e,{Z:()=>o});var i=n(3963),t=n(1727);function s(){return(s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a}).apply(this,arguments)}var l={update:function(){var a=this,e=a.params.navigation;if(!a.params.loop){var n=a.navigation,i=n.$nextEl,t=n.$prevEl;t&&t.length>0&&(a.isBeginning?t.addClass(e.disabledClass):t.removeClass(e.disabledClass),t[a.params.watchOverflow&&a.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(a.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[a.params.watchOverflow&&a.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(a){var e=this;a.preventDefault(),e.isBeginning&&!e.params.loop||e.slidePrev()},onNextClick:function(a){var e=this;a.preventDefault(),e.isEnd&&!e.params.loop||e.slideNext()},init:function(){var a,e,n=this,s=n.params.navigation;(s.nextEl||s.prevEl)&&(s.nextEl&&(a=(0,i.Z)(s.nextEl),n.params.uniqueNavElements&&"string"==typeof s.nextEl&&a.length>1&&1===n.$el.find(s.nextEl).length&&(a=n.$el.find(s.nextEl))),s.prevEl&&(e=(0,i.Z)(s.prevEl),n.params.uniqueNavElements&&"string"==typeof s.prevEl&&e.length>1&&1===n.$el.find(s.prevEl).length&&(e=n.$el.find(s.prevEl))),a&&a.length>0&&a.on("click",n.navigation.onNextClick),e&&e.length>0&&e.on("click",n.navigation.onPrevClick),(0,t.l7)(n.navigation,{$nextEl:a,nextEl:a&&a[0],$prevEl:e,prevEl:e&&e[0]}))},destroy:function(){var a=this,e=a.navigation,n=e.$nextEl,i=e.$prevEl;n&&n.length&&(n.off("click",a.navigation.onNextClick),n.removeClass(a.params.navigation.disabledClass)),i&&i.length&&(i.off("click",a.navigation.onPrevClick),i.removeClass(a.params.navigation.disabledClass))}};const o={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){(0,t.cR)(this,{navigation:s({},l)})},on:{init:function(a){a.navigation.init(),a.navigation.update()},toEdge:function(a){a.navigation.update()},fromEdge:function(a){a.navigation.update()},destroy:function(a){a.navigation.destroy()},click:function(a,e){var n,t=a.navigation,s=t.$nextEl,l=t.$prevEl;!a.params.navigation.hideOnClick||(0,i.Z)(e.target).is(l)||(0,i.Z)(e.target).is(s)||(s?n=s.hasClass(a.params.navigation.hiddenClass):l&&(n=l.hasClass(a.params.navigation.hiddenClass)),!0===n?a.emit("navigationShow"):a.emit("navigationHide"),s&&s.toggleClass(a.params.navigation.hiddenClass),l&&l.toggleClass(a.params.navigation.hiddenClass))}}}},7221:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var i=n(1432),t=n(4414);i.Z.use([t.Z]);const s=function(a){return a.forEach((function(a){var e=a.querySelector(".vacation-preview-slider__button_prev"),n=a.querySelector(".vacation-preview-slider__button_next");new i.Z(a,{slidesPerView:1,slidesPerColumn:2,slidesPerColumnFill:"row",spaceBetween:32,navigation:{nextEl:n,prevEl:e},breakpoints:{1440:{slidesPerView:3,slidesPerColumn:1,slidesPerColumnFill:"column",spaceBetween:40}}})}))}}}]);