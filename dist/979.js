(self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[]).push([[979],{3979:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c=function(t){return t.forEach((function(t){var e=t.querySelector(".tabs__nav"),a=e.querySelectorAll(".tabs__nav-item"),c=t.querySelector(".tabs__content").querySelectorAll(".tabs__content-item");e.insertAdjacentHTML("beforeend",'<div class="tabs__nav-highlight"></div>');var s=e.querySelector(".tabs__nav-highlight");a.forEach((function(t){t.addEventListener("click",(function(){var t=this.dataset.tab;a.forEach((function(t){t.classList.remove("tabs__nav-item_active")})),this.classList.add("tabs__nav-item_active"),s.style.width="".concat(this.offsetWidth,"px"),s.style.left="".concat(this.offsetLeft,"px"),c.forEach((function(e){e.classList.remove("tabs__content-item_active"),e.dataset.tab===t&&e.classList.add("tabs__content-item_active")}))}))}));var n=new Event("click");a[0].dispatchEvent(n)}))}}}]);