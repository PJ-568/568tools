import{fromMarkdown}from"mdast-util-from-markdown";const handleList=e=>{let h=[],l=(e,h)=>{for(let t=0;t<e.length;t++){let n=e[t],r={};if(r.data={text:n.children[0].children[0].value},r.children=[],h.push(r),n.children.length>1)for(let e=1;e<n.children.length;e++){let h=n.children[e];"list"===h.type&&l(h.children,r.children)}}};return l(e.children,h),h};export const transformMarkdownTo=async e=>{const h=fromMarkdown(e);let l={children:[]},t=[l.children],n=l.children,r=[-1],d=-1;for(let e=0;e<h.children.length;e++){let l=h.children[e];if("heading"===l.type){if(!l.children[0])continue;let e={};if(e.data={text:l.children[0].value},e.children=[],l.depth>d)n.push(e),t.push(e.children),n=e.children,r.push(l.depth),d=l.depth;else if(l.depth===d)t.pop(),n=t[t.length-1],r.pop(),d=r[r.length-1],n.push(e),t.push(e.children),n=e.children,r.push(l.depth),d=l.depth;else for(;r.length;)if(t.pop(),n=t[t.length-1],r.pop(),d=r[r.length-1],d<l.depth){n.push(e),t.push(e.children),n=e.children,r.push(l.depth),d=l.depth;break}}else"list"===l.type&&n.push(...handleList(l))}return l.children[0]};