"use strict";var _createClass=function(){function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var SplittedText=function(){function t(e){_classCallCheck(this,t),this.node=e}return _createClass(t,[{key:"resetAttr",value:function(){this.node.removeAttribute("id"),this.node.removeAttribute("class")}},{key:"buildDOM",value:function(){this.node.removeChild(this.node.querySelector("h1"));var e=this.node.getAttribute("class");this.resetAttr();var t=/init_\w*/;if(e.match(t)){var r=e.match(t)[0].split("_").pop();this.node.classList.add(r.toLowerCase())}else this.node.classList.add("right");this.node.classList.add("splitted-text")}}]),t}(),splittedTexts=Array.from(document.querySelectorAll("[id^=splitted]"));splittedTexts.forEach(function(e){return new SplittedText(e).buildDOM()});var Banner=function(){function t(e){_classCallCheck(this,t),this.node=e}return _createClass(t,[{key:"resetAttr",value:function(e){e.removeAttribute("id"),e.removeAttribute("class")}},{key:"textToDOM",value:function(e){return(new DOMParser).parseFromString(e,"text/html").body.innerHTML}},{key:"mapBgColor",value:function(e){var t=/bg_\w*/;if(e.match(t)){var r=e.match(t)[0].split("_").pop();this.css("backgroundColor","#"+r)}}},{key:"mapBannerSize",value:function(e){var t=/size_\w*/;if(e.match(t)){var r=e.match(t)[0].split("_").pop();this.addToClassList(this.node,r+"-section")}}},{key:"css",value:function(e,t){this.node.style[e]=t}},{key:"addToClassList",value:function(t){for(var e=arguments.length,r=Array(1<e?e-1:0),s=1;s<e;s++)r[s-1]=arguments[s];r.forEach(function(e){return t.classList.add(e)})}},{key:"buildDOM",value:function(){var r=this;this.node.removeChild(this.node.querySelector("h1"));var e=this.node.getAttribute("class");this.resetAttr(this.node);if(this.mapBgColor(e),this.mapBannerSize(e),e.match(/single/)){this.addToClassList(this.node,"column","centered");var t=this.node.querySelector(".level2").querySelector("h2").textContent,s=this.node.querySelector(".level3").querySelector("h3").textContent,n=this.node.querySelector("a").outerHTML;if(this.node.querySelector("img")){var i=this.node.querySelector("img").getAttribute("src");this.css("background","url("+i+") no-repeat center center"),this.css("backgroundSize","cover")}var o="\n        "+(t?"<h1>"+t+"</h1>":"")+"\n        "+(s?"<h3>"+s+"</h3>":"")+"\n        "+(n?""+n:"")+"\n      ";this.node.innerHTML=this.textToDOM(o)}else e.match(/multi/)&&(this.addToClassList(this.node,"grid"),Array.from(this.node.querySelectorAll("[class*=col]")).forEach(function(e){var t=e.getAttribute("class").match(/col-\w*/)[0];r.resetAttr(e),r.addToClassList(e,"column","centered",t)}))}}]),t}(),banners=Array.from(document.querySelectorAll("[id^=banner]"));banners.forEach(function(e){return new Banner(e).buildDOM()});var Search=function(){function t(e){_classCallCheck(this,t),this.node=e}return _createClass(t,[{key:"resetAttr",value:function(e){e.removeAttribute("id"),e.removeAttribute("class")}},{key:"setAttr",value:function(t,r){Object.keys(r).forEach(function(e){return t.setAttribute(e,r[e])})}},{key:"css",value:function(e,t,r){e.style[t]=r}},{key:"buildDOM",value:function(){var r=this;this.node.removeChild(this.node.querySelector("h1")),this.resetAttr(this.node),this.node.classList.add("search");var e=this.node.querySelector("ul")||this.node.querySelector("ol"),s=Array.from(e.getElementsByTagName("li")),t=document.createElement("input");this.setAttr(t,{type:"text",placeholder:"Buscar"}),this.node.insertBefore(t,e),t.addEventListener("keyup",function(e){var t=e.target.value.toLowerCase();s.forEach(function(e){e.textContent.toLowerCase().includes(t)?r.css(e,"display","list-item"):r.css(e,"display","none")})})}}]),t}(),searchs=Array.from(document.querySelectorAll("[id^=search]"));searchs.forEach(function(e){return new Search(e).buildDOM()});