(this["webpackJsonpwine-library"]=this["webpackJsonpwine-library"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('[{"id":1,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":2,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":3,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":4,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":5,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":6,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":7,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":8,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":9,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":10,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":11,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":12,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":13,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":14,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":15,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":52,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":54,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":57,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":125,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":255,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":6575,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25},{"id":1235,"name":"Michael Jordan, CHI","team":"Chicago Bulls","GP":4,"MIN":45,"PTS":65,"FG":25}]')},39:function(e,a,s){},41:function(e,a,s){"use strict";s.r(a);s(0);var i=s(11),t=s.n(i),l=s(26),c=s(10),n=s(23),_=s.n(n),r=s(24),m=s(16),d=Object(m.b)({name:"activePlayers",initialState:[],reducers:{add:function(e,a){e.push(a.payload)},remove:function(e,a){return e.filter((function(e){return e.id!==a.payload.id}))}}}),o=d.actions,j=d.reducer,h=c.c,N=c.b,p=s(1),b=function(){var e=N(),a=h((function(e){return e.ActivePlayers}));return console.log(a),Object(p.jsxs)("div",{className:"player-list",children:[Object(p.jsx)("h2",{className:"player-list__title",children:"Pick one of the player"}),Object(p.jsx)("ul",{className:"player-list__list",children:r.map((function(s){var i=s.name,t=s.team,l=s.id,c=a.some((function(e){return e.id===l}));return Object(p.jsx)("li",{children:Object(p.jsxs)("button",{type:"button",className:_()("card",{"card--active":c}),onClick:function(){e(c?o.remove(s):o.add(s))},children:[Object(p.jsx)("h2",{className:"card__name",children:i}),Object(p.jsx)("strong",{className:"card__team",children:t})]})},l)}))})]})},u=function(){var e="Michael Jordan, CHI",a="Chicago Bulls",s=4,i=45,t=65,l=25;return Object(p.jsxs)("div",{className:"mvp",children:[Object(p.jsxs)("div",{className:"mvp__player",children:[Object(p.jsx)("h2",{className:"mvp__player__title",children:"mvp player"}),Object(p.jsx)("h1",{className:"mvp__player__name",children:e})]}),Object(p.jsxs)("div",{className:"mvp__info",children:[Object(p.jsxs)("div",{className:"mvp__info__item",children:["TEAM",Object(p.jsx)("div",{className:"mvp__info__item__info",children:a})]}),Object(p.jsxs)("div",{className:"mvp__info__item",children:["GP",Object(p.jsx)("div",{className:"mvp__info__item__info",children:s})]}),Object(p.jsxs)("div",{className:"mvp__info__item",children:["MIN",Object(p.jsx)("div",{className:"mvp__info__item__info",children:i})]})]}),Object(p.jsxs)("div",{className:"mvp__info",children:[Object(p.jsxs)("div",{className:"mvp__info__item",children:["PTS",Object(p.jsx)("div",{className:"mvp__info__item__info",children:t})]}),Object(p.jsxs)("div",{className:"mvp__info__item",children:["FG%",Object(p.jsx)("div",{className:"mvp__info__item__info",children:l})]})]})]})},P=function(){var e=h((function(e){return e.ActivePlayers}));return Object(p.jsxs)("div",{className:"players-stats",children:[Object(p.jsxs)("h1",{className:"players-stats__title",children:["NBA",Object(p.jsx)("br",{}),"players board"]}),Object(p.jsxs)("ul",{className:"players-stats__list",children:[Object(p.jsxs)("li",{className:"players-stats__list__item players-stats__list__item--titles",children:[Object(p.jsx)("strong",{className:"players-stats__list__item__title players-stats__list__item__info--name",children:"name"}),Object(p.jsx)("strong",{className:"players-stats__list__item__title",children:"team"}),Object(p.jsx)("strong",{className:"players-stats__list__item__title",children:"GP"}),Object(p.jsx)("strong",{className:"players-stats__list__item__title",children:"MIN"}),Object(p.jsx)("strong",{className:"players-stats__list__item__title",children:"PTS"}),Object(p.jsx)("strong",{className:"players-stats__list__item__title",children:"FG"})]}),e.map((function(e){var a=e.id,s=e.name,i=e.team,t=e.GP,l=e.MIN,c=e.PTS,n=e.FG;return Object(p.jsxs)("li",{className:"players-stats__list__item players-stats__list__item--player",children:[Object(p.jsx)("strong",{className:"players-stats__list__item__info players-stats__list__item__info--name",children:s}),Object(p.jsx)("strong",{className:"players-stats__list__item__info",children:i}),Object(p.jsx)("strong",{className:"players-stats__list__item__info",children:t}),Object(p.jsx)("strong",{className:"players-stats__list__item__info",children:l}),Object(p.jsx)("strong",{className:"players-stats__list__item__info",children:c}),Object(p.jsxs)("strong",{className:"players-stats__list__item__info",children:[n,"%"]}),Object(p.jsx)("div",{className:"players-stats__list__item__line"})]},a)}))]}),Object(p.jsx)(u,{})]})},O=(s(39),function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{}),Object(p.jsx)(P,{})]})}),v=s(25),x=Object(m.a)({reducer:{ActivePlayers:j}});Object(v.composeWithDevTools)();var G=x;t.a.render(Object(p.jsx)(c.a,{store:G,children:Object(p.jsx)(l.a,{children:Object(p.jsx)(O,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.df4c520e.chunk.js.map