(this.webpackJsonpweatherpanel=this.webpackJsonpweatherpanel||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/Sun.18ae8b6a.svg"},32:function(e,t,a){e.exports=a.p+"static/media/Cloud.51461db4.svg"},33:function(e,t,a){e.exports=a.p+"static/media/Fog.57afbca9.svg"},34:function(e,t,a){e.exports=a.p+"static/media/Rain.2cf3bb1c.svg"},35:function(e,t,a){e.exports=a.p+"static/media/Snow.85b6d51b.svg"},36:function(e,t,a){e.exports=a.p+"static/media/Storm.a922c3fd.svg"},37:function(e,t,a){e.exports=a.p+"static/media/Wind.e977faa6.svg"},40:function(e,t,a){e.exports=a(69)},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),i=a(1),s=a(2),m=a(4),o=a(3),u=a(30);function h(e){var t=[[],[],[],[],[],[]],a=new Date;a.setHours(0,0,0,0);var n=1;return e.map((function(e){e.dt<a.getTime()/1e3+86400*n?t[n-1].push(e):(t[n].push(e),n++)})),t}var d=a(14),p=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.day,t=new Date(1e3*e).toString();return r.a.createElement("h1",{className:"blonde f4 mt4"},t.slice(0,3))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.temp;return r.a.createElement("div",{className:"mh3"},r.a.createElement("p",null,Math.round(e-273.15)))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.high,a=e.low;return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(b,{temp:t}),r.a.createElement(b,{temp:a}))}}]),a}(n.Component),f=a(31),v=a.n(f),y=a(32),w=a.n(y),g=a(33),j=a.n(g),O=a(34),k=a.n(O),N=a(35),L=a.n(N),C=a(36),S=a.n(C),x=a(37),D=a.n(x),H=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.icon;return r.a.createElement("div",{className:"icon"},function(){switch(e){case"Clear":return r.a.createElement("img",{src:v.a,alt:"Sun"});case"Clouds":return r.a.createElement("img",{src:w.a,alt:"Cloud"});case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":return r.a.createElement("img",{src:j.a,alt:"Fog"});case"Drizzle":case"Rain":return r.a.createElement("img",{src:k.a,alt:"Rain"});case"Snow":return r.a.createElement("img",{src:L.a,alt:"Snow"});case"Thunderstorm":return r.a.createElement("img",{src:S.a,alt:"Storm"});case"Squall":case"Tornado":return r.a.createElement("img",{src:D.a,alt:"Wind"});default:return r.a.createElement("p",null,"Oops, something went wrong")}}())}}]),a}(n.Component),z=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.weatherList;return r.a.createElement("div",{className:"mh2"},r.a.createElement(p,{day:e[0].dt}),e.map((function(e){return r.a.createElement("div",{className:"dib ba b--light-pink mh1 hourly br2 mv2"},r.a.createElement("p",null,new Date(1e3*e.dt).toString().slice(16,21)),r.a.createElement(H,{icon:e.weather[0].main}),r.a.createElement(E,{high:e.main.feels_like,low:e.main.temp}))})))}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.weatherList,t=0,a=0;return console.log(e),e.map((function(e){t+=e.main.feels_like,a+=e.main.temp})),t/=e.length,a/=e.length,r.a.createElement("div",{className:"bg-light-gray ba pa1 b--dark-pink br3 card"},r.a.createElement(p,{day:e[0].dt}),r.a.createElement(H,{icon:e[0].weather[0].main}),r.a.createElement(E,{high:a,low:t}))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={displayHourly:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(){this.setState((function(e){return{displayHourly:!e.displayHourly}}))}},{key:"render",value:function(){var e=this.props.weatherList,t=this.state.displayHourly;return r.a.createElement("div",{className:"pa0 dib ma2 grow mh4",onClick:this.handleClick},t?r.a.createElement(z,{weatherList:e}):r.a.createElement(F,{weatherList:e}))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=h(this.props.weatherList);return console.log(e),r.a.createElement("div",{className:"pt3"},e.map((function(t,a){return!t.isEmpty&&r.a.createElement(M,{weatherList:e[a]})})))}}]),a}(n.Component),T=(a(16),a(9));a(62);function q(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"list pl0 flex justify-around"},r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/"},"home")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/sun"},"sun")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/mon"},"mon")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/tue"},"tue")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/wed"},"wed")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/thu"},"thu")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/fri"},"fri")),r.a.createElement("li",{className:"dib link dim gray pl1"},r.a.createElement(T.b,{className:"black no-underline",to:"/sat"},"sat"))))}var J=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.weatherList;return r.a.createElement("div",{className:"container tc bg-washed-red"},r.a.createElement("h1",{className:"h5 mt0 mb4 blonde pt5"},"weathery"),r.a.createElement(R,{className:"mv0 panel",weatherList:e}),r.a.createElement("div",{className:"h3 mt0"}))}}]),a}(n.Component);function W(e){var t,a=e.day,n=h(e.weatherList),c=(new Date).getDay(),l=["sun","mon","tue","wed","thu","fri","sat"].indexOf(a);return l>=c?t=l-c:l<c&&(t=l+7-c),6==t?r.a.createElement("p",{className:"central"},"Sorry, we can't read that date yet"):r.a.createElement("div",{className:"container tc bg-washed-red"},r.a.createElement("h1",{className:"h5 ma0 blonde pt5"},"weathery"),r.a.createElement(z,{weatherList:n[t]}))}var _=a(11);function A(e){var t=e.weatherList;return r.a.createElement(T.a,{basename:"/weathery"},r.a.createElement("div",{className:"debug"},r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/sun"},r.a.createElement(W,{day:"sun",weatherList:t})),r.a.createElement(_.a,{path:"/mon"},r.a.createElement(W,{day:"mon",weatherList:t})),r.a.createElement(_.a,{path:"/tue"},r.a.createElement(W,{day:"tue",weatherList:t})),r.a.createElement(_.a,{path:"/wed"},r.a.createElement(W,{day:"wed",weatherList:t})),r.a.createElement(_.a,{path:"/thu"},r.a.createElement(W,{day:"thu",weatherList:t})),r.a.createElement(_.a,{path:"/fri"},r.a.createElement(W,{day:"fri",weatherList:t})),r.a.createElement(_.a,{path:"/sat"},r.a.createElement(W,{day:"sat",weatherList:t})),r.a.createElement(_.a,{exact:!0,path:"/"},r.a.createElement(J,{weatherList:t})))),r.a.createElement(q,null))}var B=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={weatherList:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("i am secure"),Object(u.get)("https://api.openweathermap.org/data/2.5/forecast?q=Calgary&appid=988c9947ac512411c93bc0974ccc343c").then((function(t){var a=t.data.list;e.setState({weatherList:a})}))}},{key:"render",value:function(){var e=this.state.weatherList;return e.length?r.a.createElement(A,{weatherList:e}):r.a.createElement("div",{className:"container debug tc bg-washed-red"},r.a.createElement("h1",{className:"h5 ma0 blonde pt5"},"weathery"),r.a.createElement("h1",{className:"h5 mt6 blonde pt5"},"Loading..."))}}]),a}(n.Component);a(68);l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.be5c0366.chunk.js.map