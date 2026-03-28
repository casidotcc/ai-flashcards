// ── Card data ──────────────────────────────────────────────────────────────
// Edit this file to add, remove, or update flashcard terms.
// Each card needs: cat, term, full, def, ex
// Categories: "AI Basics" | "AI & Claude" | "Git & GitHub" | "Code & Dev" | "Infra & Process" | "Key Players"

const CARDS = [

  // ── AI Basics ─────────────────────────────────────────────────────────────
  { cat:"AI Basics", term:"AI", full:"Artificial Intelligence",
    def:"Technology that enables computers to perform tasks that normally require human thinking — like understanding language, recognizing images, or making decisions.",
    ex:"When your email filters spam automatically or your phone unlocks with your face, that is AI at work." },

  { cat:"AI Basics", term:"Chatbot", full:"Chatbot",
    def:"A program you can have a text or voice conversation with — it understands what you write and responds in natural language.",
    ex:"Claude, ChatGPT, and customer support assistants on websites are all chatbots." },

  { cat:"AI Basics", term:"Machine Learning", full:"Machine Learning",
    def:"A way of building AI where the system learns from large amounts of examples rather than being manually programmed with rules.",
    ex:"A spam filter learns to recognize junk mail by studying thousands of examples of spam and non-spam." },

  { cat:"AI Basics", term:"Data", full:"Data",
    def:"The raw information that AI learns from and works with — text, images, numbers, or any other recorded information.",
    ex:"An AI that writes text was trained on billions of pages of data from books and websites." },

  { cat:"AI Basics", term:"Algorithm", full:"Algorithm",
    def:"A step-by-step set of instructions a computer follows to solve a problem or complete a task.",
    ex:"The order in which posts appear in your social media feed is decided by an algorithm." },

  { cat:"AI Basics", term:"Automation", full:"Automation",
    def:"When a task is completed automatically by a machine or software without a human doing it manually each time.",
    ex:"Scheduling social media posts in advance or auto-filling a form are simple forms of automation." },

  { cat:"AI Basics", term:"Input", full:"Input",
    def:"What you give to an AI — a question, instruction, image, or file that it uses to generate a response.",
    ex:"Typing \"summarize this document\" and uploading a PDF is your input." },

  { cat:"AI Basics", term:"Output", full:"Output",
    def:"What the AI gives back to you in response to your input — text, code, an image, or a file.",
    ex:"The summary Claude writes after reading your document is the output." },

  { cat:"AI Basics", term:"Training", full:"Training",
    def:"The process where an AI model learns by processing enormous amounts of data — like studying before an exam, but at a massive scale.",
    ex:"Claude was trained on a large collection of text so it can understand and generate language." },

  { cat:"AI Basics", term:"Generative AI", full:"Generative AI",
    def:"AI that creates new content — text, images, audio, or code — rather than just analyzing or sorting existing information.",
    ex:"Asking Claude to write a cover letter or DALL-E to generate an image are both generative AI." },

  { cat:"AI Basics", term:"No-code / Low-code", full:"No-code / Low-code",
    def:"Tools that let you build apps, websites, or automations with little to no programming — using visual interfaces instead.",
    ex:"Webflow, Notion, and Zapier are no-code tools anyone can use without writing code." },

  { cat:"AI Basics", term:"SaaS", full:"Software as a Service",
    def:"Software you access over the internet through a subscription rather than buying and installing it on your computer.",
    ex:"Figma, Notion, and Spotify are all SaaS products — you pay monthly and use them in the browser." },

  { cat:"AI Basics", term:"Environment", full:"Environment",
    def:"The specific setup in which a piece of software runs — each environment can have different settings and data.",
    ex:"Your local environment is your own computer. Production is the live version real users see." },

  { cat:"AI Basics", term:"CASI", full:"CASI — Alexander Blum",
    def:"Freelance product and digital designer based in Frankfurt with 15+ years of experience. Partners with B2B SaaS teams to create clarity through design and direction.",
    ex:"The person who built this glossary because he couldn't find the right words. hello@casi.cc" },

  // ── AI & Claude ───────────────────────────────────────────────────────────
  { cat:"AI & Claude", term:"LLM", full:"Large Language Model",
    def:"An AI model trained on vast amounts of text to understand and generate human-like responses.",
    ex:"Claude, GPT-4, and Gemini are all LLMs." },

  { cat:"AI & Claude", term:"Model", full:"Model",
    def:"The specific AI system you are talking to or working with — each model has different strengths, costs, and capabilities.",
    ex:"Claude Sonnet and Claude Opus are both models made by Anthropic — Sonnet is faster, Opus is more thorough." },

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
    def:"A predefined capability or instruction set that tells an AI how to handle a specific type of task — reusable across different conversations or projects.",
    ex:"An AI that always formats output as a structured report because it was given a skill for that." },

  { cat:"AI & Claude", term:"Memory", full:"Memory",
    def:"Persistent information Claude stores about you across separate conversations.",
    ex:"Claude remembering your name, job, and preferences between sessions." },

  { cat:"AI & Claude", term:"Operator", full:"Operator",
    def:"A company or developer that builds a product on top of Claude via the API.",
    ex:"A startup embedding Claude into their customer support tool is an operator." },

  { cat:"AI & Claude", term:"Context Length", full:"Context Length",
    def:"The maximum number of tokens a model can process in a single request — input plus output combined.",
    ex:"A model with 100k context length can handle roughly 75,000 words at once." },

  { cat:"AI & Claude", term:"Prompt Engineering", full:"Prompt Engineering",
    def:"The practice of carefully crafting your instructions to an AI to get better, more accurate results.",
    ex:"Instead of \"write a bio\", writing \"write a 3-sentence professional bio for a freelance designer with 15 years experience\" is prompt engineering." },

  { cat:"AI & Claude", term:"Context", full:"Context",
    def:"All the information an AI has available when generating a response — your current conversation, uploaded files, and any background instructions.",
    ex:"Pasting a brief about your project before asking Claude to write copy gives it more context." },

  { cat:"AI & Claude", term:"API Key", full:"API Key",
    def:"A personal access code that proves you are authorized to use a service — like a password for your app to talk to an AI.",
    ex:"You need an API key from Anthropic to use Claude in your own app." },

  { cat:"AI & Claude", term:"Rate Limit", full:"Rate Limit",
    def:"A cap on how many requests you can send to a service within a certain time period — to prevent overuse.",
    ex:"If you send too many messages to Claude in one minute, you hit the rate limit and have to wait." },

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
    ex:"Taking an open-source icon library and adding your own custom icons to it." },

  { cat:"Git & GitHub", term:"GitHub", full:"GitHub",
    def:"The most popular platform for hosting, sharing, and collaborating on code repositories.",
    ex:"github.com/anthropics/claude-code" },

  { cat:"Git & GitHub", term:"Push / Pull", full:"Push & Pull",
    def:"Push = upload your local changes to GitHub. Pull = download the latest changes from GitHub to your computer.",
    ex:"\"git push\" after finishing a feature, \"git pull\" at the start of the day." },

  { cat:"Git & GitHub", term:"Clone", full:"Clone",
    def:"Download a full copy of a project from GitHub to your own computer to work on it.",
    ex:"Cloning a repo to start contributing to an open-source project." },

  { cat:"Git & GitHub", term:"Rebase", full:"Rebase",
    def:"A way to tidy up your work by replaying your changes on top of the latest version of the main project.",
    ex:"Rebasing your feature branch on top of latest main before submitting a PR." },

  { cat:"Git & GitHub", term:"Version Control", full:"Version Control",
    def:"A system that records every change made to a project over time so you can go back to any earlier state.",
    ex:"If a new feature breaks everything, version control lets you undo it in seconds." },

  // ── Code & Dev ────────────────────────────────────────────────────────────
  { cat:"Code & Dev", term:"Code", full:"Code",
    def:"Written instructions that tell a computer exactly what to do — in a language the computer understands.",
    ex:"The text behind a website that makes buttons work and pages load is code." },

  { cat:"Code & Dev", term:"Website vs. Web App", full:"Website vs. Web App",
    def:"A website mostly shows information. A web app lets you do things — log in, edit, buy, or interact.",
    ex:"A company homepage is a website. Figma, Notion, and Gmail are web apps." },

  { cat:"Code & Dev", term:"Browser", full:"Browser",
    def:"The program you use to access the internet and view websites.",
    ex:"Chrome, Safari, and Firefox are all browsers." },

  { cat:"Code & Dev", term:"Server", full:"Server",
    def:"A computer that is always switched on and connected to the internet, sending files and data to anyone who requests them.",
    ex:"When you open a website, a server somewhere sends you that page." },

  { cat:"Code & Dev", term:"File / Folder", full:"File / Folder",
    def:"The basic building blocks of how projects are organized — files contain content, folders group related files together.",
    ex:"A project folder might contain an index.html file, a styles folder, and an images folder." },

  { cat:"Code & Dev", term:"Version", full:"Version",
    def:"A specific saved state of a project at a point in time — used to track changes and releases.",
    ex:"Version 1.0 is the first public release. Version 1.1 has small fixes. Version 2.0 is a major update." },

  { cat:"Code & Dev", term:"Library", full:"Library",
    def:"A collection of ready-made code that solves common problems — you add it to your project instead of building those solutions yourself.",
    ex:"A charting library that draws graphs so you don't have to write that code from scratch." },

  { cat:"Code & Dev", term:"Template", full:"Template",
    def:"A pre-built starting point for a project — with basic structure already in place so you don't start from zero.",
    ex:"Starting a new website from a landing page template instead of a blank file." },

  { cat:"Code & Dev", term:"Syntax", full:"Syntax",
    def:"The grammar rules of a programming language — the exact way code must be written for a computer to understand it.",
    ex:"Forgetting a single bracket or semicolon can break everything — that's a syntax error." },

  { cat:"Code & Dev", term:"Variable", full:"Variable",
    def:"A named container that stores a value which can change — like a labeled box you can put different things in.",
    ex:"A variable called \"username\" stores whoever is currently logged in." },

  { cat:"Code & Dev", term:"Responsive", full:"Responsive Design",
    def:"A website or app that automatically adjusts its layout to look good on any screen size.",
    ex:"A site that rearranges its columns into a single stack when viewed on a phone." },

  { cat:"Code & Dev", term:"Performance", full:"Performance",
    def:"How fast and smoothly a website or app runs — affects how long pages take to load and how fluid interactions feel.",
    ex:"A site that takes 5 seconds to load has poor performance. Under 1 second is considered good." },

  { cat:"Code & Dev", term:"Debug", full:"Debug",
    def:"The process of finding and fixing errors in code that cause something to break or behave incorrectly.",
    ex:"Spending an hour tracing why a button does nothing until you find a typo in the function name." },

  { cat:"Code & Dev", term:"Iteration", full:"Iteration",
    def:"Improving something step by step through repeated rounds of testing, feedback, and adjustments.",
    ex:"Building a rough version of a feature, testing it, improving it, and repeating — that's iteration." },

  { cat:"Code & Dev", term:"Cursor", full:"Cursor",
    def:"A code editor built specifically for AI-assisted development — you describe what you want and it writes or edits the code.",
    ex:"Telling Cursor \"add a dark mode toggle to this page\" and it updates the code automatically." },

  { cat:"Code & Dev", term:"API", full:"Application Programming Interface",
    def:"A defined way for two programs to talk to each other and exchange data — like a waiter taking your order to the kitchen and bringing back food.",
    ex:"Claude's API lets you send a prompt and receive a response inside your own app." },

  { cat:"Code & Dev", term:"JSON", full:"JavaScript Object Notation",
    def:"A simple text format for storing and sharing structured data — like a neatly organized list that both humans and computers can read.",
    ex:"{\"term\": \"JSON\", \"easy\": true}" },

  { cat:"Code & Dev", term:"Frontend", full:"Frontend",
    def:"Everything a user sees and interacts with — the visual layer of a website or app.",
    ex:"Buttons, layouts, animations — all frontend." },

  { cat:"Code & Dev", term:"Backend", full:"Backend",
    def:"The part of an app that runs behind the scenes — handling data storage, logic, and security without the user ever seeing it.",
    ex:"When you log into an app, the backend checks your password and retrieves your data." },

  { cat:"Code & Dev", term:"CSS", full:"Cascading Style Sheets",
    def:"The language that controls how a website looks — colors, fonts, spacing, and layout.",
    ex:"Changing a button from gray to orange is done with CSS." },

  { cat:"Code & Dev", term:"Component", full:"Component",
    def:"A reusable building block of a user interface — like a Figma component but in code.",
    ex:"A Button component built once and used in 40 different places across an app." },

  { cat:"Code & Dev", term:"Framework", full:"Framework",
    def:"A ready-made foundation for building software — like a pre-built scaffold you build your app on top of.",
    ex:"React, Vue, and Next.js are popular frameworks for building websites." },

  { cat:"Code & Dev", term:"Package / npm", full:"Package / npm",
    def:"Ready-made pieces of code someone else wrote that you can add to your project instead of building from scratch.",
    ex:"Installing a package that handles date formatting so you don't have to write it yourself." },

  { cat:"Code & Dev", term:"Bug", full:"Bug",
    def:"An error in code that causes something to behave in an unintended or broken way.",
    ex:"A button that submits a form twice because of a missing check." },

  { cat:"Code & Dev", term:"Refactoring", full:"Refactoring",
    def:"Cleaning up and reorganizing existing code to make it simpler and easier to maintain — without changing what it actually does.",
    ex:"Splitting a long messy file into smaller, clearly named pieces." },

  { cat:"Code & Dev", term:"Markdown", full:"Markdown",
    def:"A simple way to format text using symbols — no design software needed. # makes a heading, ** makes text bold.",
    ex:"Most README files on GitHub are written in Markdown." },

  { cat:"Code & Dev", term:"IDE", full:"Integrated Development Environment",
    def:"A specialized text editor for writing code — with built-in tools that help you find errors and run your project.",
    ex:"Cursor and VS Code are popular IDEs used by developers and vibe coders." },

  { cat:"Code & Dev", term:"Webhook", full:"Webhook",
    def:"An automatic notification one app sends to another when something specific happens — no manual action needed.",
    ex:"GitHub automatically notifying your app the moment a new PR is opened." },

  { cat:"Code & Dev", term:"HTTP Status", full:"HTTP Status Code",
    def:"A short number a website or app returns to tell you whether your request worked or not.",
    ex:"200 = everything worked, 404 = page not found, 500 = something broke on the server." },

  { cat:"Code & Dev", term:"Function", full:"Function",
    def:"A saved action with a name — you define it once and reuse it wherever you need it.",
    ex:"A function called \"formatDate\" that converts any date into a readable format like \"March 28, 2026\"." },

  { cat:"Code & Dev", term:"Boolean", full:"Boolean",
    def:"A value that is either true or false — the simplest possible answer to a yes/no question in code.",
    ex:"isLoggedIn = true, hasError = false." },

  { cat:"Code & Dev", term:"String", full:"String",
    def:"Any piece of text in code — letters, words, sentences, or symbols enclosed in quotes.",
    ex:"\"Hello, world!\" and \"ai-flashcards\" are both strings." },

  // ── Infra & Process ───────────────────────────────────────────────────────
  { cat:"Infra & Process", term:"Cache", full:"Cache",
    def:"A place where data is temporarily stored so it can be retrieved faster the next time it's needed.",
    ex:"A browser stores images from websites you visited so pages load faster when you return." },

  { cat:"Infra & Process", term:"Batch", full:"Batch Processing",
    def:"Collecting multiple tasks and processing them all together at once rather than one at a time.",
    ex:"Sending 1,000 emails at midnight instead of one by one throughout the day." },

  { cat:"Infra & Process", term:"CLI", full:"Command Line Interface",
    def:"A text-based way to control your computer by typing commands instead of clicking buttons.",
    ex:"The Terminal app on your Mac is a CLI." },

  { cat:"Infra & Process", term:"Deployment", full:"Deployment",
    def:"Publishing your project to a live server so anyone on the internet can access it.",
    ex:"Deploying a website to Vercel after finishing a feature." },

  { cat:"Infra & Process", term:"CI/CD", full:"Continuous Integration / Continuous Delivery",
    def:"An automated system that tests and publishes your project every time you make a change — no manual steps needed.",
    ex:"Every time a developer saves new code, tests run automatically and the site updates itself." },

  { cat:"Infra & Process", term:"Docker", full:"Docker",
    def:"A tool that packages your project with everything it needs to run, so it works the same on any computer.",
    ex:"\"It works on my machine\" — Docker solves this problem." },

  { cat:"Infra & Process", term:"Env Variable", full:"Environment Variable",
    def:"A secret value stored separately from your project files — like a password kept outside the document it protects.",
    ex:"Your API key for Claude is stored as an env variable so it never ends up in public code." },

  { cat:"Infra & Process", term:"Log", full:"Log",
    def:"An automatic record of everything a program does — used to understand what happened when something goes wrong.",
    ex:"Checking logs to find out exactly when and why a user's payment failed." },

  { cat:"Infra & Process", term:"Cloud", full:"Cloud",
    def:"Someone else's computers, rented over the internet — you run your app or store your files there without owning any hardware.",
    ex:"Your photos on iCloud and your website on Vercel are both in the cloud." },

  { cat:"Infra & Process", term:"Database", full:"Database",
    def:"An organized place where information is stored so it can be saved, found, and updated reliably.",
    ex:"Every user account, message, and order in an app lives in a database." },

  { cat:"Infra & Process", term:"Dependency", full:"Dependency",
    def:"An external piece of code your project relies on to work — if it breaks or disappears, your project may break too.",
    ex:"A design tool that uses a font library — the font library is a dependency." },

  { cat:"Infra & Process", term:"HTTPS", full:"HyperText Transfer Protocol Secure",
    def:"The secure version of the web — it encrypts data so nobody can intercept what you send or receive.",
    ex:"The padlock icon in your browser means the site uses HTTPS." },

  { cat:"Infra & Process", term:"Local / localhost", full:"Local / localhost",
    def:"Running your project on your own computer during development — only you can see it, not the public.",
    ex:"localhost:5173 is where your app runs while you're building it." },

  { cat:"Infra & Process", term:"Production", full:"Production",
    def:"The live version of your project that real users interact with.",
    ex:"Pushing a bug to production means real users are affected immediately." },

  { cat:"Infra & Process", term:"Staging", full:"Staging",
    def:"A private test version of your project that looks like the live site — used to check changes before publishing them.",
    ex:"Testing a new checkout flow on staging before releasing it to customers." },

  { cat:"Infra & Process", term:"Open Source", full:"Open Source",
    def:"Software whose code is publicly available — anyone can read it, use it, or suggest improvements.",
    ex:"React, VS Code, and Linux are all open source." },

  // ── Key Players ───────────────────────────────────────────────────────────
  { cat:"Key Players", term:"Anthropic", full:"Anthropic",
    def:"The AI safety company that created Claude — founded in 2021 with a focus on building reliable and interpretable AI.",
    ex:"Claude Sonnet, Claude Opus, and Claude Haiku are all models made by Anthropic." },

  { cat:"Key Players", term:"OpenAI", full:"OpenAI",
    def:"The company behind ChatGPT and the GPT series of models — one of the most influential AI labs in the world.",
    ex:"ChatGPT, GPT-4, and DALL-E are all OpenAI products." },

  { cat:"Key Players", term:"Google DeepMind", full:"Google DeepMind",
    def:"Google's AI research division, responsible for the Gemini family of models and a long history of AI breakthroughs.",
    ex:"Gemini is Google DeepMind's answer to Claude and ChatGPT." },

  { cat:"Key Players", term:"Meta AI", full:"Meta AI",
    def:"Meta's AI research division, known for releasing open source models that anyone can download and use freely.",
    ex:"Llama is Meta's open source model — developers worldwide use it as a base to build their own AI tools." },

  { cat:"Key Players", term:"Microsoft", full:"Microsoft",
    def:"A major investor in OpenAI and the company behind Copilot — AI assistance built into Office, Windows, and GitHub.",
    ex:"GitHub Copilot suggests code as you type. It is powered by OpenAI and owned by Microsoft." },

  { cat:"Key Players", term:"Mistral", full:"Mistral AI",
    def:"A European AI company known for building powerful open source models — seen as a more privacy-focused alternative.",
    ex:"Mistral's models can be run locally on your own computer without sending data to any external server." },

];
