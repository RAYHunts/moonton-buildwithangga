import{B as d}from"./Button.5b1aaef6.js";import{F as p}from"./FlashMessage.1366658d.js";import{A as b}from"./Authenticated.ebd7c5f1.js";import{u,j as r,F as g,a as e,H as f,L as s}from"./app.d6596146.js";import"./index.42208665.js";function A({auth:n,roles:i,flashMessage:l,permissions:c}){const{delete:m,put:y}=u(),o=(a,t)=>a.map(h=>h.id).includes(t.id);function x(a){return{__html:a}}return r(g,{children:[e(f,{title:"Admin | Movies"}),e(b,{auth:n,children:e("div",{className:"container mx-auto px-4 sm:px-8 w-full",children:r("div",{children:[l&&e(p,{type:l.type,message:l.message}),r("div",{className:"flex flex-row mb-1 sm:mb-0 justify-between w-full",children:[e("div",{className:"flex gap-3 max-w-sm items-center",children:e("h2",{className:"text-2xl leading-tight",children:"Roles"})}),e(s,{href:route("admin.roles.create"),children:e(d,{className:"px-5",children:"Add Role"})})]}),e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto",children:e("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden",children:r("table",{className:"min-w-full leading-normal table-auto",children:[e("thead",{className:"bg-alerange",children:r("tr",{children:[e("th",{scope:"col",className:"px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold w-max",children:"Name"}),e("th",{scope:"col",colSpan:2,className:"px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"}),c.map(a=>e("th",{scope:"col",className:"px-5 py-3  text-gray-800  text-center text-base uppercase font-semibold w-max",children:e("div",{className:"w-max",children:a.name})},a.id))]})}),e("tbody",{children:i.data.map(a=>r("tr",{children:[e("td",{className:"px-5 py-5 border-b border-gray-200 text-left",children:e("div",{className:"w-max",children:a.name})}),e("td",{className:"px-5 py-5 border-b border-gray-200 text-left",children:e("div",{className:"w-max",children:e(s,{href:route("admin.roles.edit",a.id),children:e(d,{className:"px-5",children:"Edit"})})})}),e("td",{className:"px-5 py-5 border-b border-gray-200 text-left",children:e("div",{className:"w-max",children:e(d,{className:"px-5",onClick:()=>{m(route("admin.roles.destroy",a.id))},children:"Delete"})})}),c.map(t=>e("td",{className:"px-5 py-5 border-b border-gray-200 text-center",children:o(a.permissions,t)?e("i",{className:"fas fa-check text-green-500"}):e("i",{className:"fas fa-times text-red-500"})},t.id))]},a.id))})]})})}),e("div",{className:"px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between",children:e("nav",{"aria-label":"Page navigation example",children:i.links.map(a=>e(s,{as:"button",className:`py-2 px-3 ml-0 leading-tight  first:rounded-l-lg border last:rounded-r-lg border-gray-300
                                                ${a.active?"text-blue-600 bg-blue-50  dark:border-gray-700 dark:bg-gray-700 dark:text-white":"text-gray-500 bg-white  hover:bg-blue-100 hover:text-blue-700   dark:hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"}
                                                ${a.url===null&&"cursor-not-allowed"}
                                                `,href:a.url,disabled:a.active||a.url===null,dangerouslySetInnerHTML:x(a.label)},a.label))})})]})})})]})}export{A as default};
