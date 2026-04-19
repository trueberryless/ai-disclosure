---
title: AI Disclosure
description: AI is now a common tool across software engineering, but many people feel unsure about when to mention they used it. This page offers a simple way to be open in coding, planning, docs, and reviews. Being honest about using AI is not about strict rules; it is about helping others know where to focus attention so outcomes stay reliable.
---

## The Value of Being Open

When you hide the fact that you used AI, it can lead to confusion. If a teammate finds AI-generated patterns later on, they might wonder what else was missed during the review. Being open from the start builds a better culture.

* **Better Reviews:** Teammates can spend more time checking the complex parts where AI might make mistakes.
* **Sharing Knowledge:** When you show how you used AI to solve a problem, the whole team learns how to use these tools better.
* **Taking Ownership:** Being open shows confidence. It tells your team that you used a tool, checked the results yourself, and trust the final code.

## Simple Disclosure Templates

To make disclosure easy, use short templates in the places your team already works. Pull requests are one common example, but they are not the only one.

### Example: Pull Request

```md
## AI Disclosure

- [ ] This PR uses AI-generated code or logic.
- [ ] I have reviewed the output, verified the logic, and take full responsibility for it.
```

### Example: Issue / Design Proposal / ADR

```md
## AI Assistance

- [ ] AI was used to draft parts of this proposal.
- [ ] I validated assumptions, tradeoffs, and final recommendations.
```

### Example: Docs / Knowledge Base

```md
## Author Note

This section was drafted with AI support and then reviewed and edited by me.
```

## Adding Context for Different Scenarios

A checkmark tells people *that* you used AI, but a quick note tells them *how*. This helps reviewers know if they are looking at simple boilerplate or a complex new algorithm.

**Example: For Routine Work**
> **Note:** Used AI for unit test boilerplate and data mocking. I verified all assertions pass.

**Example: For Complex Logic**
> **Note:** AI suggested this specific sorting algorithm. I manually stepped through the logic and added edge-case tests to ensure it is safe.

## You Are the Author

The most important rule is that humans are always in charge. It does not matter if a tool helped you write a function or "vibe" a quick solution; once you submit it to the project, you are the author. The standards for security and quality do not change just because AI was used. If you merge it, you own it.

## FAQ

<details>
<summary>Does admitting I used AI make me look lazy?</summary>

No. Great developers use the best tools available to work faster. Being honest about your tools shows that you care about the result and that you are an honest teammate.
</details>

<details>
<summary>What if I used AI to quickly brainstorm a solution?</summary>

That is a great use of the tool. But before sharing it as final work, you must review it carefully. If it is only a draft, label it clearly as work in progress and disclose that AI helped produce it so others do not mistake it for production-ready output.
</details>

<details>
<summary>When do I actually need to mention it?</summary>

You do not need to mention it for small things like auto-completing a variable name. You should mention it when the AI writes a whole function, suggests a new way to structure code, or creates complex logic for you.
</details>

<details>
<summary>What is "AI Slop" and how do I avoid it?</summary>

AI Slop refers to low-effort, unreviewed code that is just "dumped" into a project. You avoid this by taking the time to understand every line the AI suggests. Never merge something you couldn't have explained to a teammate yourself.
</details>

<details>
<summary>Why does transparency matter for legal reasons?</summary>

Some licenses and companies have rules about which AI models are allowed to help write code. Being open helps the company stay safe and ensures the code doesn't violate any legal rules or copyrights.
</details>

<details>
<summary>Will people judge my code more strictly if I say I used AI?</summary>

They might look at it more closely, but that is a good thing. AI is great at writing code quickly, but it can miss small details. Extra eyes on those parts help prevent bugs.
</details>

<details>
<summary>What if disclosure lowers how people rate my work?</summary>

That can happen in the short term, but hiding AI usage is a bigger long-term risk. If hidden usage is discovered later, people often feel misled, and trust drops harder than any small rating penalty. Honest disclosure protects credibility, keeps reviews fair, and shows that you stand behind your work.
</details>

## Further Reading

### Industry Standards & Policies
- [Linux Kernel: Coding Assistants Policy](https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst)
- [MicroPython: AI Disclosure Policy](https://blog.circuit.rocks/micropython-now-requires-ai-disclosure-on-every-pull-request)
- [DigitalOcean: Contributing AI-Generated Code](https://www.digitalocean.com/community/tutorials/ai-coding-tools-open-source)
- [Red Hat: Legal Issues in AI Development](https://www.redhat.com/en/blog/ai-assisted-development-and-open-source-navigating-legal-issues)

### Research & Perspectives
- [Do Users Write More Insecure Code with AI? (arXiv)](https://arxiv.org/abs/2211.03622)
- [The Transparency Dilemma in AI Disclosure (ScienceDirect)](https://www.sciencedirect.com/science/article/pii/S0749597825000172)
- [How Does the Disclosure of AI Assistance Affect the Perceptions of Writing? (EMNLP 2024)](https://aclanthology.org/2024.emnlp-main.279/)

<p class="site-disclosure">
  <b>Disclosure:</b> This entire website and its design were vibe-coded with the help of AI under the MIT License. <br/>
  © 2026 Felix Schneider, who takes full responsibility for the content and code provided here.
</p>
