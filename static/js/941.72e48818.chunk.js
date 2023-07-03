"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[941],{941:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(439),a=t(791),s=t(434),c=function(e){return e.contacts.list},o=function(e){return e.filter},i=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},l=function(e){var n=e.contacts.list,t=e.filter;if(!t)return n;var r=t.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(r)}))},m=t(490),d="contactForm_formName__-Cizm",f="contactForm_formNumber__roPLh",h="contactForm_btnForm__wploc",_="contactForm_inputTitle__VTckD",p=t(184),b=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,a.useState)(""),u=(0,r.Z)(i,2),l=u[0],b=u[1],v=(0,s.I0)(),j=(0,s.v9)(c),x=function(e){var n=e.name,t=e.number,r={name:n,number:t},a=n.toLowerCase(),s=j.find((function(e){return e.name.toLowerCase()===a||e.number===t}));s?alert("".concat(n," \u0430\u0431\u043e ").concat(t," \u0432\u0436\u0435 \u0454 \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456")):(v((0,m.uK)(r)),o(""),b(""))},N=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"number":b(r)}};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(""),b(""),x({name:t,number:l})},children:[(0,p.jsxs)("label",{className:d,children:["Name",(0,p.jsx)("input",{className:_,onChange:N,type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+([' \\-][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t})]}),(0,p.jsxs)("label",{className:f,children:["Number",(0,p.jsx)("input",{className:_,onChange:N,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:" number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l})]}),(0,p.jsx)("button",{className:h,type:"submit",children:"Add contact"})]}),(0,p.jsxs)("h3",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430: ",j.length]})]})},v="contactList_list__nPZlL",j=function(){var e=(0,s.I0)(),n=(0,s.v9)(l);return(0,p.jsx)("ul",{children:n.map((function(n){var t=n.name,r=n.number,a=n.id;return(0,p.jsxs)("li",{className:v,children:[(0,p.jsxs)("p",{children:[t,": ",r]}),(0,p.jsx)("button",{type:"button",onClick:function(){return function(n){e((0,m.GK)(n))}(a)},children:"delete"})]},a)}))})},x="Filter_fiterForm__jq8zY",N="Filter_inputTitle__8nejl",C=t(634),g=function(){var e=(0,s.I0)(),n=(0,s.v9)(o);return(0,p.jsx)("div",{children:(0,p.jsxs)("label",{className:x,children:["filter",(0,p.jsx)("input",{className:N,type:"name",value:n,onChange:function(n){return e((0,C.Tv)(n.target.value))}})]})})},w="cssRootContacts_appDiv__Ko-FP";function F(){var e=(0,s.v9)(i),n=(0,s.v9)(u),t=(0,s.I0)();return(0,a.useEffect)((function(){t((0,m.NJ)())}),[t]),(0,p.jsxs)("div",{className:w,children:[(0,p.jsx)(b,{}),(0,p.jsx)(g,{}),e&&!n&&(0,p.jsx)("b",{children:"Request in progress..."}),(0,p.jsx)(j,{})]})}}}]);
//# sourceMappingURL=941.72e48818.chunk.js.map