(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3217],{84110:(n,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var e=t(1799),o=t.n(e),i=t(82609),c=t.n(i)()(o());c.push([n.id,"/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/midnight.css"],names:[],mappings:"AAAA,wEAAwE;;AAExE,oBAAoB;AACpB,mDAAmD,mBAAmB,EAAE;;AAExE;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA,yCAAyC,mBAAmB,EAAE;AAC9D,0JAA0J,kCAAkC,EAAE;AAC9L,yKAAyK,kCAAkC,EAAE;AAC7M,qCAAqC,mBAAmB,EAAE,uBAAuB,EAAE;AACnF,0CAA0C,YAAY,EAAE;AACxD,iDAAiD,cAAc,EAAE;AACjE,wCAAwC,cAAc,EAAE;AACxD,oCAAoC,8BAA8B,EAAE;;AAEpE,iCAAiC,cAAc,EAAE;AACjD,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,cAAc,EAAE;;AAEhD,oEAAoE,cAAc,EAAE;AACpF,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;;AAEhD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,6BAA6B,WAAW,EAAE;AAC1C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,WAAW,EAAE;AAC1C,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,mBAAmB,EAAE,cAAc,EAAE;;AAEpE;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/* Based on the theme at http://bonsaiden.github.com/JavaScript-Garden */\n\n/*\x3c!--activeline--\x3e*/\n.cm-s-midnight .CodeMirror-activeline-background { background: #253540; }\n\n.cm-s-midnight.CodeMirror {\n    background: #0F192A;\n    color: #D1EDFF;\n}\n\n.cm-s-midnight div.CodeMirror-selected { background: #314D67; }\n.cm-s-midnight .CodeMirror-line::selection, .cm-s-midnight .CodeMirror-line > span::selection, .cm-s-midnight .CodeMirror-line > span > span::selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-line::-moz-selection, .cm-s-midnight .CodeMirror-line > span::-moz-selection, .cm-s-midnight .CodeMirror-line > span > span::-moz-selection { background: rgba(49, 77, 103, .99); }\n.cm-s-midnight .CodeMirror-gutters { background: #0F192A; border-right: 1px solid; }\n.cm-s-midnight .CodeMirror-guttermarker { color: white; }\n.cm-s-midnight .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-midnight .CodeMirror-linenumber { color: #D0D0D0; }\n.cm-s-midnight .CodeMirror-cursor { border-left: 1px solid #F8F8F0; }\n\n.cm-s-midnight span.cm-comment { color: #428BDD; }\n.cm-s-midnight span.cm-atom { color: #AE81FF; }\n.cm-s-midnight span.cm-number { color: #D1EDFF; }\n\n.cm-s-midnight span.cm-property, .cm-s-midnight span.cm-attribute { color: #A6E22E; }\n.cm-s-midnight span.cm-keyword { color: #E83737; }\n.cm-s-midnight span.cm-string { color: #1DC116; }\n\n.cm-s-midnight span.cm-variable { color: #FFAA3E; }\n.cm-s-midnight span.cm-variable-2 { color: #FFAA3E; }\n.cm-s-midnight span.cm-def { color: #4DD; }\n.cm-s-midnight span.cm-bracket { color: #D1EDFF; }\n.cm-s-midnight span.cm-tag { color: #449; }\n.cm-s-midnight span.cm-link { color: #AE81FF; }\n.cm-s-midnight span.cm-error { background: #F92672; color: #F8F8F0; }\n\n.cm-s-midnight .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n"],sourceRoot:""}]);const s=c},82609:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var s=0;s<n.length;s++){var a=[].concat(n[s]);e&&o[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),r.push(a))}},r}},1799:n=>{"use strict";function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}n.exports=function(n){var t,e,o=(e=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],e=!0,o=!1,i=void 0;try{for(var c,s=n[Symbol.iterator]();!(e=(c=s.next()).done)&&(t.push(c.value),!r||t.length!==r);e=!0);}catch(n){o=!0,i=n}finally{try{e||null==s.return||s.return()}finally{if(o)throw i}}return t}}(t,e)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],c=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(a," */"),m=c.sources.map((function(n){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(n," */")}));return[i].concat(m).concat([A]).join("\n")}return[i].join("\n")}},53217:(n,r,t)=>{var e=t(84110);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.id,e,""]]);t(46062)(e,{insert:"head",singleton:!1}),e.locals&&(n.exports=e.locals)},46062:(n,r,t)=>{"use strict";var e,o={},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}();function c(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],c=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[c]?e[c].parts.push(s):t.push(e[c]={id:c,parts:[s]})}return t}function s(n,r){for(var t=0;t<n.length;t++){var e=n[t],i=o[e.id],c=0;if(i){for(i.refs++;c<i.parts.length;c++)i.parts[c](e.parts[c]);for(;c<e.parts.length;c++)i.parts.push(p(e.parts[c],r))}else{for(var s=[];c<e.parts.length;c++)s.push(p(e.parts[c],r));o[e.id]={id:e.id,refs:1,parts:s}}}}function a(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var e=t.nc;e&&(n.attributes.nonce=e)}if(Object.keys(n.attributes).forEach((function(t){r.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(r);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var A,m=(A=[],function(n,r){return A[n]=r,A.filter(Boolean).join("\n")});function d(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=m(r,o);else{var i=document.createTextNode(o),c=n.childNodes;c[r]&&n.removeChild(c[r]),c.length?n.insertBefore(i,c[r]):n.appendChild(i)}}function l(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var u=null,h=0;function p(n,r){var t,e,o;if(r.singleton){var i=h++;t=u||(u=a(r)),e=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=a(r),e=l.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=c(n,r);return s(t,r),function(n){for(var e=[],i=0;i<t.length;i++){var a=t[i],A=o[a.id];A&&(A.refs--,e.push(A))}n&&s(c(n,r),r);for(var m=0;m<e.length;m++){var d=e[m];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete o[d.id]}}}}}}]);
//# sourceMappingURL=3217.66c5d8b25460a20bbb92.js.map