(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),r=n(7),c=n.n(r),a=(n(21),n(13)),i=n(8),u=n(9),l=n(14),h=n(10),f=n(15),p=(n(23),n(24),n(30)),m=(n(26),function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={question:"",possibleAnswers:[],correctAnswer:"",score:0,sessionToken:""},n.componentDidMount=function(){fetch("https://opentdb.com/api_token.php?command=request").then(function(e){return e.json()}).then(function(e){n.setState({sessionToken:e.token})}),n.fetchQuestion()},n.checkAnswer=function(e){e===n.state.correctAnswer&&(n.setState({score:n.state.score+1}),n.fetchQuestion())},n.fetchQuestion=function(){fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&token=".concat(n.state.sessionToken)).then(function(e){return e.json()}).then(function(e){var t=e.results[0];n.setState({question:t.question,possibleAnswers:Object(p.a)([t.correct_answer].concat(Object(a.a)(t.incorrect_answers))),correctAnswer:t.correct_answer})})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("article",{class:"card"},s.a.createElement("header",null,s.a.createElement("h3",{style:{display:"flex",justifyContent:"center"},dangerouslySetInnerHTML:{__html:this.state.question}})),s.a.createElement("footer",{style:{display:"flex",justifyContent:"center"}},this.state.possibleAnswers.map(function(t){return s.a.createElement("button",{style:{margin:"0 10px"},dangerouslySetInnerHTML:{__html:t},onClick:function(){return e.checkAnswer(t)}})}))),s.a.createElement("h2",null,"Correct: ",this.state.score))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.7814c21b.chunk.js.map