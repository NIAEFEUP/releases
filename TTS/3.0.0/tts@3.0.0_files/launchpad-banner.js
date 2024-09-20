!function(){function e(){var e=function(e){for(var n=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var o=t[r];"
"===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n))return o.substring(n.length,o.length)}return null}("ana_visitorId");return e||funct
ion(e,n,t){var r;if(t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3),r="; expires="+o.toGMTString()}else r="";document.cookie=e+"="+n+r+"
; path=/"}("ana_visitorId",e=function(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.
now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){var t=(e+16*Math.random())%16|0;ret
urn e=Math.floor(e/16),("x"===n?t:3&t|8).toString(16)}))}()),e}window.trackEvent=function(n){var t=e(),r="",o=function(){try{var
e=new URLSearchParams(window.location.search),n=window.innerWidth;return JSON.stringify({restart:!!e.r,animaInterface:!!e.page
s,screenWidth:n,isDesktop:n>=1024})}catch(e){return}}();document.getElementById("anPageName")&&(r=document.getElementById("a
nPageName").value);var a=function(e){var n="";for(var t in e)e.hasOwnProperty(t)&&(n.length>0&&(n+="&"),n+=encodeURI(t+"="+e[
  t]));return n}({eventCategory:"General",eventAction:n,url:encodeURIComponent(window.location.href),host:window.location.host
  name,path:window.location.pathname,page:r,referrer:document.referrer,uid:t,params:o}),i=new XMLHttpRequest;i.open("POST","/
  /logs.animaapp.com/analytics/collect",!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(a)}
  ,window.submitted=function(e){window.trackEvent("conversion")},window.trackEvent("pageview")}();