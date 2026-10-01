# AI Disclosure

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fai-disclosure.netlify.app&label=Live%20site)](https://ai-disclosure.netlify.app)

This site is a practical reference for developers on **how and why to disclose AI usage across software work**.

It focuses on one core idea: openness about AI support improves review quality, trust, and collaboration.

## What you’ll find

- Why AI disclosure matters in day-to-day engineering work
- Simple disclosure templates teams can adopt in PRs, docs, and proposals
- Guidance for adding useful context when your answer is always “yes, I used AI”
- FAQ-style concerns and responses you can share with teams
- Further reading to understand the tradeoffs from multiple perspectives

## Intended audience

Developers, reviewers, and engineering teams who want a clear, neutral way to talk about AI assistance in code contributions.

## Contributing

If you spot a gap, bug, or unclear idea, please contribute. This project is about transparency, so contributions should stay transparent too (no mystery commits, only committed clarity).

Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** for the full contribution guide.

## Development

Requires Node.js 24 and pnpm.

```shell
pnpm install
pnpm dev
```

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `pnpm check`        | Type check with `astro check`                   |
| `pnpm lint`         | Lint with oxlint                                |
| `pnpm format:check` | Check formatting with Prettier                  |
| `pnpm knip`         | Find unused files and dependencies              |
| `pnpm test`         | Unit and integration tests with Vitest          |
| `pnpm test:e2e`     | Build, then run the Playwright end-to-end tests |

## License

Licensed under the MIT license, Copyright © trueberryless.

See [LICENSE](https://github.com/trueberryless/ai-disclosure/blob/main/LICENSE) for more information.
