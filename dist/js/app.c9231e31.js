(function(){"use strict";var e={5874:function(e,t,n){var o=n(2113),l=n(4234),r=n(7944),a=n(3871),u=n(3609),s=n(7248);function i(e,t,n,o,i,c){const d=(0,l.g2)("GameSettings"),f=(0,l.g2)("MatchSchedule"),h=(0,l.g2)("ScoreBoard");return(0,l.uX)(),(0,l.Wv)(r.E,null,{default:(0,l.k6)((()=>[(0,l.bF)(a.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(u.u,{flat:"",color:"primary"},{default:(0,l.k6)((()=>[(0,l.bF)(s.s,{class:"white--text"},{default:(0,l.k6)((()=>[(0,l.eW)("Padel Americano")])),_:1})])),_:1}),(0,l.bF)(d,{onCreateSchedule:c.triggerCreateSchedule},null,8,["onCreateSchedule"]),(0,l.bF)(f),(0,l.bF)(h)])),_:1})])),_:1})}var c=n(5679),d=n(6198),f=n(1885),h=n(1492),p=n(1771),m=n(2818),g=n(879),b=n(9269),v=n(659);const y={style:{display:"flex","justify-content":"space-between","align-items":"center",width:"100%"}},S=(0,l.Lk)("span",null,"Game Settings",-1);function k(e,t,n,r,u,s){return(0,l.uX)(),(0,l.Wv)(a.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(f.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(h.r,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",y,[S,(0,l.bF)(d.D,{icon:"",onClick:s.toggleSettings},{default:(0,l.k6)((()=>[(0,l.bF)(g.w,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,c.v_)(u.settingsOpen?"mdi-chevron-up":"mdi-chevron-down"),1)])),_:1})])),_:1},8,["onClick"])])])),_:1}),(0,l.bF)(v.Qo,null,{default:(0,l.k6)((()=>[u.settingsOpen?((0,l.uX)(),(0,l.Wv)(p.O,{key:0},{default:(0,l.k6)((()=>[(0,l.bF)(m.n,{onSubmit:(0,o.D$)(s.confirmAndSaveSettings,["prevent"])},{default:(0,l.k6)((()=>[(0,l.bF)(b.W,{label:"Totalt Poäng",type:"number",modelValue:u.totalPoints,"onUpdate:modelValue":t[0]||(t[0]=e=>u.totalPoints=e),modelModifiers:{number:!0},required:""},null,8,["modelValue"]),(0,l.bF)(b.W,{label:"Antal Banor",type:"number",modelValue:u.courtCount,"onUpdate:modelValue":t[1]||(t[1]=e=>u.courtCount=e),modelModifiers:{number:!0},required:""},null,8,["modelValue"]),(0,l.bF)(b.W,{label:"Antal Spelare",type:"number",modelValue:u.playerCount,"onUpdate:modelValue":t[2]||(t[2]=e=>u.playerCount=e),modelModifiers:{number:!0},onInput:s.updatePlayerFields,required:""},null,8,["modelValue","onInput"]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.players,((e,t)=>((0,l.uX)(),(0,l.Wv)(b.W,{key:t,label:"Spelare "+(t+1),modelValue:u.players[t],"onUpdate:modelValue":e=>u.players[t]=e,required:""},null,8,["label","modelValue","onUpdate:modelValue"])))),128)),(0,l.bF)(d.D,{type:"submit",color:"primary"},{default:(0,l.k6)((()=>[(0,l.eW)("Spara & skapa spelschema")])),_:1})])),_:1},8,["onSubmit"])])),_:1})):(0,l.Q3)("",!0)])),_:1})])),_:1})])),_:1})}n(381);var _={data(){return{totalPoints:32,courtCount:2,playerCount:8,players:["Abbe","André","Stoffe","Martin","Sebbe","Mathias","Jimmie","Lelle"],settingsOpen:!0}},methods:{updatePlayerFields(){const e=Number(this.playerCount);if(this.players.length>e)this.players.splice(e);else for(let t=this.players.length;t<e;t++)this.players.push("")},confirmAndSaveSettings(){const e=localStorage.getItem("gameSettings");e?confirm("Det finns redan sparade inställningar. Vill du skriva över dem?")&&this.saveSettings():this.saveSettings()},saveSettings(){const e={totalPoints:this.totalPoints,courtCount:this.courtCount,playerCount:this.playerCount,players:this.players};this.players.some((e=>""===e.trim()))?alert("Vänligen fyll i alla spelarnamn."):(localStorage.setItem("gameSettings",JSON.stringify(e)),this.$root.$data.shouldCreateSchedule=!0,this.settingsOpen=!1)},toggleSettings(){this.settingsOpen=!this.settingsOpen}},created(){const e=JSON.parse(localStorage.getItem("gameSettings"));e&&(this.totalPoints=e.totalPoints,this.courtCount=e.courtCount,this.playerCount=e.playerCount,this.players=e.players,this.settingsOpen=!1)}},O=n(2903);const C=(0,O.A)(_,[["render",k]]);var F=C,P=n(3598),I=n(7148);const W=e=>((0,l.Qi)("data-v-65732703"),e=e(),(0,l.jt)(),e),V=W((()=>(0,l.Lk)("strong",null,"Lag A:",-1))),w=W((()=>(0,l.Lk)("br",null,null,-1))),j=W((()=>(0,l.Lk)("strong",null,"Lag B:",-1)));function E(e,t,n,o,r,u){return(0,l.uX)(),(0,l.Wv)(a.I,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.matchSchedule,((e,t)=>((0,l.uX)(),(0,l.Wv)(P.L,{key:t},{default:(0,l.k6)((()=>[(0,l.bF)(I.B,{cols:"12"},{default:(0,l.k6)((()=>[(0,l.bF)(f.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(h.r,{class:"headline"},{default:(0,l.k6)((()=>[(0,l.eW)("Match "+(0,c.v_)(t+1),1)])),_:2},1024),(0,l.bF)(P.L,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,((e,n)=>((0,l.uX)(),(0,l.Wv)(I.B,{key:n,cols:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(h.r,{class:"headline"},{default:(0,l.k6)((()=>[(0,l.eW)("Bana "+(0,c.v_)(n+1),1)])),_:2},1024),(0,l.bF)(p.O,null,{default:(0,l.k6)((()=>[V,(0,l.eW)(" "+(0,c.v_)(e.teams[0][0])+" / "+(0,c.v_)(e.teams[0][1])+" ",1),(0,l.bF)(b.W,{label:"Poäng Lag A",type:"number",modelValue:e.scores[0],"onUpdate:modelValue":t=>e.scores[0]=t,modelModifiers:{number:!0},onInput:e=>u.updateScore(t,n,0)},null,8,["modelValue","onUpdate:modelValue","onInput"]),w,j,(0,l.eW)(" "+(0,c.v_)(e.teams[1][0])+" / "+(0,c.v_)(e.teams[1][1])+" ",1),(0,l.bF)(b.W,{label:"Poäng Lag B",type:"number",modelValue:e.scores[1],"onUpdate:modelValue":t=>e.scores[1]=t,modelModifiers:{number:!0},onInput:e=>u.updateScore(t,n,1)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}var M={data(){return{matchSchedule:[],totalPoints:32}},methods:{createMatchSchedule(){const e=JSON.parse(localStorage.getItem("gameSettings"));if(!e)return void console.error("No game settings found in local storage");const t=Number(e.playerCount),n=e.players,o=Number(e.courtCount);if(this.totalPoints=Number(e.totalPoints),n.length!==t)return void console.error("Invalid input for game settings");if(t%2!==0)return void console.error("Player count must be even for round-robin scheduling.");this.matchSchedule=[];const l=t/2,r=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}};for(let a=0;a<t-1;a++){let e=[...n];r(e);let a=[];for(let n=0;n<o;n++){if(2*n>=l)break;const o=[e[n],e[l-1-n]],r=[e[l+n],e[t-1-n]];a.push({teams:[o,r],scores:[null,null]})}this.matchSchedule.push(a),n.splice(1,0,n.pop())}localStorage.setItem("matchSchedule",JSON.stringify(this.matchSchedule))},updateScore(e,t,n){const o=this.matchSchedule[e],l=o[t],r=l.scores[0],a=l.scores[1];0===n&&null!==r?l.scores[1]=this.totalPoints-r:1===n&&null!==a&&(l.scores[0]=this.totalPoints-a),this.matchSchedule=[...this.matchSchedule],localStorage.setItem("matchSchedule",JSON.stringify(this.matchSchedule))}},created(){const e=JSON.parse(localStorage.getItem("matchSchedule"));e&&e.length>0&&(this.matchSchedule=e)},watch:{"$root.$data.shouldCreateSchedule":function(e){e&&(this.createMatchSchedule(),this.$root.$data.shouldCreateSchedule=!1)}}};const N=(0,O.A)(M,[["render",E],["__scopeId","data-v-65732703"]]);var A=N,L=n(2123),X=n(2815),J=n(1703);function U(e,t,n,o,r,u){const s=(0,l.g2)("v-list-item-content");return(0,l.uX)(),(0,l.Wv)(a.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(f.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(h.r,null,{default:(0,l.k6)((()=>[(0,l.eW)("Leaderboard")])),_:1}),(0,l.bF)(p.O,null,{default:(0,l.k6)((()=>[(0,l.bF)(L.x8,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.sortedPlayers,((e,t)=>((0,l.uX)(),(0,l.Wv)(X.g,{key:t},{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>[(0,l.bF)(J.U,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,c.v_)(e.name)+": "+(0,c.v_)(e.totalPoints)+" points",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}var x={data(){return{players:[]}},computed:{sortedPlayers(){return this.players.sort(((e,t)=>t.totalPoints-e.totalPoints))}},methods:{calculatePlayerPoints(){const e=JSON.parse(localStorage.getItem("matchSchedule")),t=JSON.parse(localStorage.getItem("gameSettings"));if(e&&t){const n={};t.players.forEach((e=>{n[e]=0})),e.forEach((e=>{e.forEach((e=>{const[t,o]=e.teams,[l,r]=e.scores;null!==l&&null!==r&&(t.forEach((e=>{n[e]+=l})),o.forEach((e=>{n[e]+=r})))}))})),this.players=t.players.map((e=>({name:e,totalPoints:n[e]})))}}},created(){this.calculatePlayerPoints()}};const B=(0,O.A)(x,[["render",U],["__scopeId","data-v-1e4813b3"]]);var T=B,$={components:{GameSettings:F,MatchSchedule:A,ScoreBoard:T},data(){return{shouldCreateSchedule:!1}},methods:{triggerCreateSchedule(){this.shouldCreateSchedule=!0}}};const q=(0,O.A)($,[["render",i]]);var D=q,K=(n(2967),n(916)),G=(0,K.$N)();async function Q(){const e=await n.e(53).then(n.t.bind(n,5878,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Q(),(0,o.Ef)(D).use(G).mount("#app")}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],r=e[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,r<a&&(a=r));if(u){e.splice(c--,1);var i=l();void 0!==i&&(t=i)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,l){if(1&l&&(o=this(o)),8&l)return o;if("object"===typeof o&&o){if(4&l&&o.__esModule)return o;if(16&l&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&l&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(r,a),r}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.e242a257.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="padel-americano:";n.l=function(o,l,r,a){if(e[o])e[o].push(l);else{var u,s;if(void 0!==r)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[l];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var l=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),l&&l.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var l=n.o(e,t)?e[t]:void 0;if(0!==l)if(l)o.push(l[2]);else{var r=new Promise((function(n,o){l=e[t]=[n,o]}));o.push(l[2]=r);var a=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,l[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,r,a=o[0],u=o[1],s=o[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(l in u)n.o(u,l)&&(n.m[l]=u[l]);if(s)var c=s(n)}for(t&&t(o);i<a.length;i++)r=a[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkpadel_americano"]=self["webpackChunkpadel_americano"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5874)}));o=n.O(o)})();
//# sourceMappingURL=app.c9231e31.js.map