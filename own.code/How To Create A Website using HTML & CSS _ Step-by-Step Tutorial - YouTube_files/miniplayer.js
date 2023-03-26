(function(g){var window=this;'use strict';var Hgb=function(a,b){g.T.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Pa("click",this.onClick,this);this.updateValue("title",g.MS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ab(this,g.fT(b.Dc(),this.element))},Igb=function(a){g.T.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.Tf=!1;this.player=a;this.S(a,"minimized",this.Wh);this.S(a,"onStateChange",this.SO)},Jgb=function(a){g.iS.call(this,a);
this.u=new g.WF(this);this.j=new Igb(this.player);this.j.hide();g.dR(this.player,this.j.element,4);a.og()&&(this.load(),g.Bo(a.getRootNode(),"ytp-player-minimized",!0));this.player.K("web_rounded_containers")&&g.Bo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(Hgb,g.T);Hgb.prototype.onClick=function(){this.F.Na("onExpandMiniplayer")};g.v(Igb,g.T);g.k=Igb.prototype;
g.k.YL=function(){this.tooltip=new g.IV(this.player,this);g.D(this,this.tooltip);g.dR(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Qc=new g.aT(this.player);g.D(this,this.Qc);this.Uj=new g.T({G:"div",N:"ytp-miniplayer-scrim"});g.D(this,this.Uj);this.Uj.Da(this.element);this.S(this.Uj.element,"click",this.NG);var a=new g.T({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.$N()]});g.D(this,a);a.Da(this.Uj.element);this.S(a.element,"click",this.Xo);
a=new Hgb(this.player,this);g.D(this,a);a.Da(this.Uj.element);this.Au=new g.T({G:"div",N:"ytp-miniplayer-controls"});g.D(this,this.Au);this.Au.Da(this.Uj.element);this.S(this.Au.element,"click",this.NG);var b=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,b);b.Da(this.Au.element);a=new g.T({G:"div",N:"ytp-miniplayer-play-button-container"});g.D(this,a);a.Da(this.Au.element);var c=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,c);c.Da(this.Au.element);this.oW=new g.JU(this.player,
this,!1);g.D(this,this.oW);this.oW.Da(b.element);b=new g.IU(this.player,this);g.D(this,b);b.Da(a.element);this.nextButton=new g.JU(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.Da(c.element);this.sj=new g.BV(this.player,this);g.D(this,this.sj);this.sj.Da(this.Uj.element);this.Jc=new g.OU(this.player,this);g.D(this,this.Jc);g.dR(this.player,this.Jc.element,4);this.DG=new g.T({G:"div",N:"ytp-miniplayer-buttons"});g.D(this,this.DG);g.dR(this.player,this.DG.element,4);a=new g.T({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.$N()]});g.D(this,a);a.Da(this.DG.element);this.S(a.element,"click",this.Xo);a=new g.T({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.gO()]});g.D(this,a);a.Da(this.DG.element);this.S(a.element,"click",this.q6);this.S(this.player,"presentingplayerstatechange",this.td);this.S(this.player,"appresize",this.Eb);this.S(this.player,"fullscreentoggled",this.Eb);this.Eb()};
g.k.show=function(){this.kf=new g.no(this.yv,null,this);this.kf.start();this.Tf||(this.YL(),this.Tf=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.kf&&(this.kf.dispose(),this.kf=void 0);g.T.prototype.hide.call(this);this.player.og()||(this.Tf&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.kf&&(this.kf.dispose(),this.kf=void 0);g.T.prototype.ra.call(this)};
g.k.Xo=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.q6=function(){this.player.playVideo()};
g.k.NG=function(a){if(a.target===this.Uj.element||a.target===this.Au.element)g.HM(this.player.Fb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Wh=function(){g.Bo(this.player.getRootNode(),"ytp-player-minimized",this.player.og())};
g.k.Ie=function(){this.Jc.xc();this.sj.xc()};
g.k.yv=function(){this.Ie();this.kf&&this.kf.start()};
g.k.td=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Eb=function(){g.aV(this.Jc,0,this.player.gb().getPlayerSize().width,!1);g.PU(this.Jc)};
g.k.SO=function(a){this.player.og()&&(0===a?this.hide():this.show())};
g.k.Dc=function(){return this.tooltip};
g.k.jg=function(){return!1};
g.k.ih=function(){return!1};
g.k.Qb=function(){return!1};
g.k.Il=function(){return!1};
g.k.ED=function(){};
g.k.Np=function(){};
g.k.Tx=function(){};
g.k.Gm=function(){return null};
g.k.BF=function(){return null};
g.k.EF=function(){return new g.je(0,0)};
g.k.LB=function(){return null};
g.k.xk=function(){return new g.Fl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Kv=function(a,b,c,d,e){var f=0,h=d=0,l=g.Zl(a);if(b){c=g.wo(b,"ytp-prev-button")||g.wo(b,"ytp-next-button");var m=g.wo(b,"ytp-play-button"),n=g.wo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Xl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.wo(b,"ytp-miniplayer-button-top-left"),f=g.Xl(b,this.element),b=g.Zl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.be(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.mp=function(){};
g.k.Cl=function(){return!1};
g.k.FD=function(){};
g.k.Dz=function(){};
g.k.Oq=function(){};
g.k.Nq=function(){};
g.k.KE=function(){};
g.k.Mr=function(){};g.v(Jgb,g.iS);g.k=Jgb.prototype;g.k.onVideoDataChange=function(){if(this.player.K("web_rounded_containers")&&this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Bo(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.iS.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Pk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.hS("miniplayer",Jgb);})(_yt_player);
