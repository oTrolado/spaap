(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},18:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(18),a(1)),o=a(2),m=a(4),u=a(3),s=a(5),p=a(6),b=a.n(p),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(b.a,{href:"#home"},"Home"),r.a.createElement(b.a,{href:"#mapa"},"Mapa"),r.a.createElement(b.a,{href:"#information"},"Informa\xe7\xe3o"),r.a.createElement(b.a,{href:"#contact"},"Contato"))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={visNav:"flex"},e}return Object(s.a)(t,e),Object(o.a)(t,[{key:"clickMe",value:function(){"flex"==this.state.visNav?this.setState({visNav:"none"}):this.setState({visNav:"flex"}),document.querySelector(".nav").style.display=this.state.visNav}},{key:"render",value:function(){return r.a.createElement("div",{className:"buttonmob",onClick:this.clickMe.bind(this)},r.a.createElement("img",{src:"/spaap/img/btn.png",alt:"Bot\xe3o Mobile"}))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(max-width: 768px)",srcSet:"/spaap/img/home-4x.png"}),r.a.createElement("img",{src:"/spaap/img/home-8x.png",alt:"Logomarca WEF Imoveis"})))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"address"},r.a.createElement("img",{src:"/spaap/img/phone-4x.png",alt:"Whatsapp"}),r.a.createElement("strong",null,"(XX) XXXXX - XXXX "),r.a.createElement("br",null),"Rua Eufradio Nucas, n\xba 3456, Jardim Oldschool.",r.a.createElement("br",null),r.a.createElement("strong",null,"R$ 560"))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(d,null),r.a.createElement(f,null))}}]),t}(n.Component),g=(a(20),a(11)),O=a.n(g),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{items:[{original:"/spaap/img/original/a.jpg",thumbnail:"/spaap/img/thumb/a.jpg"},{original:"/spaap/img/original/b.jpg",thumbnail:"/spaap/img/thumb/b.jpg"},{original:"/spaap/img/original/c.jpg",thumbnail:"/spaap/img/thumb/c.jpg"},{original:"/spaap/img/original/d.jpg",thumbnail:"/spaap/img/thumb/d.jpg"},{original:"/spaap/img/original/e.jpg",thumbnail:"/spaap/img/thumb/e.jpg"}],autoPlay:!0})}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"information",id:"information"},r.a.createElement("ul",null,r.a.createElement("li",null,"2 quartos."),r.a.createElement("li",null,"Vista para Franca"),r.a.createElement("li",null,"Banheiro com hidromassagem"),r.a.createElement("li",null,"Garagem"),r.a.createElement("li",null,"Cozinha chique"),r.a.createElement("li",null,"Sala enorme"),r.a.createElement("li",null,"\xc1rea de churrasco")))}}]),t}(n.Component),k=a(12),C=a.n(k),w=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"formulario",id:"contact"},r.a.createElement("h1",null," Fale Conosco "),r.a.createElement("form",{name:"form1",id:"form1"},r.a.createElement("input",{type:"text",name:"nome",id:"nome",placeholder:"Nome:"}),r.a.createElement(C.a,{type:"tel",name:"telefone",id:"telefone",placeholder:"Telefone:",mask:"(99) 99999-9999",maskChar:" "}),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email:"}),r.a.createElement("textarea",{name:"mensagem",id:"mensagem",placeholder:"Menssagem:"}),r.a.createElement("input",{type:"submit",value:"Enviar"})))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"maps",id:"mapa"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.0153655887464!2d-47.4125137708307!3d-20.544661499141412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a7d30ca6fb89%3A0x469f43ecb4ca0e73!2sRua+Ribeir%C3%A3o+Preto%2C+615+-+Jardim+Roselandia%2C+Franca+-+SP%2C+14405-052!5e0!3m2!1spt-PT!2sbr!4v1545318460106",allowFullScreen:!0}))}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(v,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(N,null))}}]),t}(n.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("img",{src:"/spaap/img/logo.png",alt:"Logomarca"})),r.a.createElement("div",null,"Endere\xe7o",r.a.createElement("br",null),"Telefone",r.a.createElement("br",null),"Email"))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(x,null),r.a.createElement(X,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.e0cb27c6.chunk.js.map