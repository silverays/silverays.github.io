---
title: "POS System"
summary: A point-of-sale system deployed across 20+ businesses in Sri Lanka, handling inventory, billing, and credit payments.
role: "Co-founder & CTO"
year: 2017
duration: "1 year"
technologies:
  - PHP
  - Laravel
  - MySQL
  - JavaScript
featured: false
context: "Small and medium businesses in Sri Lanka lacked affordable POS solutions. Most used manual methods (paper ledgers or spreadsheets) or expensive imported systems."
problem: "Building a reliable, offline-capable POS system that small businesses could afford and actually use day-to-day."
constraints: "Unreliable internet connectivity meant the system had to work offline and sync when connected. The user interface had to be simple enough for staff with minimal computer experience. All at a price point affordable for small retailers."
outcome: "Deployed across 20+ businesses, processing thousands of transactions. The system handled inventory management, billing, reporting, and credit payment processing."
---

## Architecture

The system used a local-first architecture: each installation ran a local server (on a low-cost device) with a web-based POS interface. Transactions were stored locally and synced to a central server when connectivity was available.

Key technical decisions:

- **Offline-first** — all critical operations (billing, inventory lookup) worked without internet
- **Queue-based sync** — transactions queued locally and sync'd in the background
- **Simple UI** — touch-friendly interface designed for staff with minimal training
- **Credit management** — built-in support for credit customers with payment tracking

## Challenges

The offline sync mechanism was the hardest technical problem. Conflicts could arise when the same inventory item was sold at two locations while offline. We implemented a last-write-wins strategy with manual reconciliation for edge cases — not elegant, but practical for the business context.
