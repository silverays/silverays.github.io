---
title: "Local AI Development Workflows"
summary: Establishing and optimising local LLM environments for AI-accelerated software engineering — from model evaluation to structured prompting.
role: "Founder"
year: 2026
technologies:
  - Ollama
  - OpenCode
  - Claude Code
  - Qwen
  - Llama
  - DeepSeek
featured: true
context: "As LLM capabilities matured, the gap between AI-assisted and traditional development narrowed. But most guidance on AI coding assumes cloud APIs. I wanted to understand what was possible entirely on local hardware — no subscriptions, no data leaving the machine."
problem: "Evaluating and integrating local LLMs into a production engineering workflow. Which models work best for which tasks? How do you prompt, review, and audit AI-generated code at production scale?"
constraints: "Consumer-grade hardware (not a server farm). Must integrate with existing development tools (VS Code, terminal, git). Must maintain or improve code quality, not compromise it."
outcome: "A documented, repeatable workflow for AI-accelerated engineering: local model selection guidelines, structured prompting templates, multi-stage development pipeline (Plan → Scaffold → Implement → Audit), and technical audit checklists."
---

## Methodology

The workflow was developed through iterative experimentation: define a task, generate code with different models and prompting strategies, evaluate the output, refine the approach.

### Model Evaluation

I established a consistent benchmark of real-world tasks and evaluated models on correctness, instruction fidelity, and efficiency. The findings were documented in the [Evaluating Coding Models](/writing/evaluating-coding-models-locally/) article.

Key findings:

- **DeepSeek Coder 6.7B** — best for focused code generation, especially TypeScript and Python
- **Qwen2.5-Coder 7B** — best for constrained generation with strict convention adherence
- **Llama 3.x 8B** — best for planning and critique (used as a second-pass reviewer)

### Structured Prompting

The most important discovery was that prompting methodology matters more than model selection. The multi-stage workflow (Plan → Scaffold → Implement → Audit) consistently outperformed single-shot generation regardless of the model used.

## Role of AI

Meta: this entire workflow is about using AI effectively. The evaluation, prompting, and audit processes were themselves refined with AI assistance — the same models being evaluated helped design the evaluation framework.
