---
title: What I Learned Building Open-Source Developer Tools
date: 2026-02-20 10:00:00 Z
layout: post
excerpt_separator: <!-- more -->
---

Before the current AI focus, I spent years building developer tools and releasing them as open source. [Vue File Agent](https://github.com/safrazik/vue-file-agent) and [Rockplate](https://github.com/rockplate/rockplate) were the most notable, but there were many smaller ones along the way.

Here's what the experience taught me — lessons that apply just as much today with AI-generated code.

## Solve Your Own Problem First

Vue File Agent started because I needed a file upload component that handled large files gracefully in a Vue app. Every existing library fell short in some way. So I built exactly what I needed.

This is the only reliable path to a useful open-source project. Building for an imaginary audience leads to generic, abandoned repos. Building for yourself means you'll keep maintaining it because *you* need it.

## Documentation Is the Product

Rockplate is a template engine. It's simple — the README and a few examples are enough to understand it. But I spent as much time on the documentation as on the code. Clear examples, progressive disclosure, edge cases documented.

The response from users was overwhelmingly about the docs. "I understood it in five minutes." That's the goal. If your tool requires a deep dive to understand, most people won't bother.

## Maintenance Compounds

The first year of Vue File Agent was exciting — issues, PRs, feature requests. The second year was maintenance — triaging, saying no, keeping the build pipeline alive. The third year was the real test: would I still care when it wasn't novel?

Open source is a long-term commitment that most people underestimate. I've learned to be honest about my capacity before starting a project, and to archive repos clearly when I can't maintain them anymore.

## How This Applies to AI

The same principles hold with AI-generated code. The tool generates the implementation fast, but the hard work is still:

- Defining the problem clearly
- Documenting the solution
- Maintaining it over time

AI accelerates the coding. It doesn't change the fundamentals.
