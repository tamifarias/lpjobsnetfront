(this.webpackJsonplpjobsnet=this.webpackJsonplpjobsnet||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},169:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t.n(s),r=t(19),i=t.n(r),n=(t(98),t(99),t(100),t(101),t(24)),o=t(25),l=t(28),d=t(27),j=(t(102),t(13)),m=t(170),b=t(171),h=t(172),u=t(173),x=t(174),O=t(175),p=t(1);function f(e){var a=e.item;return Object(p.jsxs)(m.a,{children:[Object(p.jsx)(b.a,{src:a.image,alt:a.name}),Object(p.jsxs)(h.a,{children:[Object(p.jsx)(u.a,{children:a.name}),a.designation?Object(p.jsx)(x.a,{children:a.designation}):null,Object(p.jsx)(O.a,{children:a.description})]})]})}var g=function(e){return Object(p.jsx)("div",{id:"content-home",className:"container",children:Object(p.jsxs)("div",{className:"row align-items-start",children:[Object(p.jsx)("div",{className:"col-12 col-md m-1",children:Object(p.jsx)(f,{item:e.card})}),Object(p.jsx)("div",{className:"col-12 col-md m-1",children:Object(p.jsx)(f,{item:e.card})}),Object(p.jsx)("div",{className:"col-12 col-md m-1",children:Object(p.jsx)(f,{item:e.card})})]})})},N=t(29),v=t(176),C=t(177),w=t(178),F=t(179),q=t(180),S=t(181),k=t(182),y=t(183),E=t(196),L=t(184),M=t(185),P=t(186),T=t(187),D=t(188),H=t(189),B=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},s.toggleNav=s.toggleNav.bind(Object(N.a)(s)),s.toggleModal=s.toggleModal.bind(Object(N.a)(s)),s.handleLogin=s.handleLogin.bind(Object(N.a)(s)),s}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(v.a,{dark:!0,expand:"md",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C.a,{onClick:this.toggleNav}),Object(p.jsx)(w.a,{className:"mr-auto",href:"/",children:Object(p.jsx)("img",{src:"assets/images/jobsnet.png",height:"30",width:"41",alt:"JobsNET"})}),Object(p.jsxs)(F.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(p.jsxs)(q.a,{navbar:!0,children:[Object(p.jsx)(S.a,{children:Object(p.jsxs)(j.c,{className:"nav-link",to:"/home",children:[Object(p.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(p.jsx)(S.a,{children:Object(p.jsxs)(j.c,{className:"nav-link",to:"/aboutus",children:[Object(p.jsx)("span",{className:"fa fa-info fa-lg"})," Quem somos"]})}),Object(p.jsx)(S.a,{children:Object(p.jsxs)(j.c,{className:"nav-link",to:"/contactus",children:[Object(p.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contate-nos"]})})]}),Object(p.jsx)(q.a,{className:"ml-auto",navbar:!0,children:Object(p.jsx)(S.a,{children:Object(p.jsxs)(k.a,{outline:!0,onClick:this.toggleModal,children:[Object(p.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(p.jsx)(y.a,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row row-header",children:Object(p.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(p.jsx)("h1",{children:"JobsNET"}),Object(p.jsx)("p",{children:"JobsNET especialista em recrutamento e sele\xe7\xe3o de profissionais nas mais diversas \xe1reas."})]})})})}),Object(p.jsxs)(E.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(p.jsx)(L.a,{toggle:this.toggleModal,children:"Login"}),Object(p.jsx)(M.a,{children:Object(p.jsxs)(P.a,{onSubmit:this.handleLogin,children:[Object(p.jsxs)(T.a,{children:[Object(p.jsx)(D.a,{htmlFor:"username",children:"Usu\xe1rio"}),Object(p.jsx)(H.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})]}),Object(p.jsxs)(T.a,{children:[Object(p.jsx)(D.a,{htmlFor:"password",children:"Senha"}),Object(p.jsx)(H.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})]}),Object(p.jsx)(T.a,{check:!0,children:Object(p.jsxs)(D.a,{check:!0,children:[Object(p.jsx)(H.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Manter conectado"]})}),Object(p.jsx)(k.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),t}(s.Component);var I=function(e){return Object(p.jsx)("div",{className:"footer",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"row justify-content-center",children:[Object(p.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(p.jsx)("h5",{children:"Links"}),Object(p.jsxs)("ul",{className:"list-unstyled",children:[Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/aboutus",children:"Quem somos"})}),Object(p.jsx)("li",{children:Object(p.jsx)(j.b,{to:"/contactus",children:"Contate-nos"})})]})]}),Object(p.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(p.jsx)("h5",{children:"Endere\xe7o"}),Object(p.jsxs)("address",{children:["121, Clear Water Bay Road",Object(p.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(p.jsx)("br",{}),"HONG KONG",Object(p.jsx)("br",{}),Object(p.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(p.jsx)("br",{}),Object(p.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(p.jsx)("br",{}),Object(p.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(p.jsx)("a",{href:"mailto:confusion@food.net",children:"jobsnet@jobsnet.net"})]})]}),Object(p.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(p.jsx)("i",{className:"fa fa-google-plus"})}),Object(p.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(p.jsx)("i",{className:"fa fa-facebook"})}),Object(p.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(p.jsx)("i",{className:"fa fa-linkedin"})}),Object(p.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(p.jsx)("i",{className:"fa fa-twitter"})}),Object(p.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(p.jsx)("i",{className:"fa fa-youtube"})}),Object(p.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(p.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-auto",children:Object(p.jsx)("p",{children:"\xa9 Copyright 2021 JobsNET"})})})]})})},A=t(65),J=t.n(A),R=t(92),G=t(190),Q=t(191),V=t(192),W=t(193),z=t(7),K=t(93),Y=t.n(K),Z=function(e){return e&&e.length},U=function(e){return function(a){return!a||a.length<=e}},$=function(e){return function(a){return a&&a.length>=e}},_=function(e){return!isNaN(Number(e))},X=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ee=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).handleSubmit=function(){var e=Object(R.a)(J.a.mark((function e(a){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.post("http://localhost:5000/register",a);case 2:200===e.sent.status?alert("Cadastro realizado!!!"):alert("Cadastro n\xe3o realizado."),console.log("Current State is: "+JSON.stringify(a)),alert("Current State is: "+JSON.stringify(a));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),s.handleSubmit=s.handleSubmit.bind(Object(N.a)(s)),s}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)(G.a,{children:[Object(p.jsx)(Q.a,{children:Object(p.jsx)(j.b,{to:"/home",children:"Home"})}),Object(p.jsx)(Q.a,{active:!0,children:"Contate-nos"})]}),Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h3",{children:"Dados Pessoais"}),Object(p.jsx)("hr",{})]})]}),Object(p.jsx)("div",{className:"row row-content",children:Object(p.jsx)("div",{className:"col-12 col-md-9",children:Object(p.jsxs)(z.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)},children:[Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"nome",md:2,children:"Nome"}),Object(p.jsxs)(W.a,{md:10,children:[Object(p.jsx)(z.Control.text,{model:".nome",id:"nome",name:"nome",placeholder:"Nome Completo",className:"form-control",validators:{required:Z}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".nome",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"cargo",md:2,children:"Cargo"}),Object(p.jsx)(W.a,{md:10,children:Object(p.jsx)(z.Control.text,{model:".cargopretendido",id:"cargo",name:"cargo",placeholder:"Cargo Pretendido",className:"form-control"})})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"estadocivil",md:2,children:"Estado Civil"}),Object(p.jsx)(W.a,{md:4,children:Object(p.jsxs)(z.Control.select,{model:".estadocivil",name:"estadocivil",className:"form-control",children:[Object(p.jsx)("option",{value:"Solteiro(a)",children:"Solteiro(a)"}),Object(p.jsx)("option",{value:"Casado(a)",children:"Casado(a)"}),Object(p.jsx)("option",{value:"Separado(a",children:"Separado(a"}),Object(p.jsx)("option",{value:"Divorciado(a)",children:"Divorciado(a)"}),Object(p.jsx)("option",{value:"Viuvo(a)",children:"Viuvo(a)"})]})}),Object(p.jsx)(D.a,{htmlFor:"sexo",md:1,children:"Sexo"}),Object(p.jsx)(W.a,{md:2,children:Object(p.jsxs)(z.Control.select,{model:".sexo",name:"sexo",className:"form-control",children:[Object(p.jsx)("option",{children:"F"}),Object(p.jsx)("option",{children:"M"})]})})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"dtnascimento",md:2,children:"Dt. Nascimento"}),Object(p.jsxs)(W.a,{md:3,children:[Object(p.jsx)(z.Control.text,{model:".dtnascimento",id:"dtnascimento",name:"dtnascimento",placeholder:"01012001",className:"form-control",validators:{required:Z}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".dtnascimento",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"endereco",md:2,children:"Endere\xe7o"}),Object(p.jsxs)(W.a,{md:10,children:[Object(p.jsx)(z.Control.text,{model:".endereco",id:"endereco",name:"endereco",placeholder:"ex:. Nome da Rua, 56. Bloco 2, AP 301",className:"form-control",validators:{required:Z}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".endereco",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"bairro",md:2,children:"Bairro"}),Object(p.jsxs)(W.a,{md:6,children:[Object(p.jsx)(z.Control.text,{model:".bairro",id:"bairro",name:"bairro",placeholder:"Bairro",className:"form-control",validators:{required:Z}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".bairro",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]}),Object(p.jsx)(D.a,{htmlFor:"cep",md:1,children:"CEP"}),Object(p.jsx)(W.a,{md:3,children:Object(p.jsx)(z.Control.text,{model:".cep",id:"cep",name:"cep",placeholder:"00000000",className:"form-control"})})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"cidade",md:2,children:"Cidade"}),Object(p.jsxs)(W.a,{md:6,children:[Object(p.jsx)(z.Control.text,{model:".cidade",id:"cidade",name:"cidade",placeholder:"Cidade",className:"form-control",validators:{required:Z}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".cidade",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]}),Object(p.jsx)(D.a,{htmlFor:"celular",md:1,children:"Celular"}),Object(p.jsxs)(W.a,{md:3,children:[Object(p.jsx)(z.Control.text,{model:".celular",id:"celular",name:"celular",placeholder:"999999999",className:"form-control",validators:{minLength:$(9),maxLength:U(9),isNumber:_}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".celular",show:"touched",messages:{isNumber:"Formato errado"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"telnum",md:2,children:"Telefone Fixo."}),Object(p.jsxs)(W.a,{md:4,children:[Object(p.jsx)(z.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Fixo 1",className:"form-control",validators:{minLength:$(3),maxLength:U(15),isNumber:_}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{isNumber:"Formato errado"}})]}),Object(p.jsxs)(W.a,{md:4,children:[Object(p.jsx)(z.Control.text,{model:".telnum2",id:"telnum2",name:"telnum2",placeholder:"Tel. Fixo 2",className:"form-control",validators:{minLength:$(3),maxLength:U(15),isNumber:_}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".telnum2",show:"touched",messages:{isNumber:"Formato errado"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"email",md:2,children:"Email"}),Object(p.jsxs)(W.a,{md:10,children:[Object(p.jsx)(z.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:Z,validEmail:X}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Campo obrigat\xf3rio",validEmail:"Email inv\xe1lido"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"identidade",md:2,children:"Identidade"}),Object(p.jsxs)(W.a,{md:5,children:[Object(p.jsx)(z.Control.text,{model:".identidade",id:"identidade",name:"identidade",placeholder:"RG",className:"form-control",validators:{required:Z,isNumber:_}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".identidade",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]}),Object(p.jsx)(D.a,{htmlFor:"CPF",md:1,children:"CPF"}),Object(p.jsxs)(W.a,{md:4,children:[Object(p.jsx)(z.Control.text,{model:".cpf",id:"cpf",name:"cpf",placeholder:"00000000000",className:"form-control",validators:{required:Z,isNumber:_}}),Object(p.jsx)(z.Errors,{className:"text-danger",model:".cpf",show:"touched",messages:{required:"Campo obrigat\xf3rio"}})]})]}),Object(p.jsxs)(V.a,{className:"form-group",children:[Object(p.jsx)(D.a,{htmlFor:"veiculo",md:2,children:"Possui Ve\xedculo"}),Object(p.jsx)(W.a,{md:2,children:Object(p.jsxs)(z.Control.select,{model:".veiculo",name:"veiculo",className:"form-control",children:[Object(p.jsx)("option",{children:"Sim"}),Object(p.jsx)("option",{children:"N\xe3o"})]})}),Object(p.jsx)(D.a,{htmlFor:"habilitacao",md:2,children:"Habilita\xe7\xe3o"}),Object(p.jsx)(W.a,{md:2,children:Object(p.jsxs)(z.Control.select,{model:".habilitacao",name:"habilitacao",className:"form-control",children:[Object(p.jsx)("option",{children:"Sim"}),Object(p.jsx)("option",{children:"N\xe3o"})]})})]}),Object(p.jsx)(V.a,{className:"form-group",children:Object(p.jsx)(W.a,{md:{size:10,offset:2},children:Object(p.jsx)(k.a,{type:"submit",color:"primary",className:"btn pull-right",children:"Enviar"})})})]})})})]})}}]),t}(s.Component),ae=t(194),te=t(195);function se(e){var a=e.leader;return Object(p.jsx)("div",{className:"col-12 mt-5",children:Object(p.jsxs)(ae.a,{tag:"li",children:[Object(p.jsx)(ae.a,{left:!0,middle:!0,children:Object(p.jsx)(ae.a,{object:!0,src:a.image,alt:a.name})}),Object(p.jsxs)(ae.a,{body:!0,className:"ml-5",children:[Object(p.jsx)(ae.a,{heading:!0,children:a.name}),Object(p.jsx)("p",{children:a.designation}),Object(p.jsx)("p",{children:a.description})]})]})},a.id)}var ce=function(e){var a=e.leaders.map((function(e){return Object(p.jsx)(se,{leader:e})}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)(G.a,{children:[Object(p.jsx)(Q.a,{children:Object(p.jsx)(j.b,{to:"/home",children:"Home"})}),Object(p.jsx)(Q.a,{active:!0,children:"Quem somos"})]}),Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h3",{children:"Quem somos"}),Object(p.jsx)("hr",{})]})]}),Object(p.jsxs)("div",{className:"row row-content",children:[Object(p.jsxs)("div",{className:"col-12 col-md-6",children:[Object(p.jsx)("h2",{children:"Nossa hist\xf3ria"}),Object(p.jsx)("p",{children:"Donec iaculis porttitor diam, ut finibus mi bibendum et. Integer ac tellus non libero aliquam porta at a eros. Maecenas vehicula dui erat, nec sagittis orci tempus in. Nullam mollis nunc a velit consectetur, sed lacinia urna vehicula. Curabitur neque orci, sollicitudin ac lectus in, malesuada tincidunt leo."}),Object(p.jsxs)("p",{children:["Aenean consectetur vulputate pharetra. Sed tristique vulputate semper.",Object(p.jsx)("em",{children:"Maecenas vehicula dui erat, nec sagittis orci tempus in."})," Proin ac metus vitae arcu aliquam volutpat vitae eu odio."]})]}),Object(p.jsx)("div",{className:"col-12 col-md-5",children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(te.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(p.jsx)(h.a,{children:Object(p.jsxs)("dl",{className:"row p-1",children:[Object(p.jsx)("dt",{className:"col-6",children:"Started"}),Object(p.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(p.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(p.jsx)("dd",{className:"col-6",children:"HK Fine Inc."}),Object(p.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(p.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(p.jsx)("dt",{className:"col-6",children:"Employees"}),Object(p.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)(m.a,{children:Object(p.jsx)(h.a,{className:"bg-faded",children:Object(p.jsxs)("blockquote",{className:"blockquote",children:[Object(p.jsx)("p",{className:"mb-0",children:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}),Object(p.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(p.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(p.jsxs)("div",{className:"row row-content",children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h2",{children:"Corporate Leadership"})}),a]})]})},re=t(10),ie=t(20),ne=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(n.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(B,{}),Object(p.jsxs)(re.d,{children:[Object(p.jsx)(re.b,{path:"/home",component:function(){return Object(p.jsx)(g,{card:e.props.cards.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),Object(p.jsx)(re.b,{exact:!0,path:"/aboutus",component:function(){return Object(p.jsx)(ce,{leaders:e.props.leaders})}}),Object(p.jsx)(re.b,{exact:!0,path:"/contactus",component:ee}),Object(p.jsx)(re.a,{to:"/home"})]}),Object(p.jsx)(I,{})]})}}]),t}(s.Component),oe=Object(re.g)(Object(ie.connect)((function(e){return{cards:e.cards,leaders:e.leaders}}))(ne)),le=t(35),de=[{id:0,name:"Card",image:"/assets/images/jobsnet.png",designation:"Lorem ipsum dolor",abbr:"Card",featured:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum aliquet tempus. Nam eget ante varius est imperdiet sodales eu sed sem. Donec viverra efficitur ante, vitae tincidunt dolor iaculis in. Morbi ullamcorper sem nec sodales faucibus. Aliquam eget gravida mi. Integer finibus vel quam vel dictum."}],je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;return a.type,e},me=[{id:0,name:"Leader 1",image:"/assets/images/avatar2.png",designation:"Sed Facj Hui",abbr:"CEO",featured:!1,description:"Sed iaculis, magna id fermentum dapibus, nunc orci tempus eros, eu imperdiet sapien justo vitae lacus. Donec a aliquam velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."},{id:1,name:"Leader 2",image:"/assets/images/avatar2.png",designation:"Sed Facj Hui",abbr:"CFO",featured:!1,description:"Sed iaculis, magna id fermentum dapibus, nunc orci tempus eros, eu imperdiet sapien justo vitae lacus. Donec a aliquam velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."},{id:2,name:"Leader 3",image:"/assets/images/avatar2.png",designation:"Sed Facj Hui",abbr:"CTO",featured:!1,description:"Sed iaculis, magna id fermentum dapibus, nunc orci tempus eros, eu imperdiet sapien justo vitae lacus. Donec a aliquam velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."}],be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;return a.type,e},he=Object(le.createStore)(Object(le.combineReducers)({cards:je,leaders:be})),ue=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(p.jsx)(ie.Provider,{store:he,children:Object(p.jsx)(j.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(oe,{})})})})}}]),t}(s.Component),xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,197)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(ue,{})}),document.getElementById("root")),xe()}},[[169,1,2]]]);
//# sourceMappingURL=main.7de5d520.chunk.js.map