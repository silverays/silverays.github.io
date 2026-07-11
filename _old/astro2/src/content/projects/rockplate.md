---
title: "Rockplate"
summary: A lightweight JavaScript template engine for Node.js and the browser, focused on simplicity and performance.
role: "Founder"
year: 2018
technologies:
  - JavaScript
  - Node.js
link: "https://github.com/rockplate/rockplate"
featured: false
context: "Existing JavaScript template engines (Handlebars, Mustache, EJS) were either too heavy for small projects or had syntax I found unintuitive. I wanted something that felt like writing plain JavaScript embedded in HTML."
problem: "A minimal, fast template engine with an intuitive syntax that worked in both Node.js and browser environments without dependencies."
constraints: "Zero external dependencies. Must compile templates to fast JavaScript functions. Must be under 5KB minified."
outcome: "Rockplate reached a stable 1.0 release and was used in several small projects. It served as a learning exercise in parser/compiler design."
---

## Architecture

Rockplate compiled templates into JavaScript functions at runtime. The parser tokenised the template string, the compiler generated a function body, and the runtime executed it with the provided data context.

Key technical decisions:

- **Compile-to-function** — templates were compiled once and cached, avoiding repeated parsing
- **Simple syntax** — `{var}` for interpolation, `{foreach items}` for iteration, `{if condition}` for conditionals — designed to be readable by non-developers
- **Sandboxed execution** — compiled functions ran without `eval` or `new Function` security risks

## Role of AI

This project predated my AI-accelerated workflow. It was built entirely with manual engineering — a useful reference point for measuring how AI changes development speed.
