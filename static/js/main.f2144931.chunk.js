(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://media3.giphy.com/media/xT9IgvEOwRzUcZDRiU/giphy.gif"},{"id":2,"image":"https://media3.giphy.com/media/efQyY0INUIwz6/source.gif"},{"id":3,"image":"https://media.giphy.com/media/ixD8eh7jOvaEw/giphy.gif"},{"id":4,"image":"https://media.giphy.com/media/xT9KVwXbZ2s5clFf8c/giphy.gif"},{"id":5,"image":"https://media.giphy.com/media/5hzmGWOHOL58Q/giphy.gif"},{"id":6,"image":"https://media3.giphy.com/media/ZLNJcUcndjB4s/giphy.gif"},{"id":7,"image":"https://media3.giphy.com/media/nlgexSdFTWT9S/giphy.gif"},{"id":8,"image":"https://media0.giphy.com/media/TzuVuw4QxoIes/giphy.gif"}]')},14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),s=i(3),n=i.n(s),o=(i(14),i(4)),r=i(5),d=i(7),m=i(6),l=i(8);function h(e){return c.a.createElement("div",null,c.a.createElement("img",{src:e.image,onClick:e.shuffle,style:{height:350,width:350,marginBottom:10,marginTop:10}}))}var g=i(1),p=(i(15),i(16),function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(i=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={sus:g,clickedScaryIds:[],score:0,goal:8,status:""},i.shuffleScoreCard=function(e){console.log("click!");var t=i.state.clickedScaryIds;if(t.includes(e))i.setState({clickedScaryIds:[],score:0,status:"Who will kill you next.."});else{if(t.push(e),8===t.length)return i.setState({score:8,status:"Saved yoself this time...",clickedScaryIds:[]}),void console.log("Youve Escaped");for(var a=g.length-1;a>0;a--){var c=Math.floor(Math.random()*(a+1)),s=[g[c],g[a]];g[a]=s[0],g[c]=s[1]}i.setState({sus:g,clickedScaryIds:t,score:t.length,status:" "})}},i}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Are You Scared Yet?"),c.a.createElement("p",{className:"App-intro"},"Don't click on the same buddy twice")),this.state.sus.map((function(t){return c.a.createElement(h,{div:!0,className:"Card-body",shuffle:function(){return e.shuffleScoreCard(t.id)},id:t.id,key:t.id,image:t.image})})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,i){e.exports=i(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f2144931.chunk.js.map