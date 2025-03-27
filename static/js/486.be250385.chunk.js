"use strict";(self.webpackChunkjuwan_howard_website=self.webpackChunkjuwan_howard_website||[]).push([[486],{269:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var r=a(43),i=a(591),n=a(426),t=a(790);const l=a.p+"static/media/silhouette.b43ecb86843724f797ee.jpg";var c=a(579);const o=()=>{const[e,s]=(0,r.useState)(window.innerWidth<=768);(0,r.useEffect)((()=>{const e=()=>{s(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const a={backgroundImage:`url(${l})`,backgroundPosition:e?"16% center":"center",backgroundSize:"cover"};return(0,c.jsxs)("section",{className:"hero",style:a,children:[(0,c.jsx)("div",{className:"hero-overlay"}),(0,c.jsxs)("div",{className:"hero-content",children:[(0,c.jsx)("h1",{className:"hero-title",children:"VISUAL STORYTELLER"}),(0,c.jsx)("p",{className:"hero-subtitle",children:t.A.about.tagline}),(0,c.jsx)("div",{className:"hero-buttons",children:(0,c.jsx)("a",{href:"#work",className:"hero-button primary",children:"View Projects"})})]})]})},d=()=>{const e=["All",...[...new Set(t.A.projects.map((e=>e.category)))]],[s,a]=(0,r.useState)("All"),i="All"===s?t.A.projects:t.A.projects.filter((e=>e.category===s));return(0,c.jsx)("section",{id:"work",className:"work-section",children:(0,c.jsxs)("div",{className:"work-container",children:[(0,c.jsxs)("div",{className:"section-header",children:[(0,c.jsx)("h2",{children:"Selected Works"}),(0,c.jsx)("p",{children:"A collection of my latest projects"})]}),(0,c.jsx)("div",{className:"category-filter",children:e.map((e=>(0,c.jsx)("button",{className:s===e?"active":"",onClick:()=>a(e),children:e},e)))}),(0,c.jsx)("div",{className:"work-grid",children:i.map(((e,s)=>(0,c.jsx)("div",{className:"work-item",children:(0,c.jsxs)("div",{className:"work-image-container",children:[(0,c.jsx)("img",{src:e.thumbnail,alt:e.title}),(0,c.jsx)("div",{className:"work-overlay",children:(0,c.jsxs)("div",{className:"work-info",children:[(0,c.jsx)("h3",{children:e.title}),(0,c.jsxs)("p",{children:[e.category," | ",e.year]}),(0,c.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"view-project",children:"View Project"})]})})]})},s)))})]})})},m=()=>{const[e,s]=(0,r.useState)(!1),a=()=>{s(!e),document.body.style.overflow=e?"auto":"hidden"};return(0,c.jsxs)("section",{id:"about",className:"about-section",children:[(0,c.jsx)("div",{className:"about-container",children:(0,c.jsxs)("div",{className:"about-content",children:[(0,c.jsxs)("div",{className:"about-text",children:[(0,c.jsx)("h2",{children:"About Me"}),(0,c.jsx)("p",{className:"lead",children:t.A.about.title}),(0,c.jsx)("p",{children:t.A.about.description}),(0,c.jsx)("p",{children:t.A.about.shortBio}),(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsxs)("div",{className:"skill-column",children:[(0,c.jsx)("h3",{children:"Education"}),(0,c.jsx)("ul",{children:t.A.about.education.map(((e,s)=>(0,c.jsxs)("li",{children:[e.degree," - ",e.institution]},s)))})]}),(0,c.jsxs)("div",{className:"skill-column",children:[(0,c.jsx)("h3",{children:"Focus Areas"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Narrative Direction"}),(0,c.jsx)("li",{children:"Cultural Storytelling"}),(0,c.jsx)("li",{children:"Production Leadership"}),(0,c.jsx)("li",{children:"Visual Narrative"})]})]})]}),(0,c.jsx)("div",{className:"learn-more",children:(0,c.jsx)("button",{onClick:a,className:"learn-more-btn",children:"Learn more about my work and approach \u2192"})})]}),(0,c.jsx)("div",{className:"about-image",children:(0,c.jsx)("img",{src:t.A.about.profileImage,alt:"Juwan Howard - Narrative Director & Filmmaker"})})]})}),e&&(0,c.jsx)("div",{className:"bio-modal",children:(0,c.jsxs)("div",{className:"bio-modal-content",children:[(0,c.jsxs)("div",{className:"bio-modal-header",children:[(0,c.jsx)("h2",{children:"My Approach to Filmmaking"}),(0,c.jsx)("button",{className:"close-modal",onClick:a,children:"\xd7"})]}),(0,c.jsx)("div",{className:"bio-modal-body",children:t.A.about.biography.map(((e,s)=>(0,c.jsx)("p",{children:e},s)))})]})})]})},h=()=>{const[e,s]=(0,r.useState)({name:"",email:"",subject:"",message:""}),[a,i]=(0,r.useState)({}),[n,t]=(0,r.useState)(!1),[l,o]=(0,r.useState)(null),[d,m]=(0,r.useState)(!1),h=r=>{const{name:n,value:t}=r.target;s({...e,[n]:t}),a[n]&&i({...a,[n]:null})},j=()=>{t(!1),o(null)};return(0,c.jsx)("section",{id:"contact",className:"contact-section",children:(0,c.jsxs)("div",{className:"contact-container",children:[(0,c.jsxs)("div",{className:"section-header",children:[(0,c.jsx)("h2",{children:"Get In Touch"}),(0,c.jsx)("p",{children:"Have a question, feedback, or want to work together? Feel free to reach out!"})]}),(0,c.jsx)("div",{className:"contact-content",children:(0,c.jsx)("div",{className:"contact-form-container",children:n?(0,c.jsxs)("div",{className:"message success",children:[(0,c.jsx)("h3",{children:"Message Sent!"}),(0,c.jsx)("p",{children:"Thank you for reaching out. I'll get back to you as soon as possible."}),(0,c.jsx)("button",{onClick:j,className:"new-message-btn",children:"Send Another Message"})]}):l?(0,c.jsxs)("div",{className:"message error",children:[(0,c.jsx)("h3",{children:"Oops! Something went wrong"}),(0,c.jsx)("p",{children:l}),(0,c.jsx)("button",{onClick:j,className:"new-message-btn",children:"Try Again"})]}):(0,c.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),(()=>{const s={};return e.name.trim()||(s.name="Name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(s.email="Email is invalid"):s.email="Email is required",e.subject.trim()||(s.subject="Subject is required"),e.message.trim()?e.message.length<10&&(s.message="Message must be at least 10 characters"):s.message="Message is required",i(s),0===Object.keys(s).length})()){m(!0);try{await new Promise((e=>setTimeout(e,1500))),t(!0),o(null),s({name:"",email:"",subject:"",message:""})}catch(r){o("Failed to send message. Please try again later.")}finally{m(!1)}}},className:"contact-form",noValidate:!0,children:[(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,c.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:h,"aria-invalid":a.name?"true":"false","aria-describedby":a.name?"name-error":void 0}),a.name&&(0,c.jsx)("div",{className:"error-message",id:"name-error",children:a.name})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,c.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:h,"aria-invalid":a.email?"true":"false","aria-describedby":a.email?"email-error":void 0}),a.email&&(0,c.jsx)("div",{className:"error-message",id:"email-error",children:a.email})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"subject",children:"Subject"}),(0,c.jsx)("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:h,"aria-invalid":a.subject?"true":"false","aria-describedby":a.subject?"subject-error":void 0}),a.subject&&(0,c.jsx)("div",{className:"error-message",id:"subject-error",children:a.subject})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"message",children:"Message"}),(0,c.jsx)("textarea",{id:"message",name:"message",rows:"6",value:e.message,onChange:h,"aria-invalid":a.message?"true":"false","aria-describedby":a.message?"message-error":void 0}),a.message&&(0,c.jsx)("div",{className:"error-message",id:"message-error",children:a.message})]}),(0,c.jsx)("button",{type:"submit",className:"submit-btn",disabled:d,children:d?"Sending...":"Send Message"})]})})})]})})};var j=a(876),u=a(564);const x=()=>{(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]);const e=u.A.find((e=>"home"===e.page));return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsxs)(i.m,{children:[(0,c.jsx)("title",{children:t.A.main.title}),(0,c.jsx)("meta",{name:"description",content:e.description}),(0,c.jsx)("meta",{name:"keywords",content:e.keywords.join(", ")})]}),(0,c.jsx)(n.A,{}),(0,c.jsxs)("main",{children:[(0,c.jsx)(o,{}),(0,c.jsx)(d,{}),(0,c.jsx)(m,{}),(0,c.jsx)(h,{})]}),(0,c.jsx)(j.A,{})]})}},564:(e,s,a)=>{a.d(s,{A:()=>r});const r=[{page:"home",description:"Juwan Howard is a Narrative Director & Filmmaker based in Los Angeles, with a BA from UC Berkeley and currently an MFA candidate at UCLA. His portfolio showcases storytelling that celebrates cultural identity and creativity.",keywords:["Juwan Howard","filmmaker","narrative director","film director","MFA","UCLA","UC Berkeley","Los Angeles","storytelling","cultural identity"]},{page:"about",description:"Learn more about Juwan Howard, his journey in filmmaking, academic background from UC Berkeley and UCLA, and his approach to narrative directing that honors both community and creativity.",keywords:["Juwan Howard","about","filmmaker","narrative director","film education","UCLA","UC Berkeley","MFA","storytelling","cultural identity","directing approach"]},{page:"contact",description:"Connect with Juwan Howard for film projects, collaborations, or inquiries. Available for narrative directing and filmmaking projects that celebrate diversity and cultural storytelling.",keywords:["contact Juwan Howard","narrative director","filmmaker","collaboration","film projects","Los Angeles filmmaker","project inquiry","UCLA","cultural storytelling"]}]},876:(e,s,a)=>{a.d(s,{A:()=>n});a(43);var r=a(790),i=a(579);const n=()=>{const e=(new Date).getFullYear();return(0,i.jsx)("footer",{className:"footer",id:"contact",children:(0,i.jsxs)("div",{className:"footer-container",children:[(0,i.jsxs)("div",{className:"footer-content",children:[(0,i.jsxs)("div",{className:"footer-info",children:[(0,i.jsx)("h3",{children:r.A.main.name}),(0,i.jsx)("p",{children:"Narrative Director & Filmmaker"}),(0,i.jsx)("p",{className:"contact-info",children:(0,i.jsx)("a",{href:`mailto:${r.A.main.email}`,children:r.A.main.email})}),(0,i.jsx)("p",{className:"contact-info",children:r.A.main.location})]}),(0,i.jsxs)("div",{className:"footer-links",children:[(0,i.jsx)("h3",{children:"Navigation"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#work",children:"Work"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#about",children:"About"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#contact",children:"Contact"})})]})]}),(0,i.jsxs)("div",{className:"footer-social",children:[(0,i.jsx)("h3",{children:"Connect"}),(0,i.jsxs)("div",{className:"social-icons",children:[(0,i.jsx)("a",{href:"https://instagram.com",className:"social-icon",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-instagram",children:"IG"})}),(0,i.jsx)("a",{href:"https://vimeo.com/user217257059",className:"social-icon",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-vimeo-v",children:"VI"})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/juwan-howard-2301851a3/",className:"social-icon",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in",children:"LI"})})]})]})]}),(0,i.jsx)("div",{className:"footer-bottom",children:(0,i.jsxs)("p",{children:["\xa9 ",e," Juwan Howard. All rights reserved."]})})]})})}}}]);
//# sourceMappingURL=486.be250385.chunk.js.map