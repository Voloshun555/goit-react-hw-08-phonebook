"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[941],{941:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(439),r=t(791),s=t(434),c=function(e){return e.contacts.list},i=function(e){return e.filter},o=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=function(e){var n=e.contacts.list,t=e.filter;if(!t)return n;var a=t.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},m=t(490),d="contactForm_formName__-Cizm",f="contactForm_formNumber__roPLh",h="contactForm_btnForm__wploc",_="contactForm_inputTitle__VTckD",p=t(184),b=function(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],i=n[1],o=(0,r.useState)(""),u=(0,a.Z)(o,2),l=u[0],b=u[1],v=(0,s.I0)(),j=(0,s.v9)(c),x=function(e){var n=e.name,t=e.number,a={name:n,number:t},r=n.toLowerCase(),s=j.find((function(e){return e.name.toLowerCase()===r||e.number===t}));s?alert("".concat(n," \u0430\u0431\u043e ").concat(t," \u0432\u0436\u0435 \u0454 \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456")):(v((0,m.uK)(a)),i(""),b(""))},N=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":i(a);break;case"number":b(a)}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(""),b(""),x({name:t,number:l})},children:[(0,p.jsxs)("label",{className:d,children:["Name",(0,p.jsx)("input",{className:_,onChange:N,type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+([' \\-][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t})]}),(0,p.jsxs)("label",{className:f,children:["Number",(0,p.jsx)("input",{className:_,onChange:N,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:" number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l})]}),(0,p.jsx)("button",{className:h,type:"submit",children:"Add contact"})]}),(0,p.jsxs)("h3",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430: ",j.length]})]})},v="contactList_list__nPZlL",j=function(){var e=(0,s.I0)(),n=(0,s.v9)(l);return(0,p.jsx)("ul",{style:{padding:0},children:n.map((function(n){var t=n.name,a=n.number,r=n.id;return(0,p.jsxs)("li",{className:v,children:[(0,p.jsxs)("p",{children:[t,": ",a]}),(0,p.jsx)("button",{type:"button",onClick:function(){return function(n){e((0,m.GK)(n))}(r)},children:"delete"})]},r)}))})},x="Filter_fiterForm__jq8zY",N="Filter_inputTitle__8nejl",g=t(634),C=function(){var e=(0,s.I0)(),n=(0,s.v9)(i);return(0,p.jsx)("div",{children:(0,p.jsxs)("label",{className:x,children:["filter",(0,p.jsx)("input",{className:N,type:"name",value:n,onChange:function(n){return e((0,g.Tv)(n.target.value))}})]})})},w="cssRootContacts_appDiv__Ko-FP";function F(){var e=(0,s.v9)(o),n=(0,s.v9)(u),t=(0,s.I0)();return(0,r.useEffect)((function(){t((0,m.NJ)())}),[t]),(0,p.jsxs)("div",{className:w,children:[(0,p.jsx)(b,{}),(0,p.jsx)(C,{}),e&&!n&&(0,p.jsx)("b",{children:"Request in progress..."}),(0,p.jsx)(j,{})]})}}}]);
//# sourceMappingURL=941.d3d0f51e.chunk.js.map