// ── Card data ──────────────────────────────────────────────────────────────
// Edit this file to add, remove, or update flashcard terms.
// Each card needs: cat, term, full, def, ex
// Categories: "AI & Claude" | "Git & GitHub" | "Code & Dev" | "Infra & Process" | "Claude Code Commands"

const CARDS = [

  // ── AI & Claude ───────────────────────────────────────────────────────────
  { cat:"AI & Claude", term:"LLM", full:"Large Language Model",
    def:"An AI model trained on vast amounts of text to understand and generate human-like responses.",
    ex:"Claude, GPT-4, and Gemini are all LLMs." },

  { cat:"AI & Claude", term:"Prompt", full:"Prompt",
    def:"Everything you type into the input field — your instruction, question, or context for the AI.",
    ex:"\"Design a landing page for a SaaS app\" is a prompt." },

  { cat:"AI & Claude", term:"System Prompt", full:"System Prompt",
    def:"A hidden instruction set defined before the conversation that controls how the AI behaves throughout.",
    ex:"In a Claude Project, the system prompt gives Claude its role and rules." },

  { cat:"AI & Claude", term:"Token", full:"Token",
    def:"The smallest unit an LLM processes — roughly 3/4 of a word. Costs and limits are measured in tokens.",
    ex:"\"Flashcard\" = 2 tokens. Claude Sonnet has a 200k token context window." },

  { cat:"AI & Claude", term:"Context Window", full:"Context Window",
    def:"How much text Claude can hold in memory at once. Older content gets dropped when the limit is reached.",
    ex:"If a conversation gets too long, Claude forgets the earliest messages." },

  { cat:"AI & Claude", term:"Artifact", full:"Artifact",
    def:"A self-contained output Claude generates — a document, code file, or mini-app shown in the side panel.",
    ex:"A React component Claude builds lives in an Artifact panel." },

  { cat:"AI & Claude", term:"Hallucination", full:"Hallucination",
    def:"When an AI confidently states something that is factually wrong or entirely made up.",
    ex:"Claude inventing a book title or citation that doesn't exist." },

  { cat:"AI & Claude", term:"MCP", full:"Model Context Protocol",
    def:"An open standard that lets Claude connect to external tools and services like Figma or GitHub.",
    ex:"Claude Code uses MCP to read and write Figma files directly." },

  { cat:"AI & Claude", term:"Agent", full:"Agent / Agentic Mode",
    def:"An AI that autonomously executes multi-step tasks — taking real actions, not just answering questions.",
    ex:"Claude Code browsing files, writing code, and running tests on its own." },

  { cat:"AI & Claude", term:"Vibe Coding", full:"Vibe Coding",
    def:"Writing software by describing what you want in plain language and letting AI generate the code.",
    ex:"Telling Claude \"build me a flashcard app\" and iterating from there." },

  { cat:"AI & Claude", term:"Guardrails", full:"Guardrails",
    def:"Built-in restrictions that prevent an AI from producing harmful or policy-violating content.",
    ex:"Claude refusing to write malicious code or share dangerous information." },

  { cat:"AI & Claude", term:"Reasoning", full:"Reasoning",
    def:"Visible step-by-step thinking a model does before giving its final answer.",
    ex:"Claude working through a logic problem step by step before concluding." },

  { cat:"AI & Claude", term:"Skill", full:"Skill",
    def:"A markdown file with instructions on how Claude Code should handle a specific type of task.",
    ex:"A SKILL.md that teaches Claude how to create .docx or .pptx files." },

  { cat:"AI & Claude", term:"Multi-turn", full:"Multi-turn Conversation",
    def:"A chat with multiple back-and-forth exchanges where the AI remembers the full conversation context.",
    ex:"Asking a follow-up question and Claude knowing exactly what you referred to." },

  { cat:"AI & Claude", term:"Memory", full:"Memory",
    def:"Persistent information Claude stores about you across separate conversations.",
    ex:"Claude remembering your name, job, and preferences between sessions." },

  { cat:"AI & Claude", term:"Operator", full:"Operator",
    def:"A company or developer that builds a product on top of Claude via the API.",
    ex:"A startup embedding Claude into their customer support tool is an operator." },

  { cat:"AI & Claude", term:"Context Length", full:"Context Length",
    def:"The maximum number of tokens a model can process in a single request — input plus output combined.",
    ex:"A model with 100k context length can handle roughly 75,000 words at once." },

  { cat:"AI & Claude", term:"Multimodal", full:"Multimodal",
    def:"A model that can process and respond to multiple types of input — text, images, audio, or files.",
    ex:"Uploading a screenshot and asking Claude to describe the UI is multimodal." },

  // ── Git & GitHub ──────────────────────────────────────────────────────────
  { cat:"Git & GitHub", term:"Repository", full:"Repository (Repo)",
    def:"A folder containing all project files plus the complete history of every change ever made.",
    ex:"The ai-flashcards folder on GitHub is a repository." },

  { cat:"Git & GitHub", term:"Branch", full:"Branch",
    def:"A parallel copy of the code where you can work independently without affecting the main version.",
    ex:"A \"feature/new-header\" branch to redesign navigation without breaking the live site." },

  { cat:"Git & GitHub", term:"Commit", full:"Commit",
    def:"A saved snapshot of your changes with a short message describing what changed and why.",
    ex:"\"fix: corrected button color on dark mode\" is a commit message." },

  { cat:"Git & GitHub", term:"Merge", full:"Merge",
    def:"Combining two branches into one — bringing your work back into the main codebase.",
    ex:"Merging \"feature/dark-mode\" back into \"main\" after it's approved." },

  { cat:"Git & GitHub", term:"PR", full:"Pull Request",
    def:"A formal request to merge your branch into main — often reviewed by a teammate before approving.",
    ex:"Opening a PR with a screenshot of your UI change for team review." },

  { cat:"Git & GitHub", term:"Fork", full:"Fork",
    def:"Your own copy of someone else's repository — you can change it freely without affecting the original.",
    ex:"Forking an open-source icon library to add custom icons." },

  { cat:"Git & GitHub", term:"GitHub", full:"GitHub",
    def:"The most popular platform for hosting, sharing, and collaborating on code repositories.",
    ex:"github.com/anthropics/claude-code" },

  { cat:"Git & GitHub", term:"Push / Pull", full:"Push & Pull",
    def:"Push = upload your local commits to GitHub. Pull = download the latest changes from GitHub.",
    ex:"\"git push\" after finishing a feature, \"git pull\" at the start of the day." },

  { cat:"Git & GitHub", term:"Clone", full:"Clone",
    def:"Download a full copy of a remote repository to your local machine to work on it.",
    ex:"\"git clone\" a repo to start contributing to an open-source project." },

  { cat:"Git & GitHub", term:"Rebase", full:"Rebase",
    def:"Re-apply your commits on top of another branch — a cleaner alternative to merge.",
    ex:"Rebasing your feature branch on top of the latest main before submitting a PR." },

  // ── Code & Dev ────────────────────────────────────────────────────────────
  { cat:"Code & Dev", term:"API", full:"Application Programming Interface",
    def:"A defined way for two programs to talk to each other and exchange data.",
    ex:"Claude's API lets you send a prompt and receive a response inside your own app." },

  { cat:"Code & Dev", term:"JSON", full:"JavaScript Object Notation",
    def:"A lightweight text format for structured data — readable by both humans and machines.",
    ex:"{\"term\": \"JSON\", \"easy\": true}" },

  { cat:"Code & Dev", term:"Frontend", full:"Frontend",
    def:"Everything a user sees and interacts with — the visual layer running in the browser or app.",
    ex:"Buttons, layouts, animations — all frontend." },

  { cat:"Code & Dev", term:"Backend", full:"Backend",
    def:"The server-side layer handling logic, databases, and business rules — invisible to the user.",
    ex:"User authentication, data storage, and payment processing live in the backend." },

  { cat:"Code & Dev", term:"CSS", full:"Cascading Style Sheets",
    def:"The language that controls the visual appearance of web pages — colors, spacing, typography, layout.",
    ex:"\"color: red; font-size: 16px\" is CSS." },

  { cat:"Code & Dev", term:"Component", full:"Component",
    def:"A reusable, self-contained UI building block — like a Figma component but in code.",
    ex:"A Button component used in 40 different places across an app." },

  { cat:"Code & Dev", term:"Framework", full:"Framework",
    def:"A pre-built structure for development that provides conventions and tools to build on top of.",
    ex:"React, Vue, and Next.js are popular frontend frameworks." },

  { cat:"Code & Dev", term:"Package / npm", full:"Package / npm",
    def:"Ready-made code libraries you install into your project rather than writing from scratch.",
    ex:"\"npm install react\" installs the React library into your project." },

  { cat:"Code & Dev", term:"Bug", full:"Bug",
    def:"An error in code that causes unintended or incorrect behavior.",
    ex:"A button that submits a form twice because of a missing check." },

  { cat:"Code & Dev", term:"Refactoring", full:"Refactoring",
    def:"Restructuring existing code to be cleaner or more efficient — without changing what it does.",
    ex:"Splitting a 300-line function into smaller, named functions." },

  { cat:"Code & Dev", term:"Markdown", full:"Markdown",
    def:"A simple text markup language using symbols like #, **, and - to format plain text.",
    ex:"# Heading, **bold**, - list item" },

  { cat:"Code & Dev", term:"IDE", full:"Integrated Development Environment",
    def:"A code editor with built-in tools for writing, debugging, and running code.",
    ex:"Cursor and VS Code are popular IDEs." },

  { cat:"Code & Dev", term:"Webhook", full:"Webhook",
    def:"An automatic HTTP request sent from one service to another when a specific event occurs.",
    ex:"GitHub notifying your app instantly when a new PR is opened." },

  { cat:"Code & Dev", term:"HTTP Status", full:"HTTP Status Code",
    def:"A number returned by a server that tells you whether a request succeeded or failed.",
    ex:"200 = OK, 404 = not found, 500 = server error." },

  { cat:"Code & Dev", term:"Function", full:"Function",
    def:"A reusable block of code that performs a specific task when called.",
    ex:"A function called \"formatDate\" that converts timestamps into readable dates." },

  { cat:"Code & Dev", term:"Boolean", full:"Boolean",
    def:"A data type with only two possible values: true or false.",
    ex:"isLoggedIn = true, hasError = false." },

  { cat:"Code & Dev", term:"String", full:"String",
    def:"A data type that represents text — any sequence of characters enclosed in quotes.",
    ex:"\"Hello, world!\" and \"ai-flashcards\" are both strings." },

  // ── Infra & Process ───────────────────────────────────────────────────────
  { cat:"Infra & Process", term:"Cache", full:"Cache",
    def:"Temporarily stored data so future requests for the same thing are faster.",
    ex:"A browser caches images so the page loads faster on repeat visits." },

  { cat:"Infra & Process", term:"Batch", full:"Batch Processing",
    def:"Grouping multiple tasks and processing them all at once instead of one at a time.",
    ex:"Sending 1,000 API requests as one batch job overnight." },

  { cat:"Infra & Process", term:"CLI", full:"Command Line Interface",
    def:"A text-based interface to control your computer directly by typing commands.",
    ex:"The Terminal on your Mac is a CLI." },

  { cat:"Infra & Process", term:"Deployment", full:"Deployment",
    def:"Publishing your code to a live server so real users can access it.",
    ex:"Deploying a website to Vercel after finishing a feature." },

  { cat:"Infra & Process", term:"CI/CD", full:"Continuous Integration / Continuous Delivery",
    def:"Automated pipelines that test and deploy code every time a change is pushed.",
    ex:"Every PR triggers automated tests before it can be merged into main." },

  { cat:"Infra & Process", term:"Docker", full:"Docker",
    def:"Container technology that packages code with all its dependencies so it runs identically everywhere.",
    ex:"\"Works on my machine\" — Docker solves this problem." },

  { cat:"Infra & Process", term:"Env Variable", full:"Environment Variable",
    def:"Secret configuration values stored outside the codebase — never hardcoded in files.",
    ex:"API keys and database passwords stored as env vars." },

  { cat:"Infra & Process", term:"Log", full:"Log",
    def:"An automatic record of what a program is doing or did — used to debug issues.",
    ex:"Checking server logs to find out why a request failed at 3am." },

  { cat:"Infra & Process", term:"Cloud", full:"Cloud",
    def:"Remote server infrastructure you rent to run apps or store data — no own hardware needed.",
    ex:"AWS, Vercel, and Google Cloud are cloud providers." },

  { cat:"Infra & Process", term:"Database", full:"Database",
    def:"Structured storage for persistent data — reads and writes survive restarts and sessions.",
    ex:"User accounts, orders, and messages are stored in a database." },

  { cat:"Infra & Process", term:"Dependency", full:"Dependency",
    def:"External code your project relies on — managed via a package manager.",
    ex:"React is a dependency of your frontend project." },

  { cat:"Infra & Process", term:"HTTPS", full:"HyperText Transfer Protocol Secure",
    def:"Encrypted version of HTTP — ensures data between browser and server stays private.",
    ex:"The padlock icon in your browser's address bar means HTTPS is active." },

  { cat:"Infra & Process", term:"Local / localhost", full:"Local / localhost",
    def:"Your own computer acting as a development server — only you can see it.",
    ex:"localhost:5173 is where Vite runs your app during development." },

  { cat:"Infra & Process", term:"Production", full:"Production",
    def:"The live environment that real users interact with — as opposed to testing or development.",
    ex:"Pushing a bug to production means real users are affected." },

  { cat:"Infra & Process", term:"Staging", full:"Staging",
    def:"A test environment that mirrors production — used to verify changes before going live.",
    ex:"Testing a new checkout flow on staging before launching it to customers." },

  { cat:"Infra & Process", term:"Open Source", full:"Open Source",
    def:"Software whose source code is publicly available — anyone can read, use, or contribute to it.",
    ex:"React, VS Code, and Linux are all open source." },

  // ── Claude Code Commands ──────────────────────────────────────────────────
  { cat:"Claude Code Commands", term:"/init", full:"/init",
    def:"Scans your project and creates a starter CLAUDE.md file with context and conventions.",
    ex:"Run /init once when starting a new project with Claude Code." },

  { cat:"Claude Code Commands", term:"/clear", full:"/clear",
    def:"Wipes the conversation history to give Claude a clean context for a new task.",
    ex:"Use /clear when switching to a completely different part of the project." },

  { cat:"Claude Code Commands", term:"/compact", full:"/compact",
    def:"Summarizes the conversation history to free up context window space without losing progress.",
    ex:"Use /compact when context usage exceeds 80%." },

  { cat:"Claude Code Commands", term:"/model", full:"/model",
    def:"Switch between Claude models mid-session without restarting.",
    ex:"Switch to Opus for a complex architecture decision, back to Sonnet for quick edits." },

  { cat:"Claude Code Commands", term:"/cost", full:"/cost",
    def:"Shows token usage and cost accumulated in the current session.",
    ex:"Run /cost periodically to avoid unexpected API charges." },

  { cat:"Claude Code Commands", term:"/context", full:"/context",
    def:"Shows how full the context window currently is — useful before starting a long task.",
    ex:"Check /context before a big refactor to see if you need to /compact first." },

  { cat:"Claude Code Commands", term:"/resume", full:"/resume",
    def:"Continue a previous Claude Code session by name or ID.",
    ex:"Pick up yesterday's \"auth-refactor\" session exactly where you left off." },

  { cat:"Claude Code Commands", term:"/fork", full:"/fork",
    def:"Branch the conversation at its current state so you can try a different approach.",
    ex:"Experiment with one solution, then /resume back to the fork point and try another." },

  { cat:"Claude Code Commands", term:"/rename", full:"/rename",
    def:"Give a session a meaningful name so you can find and resume it later.",
    ex:"Name a session \"landing-page-hero\" instead of an auto-generated timestamp." },

  { cat:"Claude Code Commands", term:"/help", full:"/help",
    def:"Lists all available commands including custom slash commands from your project.",
    ex:"Run /help when you forget a command name." },

  { cat:"Claude Code Commands", term:"/agents", full:"/agents",
    def:"Manage specialized Claude sub-instances with their own context, persona, and tool access.",
    ex:"Set up a \"code-reviewer\" agent to automatically review every file Claude writes." },

  { cat:"Claude Code Commands", term:"/memory", full:"/memory",
    def:"View and edit what Claude has stored about your project and preferences.",
    ex:"Use /memory to correct outdated project context Claude is working from." },

  { cat:"Claude Code Commands", term:"claude -p", full:"claude --print",
    def:"One-shot mode: send a prompt, get an answer, and exit without starting an interactive session.",
    ex:"claude -p \"What does this error mean?\" — fast answer, no session started." },

  { cat:"Claude Code Commands", term:"claude -c", full:"claude --continue",
    def:"Resume the most recent Claude Code session directly from the terminal.",
    ex:"Start your day by running claude -c to continue where you stopped." },

  { cat:"Claude Code Commands", term:"--model flag", full:"--model flag",
    def:"Specify which Claude model to use when launching Claude Code from the terminal.",
    ex:"claude --model claude-opus-4 to start a session with Opus." },

  { cat:"Claude Code Commands", term:"Shift+Tab", full:"Shift+Tab",
    def:"Cycles through interaction modes: normal → auto-accept → plan mode.",
    ex:"Press once to enable auto-accept so Claude acts without asking permission each time." },

  { cat:"Claude Code Commands", term:"! prefix", full:"! Shell Prefix",
    def:"Run a shell command directly inside a Claude session — output goes into the conversation context.",
    ex:"!git status — check your repo state without leaving the Claude session." },

  { cat:"Claude Code Commands", term:"@ prefix", full:"@ File Reference",
    def:"Reference a specific file by path directly in your prompt so Claude reads it immediately.",
    ex:"@src/auth.ts fix the bug on line 42." },

  { cat:"Claude Code Commands", term:"CLAUDE.md", full:"CLAUDE.md",
    def:"A persistent project memory file that Claude reads at the start of every session.",
    ex:"Store your stack, conventions, and project goals here so Claude always has context." },

  { cat:"Claude Code Commands", term:"Auto-accept", full:"Auto-accept Mode",
    def:"Claude executes all file and terminal actions without asking for permission each time.",
    ex:"Enable for speed when you trust Claude's judgment on a well-defined task." },

  { cat:"Claude Code Commands", term:"Plan mode", full:"Plan Mode",
    def:"Claude outlines every step it will take before doing anything — you review before it acts.",
    ex:"Enable at the start of a complex task to catch wrong assumptions early." },

];
