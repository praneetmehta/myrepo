(function(){var a=this;var c=function(b,e){var d=parseFloat(b);return isNaN(d)||1<d||0>d?e:d},f=function(b,e){var d=parseInt(b,10);return isNaN(d)?e:d},g=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,h=function(b,e){if(!b)return e;var d=b.match(g);return d?d[0]:e};var k=c("0.02",0),l=c("0.0",0);var m=c("0",0),n=c("0.001",0),p=f("1500",1500),q=c("0.01",0),r=c("1.0",0),t=c("0.5",0),u=c("",.001),v=f("",200),w=c("0.01",0),x=/^true$/.test("")?
!0:!1,y=c("0.01",0),z=c("0.01",0),A=c("0.1",0),B=c("0.01",0),C=c("1",0),D=c("",.001),E=c("0",0),F=c("0.1",0),G=c("0.0001",0),H=c("0",0),I=f("86",
0),J=f("86",0),K=c("0",0),L=c("0.0",0),aa=c("0.1",0),ba=c("0.001",0),ca=c("0",0);var da=/^true$/.test("false")?!0:!1;var M=function(){return a.googletag||(a.googletag={})},N=function(b,e){var d=M();d.hasOwnProperty(b)||(d[b]=e)};var O={};O["#1#"]=h("","pagead2.googlesyndication.com");O["#2#"]=h("","pubads.g.doubleclick.net");O["#3#"]=h("","securepubads.g.doubleclick.net");O["#6#"]=function(b){try{for(var e=null;e!=b;e=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(d){}return!0}(window);O["#7#"]=k;O["#10#"]=m;O["#11#"]=n;O["#13#"]=p;O["#16#"]=q;O["#17#"]=r;O["#18#"]=t;O["#20#"]=l;O["#23#"]=u;
O["#24#"]=v;O["#27#"]=w;O["#28#"]=y;O["#29#"]=z;O["#31#"]=A;O["#33#"]=h("","pagead2.googlesyndication.com");O["#34#"]=C;O["#36#"]=x;O["#37#"]=B;O["#38#"]=D;O["#39#"]="";O["#40#"]=E;O["#45#"]=F;O["#46#"]=da;O["#47#"]=G;O["#49#"]=(new Date).getTime();O["#52#"]=H;O["#53#"]="";O["#54#"]=L;O["#55#"]=aa;O["#56#"]=ba;O["#57#"]=ca;N("_vars_",O);N("getVersion",function(){return"85"});var ea={};var P=document;N("cmd",[]);
if("function"==function(){var b=googletag.evalScripts,e=typeof b;if("object"==e)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return e;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&
!b.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==e&&"undefined"==typeof b.call)return"object";return e}())googletag.evalScripts();else{var Q,R=J||"85",S="",T;if(I&&K){a:{var U=[I,R],fa=2*K;if(!(1E-4>Math.random())){var V=Math.random();if(V<fa){var ga=window;try{var W=new Uint32Array(1);ga.crypto.getRandomValues(W);V=W[0]/65536/65536}catch(b){V=Math.random()}T=U[Math.floor(V*U.length)];break a}}T=null}T==I?O["#53#"]="108809094":T==R&&(O["#53#"]="108809093",S="?v="+
I)}T=T||R;Q=(ea["#6#"]||M()._vars_["#6#"]?"https:":"http:")+"//partner.googleadservices.com/gpt/pubads_impl_"+T+".js"+S;var X=P.currentScript;if(!("complete"==P.readyState||"loaded"==P.readyState||X&&X.async)){var Y="gpt-impl-"+Math.random();try{P.write('<script id="'+Y+'" src="'+Q+'">\x3c/script>')}catch(b){}P.getElementById(Y)&&(M()._loadStarted_=!0)}if(!M()._loadStarted_){var Z=P.createElement("script");Z.src=Q;Z.async=!0;(P.head||P.body||P.documentElement).appendChild(Z);M()._loadStarted_=!0}};})()

