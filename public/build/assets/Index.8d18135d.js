import{F as l,a as o,M as d}from"./index.df1c6ae0.js";import{A as u}from"./Authenticated.ebd7c5f1.js";import{j as a,F as h,a as e,H as p}from"./app.d6596146.js";import"./index.42208665.js";function x({auth:s,featuredMovies:i,movies:r}){const n={freeScroll:!0,contain:!0,prevNextButtons:!1,pageDots:!1,autoPlay:5e3,cellAlign:"left"},c={freeScroll:!0,contain:!0,prevNextButtons:!1,pageDots:!1,cellAlign:"left"};return a(h,{children:[e(p,{title:"Dashboard",children:e("link",{rel:"stylesheet",href:"https://unpkg.com/flickity@2/dist/flickity.min.css"})}),a(u,{auth:s,children:[a("div",{children:[e("h1",{className:"font-semibold text-[22px] text-black mb-4",children:"Featured Movies"}),e(l,{className:"gap-[30px]",options:n,children:i.map(t=>e(o,{slug:t.slug,name:t.title,thumbnail:t.thumbnail,rating:t.rating,category:t.category},t.id))})]}),a("div",{className:"mt-12",children:[e("h1",{className:"font-semibold text-[22px] text-black mb-4",children:"Browse"}),e(l,{options:c,children:r.map(t=>e(d,{slug:t.slug,thumbnail:t.thumbnail,name:t.title,category:t.category},t.id))})]})]})]})}export{x as default};
