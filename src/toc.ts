export interface IconToc {
  color: string;
  colorGradient?: string;
  desc: string;
  docsUrl: string;
  fullTitle: string;
  group: 'model' | 'provider' | 'application';
  id: string;
    param: {
    hasAvatar: boolean;
    hasBrand: boolean;
    hasBrandColor: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
    hasTextCn: boolean;
  };
  title: string;
}

const toc: IconToc[] = [
  {
    "color": "#EB1000",
    "desc": "https://adobe.com",
    "docsUrl": "adobe",
    "fullTitle": "Adobe",
    "group": "application",
    "id": "Adobe",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Adobe"
  },
  {
    "color": "#EB1000",
    "desc": "https://firefly.adobe.com",
    "docsUrl": "adobe-firefly",
    "fullTitle": "Firefly (Adobe)",
    "group": "application",
    "id": "AdobeFirefly",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "AdobeFirefly"
  },
  {
    "color": "#E91E63",
    "colorGradient": "linear-gradient(-45deg, #F68CB2,  #E91E63)",
    "desc": "https://huggingface.co/ai21labs",
    "docsUrl": "ai21",
    "fullTitle": "Ai21Labs (Jamba)",
    "group": "model",
    "id": "Ai21",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "AI21"
  },
  {
    "color": "#006ffb",
    "colorGradient": "linear-gradient(to bottom, #12B7FA,  #006ffb)",
    "desc": "https://ai.360.com/",
    "docsUrl": "ai360",
    "fullTitle": "Ai360 (360智脑)",
    "group": "provider",
    "id": "Ai360",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "AI360"
  },
  {
    "color": "#fff",
    "desc": "https://ai-maas.wair.ac.cn",
    "docsUrl": "ai-mass",
    "fullTitle": "AiMass (紫东太初)",
    "group": "provider",
    "id": "AiMass",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "AiMass"
  },
  {
    "color": "#FF6003",
    "desc": "https://alibaba.com",
    "docsUrl": "alibaba",
    "fullTitle": "Alibaba",
    "group": "provider",
    "id": "Alibaba",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true
    },
    "title": "Alibaba"
  },
  {
    "color": "#1677ff",
    "desc": "https://antgroup.com",
    "docsUrl": "ant-group",
    "fullTitle": "AntGroup",
    "group": "provider",
    "id": "AntGroup",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true
    },
    "title": "AntGroup"
  },
  {
    "color": "#F1F0E8",
    "desc": "https://anthropic.com",
    "docsUrl": "anthropic",
    "fullTitle": "Anthropic",
    "group": "provider",
    "id": "Anthropic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Anthropic"
  },
  {
    "color": "#E00054",
    "desc": "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    "docsUrl": "automatic",
    "fullTitle": "Automatic1111 (SD Webui)",
    "group": "application",
    "id": "Automatic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Automatic"
  },
  {
    "color": "#222F3E",
    "desc": "https://aws.amazon.com",
    "docsUrl": "aws",
    "fullTitle": "AWS",
    "group": "provider",
    "id": "Aws",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "AWS"
  },
  {
    "color": "#416FDC",
    "desc": "https://cohere.com/research/aya",
    "docsUrl": "aya",
    "fullTitle": "Aya (Cohere)",
    "group": "model",
    "id": "Aya",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Aya"
  },
  {
    "color": "#00A4EF",
    "desc": "https://azure.microsoft.com",
    "docsUrl": "azure",
    "fullTitle": "Microsoft (Azure)",
    "group": "provider",
    "id": "Azure",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Azure"
  },
  {
    "color": "#FF6933",
    "colorGradient": "linear-gradient(-45deg, #FF6933, #FEC13E)",
    "desc": "https://baichuan-ai.com",
    "docsUrl": "baichuan",
    "fullTitle": "Baichuan (百川)",
    "group": "model",
    "id": "Baichuan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Baichuan"
  },
  {
    "color": "#2932E1",
    "desc": "https://baidu.com",
    "docsUrl": "baidu",
    "fullTitle": "Baidu",
    "group": "provider",
    "id": "Baidu",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true
    },
    "title": "Baidu"
  },
  {
    "color": "#2468f2",
    "desc": "https://cloud.baidu.com",
    "docsUrl": "baidu-cloud",
    "fullTitle": "BaiduCloud (百度智能云)",
    "group": "provider",
    "id": "BaiduCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "BaiduCloud"
  },
  {
    "color": "#222F3E",
    "colorGradient": "linear-gradient(45deg, #9AD8F8, #3D8FFF, #6350FB)",
    "desc": "https://aws.amazon.com/bedrock",
    "docsUrl": "bedrock",
    "fullTitle": "Bedrock (AWS)",
    "group": "provider",
    "id": "Bedrock",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Bedrock"
  },
  {
    "color": "#174ae4",
    "colorGradient": "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)",
    "desc": "https://bing.com",
    "docsUrl": "bing",
    "fullTitle": "Microsoft Bing",
    "group": "application",
    "id": "Bing",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Bing"
  },
  {
    "color": "#325AB4",
    "desc": "https://bytedance.com",
    "docsUrl": "byte-dance",
    "fullTitle": "ByteDance",
    "group": "provider",
    "id": "ByteDance",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true
    },
    "title": "ByteDance"
  },
  {
    "color": "#4268FA",
    "colorGradient": "linear-gradient(-45deg, #3485FF,  #504AF4)",
    "desc": "https://github.com/THUDM/ChatGLM-6B",
    "docsUrl": "chat-glm",
    "fullTitle": "ChatGLM (智谱)",
    "group": "model",
    "id": "ChatGLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "ChatGLM"
  },
  {
    "color": "#D97757",
    "desc": "https://claude.ai",
    "docsUrl": "claude",
    "fullTitle": "Claude",
    "group": "model",
    "id": "Claude",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Claude"
  },
  {
    "color": "#F38020",
    "desc": "https://cloudflare.com",
    "docsUrl": "cloudflare",
    "fullTitle": "Cloudflare",
    "group": "provider",
    "id": "Cloudflare",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Cloudflare"
  },
  {
    "color": "#00e7e7",
    "colorGradient": "linear-gradient(to right, #00E7E7,  #00BFFF)",
    "desc": "https://codegeex.cn/",
    "docsUrl": "code-gee-x",
    "fullTitle": "CodeGeeX",
    "group": "model",
    "id": "CodeGeeX",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "CodeGeeX"
  },
  {
    "color": "#000",
    "desc": "https://github.com/THUDM/CogVideo",
    "docsUrl": "cog-video",
    "fullTitle": "CogVideo",
    "group": "model",
    "id": "CogVideo",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "CogVideo"
  },
  {
    "color": "#000",
    "desc": "https://github.com/THUDM/CogView3",
    "docsUrl": "cog-view",
    "fullTitle": "CogView",
    "group": "model",
    "id": "CogView",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "CogView"
  },
  {
    "color": "#39594D",
    "desc": "https://cohere.com",
    "docsUrl": "cohere",
    "fullTitle": "Cohere (Command)",
    "group": "provider",
    "id": "Cohere",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Cohere"
  },
  {
    "color": "#F9AB00",
    "desc": "https://colab.research.google.com/",
    "docsUrl": "colab",
    "fullTitle": "Google (Colab)",
    "group": "application",
    "id": "Colab",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Colab"
  },
  {
    "color": "#fff",
    "desc": "https://copilot.microsoft.com",
    "docsUrl": "copilot",
    "fullTitle": "Microsoft Copilot",
    "group": "application",
    "id": "Copilot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Copilot"
  },
  {
    "color": "#000",
    "colorGradient": "conic-gradient(from 180deg, #FFFF67, #43FFFF, #50DA4C, #FF6E3D, #3C46FF)",
    "desc": "https://openai.com/dall-e-3",
    "docsUrl": "dalle",
    "fullTitle": "DALL·E (OpenAI)",
    "group": "model",
    "id": "Dalle",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "DALL-E"
  },
  {
    "color": "#EE3D2C",
    "desc": "https://www.databricks.com",
    "docsUrl": "dbrx",
    "fullTitle": "DBRX (Databricks)",
    "group": "model",
    "id": "Dbrx",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "DBRX"
  },
  {
    "color": "#4285F4",
    "desc": "https://deepmind.google",
    "docsUrl": "deep-mind",
    "fullTitle": "DeepMind (Google)",
    "group": "provider",
    "id": "DeepMind",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "DeepMind"
  },
  {
    "color": "#4D6BFE",
    "desc": "https://www.deepseek.com",
    "docsUrl": "deep-seek",
    "fullTitle": "DeepSeek",
    "group": "model",
    "id": "DeepSeek",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "DeepSeek"
  },
  {
    "color": "#FFF",
    "desc": "https://team.doubao.com",
    "docsUrl": "doubao",
    "fullTitle": "Doubao (豆包)",
    "group": "model",
    "id": "Doubao",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Doubao"
  },
  {
    "color": "#000",
    "colorGradient": "linear-gradient(to bottom, #952C78,  #050003)",
    "desc": "https://fireworks.ai",
    "docsUrl": "fireworks",
    "fullTitle": "Fireworks",
    "group": "provider",
    "id": "Fireworks",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Fireworks"
  },
  {
    "color": "#fff",
    "desc": "https://github.com/fishaudio",
    "docsUrl": "fish-audio",
    "fullTitle": "FishAudio (Bert)",
    "group": "model",
    "id": "FishAudio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "FishAudio"
  },
  {
    "color": "#fff",
    "desc": "https://blackforestlabs.ai/#get-flux",
    "docsUrl": "flux",
    "fullTitle": "Flux (black forest labs)",
    "group": "model",
    "id": "Flux",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Flux"
  },
  {
    "color": "#1C69FF",
    "colorGradient": "linear-gradient(45deg, #1C69FF 40%,  #F0DCD6 100%)",
    "desc": "https://deepmind.google/technologies/gemini",
    "docsUrl": "gemini",
    "fullTitle": "Gemini (Google)",
    "group": "model",
    "id": "Gemini",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Gemini"
  },
  {
    "color": "#2E96FF",
    "colorGradient": "linear-gradient(45deg, #446EFF 14%, #2E96FF 40%, #B1C5FF 73%)",
    "desc": "https://ai.google.dev/gemma",
    "docsUrl": "gemma",
    "fullTitle": "Gemma (Google)",
    "group": "model",
    "id": "Gemma",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Gemma"
  },
  {
    "color": "#000",
    "desc": "https://ai-assets.gitee.com/",
    "docsUrl": "gitee-ai",
    "fullTitle": "GiteeAI",
    "group": "provider",
    "id": "GiteeAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "GiteeAI"
  },
  {
    "color": "#000",
    "desc": "https://github.com",
    "docsUrl": "github",
    "fullTitle": "Github",
    "group": "provider",
    "id": "Github",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Github"
  },
  {
    "color": "#000",
    "desc": "https://github.com/features/copilot",
    "docsUrl": "github-copilot",
    "fullTitle": "Github Copilot",
    "group": "application",
    "id": "GithubCopilot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "GithubCopilot"
  },
  {
    "color": "#fff",
    "desc": "https://google.com",
    "docsUrl": "google",
    "fullTitle": "Google",
    "group": "provider",
    "id": "Google",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": false,
      "hasTextCn": false
    },
    "title": "Google"
  },
  {
    "color": "#fff",
    "desc": "https://grok.x.ai",
    "docsUrl": "grok",
    "fullTitle": "Grok (xAI)",
    "group": "model",
    "id": "Grok",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Grok"
  },
  {
    "color": "#F55036",
    "desc": "https://wow.groq.com",
    "docsUrl": "groq",
    "fullTitle": "Groq",
    "group": "provider",
    "id": "Groq",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Groq"
  },
  {
    "color": "#3E5CF4",
    "colorGradient": "linear-gradient(to bottom, #0418FF,  #1E8CFE)",
    "desc": "https://higress.cn/",
    "docsUrl": "higress",
    "fullTitle": "Higress",
    "group": "provider",
    "id": "Higress",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Higress"
  },
  {
    "color": "#fff",
    "desc": "https://huggingface.co",
    "docsUrl": "hugging-face",
    "fullTitle": "HuggingFace",
    "group": "provider",
    "id": "HuggingFace",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "HuggingFace"
  },
  {
    "color": "#0053e0",
    "desc": "https://hunyuan.tencent.com",
    "docsUrl": "hunyuan",
    "fullTitle": "Hunyuan (腾讯混元)",
    "group": "model",
    "id": "Hunyuan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Hunyuan"
  },
  {
    "color": "#1B3882",
    "desc": "https://internlm.intern-ai.org.cn",
    "docsUrl": "intern-lm",
    "fullTitle": "InternLM",
    "group": "provider",
    "id": "InternLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "InternLM"
  },
  {
    "color": "#000",
    "desc": "https://klingai.com",
    "docsUrl": "kling",
    "fullTitle": "Kling (可灵)",
    "group": "application",
    "id": "Kling",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Kling"
  },
  {
    "color": "#CB2D30",
    "colorGradient": "linear-gradient(-45deg, #CB2D30, #ED823A)",
    "desc": "https://github.com/haotian-liu/LLaVA",
    "docsUrl": "l-la-va",
    "fullTitle": "LLaVA",
    "group": "model",
    "id": "LLaVA",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "LLaVA"
  },
  {
    "color": "#000",
    "desc": "https://langfuse.com",
    "docsUrl": "langfuse",
    "fullTitle": "Langfuse",
    "group": "application",
    "id": "Langfuse",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Langfuse"
  },
  {
    "color": "#4338CA",
    "colorGradient": "linear-gradient(135deg, #6C78EF, #4F14BE)",
    "desc": "https://lmstudio.ai",
    "docsUrl": "lm-studio",
    "fullTitle": "LM Studio",
    "group": "provider",
    "id": "LmStudio",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "LM Studio"
  },
  {
    "color": "#fff",
    "desc": "https://lobehub.com",
    "docsUrl": "lobe-hub",
    "fullTitle": "LobeHub",
    "group": "provider",
    "id": "LobeHub",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "LobeHub"
  },
  {
    "color": "#000",
    "desc": "https://lumalabs.ai",
    "docsUrl": "luma",
    "fullTitle": "Luma",
    "group": "application",
    "id": "Luma",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Luma"
  },
  {
    "color": "#fff",
    "desc": "https://magic.dev",
    "docsUrl": "magic",
    "fullTitle": "Magic",
    "group": "model",
    "id": "Magic",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Magic"
  },
  {
    "color": "#1d65c1",
    "colorGradient": "linear-gradient(45deg, #007FF8, #0668E1, #007FF8)",
    "desc": "https://llama.meta.com",
    "docsUrl": "meta",
    "fullTitle": "Meta",
    "group": "provider",
    "id": "Meta",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Meta"
  },
  {
    "color": "#fff",
    "desc": "https://midjourney.com",
    "docsUrl": "midjourney",
    "fullTitle": "Midjourney",
    "group": "application",
    "id": "Midjourney",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Midjourney"
  },
  {
    "color": "#F23F5D",
    "colorGradient": "linear-gradient(to right, #E2167E,  #FE603C)",
    "desc": "https://api.minimax.chat",
    "docsUrl": "minimax",
    "fullTitle": "Minimax",
    "group": "model",
    "id": "Minimax",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Minimax"
  },
  {
    "color": "#fd6f00",
    "colorGradient": "linear-gradient(to bottom, #F7D046, #F2A73B, #EE792F, #EE792F, #EA3326",
    "desc": "https://mistral.ai",
    "docsUrl": "mistral",
    "fullTitle": "Mistral",
    "group": "model",
    "id": "Mistral",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Mistral"
  },
  {
    "color": "#16191E",
    "desc": "https://moonshot.cn",
    "docsUrl": "moonshot",
    "fullTitle": "Moonshot (月之暗面)",
    "group": "provider",
    "id": "Moonshot",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "MoonshotAI"
  },
  {
    "color": "#6847f5",
    "colorGradient": "linear-gradient(-45deg, #A717FF,  #2622FF)",
    "desc": "https://novita.ai/",
    "docsUrl": "novita",
    "fullTitle": "Novita",
    "group": "provider",
    "id": "Novita",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "novita.ai"
  },
  {
    "color": "#74B71B",
    "desc": "https://www.nvidia.com/en-us/ai-on-rtx/chat-with-rtx-generative-ai/",
    "docsUrl": "nvidia",
    "fullTitle": "Nvidia (ChatWithRTX)",
    "group": "application",
    "id": "Nvidia",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Nvidia"
  },
  {
    "color": "#fff",
    "desc": "https://ollama.ai",
    "docsUrl": "ollama",
    "fullTitle": "Ollama",
    "group": "provider",
    "id": "Ollama",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Ollama"
  },
  {
    "color": "#000",
    "desc": "https://openai.com",
    "docsUrl": "open-ai",
    "fullTitle": "OpenAI (ChatGPT)",
    "group": "provider",
    "id": "OpenAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "OpenAI"
  },
  {
    "color": "#4A7FE3",
    "desc": "https://huggingface.co/openchat",
    "docsUrl": "open-chat",
    "fullTitle": "OpenChat",
    "group": "model",
    "id": "OpenChat",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "OpenChat"
  },
  {
    "color": "#6566F1",
    "desc": "https://openrouter.ai",
    "docsUrl": "open-router",
    "fullTitle": "OpenRouter",
    "group": "provider",
    "id": "OpenRouter",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "OpenRouter"
  },
  {
    "color": "#FFF",
    "desc": "https://ai.google/discover/palm2",
    "docsUrl": "pa-lm",
    "fullTitle": "PaLM (Google)",
    "group": "model",
    "id": "PaLM",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "PaLM"
  },
  {
    "color": "#22B8CD",
    "desc": "https://perplexity.ai",
    "docsUrl": "perplexity",
    "fullTitle": "Perplexity",
    "group": "provider",
    "id": "Perplexity",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Perplexity"
  },
  {
    "color": "#000",
    "desc": "https://pollinations.ai",
    "docsUrl": "pollinations",
    "fullTitle": "Pollinations",
    "group": "application",
    "id": "Pollinations",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Pollinations"
  },
  {
    "color": "#1041F3",
    "desc": "https://chatglm.cn",
    "docsUrl": "qingyan",
    "fullTitle": "Qingyan (智谱清言)",
    "group": "application",
    "id": "Qingyan",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Qingyan"
  },
  {
    "color": "#615ced",
    "colorGradient": "linear-gradient(to right, #00055F,  #6F69F7)",
    "desc": "https://huggingface.co/Qwen",
    "docsUrl": "qwen",
    "fullTitle": "Qwen (千问)",
    "group": "model",
    "id": "Qwen",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Qwen"
  },
  {
    "color": "#EA2805",
    "desc": "https://replicate.com",
    "docsUrl": "replicate",
    "fullTitle": "Replicate",
    "group": "provider",
    "id": "Replicate",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": false,
      "hasText": false,
      "hasTextCn": false
    },
    "title": "Replicate"
  },
  {
    "color": "#fff",
    "desc": "https://runwayml.com",
    "docsUrl": "runway",
    "fullTitle": "Runway",
    "group": "application",
    "id": "Runway",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Runway"
  },
  {
    "color": "#3431C3",
    "desc": "https://github.com/RWKV",
    "docsUrl": "rwkv",
    "fullTitle": "RWKV",
    "group": "model",
    "id": "Rwkv",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "RWKV"
  },
  {
    "color": "#5B2AD8",
    "desc": "https://platform.sensenova.cn",
    "docsUrl": "sense-nova",
    "fullTitle": "SenseNova",
    "group": "provider",
    "id": "SenseNova",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "SenseNova"
  },
  {
    "color": "#7C3AED",
    "desc": "https://siliconflow.cn/zh-cn/",
    "docsUrl": "silicon-cloud",
    "fullTitle": "SiliconCloud (SiliconFlow)",
    "group": "provider",
    "id": "SiliconCloud",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "SiliconCloud"
  },
  {
    "color": "#0070f0",
    "desc": "https://xinghuo.xfyun.cn",
    "docsUrl": "spark",
    "fullTitle": "Spark (讯飞星火)",
    "group": "model",
    "id": "Spark",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Spark"
  },
  {
    "color": "#330066",
    "colorGradient": "linear-gradient(to bottom, #9D39FF,  #A380FF)",
    "desc": "https://deepmind.google/technologies/gemini",
    "docsUrl": "stability",
    "fullTitle": "Stability (StableDiffusion)",
    "group": "provider",
    "id": "Stability",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Stability"
  },
  {
    "color": "#005AFF",
    "desc": "https://www.stepfun.com",
    "docsUrl": "stepfun",
    "fullTitle": "Stepfun (阶跃星辰)",
    "group": "model",
    "id": "Stepfun",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Stepfun"
  },
  {
    "color": "#000",
    "desc": "https://app.suno.ai",
    "docsUrl": "suno",
    "fullTitle": "Suno",
    "group": "application",
    "id": "Suno",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Suno"
  },
  {
    "color": "#0052D9",
    "desc": "https://tencent.com",
    "docsUrl": "tencent",
    "fullTitle": "Tencent",
    "group": "provider",
    "id": "Tencent",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": false,
      "hasText": true,
      "hasTextCn": true
    },
    "title": "Tencent"
  },
  {
    "color": "#0f6fff",
    "desc": "https://www.together.ai",
    "docsUrl": "together",
    "fullTitle": "together.ai",
    "group": "provider",
    "id": "Together",
    "param": {
      "hasAvatar": true,
      "hasBrand": true,
      "hasBrandColor": true,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "together.ai"
  },
  {
    "color": "#908AF9",
    "colorGradient": "linear-gradient(to bottom, #AEBCFE,  #805DFA)",
    "desc": "https://www.upstage.ai",
    "docsUrl": "upstage",
    "fullTitle": "Upstage",
    "group": "provider",
    "id": "Upstage",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Upsate"
  },
  {
    "color": "#4285F4",
    "desc": "https://cloud.google.com/generative-ai-studio",
    "docsUrl": "vertex-ai",
    "fullTitle": "VertexAI (Google)",
    "group": "provider",
    "id": "VertexAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "VertexAI"
  },
  {
    "color": "#000",
    "desc": "https://viggle.ai",
    "docsUrl": "viggle",
    "fullTitle": "Viggle",
    "group": "application",
    "id": "Viggle",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Viggle"
  },
  {
    "color": "#fff",
    "desc": "https://github.com/vllm-project",
    "docsUrl": "vllm",
    "fullTitle": "vLLM",
    "group": "provider",
    "id": "Vllm",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "vLLM"
  },
  {
    "color": "#167ADF",
    "colorGradient": "linear-gradient(to right, #0A51C3,  #23A4FB)",
    "desc": "https://yiyan.baidu.com",
    "docsUrl": "wenxin",
    "fullTitle": "Wenxin (文心)",
    "group": "model",
    "id": "Wenxin",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Wenxin"
  },
  {
    "color": "#F38020",
    "desc": "https://developers.cloudflare.com/workers-ai",
    "docsUrl": "workers-ai",
    "fullTitle": "WorkersAI (Cloudflare)",
    "group": "provider",
    "id": "WorkersAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "WorkersAI"
  },
  {
    "color": "#fff",
    "desc": "https://x.ai",
    "docsUrl": "xai",
    "fullTitle": "xAI",
    "group": "provider",
    "id": "XAI",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Grok"
  },
  {
    "color": "#003425",
    "desc": "https://github.com/01-ai/Yi",
    "docsUrl": "yi",
    "fullTitle": "Yi (零一万物)",
    "group": "model",
    "id": "Yi",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Yi"
  },
  {
    "color": "#6300FF",
    "desc": "https://zeabur.com",
    "docsUrl": "zeabur",
    "fullTitle": "Zeabur",
    "group": "application",
    "id": "Zeabur",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Zeabur"
  },
  {
    "color": "#003425",
    "desc": "https://www.lingyiwanwu.com/",
    "docsUrl": "zero-one",
    "fullTitle": "01.AI (零一万物)",
    "group": "provider",
    "id": "ZeroOne",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": false,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "01.AI"
  },
  {
    "color": "#3859FF",
    "desc": "https://zhipuai.cn",
    "docsUrl": "zhipu",
    "fullTitle": "Zhipu (智谱)",
    "group": "provider",
    "id": "Zhipu",
    "param": {
      "hasAvatar": true,
      "hasBrand": false,
      "hasBrandColor": false,
      "hasColor": true,
      "hasCombine": true,
      "hasText": true,
      "hasTextCn": false
    },
    "title": "Zhipu"
  }
]

export default toc;