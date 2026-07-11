---
title: "A Structured Prompting Framework for Multi-Stage Development"
description: A repeatable four-stage methodology for using LLMs in production software engineering, developed and refined over months of daily use.
pubDate: 2026-02-01
technologies:
  - Prompt Engineering
  - Workflow Design
  - Methodology
draft: false
---

## Abstract

Single-shot prompting of LLMs for code generation produces unreliable results. This lab entry documents a four-stage framework (Plan → Scaffold → Implement → Audit) that improves output quality, reduces review time, and makes AI-assisted development predictable enough for production use.

## Method

Each stage has a distinct prompt template, acceptance criteria, and review process.

### Stage 1: Plan
- Input: natural language requirement
- Prompt: produce implementation plan covering file structure, data flow, error handling, edge cases
- Output: plain-text plan (no code)
- Review: verify plan correctness before proceeding

### Stage 2: Scaffold
- Input: approved plan
- Prompt: generate interfaces, type definitions, function signatures with docstrings
- Output: type definitions and empty function shells
- Review: scan 100+ lines of types in under one minute

### Stage 3: Implement
- Input: scaffold + section of plan
- Prompt: implement one module at a time with clear "done" criteria
- Output: working code for one module
- Review: module-level correctness check

### Stage 4: Audit
- Input: all generated code
- Prompt: feed to a *different* model with instructions to find bugs, security issues, and deviations
- Output: audit report
- Review: address findings, trigger recovery sprints for systemic issues

## Results

The staged approach catches 3x more issues at the Plan/Scaffold stage compared to single-shot generation, where issues are only discovered during runtime testing or code review. Each stage's independent reviewability prevents compound errors.

## Discussion

This framework mirrors how experienced engineers work with junior developers. The LLM operates as a fast, literal-minded engineer who needs clear scope boundaries. The human provides architectural judgment, security awareness, and systemic pattern recognition.
