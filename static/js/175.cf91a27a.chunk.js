"use strict";(self.webpackChunkproject6fundevs=self.webpackChunkproject6fundevs||[]).push([[175],{6615:function(e,s,n){n.d(s,{Z:function(){return N}});var r=n(4165),a=n(5861),t=n(1413),c=n(9439),o=n(2791),i=n(1087),l=n(5705),u=n(9894),m=n(6991),d=n(5763),p=n(1213),h=n(9126),_=n(9655),f=(n(5462),{form:"AuthForm_form__N+Fyz",register:"AuthForm_register__LBbT3",login:"AuthForm_login__nxTrt",inputContainer:"AuthForm_inputContainer__44gmQ",title:"AuthForm_title__nrVeh",inputWrap:"AuthForm_inputWrap__t4Enc",input:"AuthForm_input__dB7h2",successInput:"AuthForm_successInput__oQ9qy",errorInput:"AuthForm_errorInput__Pe3yE",errorWrap:"AuthForm_errorWrap__0TYvv",successMessage:"AuthForm_successMessage__Vl8si",btnContainer:"AuthForm_btnContainer__hf1ao",button:"AuthForm_button__+RFEI",text:"AuthForm_text__iaP49",link:"AuthForm_link__3I+HY",eyeBtn:"AuthForm_eyeBtn__6eQZ4",eyeIcon:"AuthForm_eyeIcon__4MRzf",crossIcon:"AuthForm_crossIcon__ZrnyS",confirmIcon:"AuthForm_confirmIcon__GT3ef"}),x=n(184),N=function(e){var s=e.isRegister,n=e.onSubmit,N=s?m.e:m.k,v=(0,o.useState)(!1),j=(0,c.Z)(v,2),w=j[0],g=j[1],b=(0,o.useState)(!1),y=(0,c.Z)(b,2),Z=y[0],I=y[1],F=function(){g(!w)},k=function(){I(!Z)},A=function(e,s){s(e,"")},P=function(e,s){return e[s]},C=function(e,s){return!e[s]};return(0,x.jsx)(l.J9,{initialValues:(0,t.Z)({email:"",password:"",confirmPassword:""},s&&{name:""}),validationSchema:N,onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(s,a){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.setSubmitting,e.prev=1,e.next=4,n(s,{setSubmitting:t});case 4:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),_.Am.error("Login failed. Please check your email and password.");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(s,n){return e.apply(this,arguments)}}(),children:function(e){var n=e.isSubmitting,r=e.errors,a=e.touched,t=e.setFieldValue;return(0,x.jsxs)(l.l0,{className:"".concat(f.form," ").concat(s?f.register:f.login),children:[(0,x.jsxs)("div",{className:f.inputContainer,children:[s?(0,x.jsx)("h2",{className:f.title,children:"Registration"}):(0,x.jsx)("h2",{className:f.title,children:"Login"}),s&&(0,x.jsxs)("div",{className:f.inputWrap,children:[(0,x.jsx)("label",{htmlFor:"name",hidden:!0,children:"Name"}),(0,x.jsx)(l.gN,{id:"name",type:"name",name:"name",placeholder:"Name",className:"".concat(f.input," ").concat(a.name&&r.name&&f.errorInput)}),a.name&&P(r,"name")&&(0,x.jsx)(p.$iT,{id:"svg",className:f.crossIcon,onClick:function(){return A("name",t)}}),a.name&&C(r,"name")&&(0,x.jsx)(h.oFd,{id:"svg",className:f.confirmIcon})]}),a.name&&!r.name?(0,x.jsx)("div",{className:f.successMessage,children:"Name is secure"}):(0,x.jsx)("div",{className:f.errorWrap,children:(0,x.jsx)(l.Bc,{name:"name",component:"div",className:f.error})}),(0,x.jsxs)("div",{className:f.inputWrap,children:[(0,x.jsx)("label",{htmlFor:"email",hidden:!0,children:"Email"}),(0,x.jsx)(l.gN,{id:"email",type:"email",name:"email",placeholder:"Email",className:"".concat(f.input," ").concat(a.email&&r.email&&f.errorInput)}),a.email&&P(r,"email")&&(0,x.jsx)(p.$iT,{id:"svg",className:f.crossIcon,onClick:function(){return A("email",t)}}),a.email&&C(r,"email")&&(0,x.jsx)(h.oFd,{id:"svg",className:f.confirmIcon})]}),a.email&&!r.email?(0,x.jsx)("div",{className:f.successMessage,children:"Email is secure"}):(0,x.jsx)("div",{className:f.errorWrap,children:(0,x.jsx)(l.Bc,{name:"email",component:"div",className:f.error})}),(0,x.jsxs)("div",{className:f.inputWrap,children:[(0,x.jsx)("label",{htmlFor:"password",hidden:!0,children:"Password"}),(0,x.jsx)(l.gN,{id:"password",type:w?"text":"password",name:"password",placeholder:"Password",className:"".concat(f.input," ").concat(a.password&&!r.password&&f.successInput," ").concat(a.password&&r.password&&f.errorInput)}),w?(0,x.jsx)("button",{type:"button",onClick:F,className:f.eyeBtn,children:(0,x.jsx)(d.quy,{id:"svg",className:f.eyeIcon})}):(0,x.jsx)("button",{type:"button",onClick:F,className:f.eyeBtn,children:(0,x.jsx)(d.ONY,{id:"svg",className:f.eyeIcon})}),a.password&&!r.password?(0,x.jsx)("div",{className:f.successMessage,children:"Password is secure"}):(0,x.jsx)("div",{className:f.errorWrap,children:(0,x.jsx)(l.Bc,{name:"password",component:"div",className:f.error})})]}),s&&(0,x.jsxs)("div",{className:f.inputWrap,children:[(0,x.jsx)("label",{htmlFor:"confirmPassword",hidden:!0,children:"Confirm password"}),(0,x.jsx)(l.gN,{id:"confirmPassword",type:Z?"text":"password",name:"confirmPassword",placeholder:"Confirm password",className:"".concat(f.input," ").concat(a.confirmPassword&&!r.confirmPassword&&f.successInput," ").concat(a.confirmPassword&&r.confirmPassword&&f.errorInput)}),Z?(0,x.jsx)("button",{type:"button",onClick:k,className:f.eyeBtn,children:(0,x.jsx)(d.quy,{id:"svg",className:f.eyeIcon})}):(0,x.jsx)("button",{type:"button",onClick:k,className:f.eyeBtn,children:(0,x.jsx)(d.ONY,{id:"svg",className:f.eyeIcon})}),a.confirmPassword&&!r.confirmPassword?(0,x.jsx)("div",{className:f.successMessage,children:"Password confirmed"}):(0,x.jsx)("div",{className:f.errorWrap,children:(0,x.jsx)(l.Bc,{name:"confirmPassword",component:"div",className:f.error})})]})]}),(0,x.jsxs)("div",{className:f.btnContainer,children:[(0,x.jsx)(u.Z,{type:"submit",disabled:n,className:f.button,children:s?"Registration":"Login"}),s?(0,x.jsxs)("p",{className:f.text,children:["Already have an account?"," ",(0,x.jsx)(i.rU,{to:"/login",className:f.link,children:"Login"})]}):(0,x.jsxs)("p",{className:f.text,children:["Don't have an account?"," ",(0,x.jsx)(i.rU,{to:"/register",className:f.link,children:"Register"})]})]})]})}})}},2024:function(e,s,n){n.d(s,{Z:function(){return t}});n(2791);var r="Background_background__WcKDH",a=n(184),t=function(){return(0,a.jsx)("div",{className:r})}},9894:function(e,s,n){n.d(s,{Z:function(){return o}});var r=n(5987),a=(n(2791),"Button_button__wiIYs"),t=n(184),c=["children","className","onClick","type"],o=function(e){var s=e.children,n=e.className,o=e.onClick,i=e.type;(0,r.Z)(e,c);return(0,t.jsx)("button",{type:i,onClick:o,className:"".concat(a," ").concat(n," "),children:s})}},5700:function(e,s,n){n.d(s,{Z:function(){return t}});var r="Container_container__VVOCq",a=n(184),t=function(e){var s=e.children,n=e.className;return(0,a.jsx)("div",{className:"".concat(r," ").concat(n),children:s})}},1294:function(e,s,n){var r=n(4063),a=n(184);s.Z=function(e){var s=e.children,n=e.className;return(0,a.jsx)("div",{className:"".concat(r.Z.section," ").concat(n),children:s})}},7175:function(e,s,n){n.r(s),n.d(s,{default:function(){return N}});var r=n(4165),a=n(5861),t=n(2791),c=n(3855),o=n(2024),i=n(6615),l=n(1294),u=n(5700),m=n(9655),d=n(6277),p=n(7689),h=n(9869),_=n(1454),f=n(4063),x=n(184),N=function(){var e=(0,c.v9)(h.y6),s=(0,p.s0)(),n=(0,c.I0)(),N=(0,c.v9)(h.rU),v=(0,c.v9)(h.hg),j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(s,a){var t,c,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s.email,c=s.password,o=a.setSubmitting,i={email:t,password:c};try{n((0,d.x4)(i))}catch(N){m.Am.error("Login failed. Please check your email and password.")}o(!1);case 5:case"end":return e.stop()}}),e)})));return function(s,n){return e.apply(this,arguments)}}();return(0,t.useEffect)((function(){e&&(m.Am.success("Login successful!"),s("/user",{state:{from:"/login"}}))}),[e,s]),v&&!N?(0,x.jsx)(_.Z,{}):(0,x.jsxs)(l.Z,{className:f.Z.sectionlogin,children:[(0,x.jsx)(o.Z,{}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(i.Z,{onSubmit:j})}),(0,x.jsx)(m.Ix,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}},6991:function(e,s,n){n.d(s,{e:function(){return a},k:function(){return t}});var r=n(6727),a=r.Ry().shape({name:r.Z_().nullable().required("Required").min(2,"Name must be at least 2 characters").max(16,"Name must be no more than 16 characters").matches(/^[A-Za-z]+$/,"Name must contain only letters"),email:r.Z_().email("Invalid email address").required("Required"),password:r.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").max(16,"Password must be no more than 16 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter"),confirmPassword:r.Z_().nullable().when("password",(function(e,s){return e?s.required("Password confirmation required").oneOf([r.iH("password")],"Passwords must match"):s.notRequired()}))}),t=r.Ry().shape({email:r.Z_().email("Invalid email address").required("Required"),password:r.Z_().nullable().required("Required").min(6,"Password must be at least 6 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Must be at least one number, one lowercase and uppercase letter")})},4063:function(e,s){s.Z={section:"Section_section__Z2PLw",sectionlogin:"Section_sectionlogin__Bu46X",sectionRegister:"Section_sectionRegister__aDA4N"}}}]);
//# sourceMappingURL=175.cf91a27a.chunk.js.map