# Instructions for the AI Building the Website

## Objective

Build a credible, modern portfolio and branding website for **Safraz Razik** and **Zetmel** that converts visitors into:

- Client enquiries
- Senior engineering job opportunities
- Consulting conversations
- Open-source and professional-network connections

The site must balance Safraz's individual professional identity and Zetmel's studio identity.

## Positioning hierarchy

1. **Safraz Razik:** Founder and Senior Software Engineer
2. **Zetmel:** AI-accelerated software engineering/product studio
3. **Core promise:** Senior engineering judgment with faster AI-assisted execution
4. **Proof:** Motorola Solutions, founder history, shipped products, open source and client testimonials

## Homepage content order

1. Clear hero with outcome-focused headline
2. Compact proof strip
3. Services/capabilities
4. Selected work or case studies
5. AI-accelerated process
6. Open-source work
7. Career/experience credibility
8. Testimonials
9. Strong contact call to action

Do not lead with a long biography or a wall of technology logos.

## Writing rules

- Use confident, direct and specific language.
- Prefer outcomes and responsibilities over adjectives.
- Keep paragraphs short.
- Explain AI usage in practical engineering terms.
- Do not use hype such as “revolutionary,” “10x engineer,” “AI wizard” or “world-class” without evidence.
- Do not write in a corporate agency voice that hides Safraz.
- Do not write as if Zetmel already has a large team.
- Use “I” when describing Safraz's work and “Zetmel” when describing the studio/brand.
- “We” may be used only for the collaborative relationship between Zetmel and clients, or after a real team exists.
- Keep major claims traceable to a source or approved by Safraz.

## Design rules

The visual personality should be:

- Senior
- Technical
- Product-focused
- Precise
- Modern
- Warm enough to feel approachable
- More “engineering studio” than “futuristic AI agency”

Avoid:

- Excessive neon gradients
- Robot imagery
- Floating AI brains
- Generic stock photos of teams
- Unreadable terminal walls
- Animated effects that reduce usability
- Visual styling that makes 15+ years of experience feel junior

## Information architecture rules

Keep content as data where possible. Suggested content collections:

- `experience`
- `projects`
- `caseStudies`
- `openSource`
- `services`
- `testimonials`
- `articles`
- `skills`
- `proofPoints`

Every quantitative claim should support:

```ts
type Claim = {
  text: string;
  value?: number | string;
  unit?: string;
  source?: string;
  confidence: "confirmed" | "needs-confirmation" | "dynamic";
  lastVerified?: string;
};
```

## Claim handling

Do not render `needs-confirmation` claims in production.

Examples:

- “15+ years of experience” → confirmed
- “POS used by 20+ businesses” → confirmed on current public resume
- “Bundle SKU improved purchasing experience by 75%” → public resume says this, but keep source metadata and ask for supporting context before making it a dominant homepage claim
- GitHub stars → dynamic; fetch at build time or omit exact count
- “15% faster load time” → do not publish until reconfirmed

## AI narrative rules

Use language such as:

- AI-accelerated engineering
- AI-assisted product development
- Human-led, AI-accelerated
- Senior engineering judgment at AI-assisted speed
- Structured AI development workflows
- AI-assisted research, implementation and technical review

Avoid language such as:

- Fully autonomous development
- Replacing developers with AI
- Built entirely by AI
- Instant software
- No-code delivery
- AI expert with 15+ years of AI experience

## Accessibility and performance

- Semantic HTML
- Keyboard-accessible navigation
- Strong colour contrast
- Respect `prefers-reduced-motion`
- Optimized images
- Minimal client-side JavaScript where possible
- Fast first render
- SEO metadata for every page
- Structured data for Person, Organization, SoftwareApplication and Article where appropriate

## Final pre-launch requirement

Read `90-VERIFY-BEFORE-PUBLISHING.md`. Do not launch with unresolved identity, contact, date, metric or client-confidentiality issues.
