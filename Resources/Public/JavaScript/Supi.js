(()=>{"use strict";var e={22:(e,t)=>{t.__esModule=!0,t.cookie=void 0,t.cookie=new(function(){function e(){var e=this;this.lifetime=30,document.cookie.split("; ").forEach((function(t){var i=t.split("="),o=i[0],n=i[1];"supi"==o&&(e.elements=JSON.parse(decodeURIComponent(n)))}))}return e.prototype.get=function(e){return this.has(e)?this.elements[e]:null},e.prototype.has=function(e){return this.elements.hasOwnProperty(e)},e.prototype.set=function(e,t){this.elements[e]=t,this.persist()},e.prototype.setLifetime=function(e){e>1&&e<367&&(this.lifetime=e,this.persist())},e.prototype.persist=function(){var e=new Date,t=JSON.stringify(this.elements);e.setTime(e.getTime()+24*this.lifetime*60*60*1e3),document.cookie="supi="+encodeURIComponent(t)+"; expires="+e.toUTCString()+"; path=/; SameSite=Strict"},e.prototype.remove=function(e){delete this.elements[e],this.persist()},e}())},642:(e,t)=>{t.__esModule=!0,t.findAll=t.findOne=void 0,t.findOne=function(e,t){return void 0===t&&(t=null),(t||document).querySelector(e)},t.findAll=function(e,t){return void 0===t&&(t=null),Array.from((t||document).querySelectorAll(e))}},429:(e,t,i)=>{var o=i(905),n=i(642),l=i(22),s=function(){function e(){var e,t,i,s,a,c,u,d,r,p=this;this.cookieNameStatus="status",this.cookieNameAllowed="allowed",this.cookieNameYoutube="yt",this.cookieNameGoogleMaps="gmaps",this.overlay=!1,this.allowed=[],this.ttlAll=30,this.ttlReduced=7,this.allowAll=!1,this.allowYoutube=!1,this.allowMaps=!1,this.writeLog=!1,this.root=document.getElementById("supi"),this.dismiss=n.findOne("#supi__dismiss"),this.choose=n.findOne("#supi__choose"),this.banner=null!==(e=n.findOne("#supi__overlay"))&&void 0!==e?e:n.findOne("#supi__banner"),this.overlay=!!n.findOne("#supi__overlay"),this.body=document.body,this.config=JSON.parse(this.root.getAttribute("data-supi-config")),this.switch=n.findOne("#supi__switchTo"),this.save=n.findOne("#supi__save"),this.writeLog=this.body.classList.contains("develop"),this.ttlReduced=null!==(s=null===(i=null===(t=this.config)||void 0===t?void 0:t.cookieTTL)||void 0===i?void 0:i.reduced)&&void 0!==s?s:this.ttlReduced,this.ttlAll=null!==(u=null===(c=null===(a=this.config)||void 0===a?void 0:a.cookieTTL)||void 0===c?void 0:c.all)&&void 0!==u?u:this.ttlAll;var h=l.cookie.get(this.cookieNameAllowed);Array.isArray(h)&&h.length&&(this.allowed=h),null===(r=null===(d=this.config.elements)||void 0===d?void 0:d.essential)||void 0===r||r.names.split(",").forEach((function(e){-1===p.allowed.indexOf(e)&&p.allowed.push(e)})),l.cookie.get(this.cookieNameStatus)===o.Status.All?(this.allowAll=!0,this.injectJavaScripts(),this.updateCookieTTL()):l.cookie.get(this.cookieNameStatus)===o.Status.Selected?(this.injectJavaScripts(),this.updateCookieTTL()):l.cookie.get(this.cookieNameStatus)||(l.cookie.remove(this.cookieNameStatus),n.findOne('[data-hide-overlay="1"]')?this.log('Hides the Banner-Overlay due to the given Setting "hideOverlayOnButtonCe"',"",""):this.toggleBanner()),this.log("Checking for yt cookie"),this.allowYoutube="y"===l.cookie.get(this.cookieNameYoutube),this.log('Cookie is "%o" resulting in %o',l.cookie.get(this.cookieNameYoutube),this.allowYoutube),this.enableYoutubeVideos(),this.allowMaps="y"===l.cookie.get(this.cookieNameGoogleMaps),this.enableMaps(),this.addClickHandler(),this.setDetailDefaults()}return e.prototype.updateCookieTTL=function(){l.cookie.setLifetime(this.allowAll?this.ttlAll:this.ttlReduced)},e.prototype.addClickHandler=function(){var e=this;n.findAll("[data-toggle=allow]").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.allowAll=!0,e.collectAllowed(o.Mode.All),e.removeScripts(),!0===e.injectJavaScripts()&&(e.toggleBanner(),l.cookie.set(e.cookieNameStatus,o.Status.All)),e.setDetailDefaults()}))})),this.dismiss&&this.dismiss.addEventListener("click",(function(t){t.preventDefault(),e.collectAllowed(o.Mode.Essential)&&e.removeScripts(),!0===e.removeScripts()&&(e.toggleBanner(),l.cookie.set(e.cookieNameStatus,o.Status.Selected)),e.setDetailDefaults()})),this.save&&this.save.addEventListener("click",(function(t){t.preventDefault(),e.collectAllowed(o.Mode.Selected),e.removeScripts(),e.injectJavaScripts()&&(e.toggleBanner(),l.cookie.set(e.cookieNameStatus,o.Status.Selected))})),this.choose&&this.choose.addEventListener("click",(function(t){t.preventDefault(),e.toggleBanner()})),n.findAll("[data-toggle=switch]").filter((function(e){return n.findOne(e.dataset.switchFrom)&&n.findOne(e.dataset.switchTo)})).forEach((function(t){t.addEventListener("click",(function(i){n.findOne(t.dataset.switchFrom).classList.add("tx-supi__pane-hidden"),n.findOne(t.dataset.switchTo).classList.remove("tx-supi__pane-hidden"),"disable"===t.dataset.inputs&&e.allowed.length<1&&n.findAll("input[type=checkbox]").forEach((function(e){e.checked=e.disabled||!!e.dataset.required})),i.preventDefault()}))})),n.findAll("[data-toggle=visibility]").filter((function(e){return!!n.findOne(e.dataset.target)})).forEach((function(e){e.addEventListener("click",(function(t){e.classList.toggle("tx-supi__pane-active"),n.findOne(e.dataset.target).classList.toggle("tx-supi__pane-hidden"),t.preventDefault()}))})),n.findAll("input[data-supi-block]").filter((function(e){return!e.disabled})).forEach((function(e){e.addEventListener("click",(function(t){if(e.dataset.supiParent)n.findAll("[data-supi-block="+e.dataset.supiBlock+"]").forEach((function(t){t.dataset.supiParent||(t.checked=e.checked)}));else{var i=n.findOne("[data-supi-parent="+e.dataset.supiBlock+"]"),o=n.findAll("[data-supi-block="+e.dataset.supiBlock+"]").filter((function(e){return!!e.dataset.supiItem}));i&&o.length&&(i.checked=o.reduce((function(e,t){return e&&t.checked}),!0))}t.stopPropagation()}))})),n.findAll(".tx-supi__youtube").forEach((function(t){e.log("Add listener to child of %o",t),t.querySelector("[data-toggle=youtube]").addEventListener("click",(function(){e.log("Enabling all youtube elements"),e.toggleYoutubeVideos(t)})),t.querySelector("[data-toggle=youtube-once]").addEventListener("click",(function(){e.log("Enabling one youtube element"),e.toggleYoutubeVideos(t,!0)}))})),n.findAll(".tx_supi__map").forEach((function(t){var i=t.querySelector("[data-toggle=map]");e.log("Add listener to toggle %o for map %o",i,t),i.addEventListener("click",(function(){e.allowMaps=!0,l.cookie.set("supi-maps","y"),e.enableMaps()}))}))},e.prototype.injectJavaScripts=function(){var e=this;return n.findAll("script").filter((function(e){return"application/supi"==e.type})).filter((function(t){var i=e.allowAll||!!t.dataset.supiRequired;return!i&&t.dataset.supiCookies&&(i=t.dataset.supiCookies.split(",").reduce((function(t,i){return t||e.allowed.indexOf(i)>-1}),!1)),i})).forEach((function(e){var t=document.createElement("script");t.type="text/javascript",t.className="supi-scripts",t.dataset.supiCookies=e.dataset.supiCookies,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})),!0},e.prototype.toggleBanner=function(){!0===this.overlay&&this.body.classList.toggle("tx-supi__overlay"),this.banner.classList.toggle("hide")},e.prototype.removeScripts=function(){return n.findAll(".supi-scripts").forEach((function(e){var t=document.createElement("script");t.type="application/supi",t.dataset.supiCookies=e.dataset.supiCookies,t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e)})),!0},e.prototype.collectAllowed=function(e){var t=this;void 0===e&&(e=o.Mode.Essential);var i=this.allowed.sort().join();switch(this.allowed=[],e){case o.Mode.All:Object.keys(this.config).forEach((function(e){var i;null===(i=t.config[e])||void 0===i||i.names.split().forEach((function(e){t.allowed.push(e)}))}));break;case o.Mode.Essential:Object.keys(this.config.elements||{}).filter((function(e){var i;return!!(null===(i=t.config[e])||void 0===i?void 0:i.required)})).forEach((function(e){var i;null===(i=t.config[e])||void 0===i||i.names.split().forEach((function(e){t.allowed.push(e)}))}));break;case o.Mode.Selected:n.findAll("input[type=checkbox]").filter((function(e){return e.checked||(parseInt(e.dataset.supiRequired)||0)>0})).map((function(e){return e.value})).forEach((function(e){e.split(",").map((function(e){return e.trim()})).forEach((function(e){-1===t.allowed.indexOf(e)&&t.allowed.push(e)}))}))}return setTimeout((function(){l.cookie.set(t.cookieNameAllowed,JSON.stringify(t.allowed))}),30),this.allowed.sort().join()===i},e.prototype.setDetailDefaults=function(){var e=this;n.findAll("input[data-supi-parent]").forEach((function(t){var i=n.findAll("input[data-supi-block="+t.dataset.supiParent+"][data-supi-item]");i.length?(t.checked=!0,i.forEach((function(t){t.checked=t.disabled||e.allowAll||t.value.split(",").reduce((function(t,i){return t&&e.allowed.indexOf(i)>-1}),!0)})),t.checked=i.reduce((function(e,t){return e&&t.checked}),!0),e.log("Set parent %o to %o",t,t.checked)):(e.log("Check if all of parent values %s",t.value,e.allowed),t.checked=t.disabled||e.allowAll||t.value.split(",").reduce((function(t,i){return e.log("Checking value %s with prev of %o",i,t),t&&(i=i.replace(/\s+/g,""),e.log("Prev still true, checking if value %s is in %o",i,e.allowed),""!==i&&-1===e.allowed.indexOf(i)&&(e.log("Value %s is not in %o, setting to false",i,e.allowed),t=!1)),t}),!0))}))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.writeLog&&console.log.apply(console,e)},e.prototype.enableYoutubeVideos=function(){var e=this;this.allowYoutube&&(this.log("Enabling all videos, non autostart"),n.findAll(".tx-supi__youtube").forEach((function(t){e.log("Enabling %o",t),e.addVideo(t,"")})))},e.prototype.toggleYoutubeVideos=function(e,t){void 0===t&&(t=!1),this.log("Enabling youtube"),this.allowYoutube=!0,l.cookie.set("supi-yt","y"),this.log("Start video for %o",e),this.addVideo(e,"&autoplay=1"),t?this.allowYoutube=!1:(l.cookie.set(this.cookieNameYoutube,"y"),this.log("Enabling other videos"),this.enableYoutubeVideos())},e.prototype.addVideo=function(e,t){if(this.allowYoutube){var i=e.querySelector(".tx-supi__youtube-preview-image").getBoundingClientRect(),o="https://www.youtube-nocookie.com/embed/"+e.dataset.youtubeId+"?rel=0&modestbranding=1"+t,n=document.createElement("iframe");n.src=o,n.frameBorder="0",n.style.border="0",n.width=i.width+"",n.height=i.height+"",e.parentNode.replaceChild(n,e)}else this.log("Youtube not enabled")},e.prototype.enableMaps=function(){this.allowMaps&&n.findAll(".tx_supi__map").forEach((function(e){var t=e.querySelector("[data-toggle=map]").dataset.callback;e.classList.add("active"),window[t]()}))},e}(),a=window,c=function(){a.supi=new s,a.removeEventListener("load",c)};a.addEventListener("load",c)},905:(e,t)=>{var i,o,n;t.__esModule=!0,t.Mode=t.Status=t.Position=void 0,(n=t.Position||(t.Position={}))[n.Center=0]="Center",n[n.Bottom=1]="Bottom",(o=t.Status||(t.Status={}))[o.None=0]="None",o[o.All=1]="All",o[o.Selected=2]="Selected",(i=t.Mode||(t.Mode={}))[i.All=0]="All",i[i.Essential=1]="Essential",i[i.Selected=2]="Selected"}},t={};!function i(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}(429)})();
//# sourceMappingURL=Supi.js.map