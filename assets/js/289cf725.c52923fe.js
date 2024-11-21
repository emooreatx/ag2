"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90127],{83211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(85893),a=r(11151);const i={sidebar_label:"arxiv_search",title:"agentchat.contrib.captainagent.tools.information_retrieval.arxiv_search"},c=void 0,o={id:"reference/agentchat/contrib/captainagent/tools/information_retrieval/arxiv_search",title:"agentchat.contrib.captainagent.tools.information_retrieval.arxiv_search",description:"arxiv\\_search",source:"@site/docs/reference/agentchat/contrib/captainagent/tools/information_retrieval/arxiv_search.md",sourceDirName:"reference/agentchat/contrib/captainagent/tools/information_retrieval",slug:"/reference/agentchat/contrib/captainagent/tools/information_retrieval/arxiv_search",permalink:"/ag2/docs/reference/agentchat/contrib/captainagent/tools/information_retrieval/arxiv_search",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/captainagent/tools/information_retrieval/arxiv_search.md",tags:[],version:"current",frontMatter:{sidebar_label:"arxiv_search",title:"agentchat.contrib.captainagent.tools.information_retrieval.arxiv_search"},sidebar:"referenceSideBar",previous:{title:"arxiv_download",permalink:"/ag2/docs/reference/agentchat/contrib/captainagent/tools/information_retrieval/arxiv_download"},next:{title:"extract_pdf_image",permalink:"/ag2/docs/reference/agentchat/contrib/captainagent/tools/information_retrieval/extract_pdf_image"}},s={},l=[{value:"arxiv_search",id:"arxiv_search",level:3}];function h(e){const t={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"arxiv_search",children:"arxiv_search"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'@with_requirements(["arxiv"], ["arxiv"])\ndef arxiv_search(query, max_results=10, sortby="relevance")\n'})}),"\n",(0,n.jsx)(t.p,{children:"Search for articles on arXiv based on the given query."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"query"})," ",(0,n.jsx)(t.em,{children:"str"})," - The search query."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"max_results"})," ",(0,n.jsx)(t.em,{children:"int, optional"})," - The maximum number of results to retrieve. Defaults to 10."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"sortby"})," ",(0,n.jsx)(t.em,{children:"str, optional"})," - The sorting criterion for the search results. Can be 'relevance' or 'submittedDate'. Defaults to 'relevance'."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"list"})," - A list of dictionaries containing information about the search results. Each dictionary contains the following keys:\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"'title': The title of the article."}),"\n",(0,n.jsx)(t.li,{children:"'authors': The authors of the article."}),"\n",(0,n.jsx)(t.li,{children:"'summary': The summary of the article."}),"\n",(0,n.jsx)(t.li,{children:"'entry_id': The entry ID of the article."}),"\n",(0,n.jsx)(t.li,{children:"'doi': The DOI of the article (If applicable)."}),"\n",(0,n.jsx)(t.li,{children:"'published': The publication date of the article in the format 'Y-M'."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>c});var n=r(67294);const a={},i=n.createContext(a);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);