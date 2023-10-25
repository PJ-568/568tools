function greedySampling(t,e=void 0,n=0){let o=0,i=(t=applyRepetitionPenalty(t,e,n))[0];const l=t.length;for(let e=1;e<l;e++)t[e]>i&&(i=t[e],o=e);return o}function find_cutoff(t,e){let n=t.slice().sort(((t,e)=>e-t));for(let t=0;t<n.length-1;++t)if((e-=n[t])<=0)return n[t];return n[n.length-1]}function applyRepetitionPenalty(t,e,n){return e&&0!==n&&e.forEach(((e,o)=>t[e]=t[e]-n)),t}function getMultinomialProbs(t,e=1,n=.8){var o=softmax(t);const i=find_cutoff(o,n);o=o.map((t=>t<i?0:t)),1!==e&&(o=o.map((t=>Math.pow(t,1/e))));const l=o.reduce(((t,e)=>t+e));return o.map((t=>t/l))}function npsample(t,e=1,n=.8,o=void 0,i=0){return choiceIndex(getMultinomialProbs(applyRepetitionPenalty(t,o,i),e,n))}function choiceIndex(t){const e=t.length;let n=Math.random();for(let o=0;o<e;o++)if(n-=t[o],n<=0)return o;return t[e-1]}function softmax(t,e=0,n=t.length){let o=-1/0;for(let i=e;i<n;i++)o<t[i]&&(o=t[i]);let i=0;const l=Array.isArray(t)?[]:{};for(let r=e;r<n;r++)l[r]=Math.exp(t[r]-o),i+=l[r];for(let t=e;t<n;t++)l[t]=l[t]/i;return l}"undefined"!=typeof module&&(module.exports={greedySampling:greedySampling,npsample:npsample,softmax:softmax,choiceIndex:choiceIndex,find_cutoff:find_cutoff,getMultinomialProbs:getMultinomialProbs,applyRepetitionPenalty:applyRepetitionPenalty});