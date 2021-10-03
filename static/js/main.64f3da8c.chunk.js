(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{136:function(e,t,n){},213:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),s=n.n(o),c=(n(213),n(29)),i=n.n(c),l=n(55),u=n(26),h=n(34),d=n(27),f=n(28),m=n(379),p=n(371),g=n(381),v=(n(136),n(179)),b=n.n(v),j=n(2),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=b()(t.start.dateTime).format("MMMM Do YYYY, HH:mm a");return Object(j.jsx)(p.a,{className:"event-listings",children:Object(j.jsxs)("div",{className:"event",children:[Object(j.jsx)("h3",{className:"event-title font-weight-bold",children:t.summary}),Object(j.jsx)("p",{className:"event-date font-weight-bold",children:"".concat(n)}),Object(j.jsx)("p",{className:"event-location text-muted",children:t.location}),!0===this.state.show&&Object(j.jsx)("p",{className:"event-details",children:t.description}),!1===this.state.show&&Object(j.jsx)("button",{className:"show-details-btn",onClick:function(){return e.handleButton()},children:"Show details"}),!0===this.state.show&&Object(j.jsx)("button",{className:"hide-details-btn",onClick:function(){return e.handleButton()},children:"Hide details"})]})})}}]),n}(a.Component),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(j.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(O,{event:e})},e.id)}))})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,background:a.background}},a.color=null,a.background=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"Alert",children:Object(j.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),A=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="black",a}return n}(x),y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(x),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="white",a.background="#006c9a",a}return n}(x),S=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"No matches found"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,errorText:""}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CitySearch mx-auto mx-lg-0",children:[Object(j.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},onBlur:function(){e.setState({showSuggestions:!1})}}),Object(j.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[Object(j.jsx)("li",{children:Object(j.jsx)(A,{text:this.state.infoText})}),this.state.suggestions.map((function(t){return Object(j.jsx)("li",{onMouseDown:function(){return e.handleItemClicked(t)},children:t},t)})),Object(j.jsx)("li",{onMouseDown:function(){return e.handleItemClicked("all")},children:Object(j.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),T=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:"",errorText:"Enter a number between 1 and 32."}):(e.setState({numberOfEvents:n,errorText:""}),e.props.updateNumberOfEvents(n))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(j.jsxs)("div",{className:"NumberOfEvents",children:[Object(j.jsx)("label",{className:"number-label",children:"Select Number of Events to View:"}),Object(j.jsx)("input",{type:"number",id:"number-of-events",className:"number-events",value:e,onChange:this.handleInputChanged,placeholder:e}),Object(j.jsx)(y,{text:this.state.errorText})]})}}]),n}(a.Component),C=n(21),N=n(372),M=n(382),E=n(191),Q=n(99),B=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(C.a)(n,2),o=r[0],s=r[1],c=["React","JavaScript","Node","jQuery","Angular JS"],i=["#ff9900","#1ae7ff","#c90076","#2d7566","#fed96d"];return Object(a.useEffect)((function(){s((function(){return function(){var e=c.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]),Object(j.jsxs)(N.a,{height:400,children:[Object(j.jsxs)("p",{children:["Most popular events in ","".concat(location)]}),Object(j.jsx)(M.a,{width:400,height:400,children:Object(j.jsx)(E.a,{data:o,cx:"50%",cy:"50%",labelLine:!1,innerRadius:30,label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},outerRadius:90,dataKey:"value",children:o.map((function(e,t){return Object(j.jsx)(Q.a,{fill:i[t%i.length]},"cell-".concat(t))}))})})]})},W=n(202),D=n(130),K=n.n(D),L=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];L=JSON.parse(JSON.stringify(L));var J=n(82),R=n.n(J),Z=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){var t=e.map((function(e){return e.location}));return Object(W.a)(new Set(t))},Y=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return R.a.done(),e.abrupt("return",L);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),R.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,z();case 10:if(!(n=e.sent)){e.next=20;break}return Z(),a="https://0n2w0xz9h3.execute-api.us-west-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,K.a.get(a);case 16:return(r=e.sent).data&&(o=V(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),R.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,q(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,K.a.get("https://0n2w0xz9h3.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&G(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://0n2w0xz9h3.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=(n(367),"data:image/png;base64,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"),F=n.p+"static/media/header_image.7efd1293.jpg",H=(n(368),n.p+"static/media/background.12a1c478.jpg"),P=n(376);var I=function(e){return e.showWelcomeScreen?Object(j.jsxs)(p.a,{className:"WelcomeScreen",children:[Object(j.jsx)("img",{alt:"background-image",src:H,className:"background"}),Object(j.jsx)(P.a,{className:"login col-sm-8 mx-auto",children:Object(j.jsxs)("div",{className:"card-body p-4 p-sm-5",children:[Object(j.jsx)("img",{alt:"devMeet logo",src:U,width:"214px",height:"35px",className:"logo"}),Object(j.jsx)("p",{children:"Sign in to see upcoming events around the world for full-stack developers."}),Object(j.jsx)("div",{className:"button_cont",align:"center",children:Object(j.jsxs)("div",{className:"google-btn",children:[Object(j.jsx)("div",{className:"google-icon-wrapper",children:Object(j.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(j.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(j.jsx)("b",{children:"Sign in with Google"})})]})}),Object(j.jsx)("a",{href:"https://fayerose87.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]})})]}):null},X=n(377),_=n(378),$=n(198),ee=n(199),te=n(83),ne=n(203),ae=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,events:[],locations:[],currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t,n){Y().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),currentLocation:t,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.numberOfEvents,this.mounted=!0,n=localStorage.getItem("access_token"),e.next=5,q(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:a=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||a)}),(o||a)&&this.mounted&&Y().then((function(e){s.mounted&&s.setState({events:e.slice(0,t),locations:V(e)}),navigator.onLine?s.setState({offlineAlert:""}):s.setState({offlineAlert:"Offline mode. To view the most current information, please connect to the internet."})}));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentLocation;this.updateEvents(t,e)}},{key:"render",value:function(){var e=this,t=this.state.offlineAlert;return void 0===this.state.showWelcomeScreen?Object(j.jsx)("div",{className:"App"}):Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m.a,{className:"nav",expand:"lg",bg:"light",variant:"light",children:Object(j.jsxs)(p.a,{className:"justify-content-between",children:[Object(j.jsx)(m.a.Brand,{className:"mx-auto mx-lg-0",href:"/",children:Object(j.jsx)("img",{alt:"devMeet logo",src:U,width:"100%",height:"35px",className:"d-inline-block"})}),Object(j.jsx)(S,{locations:this.state.locations,updateEvents:this.updateEvents,events:this.state.events})]})}),Object(j.jsx)("img",{alt:"header",src:F,width:"100%",height:"100%",className:"d-inline-block align-top"}),Object(j.jsx)(k,{text:t}),Object(j.jsxs)(p.a,{children:[Object(j.jsx)("h1",{className:"font-weight-bold",children:"Welcome, Developers! We're glad you're here!"}),Object(j.jsx)("p",{children:"Find an event near you and meet other developers, make friends, find support, grow a business, or explore your interests. There's something for every kind of developer, including: React, JavaScript, Node, jQuery, and Angular JS."}),Object(j.jsx)("p",{children:"Interested in which cities have the most events? Or what types of events are the most popular? Check out the charts below."}),Object(j.jsxs)(g.a,{children:[Object(j.jsxs)(g.a.Item,{eventKey:"0",flush:!0,children:[Object(j.jsx)(g.a.Header,{children:"Most Popular Events by City"}),Object(j.jsx)(g.a.Body,{children:Object(j.jsx)(N.a,{height:400,children:Object(j.jsxs)(X.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(j.jsx)(_.a,{}),Object(j.jsx)($.a,{type:"category",dataKey:"city",name:"city"}),Object(j.jsx)(ee.a,{type:"number",dataKey:"number",name:"number of events"}),Object(j.jsx)(te.a,{cursor:{strokeDasharray:"3 3"}}),Object(j.jsx)(ne.a,{data:this.getData(),fill:"#006c9a"})]})})})]}),Object(j.jsxs)(g.a.Item,{eventKey:"1",flush:!0,children:[Object(j.jsx)(g.a.Header,{children:"Most Popular Types of Events"}),Object(j.jsx)(g.a.Body,{children:Object(j.jsx)(B,{events:this.state.events})})]})]}),Object(j.jsx)("h2",{className:"font-weight-bold",children:"Upcoming Events"}),Object(j.jsx)(w,{events:this.state.events}),Object(j.jsx)(T,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}})]}),Object(j.jsx)(I,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){z()}})]})}}]),n}(a.Component),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,383)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(200).config("50ca694176f44b7182f9a049a1f3c65c").install(),s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}(),se()}},[[369,1,2]]]);
//# sourceMappingURL=main.64f3da8c.chunk.js.map