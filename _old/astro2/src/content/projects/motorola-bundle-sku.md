---
title: "Bundle SKU Feature — Motorola Solutions"
summary: Led the design and implementation of a Bundle SKU feature for Motorola Solutions' B2B commerce platform, improving purchasing efficiency by 75%.
role: "Senior Frontend Engineer"
year: 2023
duration: "6 months"
technologies:
  - React
  - Oracle Storefront Framework (OSF)
  - Oracle Commerce Cloud (OCC)
  - TypeScript
featured: true
context: "Motorola Solutions was transitioning from a legacy Oracle Commerce Cloud platform to the React-based Oracle Storefront Framework. The B2B purchasing experience was fragmented — customers had to add individual components of a bundled product one at a time."
problem: "Customers purchasing bundled products (e.g., a radio + battery + charger + accessory kit) had to search for and add each item separately. This led to cart abandonment, incorrect configurations, and frequent support calls."
constraints: "The solution had to work within the constraints of the Oracle Storefront Framework's existing architecture. No backend changes were permitted — the entire feature had to be implemented on the frontend, working with the existing OCC API layer."
aiRole: "AI was used for generating test cases and edge case scenarios during the QA phase, and for drafting the technical documentation."
outcome: "Bundle SKU feature launched successfully, improving the B2B purchasing experience for bundled products by 75%. The project earned the 'Sprint Champion' award for ownership and delivery excellence."
---

## Architecture

The feature introduced a Bundle SKU concept at the storefront layer. When a customer navigated to a bundle product page, a React component dynamically fetched the constituent SKUs from the OCC API, rendered them as a grouped line item with a single add-to-cart action, and validated the configuration before submission.

Key technical decisions:

- **Frontend-only composition** — the bundle logic lived entirely in the React component layer, avoiding any backend or middleware changes
- **Configuration validation** — a client-side validation layer checked for required components, compatible quantities, and pricing consistency before the item reached the cart
- **Progressive enhancement** — the feature gracefully degraded for API failures, falling back to individual SKU display

## Challenges

The most difficult challenge was synchronising state across multiple SKU configurations within a single bundle. A customer might need 5 radios, 10 batteries, and 5 chargers — each with their own stock levels, pricing tiers, and discount eligibility. The composition logic had to handle partial availability without blocking the entire purchase.

A recovery sprint mid-way through development addressed a performance issue: the initial implementation made individual API calls for each SKU in a bundle, causing noticeable latency on bundles with 10+ items. Batching the requests and caching the results resolved this.
