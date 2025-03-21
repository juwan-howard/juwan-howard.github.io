"use strict";(self.webpackChunkjuwan_howard_website=self.webpackChunkjuwan_howard_website||[]).push([[380],{380:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var r=s(43),i=s(591),n=s(426),t=s(876),l=s(579);const o=()=>{const[e,a]=(0,r.useState)({name:"",email:"",subject:"",message:""}),[s,i]=(0,r.useState)({submitted:!1,submitting:!1,info:{error:!1,msg:null}}),n=e=>{const{name:s,value:r}=e.target;a((e=>({...e,[s]:r})))};return(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Send a Message"}),s.info.error&&(0,l.jsx)("div",{className:"bg-red-100 border-l-4 border-red-500 p-4 mb-6",children:(0,l.jsx)("p",{className:"text-red-700",children:s.info.msg})}),s.submitted?(0,l.jsxs)("div",{className:"bg-green-100 border-l-4 border-green-500 p-4 mb-6",children:[(0,l.jsx)("p",{className:"text-green-700",children:s.info.msg}),(0,l.jsx)("button",{className:"mt-4 text-green-600 underline",onClick:()=>i({submitted:!1,submitting:!1,info:{error:!1,msg:null}}),children:"Send another message"})]}):(0,l.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),i({submitted:!1,submitting:!0,info:{error:!1,msg:null}});try{await new Promise((e=>setTimeout(e,1500))),i({submitted:!0,submitting:!1,info:{error:!1,msg:"Message sent successfully!"}}),a({name:"",email:"",subject:"",message:""})}catch(s){i({submitted:!1,submitting:!1,info:{error:!0,msg:"An error occurred. Please try again later."}})}},children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"name",className:"block text-gray-700 mb-2",children:"Name"}),(0,l.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:n,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black",required:!0})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-gray-700 mb-2",children:"Email"}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:n,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black",required:!0})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"subject",className:"block text-gray-700 mb-2",children:"Subject"}),(0,l.jsx)("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:n,className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black",required:!0})]}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"message",className:"block text-gray-700 mb-2",children:"Message"}),(0,l.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:n,rows:"5",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black",required:!0})]}),(0,l.jsx)("button",{type:"submit",className:"w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors",disabled:s.submitting,children:s.submitting?"Sending...":"Send Message"})]})]})};var c=s(910),d=s(929),m=s(892),h=s(790);const u=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Get In Touch"}),(0,l.jsx)("p",{className:"mb-8 text-gray-600",children:"Interested in collaborating on a film project? Have questions about my work or availability? Feel free to reach out using the form or through any of the channels below."}),(0,l.jsxs)("div",{className:"space-y-6 mb-10",children:[(0,l.jsxs)("div",{className:"flex items-start",children:[(0,l.jsx)("div",{className:"mt-1 mr-4 text-xl text-gray-700",children:(0,l.jsx)(c.g,{icon:d.y_8})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold mb-1",children:"Email"}),(0,l.jsx)("a",{href:`mailto:${h.A.main.email}`,className:"text-gray-600 hover:text-black transition-colors",children:h.A.main.email})]})]}),h.A.main.location&&(0,l.jsxs)("div",{className:"flex items-start",children:[(0,l.jsx)("div",{className:"mt-1 mr-4 text-xl text-gray-700",children:(0,l.jsx)(c.g,{icon:d.gKm})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold mb-1",children:"Location"}),(0,l.jsx)("p",{className:"text-gray-600",children:h.A.main.location})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold mb-4",children:"Connect on Social Media"}),(0,l.jsx)("div",{className:"flex space-x-6",children:h.A.socials.map(((e,a)=>(0,l.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-xl text-gray-700 hover:text-black transition-colors","aria-label":e.platform,children:(0,l.jsx)(c.g,{icon:"vimeo"===e.platform?m.Uzf:"instagram"===e.platform?m.QV6:m.IAJ})},a)))})]})]});var x=s(564);const b=()=>{(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);const e=x.A.find((e=>"contact"===e.page));return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)(i.m,{children:[(0,l.jsx)("title",{children:`Contact | ${h.A.main.title}`}),(0,l.jsx)("meta",{name:"description",content:e.description}),(0,l.jsx)("meta",{name:"keywords",content:e.keywords.join(", ")})]}),(0,l.jsx)(n.A,{}),(0,l.jsx)("main",{className:"container mx-auto px-4 py-16",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[(0,l.jsx)(u,{}),(0,l.jsx)(o,{})]})}),(0,l.jsx)(t.A,{})]})}},564:(e,a,s)=>{s.d(a,{A:()=>r});const r=[{page:"home",description:"Juwan Howard is a Narrative Director & Filmmaker based in Los Angeles, with a BA from UC Berkeley and currently an MFA candidate at UCLA. His portfolio showcases storytelling that celebrates cultural identity and creativity.",keywords:["Juwan Howard","filmmaker","narrative director","film director","MFA","UCLA","UC Berkeley","Los Angeles","storytelling","cultural identity"]},{page:"about",description:"Learn more about Juwan Howard, his journey in filmmaking, academic background from UC Berkeley and UCLA, and his approach to narrative directing that honors both community and creativity.",keywords:["Juwan Howard","about","filmmaker","narrative director","film education","UCLA","UC Berkeley","MFA","storytelling","cultural identity","directing approach"]},{page:"contact",description:"Connect with Juwan Howard for film projects, collaborations, or inquiries. Available for narrative directing and filmmaking projects that celebrate diversity and cultural storytelling.",keywords:["contact Juwan Howard","narrative director","filmmaker","collaboration","film projects","Los Angeles filmmaker","project inquiry","UCLA","cultural storytelling"]}]},876:(e,a,s)=>{s.d(a,{A:()=>n});s(43);var r=s(790),i=s(579);const n=()=>{const e=(new Date).getFullYear();return(0,i.jsx)("footer",{className:"footer",id:"contact",children:(0,i.jsxs)("div",{className:"footer-container",children:[(0,i.jsxs)("div",{className:"footer-content",children:[(0,i.jsxs)("div",{className:"footer-info",children:[(0,i.jsx)("h3",{children:r.A.main.name}),(0,i.jsx)("p",{children:"Narrative Director & Filmmaker"}),(0,i.jsx)("p",{className:"contact-info",children:(0,i.jsx)("a",{href:`mailto:${r.A.main.email}`,children:r.A.main.email})}),(0,i.jsx)("p",{className:"contact-info",children:r.A.main.location})]}),(0,i.jsxs)("div",{className:"footer-links",children:[(0,i.jsx)("h3",{children:"Navigation"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#work",children:"Work"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#about",children:"About"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#showreel",children:"Showreel"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#contact",children:"Contact"})})]})]}),(0,i.jsxs)("div",{className:"footer-social",children:[(0,i.jsx)("h3",{children:"Connect"}),(0,i.jsxs)("div",{className:"social-icons",children:[(0,i.jsx)("a",{href:"https://instagram.com",className:"social-icon",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-instagram",children:"IG"})}),(0,i.jsx)("a",{href:"https://vimeo.com/user217257059",className:"social-icon",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-vimeo-v",children:"VI"})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/juwan-howard-2301851a3/",className:"social-icon",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in",children:"LI"})})]})]})]}),(0,i.jsx)("div",{className:"footer-bottom",children:(0,i.jsxs)("p",{children:["\xa9 ",e," Juwan Howard. All rights reserved."]})})]})})}}}]);
//# sourceMappingURL=380.f89b5f44.chunk.js.map