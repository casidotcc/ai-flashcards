// ── Card data ──────────────────────────────────────────────────────────────
// Edit this file to add, remove, or update flashcard terms.
// Each card needs: cat, term, full, def, ex
// Categories: "AI & Claude" | "Git & GitHub" | "Code & Dev" | "Infra & Process" | "Claude Code Commands"

const CARDS = [

  // ── AI & Claude ───────────────────────────────────────────────────────────
  { cat:"AI & Claude", term:"LLM", full:"Large Language Model",
    def:"An AI that learned to hold conversations and write by reading enormous amounts of text — like a very fast reader who absorbed every book, article, and website.",
    ex:"Claude, GPT-4, and Gemini are all LLMs." },

  { cat:"AI & Claude", term:"Prompt", full:"Prompt",
    def:"Everything you type to the AI — a question, a request, or background information to help it understand what you need.",
    ex:"\"Design a landing page for a SaaS app\" is a prompt." },

  { cat:"AI & Claude", term:"System Prompt", full:"System Prompt",
    def:"A hidden set of instructions written before the conversation starts that tells the AI how to behave — like a job briefing the user never sees.",
    ex:"In a Claude Project, the system prompt gives Claude its role and rules." },

  { cat:"AI & Claude", term:"Token", full:"Token",
    def:"The unit AI uses to measure text — roughly 3/4 of a word. Usage costs and limits are counted in tokens, not words.",
    ex:"\"Flashcard\" = 2 tokens. Claude Sonnet has a 200k token context window." },

  { cat:"AI & Claude", term:"Context Window", full:"Context Window",
    def:"How much of the conversation Claude can remember at once. When a chat gets too long, the earliest messages start to disappear.",
    ex:"If a conversation runs very long, Claude may forget what was said at the start." },

  { cat:"AI & Claude", term:"Artifact", full:"Artifact",
    def:"A file, document, or mini-app that Claude creates and shows in its own side panel — separate from the chat.",
    ex:"A brand guidelines doc Claude writes, shown alongside the conversation." },

  { cat:"AI & Claude", term:"Hallucination", full:"Hallucination",
    def:"When an AI confidently says something that is wrong or completely made up — it sounds certain, but it's guessing.",
    ex:"Claude inventing a book title or a designer's name that doesn't exist." },

  { cat:"AI & Claude", term:"MCP", full:"Model Context Protocol",
    def:"A connection standard that lets Claude reach into other tools — like Figma or Google Drive — and work with them directly.",
    ex:"Claude Code uses MCP to read and write Figma files directly." },

  { cat:"AI & Claude", term:"Agent", full:"Agent / Agentic Mode",
    def:"An AI that doesn't just talk — it takes real actions on your computer, like opening files, making edits, and checking results all on its own.",
    ex:"Claude Code opening your project files, making changes, and checking the result without you clicking anything." },

  { cat:"AI & Claude", term:"Vibe Coding", full:"Vibe Coding",
    def:"Building software by describing what you want in plain words and letting AI write the code. No technical knowledge required.",
    ex:"Telling Claude \"build me a flashcard app\" and iterating from there." },

  { cat:"AI & Claude", term:"Guardrails", full:"Guardrails",
    def:"Built-in rules that stop an AI from saying or doing harmful things, regardless of what it's asked.",
    ex:"Claude refusing to help someone write a scam email." },

  { cat:"AI & Claude", term:"Reasoning", full:"Reasoning",
    def:"When an AI thinks out loud — working through a problem step by step before giving you its final answer.",
    ex:"Claude breaking down a design brief into questions before writing a response." },

  { cat:"AI & Claude", term:"Skill", full:"Skill",
    def:"A file you write that teaches Claude Code how to handle a specific task — like a recipe it follows every time.",
    ex:"A SKILL.md that teaches Claude how to create .docx or .pptx files." },

  { cat:"AI & Claude", term:"Multi-turn", full:"Multi-turn Conversation",
    def:"A conversation with multiple back-and-forth messages where the AI remembers everything said so far.",
    ex:"Asking Claude to \"make it shorter\" and it knows exactly which text you mean." },

  { cat:"AI & Claude", term:"Memory", full:"Memory",
    def:"Notes Claude saves about your preferences and background so it can remember them in future chats — even after you close the window.",
    ex:"Claude remembering your name, role, and font preferences between sessions." },

  { cat:"AI & Claude", term:"Operator", full:"Operator",
    def:"A business that builds their own product using Claude behind the scenes — their customers may not even know Claude is powering it.",
    ex:"A startup adding Claude to their customer support tool is an operator." },

  { cat:"AI & Claude", term:"Context Length", full:"Context Length",
    def:"The total amount of text an AI can handle in one go — both what you send and what it writes back.",
    ex:"A model with 100k context length can handle roughly 75,000 words at once." },

  { cat:"AI & Claude", term:"Multimodal", full:"Multimodal",
    def:"An AI that understands more than just text — it can also look at images, listen to audio, or read uploaded files.",
    ex:"Uploading a screenshot and asking Claude to describe the layout is multimodal." },

  // ── Git & GitHub ──────────────────────────────────────────────────────────
  { cat:"Git & GitHub", term:"Repository", full:"Repository (Repo)",
    def:"A project folder that also tracks every change ever made — like Google Drive, but with unlimited version history for every file.",
    ex:"The ai-flashcards folder on GitHub is a repository." },

  { cat:"Git & GitHub", term:"Branch", full:"Branch",
    def:"A separate copy of the project where you can experiment freely — the original stays untouched until you're ready to combine.",
    ex:"A \"feature/new-header\" branch to redesign navigation without breaking the live site." },

  { cat:"Git & GitHub", term:"Commit", full:"Commit",
    def:"A saved snapshot of your changes — like a checkpoint in a video game, with a note about what you did.",
    ex:"\"fix: corrected button color on dark mode\" is a commit message." },

  { cat:"Git & GitHub", term:"Merge", full:"Merge",
    def:"Combining two versions of the project into one — bringing your finished work back into the main version.",
    ex:"Merging \"feature/dark-mode\" back into \"main\" after it's approved." },

  { cat:"Git & GitHub", term:"PR", full:"Pull Request",
    def:"A formal request to bring your changes into the main version — teammates can review and leave comments before it's approved.",
    ex:"Opening a PR with a screenshot of your UI change for the team to review." },

  { cat:"Git & GitHub", term:"Fork", full:"Fork",
    def:"Your own copy of someone else's project — you can change it freely without touching their original.",
    ex:"Forking an open-source icon library to add your own custom icons." },

  { cat:"Git & GitHub", term:"GitHub", full:"GitHub",
    def:"The most popular website for storing, sharing, and collaborating on code projects with a team.",
    ex:"github.com/anthropics/claude-code" },

  { cat:"Git & GitHub", term:"Push / Pull", full:"Push & Pull",
    def:"Push = upload your saved changes to GitHub. Pull = download the latest changes your teammates made.",
    ex:"\"git push\" after finishing a feature, \"git pull\" at the start of the day." },

  { cat:"Git & GitHub", term:"Clone", full:"Clone",
    def:"Download a complete copy of a project from GitHub to your own computer so you can work on it.",
    ex:"\"git clone\" a repo to start contributing to an open-source project." },

  { cat:"Git & GitHub", term:"Rebase", full:"Rebase",
    def:"A way to reorder your changes so they appear on top of the latest version — keeps the project history clean and linear.",
    ex:"Rebasing your feature branch on top of the latest main before submitting a PR." },

  // ── Code & Dev ────────────────────────────────────────────────────────────
  { cat:"Code & Dev", term:"API", full:"Application Programming Interface",
    def:"A set of rules that lets two different apps talk to each other — like a waiter who takes your order to the kitchen and brings back the food.",
    ex:"Claude's API lets you send a prompt and get a response inside your own app." },

  { cat:"Code & Dev", term:"JSON", full:"JavaScript Object Notation",
    def:"A simple, structured way to write data using labels and values — like a spreadsheet written as plain text.",
    ex:"{\"term\": \"JSON\", \"easy\": true}" },

  { cat:"Code & Dev", term:"Frontend", full:"Frontend",
    def:"The part of a product that people actually see and touch — buttons, colors, layouts, and animations.",
    ex:"Hover effects, card layouts, and navigation menus are all frontend." },

  { cat:"Code & Dev", term:"Backend", full:"Backend",
    def:"The hidden part of a product that stores data, checks passwords, and handles anything the user never sees.",
    ex:"User accounts, payment processing, and saved preferences live in the backend." },

  { cat:"Code & Dev", term:"CSS", full:"Cascading Style Sheets",
    def:"The code that styles a web page — it controls colors, fonts, spacing, and how everything is laid out on screen.",
    ex:"\"color: red; font-size: 16px\" is CSS." },

  { cat:"Code & Dev", term:"Component", full:"Component",
    def:"A reusable building block in code — just like a Figma component, you define it once and use it everywhere.",
    ex:"A Button component used in 40 different places across an app." },

  { cat:"Code & Dev", term:"Framework", full:"Framework",
    def:"A ready-made structure for building apps — it gives you the skeleton and conventions so you're not starting from scratch.",
    ex:"React, Vue, and Next.js are popular frontend frameworks." },

  { cat:"Code & Dev", term:"Package / npm", full:"Package / npm",
    def:"Ready-made bundles of code you add to your project rather than writing everything yourself — like downloading a plugin instead of building it.",
    ex:"\"npm install react\" adds the React package to your project." },

  { cat:"Code & Dev", term:"Bug", full:"Bug",
    def:"A mistake in code that causes the app to behave in an unexpected or broken way.",
    ex:"A button that submits a form twice because of a missing check." },

  { cat:"Code & Dev", term:"Refactoring", full:"Refactoring",
    def:"Cleaning up and reorganizing code without changing what it actually does — making it easier to read and work with.",
    ex:"Splitting a 300-line function into smaller, clearly named pieces." },

  { cat:"Code & Dev", term:"Markdown", full:"Markdown",
    def:"A simple way to format plain text using symbols — like typing # before a word to make it a heading.",
    ex:"# Heading, **bold**, - list item" },

  { cat:"Code & Dev", term:"IDE", full:"Integrated Development Environment",
    def:"A code editor with built-in tools — it highlights mistakes, suggests completions, and lets you run your code directly.",
    ex:"Cursor and VS Code are popular IDEs." },

  { cat:"Code & Dev", term:"Webhook", full:"Webhook",
    def:"An automatic message one app sends to another when something specific happens — like a notification that fires between systems.",
    ex:"GitHub instantly notifying your app whenever a new PR is opened." },

  { cat:"Code & Dev", term:"HTTP Status", full:"HTTP Status Code",
    def:"A number your browser gets back after requesting a web page — it tells you whether the request worked or not.",
    ex:"200 = OK, 404 = not found, 500 = something broke on the other end." },

  { cat:"Code & Dev", term:"Function", full:"Function",
    def:"A named, reusable block of code that does one specific job whenever you call it — like a saved recipe step.",
    ex:"A function called \"formatDate\" that turns a raw timestamp into a readable date." },

  { cat:"Code & Dev", term:"Boolean", full:"Boolean",
    def:"A value that can only be one of two things: true or false — like a light switch that's either on or off.",
    ex:"isLoggedIn = true, hasError = false." },

  { cat:"Code & Dev", term:"String", full:"String",
    def:"The way code stores and handles text — any word, sentence, or mix of characters wrapped in quotes.",
    ex:"\"Hello, world!\" and \"ai-flashcards\" are both strings." },

  // ── Infra & Process ───────────────────────────────────────────────────────
  { cat:"Infra & Process", term:"Cache", full:"Cache",
    def:"Saved copies of data that let your app respond faster by reusing what it already loaded — like keeping a shortcut on your desktop.",
    ex:"A browser caches images so the page loads faster on repeat visits." },

  { cat:"Infra & Process", term:"Batch", full:"Batch Processing",
    def:"Running many similar tasks all at once in one go, rather than one at a time — like printing 100 copies instead of clicking print 100 times.",
    ex:"Sending 1,000 requests as one batch job overnight." },

  { cat:"Infra & Process", term:"CLI", full:"Command Line Interface",
    def:"A text-only interface where you control your computer by typing commands — instead of clicking buttons.",
    ex:"The Terminal app on your Mac is a CLI." },

  { cat:"Infra & Process", term:"Deployment", full:"Deployment",
    def:"Pushing your finished project to the internet so real people can use it — like going from \"draft\" to \"published.\"",
    ex:"Deploying a website to Vercel after finishing a feature." },

  { cat:"Infra & Process", term:"CI/CD", full:"Continuous Integration / Continuous Delivery",
    def:"An automated process that checks your changes and publishes them every time you save — no manual steps needed.",
    ex:"Every PR triggers automatic checks before it can be merged into main." },

  { cat:"Infra & Process", term:"Docker", full:"Docker",
    def:"A tool that bundles your app with everything it needs to run, so it works the same on every computer — no setup differences.",
    ex:"\"Works on my machine\" — Docker solves this problem." },

  { cat:"Infra & Process", term:"Env Variable", full:"Environment Variable",
    def:"Secret settings — like passwords or API keys — stored separately from your project files so they stay safe.",
    ex:"API keys and database passwords stored as env vars." },

  { cat:"Infra & Process", term:"Log", full:"Log",
    def:"An automatic record of everything that happened in your app — like a diary you check when something goes wrong.",
    ex:"Checking the logs to find out why something stopped working at 3am." },

  { cat:"Infra & Process", term:"Cloud", full:"Cloud",
    def:"Other companies' computers that you rent over the internet to run your app or store files — no physical hardware required.",
    ex:"AWS, Vercel, and Google Cloud are cloud providers." },

  { cat:"Infra & Process", term:"Database", full:"Database",
    def:"An organized storage system for information that your app can read and write — like a spreadsheet your code can access at any time.",
    ex:"User accounts, orders, and saved preferences are stored in a database." },

  { cat:"Infra & Process", term:"Dependency", full:"Dependency",
    def:"Code that your project borrows from someone else's package — your app won't work if it's missing.",
    ex:"React is a dependency of your frontend project." },

  { cat:"Infra & Process", term:"HTTPS", full:"HyperText Transfer Protocol Secure",
    def:"The secure version of web addresses — it scrambles data so no one can spy on what you're sending or receiving.",
    ex:"The padlock icon in your browser's address bar means HTTPS is active." },

  { cat:"Infra & Process", term:"Local / localhost", full:"Local / localhost",
    def:"Running your project on your own computer so you can test it — only visible to you, not the public.",
    ex:"localhost:5173 is where Vite runs your app during development." },

  { cat:"Infra & Process", term:"Production", full:"Production",
    def:"The live, public version of your product that real users are actually using — not a test version.",
    ex:"Pushing a bug to production means real users are affected." },

  { cat:"Infra & Process", term:"Staging", full:"Staging",
    def:"A private copy of your live product used for testing — it looks and works just like the real thing, but users can't see it.",
    ex:"Testing a new checkout flow on staging before launching it to customers." },

  { cat:"Infra & Process", term:"Open Source", full:"Open Source",
    def:"Software where the code is publicly shared — anyone can read it, use it, or suggest improvements.",
    ex:"React, VS Code, and Linux are all open source." },

  // ── Claude Code Commands ──────────────────────────────────────────────────
  { cat:"Claude Code Commands", term:"/init", full:"/init",
    def:"Looks through your project and writes a starter CLAUDE.md — a memory file Claude reads at the start of every session.",
    ex:"Run /init once when setting up a new project with Claude Code." },

  { cat:"Claude Code Commands", term:"/clear", full:"/clear",
    def:"Clears the entire chat so Claude starts fresh — useful when switching to a completely different task.",
    ex:"Use /clear when switching to a completely different part of the project." },

  { cat:"Claude Code Commands", term:"/compact", full:"/compact",
    def:"Compresses the chat history into a summary so the conversation can continue without hitting the memory limit.",
    ex:"Use /compact when context usage is getting close to full." },

  { cat:"Claude Code Commands", term:"/model", full:"/model",
    def:"Change which Claude model you're using mid-conversation — no need to start a new session.",
    ex:"Switch to Opus for a big decision, back to Sonnet for quick edits." },

  { cat:"Claude Code Commands", term:"/cost", full:"/cost",
    def:"Shows how many tokens you've used and how much the current session has cost so far.",
    ex:"Run /cost periodically to avoid unexpected charges." },

  { cat:"Claude Code Commands", term:"/context", full:"/context",
    def:"Shows how much of Claude's memory is being used — helpful to check before starting a big task.",
    ex:"Check /context before a big task to see if you need to /compact first." },

  { cat:"Claude Code Commands", term:"/resume", full:"/resume",
    def:"Pick up a previous Claude Code session exactly where you left off — by name or session ID.",
    ex:"Pick up yesterday's \"landing-page\" session exactly where you left off." },

  { cat:"Claude Code Commands", term:"/fork", full:"/fork",
    def:"Save your current position in a conversation so you can try a different direction and come back if it doesn't work.",
    ex:"Experiment with one approach, then /resume to the fork point and try another." },

  { cat:"Claude Code Commands", term:"/rename", full:"/rename",
    def:"Give your current Claude session a name so it's easy to find and continue later.",
    ex:"Name a session \"landing-page-hero\" instead of an auto-generated timestamp." },

  { cat:"Claude Code Commands", term:"/help", full:"/help",
    def:"Shows a list of all available commands — including any custom ones you've added to your project.",
    ex:"Run /help when you forget a command name." },

  { cat:"Claude Code Commands", term:"/agents", full:"/agents",
    def:"Set up separate versions of Claude with different roles and tools — like having a dedicated reviewer alongside your main assistant.",
    ex:"Set up a \"reviewer\" agent to automatically check every file Claude writes." },

  { cat:"Claude Code Commands", term:"/memory", full:"/memory",
    def:"See and edit everything Claude has saved about your project and preferences across sessions.",
    ex:"Use /memory to correct outdated context Claude is working from." },

  { cat:"Claude Code Commands", term:"claude -p", full:"claude --print",
    def:"A quick one-shot command — you ask a question, get an answer, and the session closes automatically.",
    ex:"claude -p \"What does this error mean?\" — fast answer, no session started." },

  { cat:"Claude Code Commands", term:"claude -c", full:"claude --continue",
    def:"Jumps straight back into your most recent Claude Code session — no need to find and reopen it manually.",
    ex:"Start your day by running claude -c to continue where you stopped." },

  { cat:"Claude Code Commands", term:"--model flag", full:"--model flag",
    def:"Choose which Claude model to use when starting Claude Code from the terminal.",
    ex:"claude --model claude-opus-4 to start a session with Opus." },

  { cat:"Claude Code Commands", term:"Shift+Tab", full:"Shift+Tab",
    def:"Switches Claude between three modes: normal, auto-accept (acts without asking), and plan mode (plans before acting).",
    ex:"Press once to enable auto-accept so Claude acts without asking permission each time." },

  { cat:"Claude Code Commands", term:"! prefix", full:"! Shell Prefix",
    def:"Run a terminal command directly inside Claude — the output is added to the conversation so Claude can see and use it.",
    ex:"!git status — check your project state without leaving the Claude session." },

  { cat:"Claude Code Commands", term:"@ prefix", full:"@ File Reference",
    def:"Point Claude to a specific file by typing its path — Claude reads it immediately as part of your message.",
    ex:"@src/auth.ts fix the bug on line 42." },

  { cat:"Claude Code Commands", term:"CLAUDE.md", full:"CLAUDE.md",
    def:"A file in your project that Claude reads at the start of every session — a persistent memory of your project's rules and context.",
    ex:"Store your stack, conventions, and project goals here so Claude always has context." },

  { cat:"Claude Code Commands", term:"Auto-accept", full:"Auto-accept Mode",
    def:"A mode where Claude makes changes directly without stopping to ask for approval at each step.",
    ex:"Enable for speed when you trust Claude's judgment on a well-defined task." },

  { cat:"Claude Code Commands", term:"Plan mode", full:"Plan Mode",
    def:"A mode where Claude writes out its full plan before making any changes — you can review and adjust before it starts.",
    ex:"Enable at the start of a complex task to catch wrong assumptions early." },

];
