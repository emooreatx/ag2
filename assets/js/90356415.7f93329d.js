"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64517],{8407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(85893),a=n(11151);const s={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_oai_code_interpreter.ipynb",description:"This Jupyter Notebook showcases the integration of the Code Interpreter tool which executes Python code dynamically within applications.",source_notebook:"/notebook/agentchat_oai_code_interpreter.ipynb",tags:["OpenAI Assistant","code interpreter"],title:"Auto Generated Agent Chat: GPTAssistant with Code Interpreter"},i="Auto Generated Agent Chat: GPTAssistant with Code Interpreter",r={id:"notebooks/agentchat_oai_code_interpreter",title:"Auto Generated Agent Chat: GPTAssistant with Code Interpreter",description:"This Jupyter Notebook showcases the integration of the Code Interpreter tool which executes Python code dynamically within applications.",source:"@site/docs/notebooks/agentchat_oai_code_interpreter.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_oai_code_interpreter",permalink:"/ag2/docs/notebooks/agentchat_oai_code_interpreter",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_oai_code_interpreter.ipynb",tags:[{label:"OpenAI Assistant",permalink:"/ag2/docs/tags/open-ai-assistant"},{label:"code interpreter",permalink:"/ag2/docs/tags/code-interpreter"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_oai_code_interpreter.ipynb",description:"This Jupyter Notebook showcases the integration of the Code Interpreter tool which executes Python code dynamically within applications.",source_notebook:"/notebook/agentchat_oai_code_interpreter.ipynb",tags:["OpenAI Assistant","code interpreter"],title:"Auto Generated Agent Chat: GPTAssistant with Code Interpreter"},sidebar:"notebooksSidebar",previous:{title:"OpenAI Assistants in AutoGen",permalink:"/ag2/docs/notebooks/agentchat_oai_assistant_twoagents_basic"},next:{title:"Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent",permalink:"/ag2/docs/notebooks/agentchat_planning"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Perform Tasks Using Code Interpreter",id:"perform-tasks-using-code-interpreter",level:2},{value:"Example 1: Math Problem Solving",id:"example-1-math-problem-solving",level:3},{value:"Example 2: Plotting with Code Interpreter",id:"example-2-plotting-with-code-interpreter",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"auto-generated-agent-chat-gptassistant-with-code-interpreter",children:"Auto Generated Agent Chat: GPTAssistant with Code Interpreter"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_oai_code_interpreter.ipynb",children:(0,o.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(t.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_oai_code_interpreter.ipynb",children:(0,o.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(t.p,{children:["The latest released Assistants API by OpenAI allows users to build AI\nassistants within their own applications. The Assistants API currently\nsupports three types of tools: Code Interpreter, Retrieval, and Function\ncalling. In this notebook, we demonstrate how to enable\n",(0,o.jsx)(t.code,{children:"GPTAssistantAgent"})," to use code interpreter."]}),"\n",(0,o.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(t.p,{children:["AutoGen requires ",(0,o.jsx)(t.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall:"]}),"\n",(0,o.jsxs)(t.admonition,{title:"Requirements",type:"info",children:[(0,o.jsxs)(t.p,{children:["Install ",(0,o.jsx)(t.code,{children:"autogen"}),":"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pip install autogen\n"})}),(0,o.jsxs)(t.p,{children:["For more information, please refer to the ",(0,o.jsx)(t.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,o.jsx)(t.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,o.jsxs)(t.p,{children:["The\n",(0,o.jsx)(t.a,{href:"https://ag2ai.github.io/ag2/docs/reference/oai/openai_utils#config_list_from_json",children:(0,o.jsx)(t.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import io\n\nfrom IPython.display import display\nfrom PIL import Image\n\nimport autogen\nfrom autogen.agentchat import AssistantAgent, UserProxyAgent\nfrom autogen.agentchat.contrib.gpt_assistant_agent import GPTAssistantAgent\n\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    file_location=".",\n    filter_dict={\n        "model": ["gpt-3.5-turbo", "gpt-35-turbo", "gpt-4", "gpt4", "gpt-4-32k", "gpt-4-turbo"],\n    },\n)\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Learn more about configuring LLMs for agents ",(0,o.jsx)(t.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"perform-tasks-using-code-interpreter",children:"Perform Tasks Using Code Interpreter"}),"\n",(0,o.jsxs)(t.p,{children:["We demonstrate task solving using ",(0,o.jsx)(t.code,{children:"GPTAssistantAgent"})," with code\ninterpreter. Pass ",(0,o.jsx)(t.code,{children:"code_interpreter"})," in ",(0,o.jsx)(t.code,{children:"tools"})," parameter to enable\n",(0,o.jsx)(t.code,{children:"GPTAssistantAgent"})," with code interpreter. It will write code and\nautomatically execute it in a sandbox. The agent will receive the\nresults from the sandbox environment and act accordingly."]}),"\n",(0,o.jsx)(t.h3,{id:"example-1-math-problem-solving",children:"Example 1: Math Problem Solving"}),"\n",(0,o.jsx)(t.p,{children:"In this example, we demonstrate how to use code interpreter to solve\nmath problems."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'# Initiate an agent equipped with code interpreter\ngpt_assistant = GPTAssistantAgent(\n    name="Coder Assistant",\n    llm_config={\n        "config_list": config_list,\n    },\n    assistant_config={\n        "tools": [{"type": "code_interpreter"}],\n    },\n    instructions="You are an expert at solving math questions. Write code and run it to solve math problems. Reply TERMINATE when the task is solved and there is no problem.",\n)\n\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda msg: "TERMINATE" in msg["content"],\n    code_execution_config={\n        "work_dir": "coding",\n        "use_docker": False,  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    },\n    human_input_mode="NEVER",\n)\n\n# When all is set, initiate the chat.\nuser_proxy.initiate_chat(\n    gpt_assistant, message="If $725x + 727y = 1500$ and $729x+ 731y = 1508$, what is the value of $x - y$ ?"\n)\ngpt_assistant.delete_assistant()\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"OpenAI client config of GPTAssistantAgent(Coder Assistant) - model: gpt-4-turbo\nMatching assistant found, using the first matching assistant: {'id': 'asst_xBMxObFj0TzDex04NAKbBCmP', 'created_at': 1710321320, 'description': None, 'file_ids': [], 'instructions': 'You are an expert at solving math questions. Write code and run it to solve math problems. Reply TERMINATE when the task is solved and there is no problem.', 'metadata': {}, 'model': 'gpt-4-turbo', 'name': 'Coder Assistant', 'object': 'assistant', 'tools': [ToolCodeInterpreter(type='code_interpreter')]}\nPermanently deleting assistant...\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"user_proxy (to Coder Assistant):\n\nIf $725x + 727y = 1500$ and $729x+ 731y = 1508$, what is the value of $x - y$ ?\n\n--------------------------------------------------------------------------------\nCoder Assistant (to user_proxy):\n\nThe value of \\( x - y \\) is \\(-48\\).\n\n\n--------------------------------------------------------------------------------\nuser_proxy (to Coder Assistant):\n\n\n\n--------------------------------------------------------------------------------\nCoder Assistant (to user_proxy):\n\nIt seems you have no further inquiries. If you have more questions in the future, feel free to ask. Goodbye!\n\nTERMINATE\n\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(t.h3,{id:"example-2-plotting-with-code-interpreter",children:"Example 2: Plotting with Code Interpreter"}),"\n",(0,o.jsx)(t.p,{children:"Code Interpreter can outputs files, such as generating image diagrams.\nIn this example, we demonstrate how to draw figures and download it."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'gpt_assistant = GPTAssistantAgent(\n    name="Coder Assistant",\n    llm_config={\n        "config_list": config_list,\n    },\n    assistant_config={\n        "tools": [{"type": "code_interpreter"}],\n    },\n    instructions="You are an expert at writing python code to solve problems. Reply TERMINATE when the task is solved and there is no problem.",\n)\n\nuser_proxy.initiate_chat(\n    gpt_assistant,\n    message="Draw a line chart to show the population trend in US. Show how you solved it with code.",\n    is_termination_msg=lambda msg: "TERMINATE" in msg["content"],\n    human_input_mode="NEVER",\n    clear_history=True,\n    max_consecutive_auto_reply=1,\n)\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"OpenAI client config of GPTAssistantAgent(Coder Assistant) - model: gpt-4-turbo\nNo matching assistant found, creating a new assistant\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"user_proxy (to Coder Assistant):\n\nDraw a line chart to show the population trend in US. Show how you solved it with code.\n\n--------------------------------------------------------------------------------\nCoder Assistant (to user_proxy):\n\nTo draw a line chart showing the population trend in the US, we first need to obtain the data that contains the population figures over a range of years. As I don't have access to the internet in this environment, I cannot download the data directly. However, if you can provide the data, I can proceed to create a line chart for you.\n\nFor the purpose of this demonstration, let's assume we have some hypothetical US population data for a few years. I'll generate some sample data and create a line chart using the `matplotlib` library in Python.\n\nHere's how we can do it:\n\n\nReceived file id=assistant-tvLtfOn6uAJ9kxmnxgK2OXID\n\nHere is a line chart that illustrates the hypothetical US population trend from 2010 to 2020. The data used here is for demonstration purposes only. If you have actual population data, you can provide it, and I will update the chart accordingly.\n\nTERMINATE\n\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"ChatResult(chat_id=None, chat_history=[{'content': 'Draw a line chart to show the population trend in US. Show how you solved it with code.', 'role': 'assistant'}, {'content': \"To draw a line chart showing the population trend in the US, we first need to obtain the data that contains the population figures over a range of years. As I don't have access to the internet in this environment, I cannot download the data directly. However, if you can provide the data, I can proceed to create a line chart for you.\\n\\nFor the purpose of this demonstration, let's assume we have some hypothetical US population data for a few years. I'll generate some sample data and create a line chart using the `matplotlib` library in Python.\\n\\nHere's how we can do it:\\n\\n\\nReceived file id=assistant-tvLtfOn6uAJ9kxmnxgK2OXID\\n\\nHere is a line chart that illustrates the hypothetical US population trend from 2010 to 2020. The data used here is for demonstration purposes only. If you have actual population data, you can provide it, and I will update the chart accordingly.\\n\\nTERMINATE\\n\", 'role': 'user'}], summary=\"To draw a line chart showing the population trend in the US, we first need to obtain the data that contains the population figures over a range of years. As I don't have access to the internet in this environment, I cannot download the data directly. However, if you can provide the data, I can proceed to create a line chart for you.\\n\\nFor the purpose of this demonstration, let's assume we have some hypothetical US population data for a few years. I'll generate some sample data and create a line chart using the `matplotlib` library in Python.\\n\\nHere's how we can do it:\\n\\n\\nReceived file id=assistant-tvLtfOn6uAJ9kxmnxgK2OXID\\n\\nHere is a line chart that illustrates the hypothetical US population trend from 2010 to 2020. The data used here is for demonstration purposes only. If you have actual population data, you can provide it, and I will update the chart accordingly.\\n\\n\\n\", cost=({'total_cost': 0}, {'total_cost': 0}), human_input=[])\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now we have the file id. We can download and display it."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'api_response = gpt_assistant.openai_client.files.with_raw_response.retrieve_content(\n    "assistant-tvLtfOn6uAJ9kxmnxgK2OXID"\n)\n\nif api_response.status_code == 200:\n    content = api_response.content\n    image_data_bytes = io.BytesIO(content)\n    image = Image.open(image_data_bytes)\n    display(image)\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(73421).Z+"",width:"1979",height:"980"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"gpt_assistant.delete_assistant()\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Permanently deleting assistant...\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},73421:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cell-5-output-1-6e1e11f11fa4e7a0c18cb41120c4681e.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);