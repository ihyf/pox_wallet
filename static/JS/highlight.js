!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(r){var g=[],c=Object.keys,b={},o={},n=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,t=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,h="</span>",R={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function _(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){return e.nodeName.toLowerCase()}function N(e,n){var t=e&&e.exec(n);return t&&0===t.index}function u(e){return n.test(e)}function d(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function E(e){var r=[];return function e(n,t){for(var a=n.firstChild;a;a=a.nextSibling)3===a.nodeType?t+=a.nodeValue.length:1===a.nodeType&&(r.push({event:"start",offset:t,node:a}),t=e(a,t),f(a).match(/br|hr|img|input/)||r.push({event:"stop",offset:t,node:a}));return t}(e,0),r}function w(s){function o(e){return e&&e.source||e}function l(e,n){return new RegExp(o(e),"m"+(s.case_insensitive?"i":"")+(n?"g":""))}!function n(t,e){if(!t.compiled){if(t.compiled=!0,t.keywords=t.keywords||t.beginKeywords,t.keywords){function a(t,e){s.case_insensitive&&(e=e.toLowerCase()),e.split(" ").forEach(function(e){var n=e.split("|");r[n[0]]=[t,n[1]?Number(n[1]):1]})}var r={};"string"==typeof t.keywords?a("keyword",t.keywords):c(t.keywords).forEach(function(e){a(e,t.keywords[e])}),t.keywords=r}t.lexemesRe=l(t.lexemes||/\w+/,!0),e&&(t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")\\b"),t.begin||(t.begin=/\B|\b/),t.beginRe=l(t.begin),t.endSameAsBegin&&(t.end=t.begin),t.end||t.endsWithParent||(t.end=/\B|\b/),t.end&&(t.endRe=l(t.end)),t.terminator_end=o(t.end)||"",t.endsWithParent&&e.terminator_end&&(t.terminator_end+=(t.end?"|":"")+e.terminator_end)),t.illegal&&(t.illegalRe=l(t.illegal)),null==t.relevance&&(t.relevance=1),t.contains||(t.contains=[]),t.contains=Array.prototype.concat.apply([],t.contains.map(function(e){return function(n){return n.variants&&!n.cached_variants&&(n.cached_variants=n.variants.map(function(e){return d(n,{variants:null},e)})),n.cached_variants||n.endsWithParent&&[d(n)]||[n]}("self"===e?t:e)})),t.contains.forEach(function(e){n(e,t)}),t.starts&&n(t.starts,e);var i=t.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([t.terminator_end,t.illegal]).map(o).filter(Boolean);t.terminators=i.length?l(i.join("|"),!0):{exec:function(){return null}}}}(s)}function M(e,n,i,t){function o(e,n,t,a){var r='<span class="'+(a?"":R.classPrefix);return(r+=e+'">')+n+(t?"":h)}function s(){f+=null!=u.subLanguage?function(){var e="string"==typeof u.subLanguage;if(e&&!b[u.subLanguage])return _(d);var n=e?M(u.subLanguage,d,!0,g[u.subLanguage]):x(d,u.subLanguage.length?u.subLanguage:void 0);return 0<u.relevance&&(E+=n.relevance),e&&(g[u.subLanguage]=n.top),o(n.language,n.value,!1,!0)}():function(){var e,n,t,a,r,i,s;if(!u.keywords)return _(d);for(a="",n=0,u.lexemesRe.lastIndex=0,t=u.lexemesRe.exec(d);t;)a+=_(d.substring(n,t.index)),r=u,i=t,void 0,s=c.case_insensitive?i[0].toLowerCase():i[0],(e=r.keywords.hasOwnProperty(s)&&r.keywords[s])?(E+=e[1],a+=o(e[0],_(t[0]))):a+=_(t[0]),n=u.lexemesRe.lastIndex,t=u.lexemesRe.exec(d);return a+_(d.substr(n))}(),d=""}function l(e){f+=e.className?o(e.className,"",!0):"",u=Object.create(e,{parent:{value:u}})}function a(e,n){if(d+=e,null==n)return s(),0;var t=function(e,n){var t,a,r;for(t=0,a=n.contains.length;t<a;t++)if(N(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=(r=n.contains[t].beginRe.exec(e)[0],new RegExp(r.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.contains[t]}(n,u);if(t)return t.skip?d+=n:(t.excludeBegin&&(d+=n),s(),t.returnBegin||t.excludeBegin||(d=n)),l(t),t.returnBegin?0:n.length;var a=function e(n,t){if(N(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(u,n);if(a){var r=u;for(r.skip?d+=n:(r.returnEnd||r.excludeEnd||(d+=n),s(),r.excludeEnd&&(d=n));u.className&&(f+=h),u.skip||u.subLanguage||(E+=u.relevance),(u=u.parent)!==a.parent;);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),l(a.starts)),r.returnEnd?0:n.length}if(function(e,n){return!i&&N(n.illegalRe,e)}(n,u))throw new Error('Illegal lexeme "'+n+'" for mode "'+(u.className||"<unnamed>")+'"');return d+=n,n.length||1}var c=O(e);if(!c)throw new Error('Unknown language: "'+e+'"');w(c);var r,u=t||c,g={},f="";for(r=u;r!==c;r=r.parent)r.className&&(f=o(r.className,"",!0)+f);var d="",E=0;try{for(var v,m,p=0;u.terminators.lastIndex=p,v=u.terminators.exec(n);)m=a(n.substring(p,v.index),v[0]),p=v.index+m;for(a(n.substr(p)),r=u;r.parent;r=r.parent)r.className&&(f+=h);return{relevance:E,value:f,language:e,top:u}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:_(n)};throw e}}function x(t,e){e=e||R.languages||c(b);var a={relevance:0,value:_(t)},r=a;return e.filter(O).filter(s).forEach(function(e){var n=M(e,t,!1);n.language=e,n.relevance>r.relevance&&(r=n),n.relevance>a.relevance&&(r=a,a=n)}),r.language&&(a.second_best=r),a}function v(e){return R.tabReplace||R.useBR?e.replace(t,function(e,n){return R.useBR&&"\n"===e?"<br>":R.tabReplace?n.replace(/\t/g,R.tabReplace):""}):e}function a(e){var n,t,a,r,i,s=function(e){var n,t,a,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=l.exec(i))return O(t[1])?t[1]:"no-highlight";for(n=0,a=(i=i.split(/\s+/)).length;n<a;n++)if(u(r=i[n])||O(r))return r}(e);u(s)||(R.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,i=n.textContent,a=s?M(s,i,!0):x(i),(t=E(n)).length&&((r=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=a.value,a.value=function(e,n,t){var a=0,r="",i=[];function s(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){r+="<"+f(e)+g.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+_(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){r+="</"+f(e)+">"}function c(e){("start"===e.event?o:l)(e.node)}for(;e.length||n.length;){var u=s();if(r+=_(t.substring(a,u[0].offset)),a=u[0].offset,u===e){for(i.reverse().forEach(l);c(u.splice(0,1)[0]),(u=s())===e&&u.length&&u[0].offset===a;);i.reverse().forEach(o)}else"start"===u[0].event?i.push(u[0].node):i.pop(),c(u.splice(0,1)[0])}return r+_(t.substr(a))}(t,E(r),i)),a.value=v(a.value),e.innerHTML=a.value,e.className=function(e,n,t){var a=n?o[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(a)&&r.push(a),r.join(" ").trim()}(e.className,s,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function i(){if(!i.called){i.called=!0;var e=document.querySelectorAll("pre code");g.forEach.call(e,a)}}function O(e){return e=(e||"").toLowerCase(),b[e]||b[o[e]]}function s(e){var n=O(e);return n&&!n.disableAutodetect}return r.highlight=M,r.highlightAuto=x,r.fixMarkup=v,r.highlightBlock=a,r.configure=function(e){R=d(R,e)},r.initHighlighting=i,r.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",i,!1),addEventListener("load",i,!1)},r.registerLanguage=function(n,e){var t=b[n]=e(r);t.aliases&&t.aliases.forEach(function(e){o[e]=n})},r.listLanguages=function(){return c(b)},r.getLanguage=O,r.autoDetection=s,r.inherit=d,r.IDENT_RE="[a-zA-Z]\\w*",r.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",r.NUMBER_RE="\\b\\d+(\\.\\d+)?",r.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r.BINARY_NUMBER_RE="\\b(0b[01]+)",r.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",r.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},r.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[r.BACKSLASH_ESCAPE]},r.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[r.BACKSLASH_ESCAPE]},r.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},r.COMMENT=function(e,n,t){var a=r.inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return a.contains.push(r.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},r.C_LINE_COMMENT_MODE=r.COMMENT("//","$"),r.C_BLOCK_COMMENT_MODE=r.COMMENT("/\\*","\\*/"),r.HASH_COMMENT_MODE=r.COMMENT("#","$"),r.NUMBER_MODE={className:"number",begin:r.NUMBER_RE,relevance:0},r.C_NUMBER_MODE={className:"number",begin:r.C_NUMBER_RE,relevance:0},r.BINARY_NUMBER_MODE={className:"number",begin:r.BINARY_NUMBER_RE,relevance:0},r.CSS_NUMBER_MODE={className:"number",begin:r.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},r.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[r.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[r.BACKSLASH_ESCAPE]}]},r.TITLE_MODE={className:"title",begin:r.IDENT_RE,relevance:0},r.UNDERSCORE_TITLE_MODE={className:"title",begin:r.UNDERSCORE_IDENT_RE,relevance:0},r.METHOD_GUARD={begin:"\\.\\s*"+r.UNDERSCORE_IDENT_RE,relevance:0},r});