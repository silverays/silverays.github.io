---
title: "Vue File Agent"
summary: An open-source Vue.js file upload component with drag-and-drop, multi-file support, and image previews.
role: "Founder"
year: 2019
technologies:
  - Vue.js
  - JavaScript
  - HTML5
  - CSS3
link: "https://github.com/safrazik/vue-file-agent"
featured: true
context: "While building Vue.js applications, I consistently encountered gaps in the ecosystem around file uploads. Existing libraries were either too opinionated, had poor large-file handling, or didn't support the drag-and-drop UX that modern web apps expected."
problem: "A reliable, well-documented Vue file upload component that worked across browsers and handled large files gracefully simply didn't exist in the open-source ecosystem."
constraints: "The component had to work as a drop-in replacement — no complex setup, no required CSS framework, no backend assumptions. It needed to support both single and multi-file modes, image previews, and custom theming."
outcome: "Vue File Agent gained adoption in the Vue community and remains one of the referenced file upload solutions for Vue 2 projects."
---

## Architecture

The component was designed around a plugin-based architecture. The core handled file selection, validation, and state management while renderers handled the UI presentation. This separation meant users could customise the visual output without touching the file handling logic.

Key technical decisions:

- **Event-driven state machine** — file lifecycle (queued, uploading, processing, done, error) modelled as explicit states with transition events
- **Slot-based theming** — Vue's slot system exposed every visual section for customisation without forking the component
- **Progressive enhancement** — graceful fallback from drag-and-drop to standard file input for older browsers

## What I Learned

Building an open-source component taught me more about API design than any client project. Every prop, event, and slot had to be justified because someone else would depend on it. The documentation effort — examples, edge cases, migration guides — was at least as much work as the code itself.
