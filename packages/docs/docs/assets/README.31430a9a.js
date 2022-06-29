import{d as _,r as p,b as l,o as r,c as a,e as d,f as t,u as x,w as g,a as y}from"./index.a9ffec88.js";const h={w800px:"",h290px:"",py10:"",flex:"~ col","justify-center":"","items-center":"","bg-dark":""},u=_({setup(s){const e=p({data:[66]}),o=()=>{e.data=[Math.floor(Math.random()*(100-1))+1]};return(i,n)=>{const c=l("dv-water-level-pond");return r(),a("div",h,[d("div",null,[t(c,{config:x(e),style:{width:"150px",height:"200px"}},null,8,["config"])]),d("div",{pt5:""},[d("button",{btn:"",onClick:o}," \u66F4\u65B0\u6570\u636E ")])])}}}),m={w800px:"",h250px:"",py10:"",flex:"","justify-center":"","items-center":"","bg-dark":""},f=_({setup(s){const e=p({data:[66,45],shape:"roundRect"});return(o,i)=>{const n=l("dv-water-level-pond");return r(),a("div",m,[t(n,{config:x(e),style:{width:"150px",height:"200px"}},null,8,["config"])])}}}),v={w800px:"",h250px:"",py10:"",flex:"","justify-center":"","items-center":"","bg-dark":""},w=_({setup(s){const e=p({data:[55],shape:"round"});return(o,i)=>{const n=l("dv-water-level-pond");return r(),a("div",v,[t(n,{config:x(e),style:{width:"200px",height:"200px"}},null,8,["config"])])}}}),b={class:"markdown-body"},N=d("h1",null,"\u6C34\u4F4D\u56FE",-1),k=d("p",null,"\u6C34\u4F4D\u56FE",-1),$=d("h2",null,"\u77E9\u5F62\u6C34\u4F4D\u56FE",-1),B=d("h2",null,"\u5706\u89D2\u6C34\u4F4D\u56FE",-1),C=d("h2",null,"\u5706\u5F62\u6C34\u4F4D\u56FE",-1),P=y('<h2>config\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">data</td><td style="text-align:center;">\u6C34\u4F4D\u4F4D\u7F6E <code>[1]</code></td><td style="text-align:center;"><code>Arrya&lt;Number&gt;</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>[]</code></td></tr><tr><td style="text-align:center;">shape</td><td style="text-align:center;">\u6C34\u4F4D\u56FE\u5F62\u72B6</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>[2]</code></td><td style="text-align:center;"><code>&#39;rect&#39;</code></td></tr><tr><td style="text-align:center;">colors</td><td style="text-align:center;">\u6C34\u4F4D\u56FE\u914D\u8272</td><td style="text-align:center;"><code>Array&lt;String&gt;</code></td><td style="text-align:center;"><code>[3]</code></td><td style="text-align:center;"><code>[4]</code></td></tr><tr><td style="text-align:center;">waveNum</td><td style="text-align:center;">\u6CE2\u6D6A\u6570\u91CF</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>3</code></td></tr><tr><td style="text-align:center;">waveHeight</td><td style="text-align:center;">\u6CE2\u6D6A\u9AD8\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>40</code></td></tr><tr><td style="text-align:center;">waveOpacity</td><td style="text-align:center;">\u6CE2\u6D6A\u900F\u660E\u5EA6</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>0.4</code></td></tr><tr><td style="text-align:center;">formatter</td><td style="text-align:center;">\u4FE1\u606F\u683C\u5F0F\u5316</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">\u2014</td><td style="text-align:center;"><code>&#39;{value}%&#39;</code> <code>[5]</code></td></tr></tbody></table><h2>\u6CE8\u91CA</h2><ul><li><p>[1] \u53EF\u4EE5\u6709\u591A\u4E2A\u6C34\u4F4D\uFF0C\u4F46\u9ED8\u8BA4\u663E\u793A\u503C\u6700\u5927\u7684\u6C34\u4F4D\u4FE1\u606F\u3002</p></li><li><p>[2] \u6709\u4E09\u79CD\u5F62\u72B6\u53EF\u4F9B\u9009\u62E9\uFF1A\u77E9\u5F62<code>rect</code>\u3001\u5706\u89D2\u77E9\u5F62<code>roundRect</code>\u3001\u5706\u5F62<code>round</code>\u3002</p></li><li><p>[3] \u989C\u8272\u652F\u6301<code>hex | rgb | rgba </code>\u989C\u8272\u5173\u952E\u5B57\u7B49\u56DB\u79CD\u7C7B\u578B\u3002</p></li><li><p>[4] \u9ED8\u8BA4\u914D\u8272\u4E3A<code>[&#39;#00BAFF&#39;, &#39;#3DE7C9&#39;]</code>, \u81EA\u52A8\u5E94\u7528\u6E10\u53D8\u8272\uFF0C\u82E5\u4E0D\u60F3\u4F7F\u7528\u6E10\u53D8\u8272\uFF0C\u8BF7\u914D\u7F6E\u4E24\u4E2A\u76F8\u540C\u7684\u989C\u8272\u3002</p></li><li><p>[5] \u81EA\u52A8\u4F7F\u7528\u6700\u5927\u7684\u6C34\u4F4D\u503C\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684<code>&#39;{value}&#39;</code>\u6807\u8BB0\u3002</p></li></ul>',4),j={setup(s,{expose:e}){return e({frontmatter:{}}),(i,n)=>{const c=l("Preview");return r(),a("div",b,[N,k,$,t(c,{"comp-name":"WaterLevelPond","demo-name":"demo1"},{default:g(()=>[t(u)]),_:1}),B,t(c,{"comp-name":"WaterLevelPond","demo-name":"demo2"},{default:g(()=>[t(f)]),_:1}),C,t(c,{"comp-name":"WaterLevelPond","demo-name":"demo3"},{default:g(()=>[t(w)]),_:1}),P])}}};export{j as default};