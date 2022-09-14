import{u as h,r as g,j as a,F as f,a as e,H as x,L as w}from"./app.d6596146.js";import{B as m}from"./Button.5b1aaef6.js";import{I as n}from"./Input.3a902964.js";import{L as l}from"./Label.34e56127.js";import{I as o}from"./InputError.8ef5296a.js";import"./index.42208665.js";function L(){const{data:r,setData:d,post:p,processing:c,errors:s,reset:u}=h({name:"",email:"",password:"",password_confirmation:""});g.exports.useEffect(()=>()=>{u("password","password_confirmation")},[]);const t=i=>{d(i.target.name,i.target.value)};return a(f,{children:[e(x,{title:"Register"}),a("div",{className:"mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3",children:[e("div",{className:"fixed top-[-50px] hidden lg:block",children:e("img",{src:"/assets/images/signup-image.png",className:"hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]",alt:""})}),e("div",{className:"py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]",children:a("div",{children:[e("img",{src:"/assets/images/moonton-white.svg",alt:""}),a("div",{className:"my-[70px]",children:[e("div",{className:"font-semibold text-[26px] mb-3",children:"Sign Up"}),a("p",{className:"text-base text-[#767676] leading-7",children:["Explore our new movies and get ",e("br",{}),"the better insight for your life"]})]}),a("form",{className:"w-[370px]",onSubmit:i=>{i.preventDefault(),p(route("register"))},children:[a("div",{className:"flex flex-col gap-6",children:[a("div",{children:[e(l,{forInput:"name",value:"Full Name"}),e(n,{type:"text",name:"name",placeholder:"Enter Full Name",id:"name",value:r.name,handleChange:t,required:!0,isFocused:!0}),e(o,{message:s.name,className:"mt-2"})]}),a("div",{children:[e(l,{forInput:"email",value:"Email Address"}),e(n,{type:"email",name:"email",placeholder:"Enter Email Address",id:"email",value:r.email,handleChange:t,required:!0,variant:s.email&&"error"}),e(o,{message:s.email,className:"mt-2"})]}),a("div",{children:[e(l,{forInput:"password",value:"Password"}),e(n,{type:"password",name:"password",placeholder:"Enter Password",id:"password",value:r.password,handleChange:t,required:!0}),e(o,{message:s.password,className:"mt-2"})]}),a("div",{children:[e(l,{forInput:"password_confirmation",value:"Confirm Password"}),e(n,{type:"password",name:"password_confirmation",placeholder:"Confirm Password",id:"password_confirmation",value:r.password_confirmation,handleChange:t,required:!0}),e(o,{message:s.password_confirmation,className:"mt-2"})]})]}),a("div",{className:"grid space-y-[14px] mt-[30px]",children:[e(m,{processing:c,children:e("span",{className:"text-base font-semibold",children:"Sign Up"})}),e(w,{href:route("login"),children:e(m,{variant:"white-outline",children:e("span",{className:"text-base text-white",children:"Sign In to My Account"})})})]})]})]})})]})]})}export{L as default};