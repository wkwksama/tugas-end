!function(t){function n(){function t(t,r,e){for(var a,o,u,i=([{x:0,y:0},{x:n[0],y:n[1]}],r.x),c=r.y,l=Math.sqrt(n[0]*n[0]+n[1]*n[1]),x=p(n),s=Math.random()<.5?1:-1,h=-s;(a=x(h+=s))&&(o=~~a[0],u=~~a[1],!(Math.min(o,u)>l));)if(r.x=i+o,r.y=c+u,!(r.x+r.x0<0||r.y+r.y0<0||r.x+r.x1>n[0]||r.y+r.y1>n[1])&&(!e||!f(r,t,n[0]))&&(!e||y(r,e))){for(var d,v=r.sprite,g=r.width>>5,M=n[0]>>5,m=r.x-(g<<4),w=127&m,b=32-w,z=r.y1-r.y0,I=(r.y+r.y0)*M+(m>>5),k=0;k<z;k++){d=0;for(var q=0;q<=g;q++)t[I+q]|=d<<b|(q<g?(d=v[k*g+q])>>>w:0);I+=M}return delete r.sprite,!0}return!1}var n=[256,256],x=r,h=e,d=a,v=o,g=u,p=l,M=[],w=1/0,b=d3.dispatch("word","end"),z=null,I={};return I.start=function(){function r(){for(var r,u=+new Date;+new Date-u<w&&++f<o&&z;)r=l[f],r.x=n[0]*(Math.random()+.5)>>1,r.y=n[1]*(Math.random()+.5)>>1,i(r,l,f),t(e,r,a)&&(y.push(r),b.word(r),a?c(a,r):a=[{x:r.x+r.x0,y:r.y+r.y0},{x:r.x+r.x1,y:r.y+r.y1}],r.x-=n[0]>>1,r.y-=n[1]>>1);f>=o&&(I.stop(),b.end(y,a))}var e=s((n[0]>>5)*n[1]),a=null,o=M.length,f=-1,y=[],l=M.map(function(t,n){return{text:x.call(this,t,n),font:h.call(this,t,n),rotate:v.call(this,t,n),size:~~d.call(this,t,n),padding:u.call(this,t,n)}}).sort(function(t,n){return n.size-t.size});return z&&clearInterval(z),z=setInterval(r,0),r(),I},I.stop=function(){return z&&(clearInterval(z),z=null),I},I.timeInterval=function(t){return arguments.length?(w=null==t?1/0:t,I):w},I.words=function(t){return arguments.length?(M=t,I):M},I.size=function(t){return arguments.length?(n=[+t[0],+t[1]],I):n},I.font=function(t){return arguments.length?(h=d3.functor(t),I):h},I.rotate=function(t){return arguments.length?(v=d3.functor(t),I):v},I.text=function(t){return arguments.length?(x=d3.functor(t),I):x},I.spiral=function(t){return arguments.length?(p=m[t+""]||t,I):p},I.fontSize=function(t){return arguments.length?(d=d3.functor(t),I):d},I.padding=function(t){return arguments.length?(g=d3.functor(t),I):g},d3.rebind(I,b,"on")}function r(t){return t.text}function e(){return"serif"}function a(t){return Math.sqrt(t.value)}function o(){return 30*(~~(6*Math.random())-3)}function u(){return 1}function i(t,n,r){if(!t.sprite){M.clearRect(0,0,v<<5,g);var e=0,a=0,o=0,u=n.length;for(r--;++r<u;){t=n[r],M.save(),M.font=t.size+1+"px "+t.font;var i=M.measureText(t.text+"m").width,f=t.size<<1;if(t.rotate){var c=Math.sin(t.rotate*d),y=Math.cos(t.rotate*d),l=i*y,x=i*c,s=f*y,h=f*c;i=Math.max(Math.abs(l+h),Math.abs(l-h))+31>>5<<5,f=~~Math.max(Math.abs(x+s),Math.abs(x-s))}else i=i+31>>5<<5;if(f>o&&(o=f),e+i>=v<<5&&(e=0,a+=o,o=0),a+f>=g)break;M.translate(e+(i>>1),a+(f>>1)),t.rotate&&M.rotate(t.rotate*d),M.fillText(t.text,0,0),M.restore(),t.width=i,t.height=f,t.xoff=e,t.yoff=a,t.x1=i>>1,t.y1=f>>1,t.x0=-t.x1,t.y0=-t.y1,e+=i}for(var p=M.getImageData(0,0,v<<5,g).data,m=[];--r>=0;){t=n[r];for(var i=t.width,w=i>>5,f=t.y1-t.y0,b=t.padding,z=0;z<f*w;z++)m[z]=0;if(e=t.xoff,null==e)return;a=t.yoff;for(var I=0,k=-1,q=0;q<f;q++){for(var z=0;z<i;z++){var D=w*q+(z>>5),S=(p[(a+q)*(v<<5)+(e+z)<<2]?1:0)<<31-z%32;b&&(q&&(m[D-w]|=S),q<i-1&&(m[D+w]|=S),S|=S<<1|S>>1),m[D]|=S,I|=S}I?k=q:(t.y0++,f--,q--,a++)}t.y1=t.y0+k,t.sprite=m.slice(0,(t.y1-t.y0)*w)}}}function f(t,n,r){r>>=5;for(var e,a=t.sprite,o=t.width>>5,u=t.x-(o<<4),i=127&u,f=32-i,c=t.y1-t.y0,y=(t.y+t.y0)*r+(u>>5),l=0;l<c;l++){e=0;for(var x=0;x<=o;x++)if((e<<f|(x<o?(e=a[l*o+x])>>>i:0))&n[y+x])return!0;y+=r}return!1}function c(t,n){var r=t[0],e=t[1];n.x+n.x0<r.x&&(r.x=n.x+n.x0),n.y+n.y0<r.y&&(r.y=n.y+n.y0),n.x+n.x1>e.x&&(e.x=n.x+n.x1),n.y+n.y1>e.y&&(e.y=n.y+n.y1)}function y(t,n){return t.x+t.x1>n[0].x&&t.x+t.x0<n[1].x&&t.y+t.y1>n[0].y&&t.y+t.y0<n[1].y}function l(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function x(t){var n=4,r=n*t[0]/t[1],e=0,a=0;return function(t){var o=t<0?-1:1;switch(Math.sqrt(1+4*o*t)-o&3){case 0:e+=r;break;case 1:a+=n;break;case 2:e-=r;break;default:a-=n}return[e,a]}}function s(t){for(var n=[],r=-1;++r<t;)n[r]=0;return n}var h,d=Math.PI/180,v=64,g=2048;if("undefined"!=typeof document)h=document.createElement("canvas"),h.width=v<<5,h.height=g;else{var p=require("canvas");h=new p(v<<5,g)}var M=h.getContext("2d"),m={archimedean:l,rectangular:x};M.fillStyle="red",M.textAlign="center",t.cloud=n}("undefined"==typeof exports?d3.layout||(d3.layout={}):exports);
//# sourceMappingURL=d3.layout.cloud.min.js.map