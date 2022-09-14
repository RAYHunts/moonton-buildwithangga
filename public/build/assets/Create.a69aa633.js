import{B as v}from"./Button.5b1aaef6.js";import{u as b,r as y,j as s,F as x,a as e,H as N}from"./app.d6596146.js";import{I as i}from"./Input.3a902964.js";import{I as o}from"./InputError.8ef5296a.js";import{L as t}from"./Label.34e56127.js";import{A as w}from"./Authenticated.ebd7c5f1.js";import"./index.42208665.js";function R({auth:u}){const{setData:m,data:r,post:c,processing:d,errors:l}=b({title:"",category:"",video_url:"",thumbnail:"",rating:"",is_featured:!1}),n=a=>{m(a.target.name,a.target.type==="file"?a.target.files[0]:a.target.type==="checkbox"?a.target.checked:a.target.value)},[h,g]=y.exports.useState(),p=a=>{const[f]=a.target.files;g(URL.createObjectURL(f)),m(a.target.name,a.target.files[0])};return s(x,{children:[e(N,{title:"Admin | Movies"}),e(w,{auth:u,children:e("div",{className:"container mx-auto px-4 sm:px-8 w-full",children:s("div",{children:[e("div",{className:"flex flex-row mb-1 sm:mb-0 justify-between w-full",children:e("div",{className:"flex gap-3 max-w-sm items-center",children:e("h2",{className:"text-2xl leading-tight",children:"Insert Movie"})})}),e("div",{className:"overflow-x-auto",children:e("div",{className:"inline-block px-4 py-4  min-w-full shadow rounded-lg overflow-hidden",children:s("form",{onSubmit:a=>{a.preventDefault(),c(route("admin.movies.store"))},children:[e(t,{forInput:"title",value:"Title"}),e(i,{type:"text",name:"title",variant:"primary-outline",handleChange:n,placeholder:"Enter the name of the movie",value:r.title}),e(o,{message:l.title}),e(t,{forInput:"category",value:"Category",className:"mt-4"}),e(i,{type:"text",name:"category",variant:"primary-outline",handleChange:n,placeholder:"Enter the category of the movie",value:r.category}),e(o,{message:l.category}),e(t,{forInput:"video_url",value:"Video URL",className:"mt-4"}),e(i,{type:"url",name:"video_url",variant:"primary-outline",handleChange:n,placeholder:"Enter the video url of the movie",value:r.video_url}),e(o,{message:l.video_url}),e(t,{forInput:"thumbnail",value:"Thumbnail",className:"mt-4"}),e("img",{src:h,alt:"",className:"w-40"}),e(i,{type:"file",name:"thumbnail",variant:"primary-outline",handleChange:p,placeholder:"Insert thumbnail of the movie",className:"px-0"}),e(o,{message:l.thumbnail}),e(t,{forInput:"rating",value:"Rating",className:"mt-4"}),e(i,{type:"number",name:"rating",variant:"primary-outline",handleChange:n,placeholder:"Enter the rating of the movie",value:r.rating}),e(o,{message:l.rating}),s("div",{className:"relative inline-block w-10 mr-2 align-middle select-none mt-4",children:[e(t,{forInput:"featured",value:"Featured"}),e("label",{htmlFor:"featured",className:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer",children:e("input",{type:"checkbox",name:"is_featured",value:r.is_featured,onChange:n,id:"featured",className:"checked:bg-alerange text-alerange  focus:bg-alerange ring-0 checked:ring-0 focus:ring-0 outline-none focus:outline-none checked:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"})})]}),e(v,{type:"submit",className:"mt-4",processing:d,children:"Save"})]})})})]})})})]})}export{R as default};
