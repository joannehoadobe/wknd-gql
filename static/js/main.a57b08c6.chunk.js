(this["webpackJsonpwknd-gql"]=this["webpackJsonpwknd-gql"]||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(22),a=t.n(i),c=(t(74),t(51)),s=t(9),l=t(5),d=t(1),h="Validation error of type FieldUndefined: Field 'adventureList' in type 'QueryType' is undefined @ 'adventureList'",u="Unexpected token < in JSON at position 0";function j(e){var n=e.error;try{return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h1",{children:"Error"}),Object(d.jsx)("pre",{style:m.pre,children:n}),n===h&&Object(d.jsx)("span",{children:"The Adventures, Articles Content Fragment Models are either not created and installed, or need to be resaved."}),n===h&&Object(d.jsx)("a",{style:m.a,href:"/libs/dam/cfm/models/console/content/models.html/conf",children:"Setup Content Fragments"}),n===u&&Object(d.jsx)("span",{children:"The global GraphQL endpoint appears to not exist or not be setup."}),n===u&&Object(d.jsx)("a",{style:m.a,href:"/libs/cq/graphql/sites/admin/content/console.html",children:"Setup Global GraphQL Endpoint"})]})}catch(t){return Object(d.jsx)("div",{children:"Error with the Error"})}}var m={pre:{border:"1px solid rgba(255, 255, 255, .1)",borderRadius:"4px",padding:"1rem",width:"120ch",whiteSpace:"normal"},a:{color:"black"}};var b=t(76).AEMHeadless,p=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),O=p.REACT_APP_PUBLIC_URI,v=p.REACT_APP_GRAPHQL_ENDPOINT,g=p.REACT_APP_AUTHORIZATION;var f=t(112),x=t(114),_=t(115),T=t(113);function S(e){return Object(d.jsx)(f.a,{children:Object(d.jsxs)(x.a,{collapseOnSelect:!0,className:"justify-content-right",expand:"lg",variant:"light",bg:"light",children:[Object(d.jsx)(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(x.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsx)(_.a,{className:"me-auto",children:e.content.navigation.menuItems.map((function(e){return Object(d.jsx)(T.a,{title:e.menuName,id:"basic-nav-dropdown",children:e.items.map((function(e){return Object(d.jsx)(T.a.Item,{href:e.linkURL,children:e.linkName},e.linkName)}))},e.menuName)}))})})]})})}t(98);function w(e){return Object(d.jsxs)("div",{className:e.content.entityType,children:[Object(d.jsx)("div",{className:"floater",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.content.teaserTitle}),Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content.teaserDescription.html}}),Object(d.jsx)("a",{href:"#",className:"action-links",children:"View Trips"})]})}),Object(d.jsx)("img",{className:"teaser-image",src:e.content.teaserImage._publishUrl})]})}var E=t(35),k=t(36),N=t(47),y=t(53),L=function(e){Object(N.a)(t,e);var n=Object(y.a)(t);function t(e){var r;return Object(E.a)(this,t),(r=n.call(this,e)).state={error:null,isLoaded:!1,items:[]},r}return Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new Headers).append("Authorization","Basic "+btoa(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHORIZATION));var n={method:"GET",headers:{"Access-Control-Request-Headers":"Authorization",Authorization:"Basic "+btoa(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHORIZATION),"Content-Type":"text/plain",Origin:""},credentials:"include"};console.log(n),fetch(this.props.content.experienceFragment._authorUrl,n).then((function(n){n.text().then((function(n){console.log(n),e.setState({isLoaded:!0,items:n})}))}),(function(n){console.log(n),e.setState({isLoaded:!0,error:n})}))}},{key:"render",value:function(){var e=this.state,n=e.error,t=e.isLoaded,r=e.items;return n?Object(d.jsxs)("div",{children:["Error: ",n.message]}):t?Object(d.jsx)("span",{dangerouslySetInnerHTML:{__html:r}}):Object(d.jsx)("div",{children:"Loading..."})}}]),t}(o.a.Component);function A(e){return"navigation"===e.type?Object(d.jsx)(S,{content:e.content}):"teaser"===e.type?Object(d.jsx)(w,{content:e.content}):"experience fragment"===e.type?Object(d.jsx)(L,{content:e.content}):Object(d.jsx)("p",{children:"default"})}function C(e){var n,t=1,o=function(e,n){var t=Object(r.useState)(null),o=Object(l.a)(t,2),i=o[0],a=o[1],c=Object(r.useState)(null),s=Object(l.a)(c,2),d=s[0],h=s[1];return Object(r.useEffect)((function(){var t=new b({serviceURL:O,endpoint:v,auth:g.split(":")});(e?t.runQuery.bind(t):t.runPersistedQuery.bind(t))(e||n).then((function(e){var n=e.data,t=e.errors;t&&h(function(e){return e.map((function(e){return e.message?e.message:e})).join(",")}(t)),n&&a(n)})).catch((function(e){h(e)}))}),[e,n]),{data:i,errors:d}}((n=e.name,'{\n  screenList(filter: {\n    screenName: {\n      _expressions: {\n        value: "'.concat(n,'"\n        _ignoreCase: true\n      }\n    }\n  }) {\n    items {\n      navigation {\n        ... on TopModel {\n          menuItems {\n            menuName\n            items {\n              __typename\n              ... on LinksModel {\n                linkURL\n                linkName\n              }\n              ... on CategoryListModel {\n                categoryName\n                category {\n                  linkName\n                  linkURL\n                  isBold\n                }\n              }\n            }\n          }\n        }\n      }\n      block {\n        __typename\n        ... on TeaserModel {\n          _model {\n            _path\n            title\n          }\n          teaserImage {\n            ... on ImageRef {\n              _authorUrl\n              _publishUrl\n              width\n              height\n              mimeType\n            }\n          }\n          teaserTitle\n          teaserDescription {\n            html\n            plaintext\n          }\n          entityType\n        }\n        ... on ExperienceFragmentModel {\n          _model {\n            title\n          }\n          name\n          experienceFragment {\n            ... on PageRef { \n              _publishUrl\n              _authorUrl\n            }\n          }\n        }\n      }\n    }\n  }\n}'))),i=o.data,a=o.errors,s=Object(r.useState)(!1),h=Object(l.a)(s,2),u=h[0],m=h[1];return null!=a?(m(!0),Object(d.jsx)(j,{error:a})):u||null!==i?u&&!i.screenList.items?Object(d.jsx)(j,{error:"There was an error with the returned data."}):null!=i?(u||m(!0),Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("div",{className:"header",children:"test"}),Object(d.jsx)("div",{className:"left row2",children:Object(d.jsx)(c.b,{to:"/",children:Object(d.jsx)("img",{src:"https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg",width:"96"})})}),Object(d.jsx)("div",{className:"middle row2",children:Object(d.jsx)(S,{content:i.screenList.items[0]})}),Object(d.jsx)("div",{className:"right row2",children:Object(d.jsx)("input",{className:"search","data-cmp-hook-search":"input",type:"text",name:"fulltext",placeholder:"Search",role:"combobox"})}),i.screenList.items[0].block.map((function(e){return Object(d.jsx)("div",{className:"block"+t++,children:Object(d.jsx)(A,{type:e._model.title.toLowerCase(),content:e},e.key)},"block"+t)})),Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{children:"Footer"})})]})):void 0:Object(d.jsx)("span",{children:"What to do here?"})}var R=function(){return Object(d.jsx)(c.a,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/magazine:path",children:Object(d.jsx)(C,{name:"magazine"})}),Object(d.jsx)(s.a,{path:"/",children:Object(d.jsx)(C,{name:"home"})})]})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,116)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),i(e),a(e)}))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(104);a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),P(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");U?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(n,e)}))}}()},74:function(e,n,t){},98:function(e,n,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.a57b08c6.chunk.js.map