import{a as e,u as f,r as h,j as r,H as b,L as x}from"./app.d6596146.js";import{B as w}from"./Button.5b1aaef6.js";import{G as N}from"./Guest.a298dcd3.js";import{I as i}from"./Input.3a902964.js";import{I as c}from"./InputError.8ef5296a.js";import{L as d}from"./Label.34e56127.js";import"./index.42208665.js";import"./ApplicationLogo.1b80896e.js";function y({name:t,value:o,handleChange:s}){return e("input",{type:"checkbox",name:t,value:o,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:m=>s(m)})}function B({status:t,canResetPassword:o}){const{data:s,setData:m,post:u,processing:p,errors:l,reset:g}=f({email:"",password:"",remember:""});h.exports.useEffect(()=>()=>{g("password")},[]);const n=a=>{m(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return r(N,{children:[e(b,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),r("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[r("div",{children:[e(d,{forInput:"email",value:"Email"}),e(i,{type:"text",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:n}),e(c,{message:l.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(d,{forInput:"password",value:"Password"}),e(i,{type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:n}),e(c,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(y,{name:"remember",value:s.remember,handleChange:n}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[o&&e(x,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Forgot your password?"}),e(w,{className:"ml-4",processing:p,children:"Log in"})]})]})]})}export{B as default};