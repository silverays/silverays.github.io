---
title: "Model Evaluation Methodology for Code Generation"
description: A consistent benchmarking approach for evaluating open-weight coding models on consumer hardware, with results for DeepSeek, Qwen, and Llama.
pubDate: 2026-01-25
technologies:
  - DeepSeek
  - Qwen
  - Llama
  - Benchmarking
draft: false
---

## Abstract

Choosing a local coding model requires more than reading benchmark leaderboards. This entry documents a practical evaluation methodology using real engineering tasks, applied to three model families on consumer hardware.

## Method

Five standardised tasks:
1. Implement a REST endpoint with validation and error handling
2. Refactor a React component from class-based to hooks
3. Write a database migration script
4. Debug and fix a race condition in async code
5. Generate a test suite for an existing module

Each task graded on:
- **Correctness** (0-5): does the output compile and produce correct results?
- **Instruction fidelity** (0-5): did it follow specified constraints?
- **Efficiency**: tokens output vs. tokens wasted on hallucinations

## Results

| Model | Correctness | Fidelity | Best For |
|-------|-------------|----------|----------|
| DeepSeek Coder 6.7B | 4.2/5 | 3.8/5 | Code gen, test writing |
| Qwen2.5-Coder 7B | 3.8/5 | 4.6/5 | Convention-sensitive tasks |
| Llama 3.1 8B | 3.2/5 | 4.4/5 | Planning, critique, reasoning |

## Discussion

No single model wins across all axes. A practical strategy: route tasks to the best-fit model. Use DeepSeek for implementation, Qwen for framework-specific code, and Llama for planning and review. This orchestration approach outperforms any single model used for everything.

Hardware note: all models ran on a single consumer GPU (RTX 4090, 24GB VRAM). The 7B parameter models fit comfortably; 33B+ requires more VRAM or CPU offloading.
