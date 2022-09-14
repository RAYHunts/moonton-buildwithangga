import{a as p}from"./app.d6596146.js";import{p as t}from"./index.42208665.js";i.propTypes={type:t.exports.oneOf(["button","submit","reset"]),className:t.exports.string,variant:t.exports.oneOf(["primary","warning","danger","light-outline","white-outline"]),children:t.exports.node,processing:t.exports.bool};function i({type:r="submit",className:e="",variant:n="primary",processing:o,children:s}){return p("button",{type:r,className:`
                rounded-2xl py-[13px] text-center w-full 
                ${o&&"opacity-25 cursor-wait"} 
                btn-${n}
                ${e}
                `,disabled:o,children:s})}export{i as B};
