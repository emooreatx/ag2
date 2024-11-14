"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4273],{22993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(85893),o=t(11151);const s={},a="Examples",l={id:"Examples",title:"Examples",description:"Automated Multi Agent Chat",source:"@site/docs/Examples.md",sourceDirName:".",slug:"/Examples",permalink:"/ag2/docs/Examples",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/Examples.md",tags:[],version:"current",frontMatter:{}},h={},c=[{value:"Automated Multi Agent Chat",id:"automated-multi-agent-chat",level:2},{value:"Code Generation, Execution, and Debugging",id:"code-generation-execution-and-debugging",level:3},{value:"Multi-Agent Collaboration (&gt;3 Agents)",id:"multi-agent-collaboration-3-agents",level:3},{value:"Sequential Multi-Agent Chats",id:"sequential-multi-agent-chats",level:3},{value:"Nested Chats",id:"nested-chats",level:3},{value:"Applications",id:"applications",level:3},{value:"Tool Use",id:"tool-use",level:3},{value:"Human Involvement",id:"human-involvement",level:3},{value:"Agent Teaching and Learning",id:"agent-teaching-and-learning",level:3},{value:"Multi-Agent Chat with OpenAI Assistants in the loop",id:"multi-agent-chat-with-openai-assistants-in-the-loop",level:3},{value:"Non-OpenAI Models",id:"non-openai-models",level:3},{value:"Multimodal Agent",id:"multimodal-agent",level:3},{value:"Long Context Handling",id:"long-context-handling",level:3},{value:"Evaluation and Assessment",id:"evaluation-and-assessment",level:3},{value:"Automatic Agent Building",id:"automatic-agent-building",level:3},{value:"Observability",id:"observability",level:3},{value:"Enhanced Inferences",id:"enhanced-inferences",level:2},{value:"Utilities",id:"utilities",level:3},{value:"Inference Hyperparameters Tuning",id:"inference-hyperparameters-tuning",level:3}];function r(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h2,{id:"automated-multi-agent-chat",children:"Automated Multi Agent Chat"}),"\n",(0,i.jsxs)(n.p,{children:["AutoGen offers conversable agents powered by LLM, tool or human, which can be used to perform tasks collectively via automated chat. This framework allows tool use and human participation via multi-agent conversation.\nPlease find documentation about this feature ",(0,i.jsx)(n.a,{href:"/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Links to notebook examples:"}),"\n",(0,i.jsx)(n.h3,{id:"code-generation-execution-and-debugging",children:"Code Generation, Execution, and Debugging"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Automated Task Solving with Code Generation, Execution & Debugging - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_auto_feedback_from_code_execution",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Code Generation and Question Answering with Retrieval Augmented Agents - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_RetrieveChat",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Code Generation and Question Answering with ",(0,i.jsx)(n.a,{href:"https://qdrant.tech/",children:"Qdrant"})," based Retrieval Augmented Agents - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_RetrieveChat_qdrant",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"multi-agent-collaboration-3-agents",children:"Multi-Agent Collaboration (>3 Agents)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Automated Task Solving by Group Chat (with 3 group member agents and 1 manager agent) - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Data Visualization by Group Chat (with 3 group member agents and 1 manager agent) - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat_vis",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Complex Task Solving by Group Chat (with 6 group member agents and 1 manager agent) - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat_research",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Task Solving with Coding & Planning Agents - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_planning",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Task Solving with transition paths specified in a graph - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat_finite_state_machine",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Running a group chat as an inner-monolgue via the SocietyOfMindAgent - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_society_of_mind",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Running a group chat with custom speaker selection function - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat_customized",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sequential-multi-agent-chats",children:"Sequential Multi-Agent Chats"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Solving Multiple Tasks in a Sequence of Chats Initiated by a Single Agent - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_multi_task_chats",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Async-solving Multiple Tasks in a Sequence of Chats Initiated by a Single Agent - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_multi_task_async_chats",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Solving Multiple Tasks in a Sequence of Chats Initiated by Different Agents - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchats_sequential_chats",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nested-chats",children:"Nested Chats"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Solving Complex Tasks with Nested Chats - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_nestedchat",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Solving Complex Tasks with A Sequence of Nested Chats - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_nested_sequential_chats",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["OptiGuide for Solving a Supply Chain Optimization Problem with Nested Chats with a Coding Agent and a Safeguard Agent - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_nestedchat_optiguide",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Conversational Chess with Nested Chats and Tool Use - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_nested_chats_chess",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Automated Continual Learning from New Data - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_stream",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ag2ai/build-with-ag2/tree/main/samples/apps/auto-anny",children:"AutoAnny"})," - A Discord bot built using AutoGen"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tool-use",children:"Tool Use"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web Search"}),": Solve Tasks Requiring Web Info - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_web_info",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use Provided Tools as Functions - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_function_call_currency_calculator",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use Tools via Sync and Async Function Calling - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_function_call_async",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Task Solving with Langchain Provided Tools as Functions - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_langchain",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RAG"}),": Group Chat with Retrieval Augmented Generation (with 5 group member agents and 1 manager agent) - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_groupchat_RAG",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Function Inception: Enable AutoGen agents to update/remove functions during conversations. - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_inception_function",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Agent Chat with Whisper - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_video_transcript_translate_with_whisper",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Constrained Responses via Guidance - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_guidance",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Browse the Web with Agents - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_surfer",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SQL"}),": Natural Language Text to SQL Query using the ",(0,i.jsx)(n.a,{href:"https://yale-lily.github.io/spider",children:"Spider"})," Text-to-SQL Benchmark - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_sql_spider",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web Scraping"}),": Web Scraping with Apify - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_webscraping_with_apify",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Write a software app, task by task, with specially designed functions."})," - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_function_call_code_writing",children:"View Notebook"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"human-involvement",children:"Human Involvement"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Simple example in ChatGPT style ",(0,i.jsx)(n.a,{href:"https://github.com/ag2ai/build-with-ag2/blob/main/samples/simple_chat.py",children:"View example"})]}),"\n",(0,i.jsxs)(n.li,{children:["Auto Code Generation, Execution, Debugging and ",(0,i.jsx)(n.strong,{children:"Human Feedback"})," - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_human_feedback",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automated Task Solving with GPT-4 + ",(0,i.jsx)(n.strong,{children:"Multiple Human Users"})," - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_two_users",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Agent Chat with ",(0,i.jsx)(n.strong,{children:"Async Human Inputs"})," - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/async_human_input",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"agent-teaching-and-learning",children:"Agent Teaching and Learning"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Teach Agents New Skills & Reuse via Automated Chat - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_teaching",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Teach Agents New Facts, User Preferences and Skills Beyond Coding - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_teachability",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Teach OpenAI Assistants Through GPTAssistantAgent - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_teachable_oai_assistants",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Agent Optimizer: Train Agents in an Agentic Way - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_agentoptimizer",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"multi-agent-chat-with-openai-assistants-in-the-loop",children:"Multi-Agent Chat with OpenAI Assistants in the loop"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Hello-World Chat with OpenAi Assistant in AutoGen - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_oai_assistant_twoagents_basic",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Chat with OpenAI Assistant using Function Call - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_oai_assistant_function_call",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Chat with OpenAI Assistant with Code Interpreter - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_oai_code_interpreter",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Chat with OpenAI Assistant with Retrieval Augmentation - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_oai_assistant_retrieval",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["OpenAI Assistant in a Group Chat - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_oai_assistant_groupchat",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["GPTAssistantAgent based Multi-Agent Tool Use - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/gpt_assistant_agent_function_call",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"non-openai-models",children:"Non-OpenAI Models"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Conversational Chess using non-OpenAI Models - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_nested_chats_chess_altmodels",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"multimodal-agent",children:"Multimodal Agent"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Multimodal Agent Chat with DALLE and GPT-4V - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_dalle_and_gpt4v",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Multimodal Agent Chat with Llava - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_lmm_llava",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Multimodal Agent Chat with GPT-4V - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_lmm_gpt-4v",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"long-context-handling",children:"Long Context Handling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Long Context Handling as A Capability - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_transform_messages",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"evaluation-and-assessment",children:"Evaluation and Assessment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AgentEval: A Multi-Agent System for Assess Utility of LLM-powered Applications - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agenteval_cq_math",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-agent-building",children:"Automatic Agent Building"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Automatically Build Multi-agent System with AgentBuilder - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/autobuild_basic",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Automatically Build Multi-agent System from Agent Library - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/autobuild_agent_library",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"observability",children:"Observability"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Track LLM calls, tool usage, actions and errors using AgentOps - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_agentops",children:"View Notebook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Cost Calculation - ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_cost_token_tracking",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enhanced-inferences",children:"Enhanced Inferences"}),"\n",(0,i.jsx)(n.h3,{id:"utilities",children:"Utilities"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["API Unification - ",(0,i.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/Use-Cases/enhanced_inference/#api-unification",children:"View Documentation with Code Example"})]}),"\n",(0,i.jsxs)(n.li,{children:["Utility Functions to Help Managing API configurations effectively - ",(0,i.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"View Notebook"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"inference-hyperparameters-tuning",children:"Inference Hyperparameters Tuning"}),"\n",(0,i.jsxs)(n.p,{children:["AutoGen offers a cost-effective hyperparameter optimization technique ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2303.04673",children:"EcoOptiGen"})," for tuning Large Language Models. The research study finds that tuning hyperparameters can significantly improve the utility of them.\nPlease find documentation about this feature ",(0,i.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Links to notebook examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/oai_completion.ipynb",children:"Optimize for Code Generation"})," | ",(0,i.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/oai_completion.ipynb",children:"Open in colab"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/oai_chatgpt_gpt4.ipynb",children:"Optimize for Math"})," | ",(0,i.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/oai_chatgpt_gpt4.ipynb",children:"Open in colab"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(67294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);