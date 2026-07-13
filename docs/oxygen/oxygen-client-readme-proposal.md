# Oxygen Client — Historical README Proposal

> **Status:** Proposed update for the [oxygen-client](https://github.com/safrazik/oxygen-client) repository.
>
> This content is not yet applied to the repository. It is stored here for reference and should be reviewed before publishing.

---

# Oxygen — Client Application

**Historical project — not maintained or recommended for production use.**

This repository contains the client-side single-page application for **Oxygen**, an education CRM and institutional operations platform architected during the early JavaScript SPA era.

## Product overview

Oxygen was a full-stack education CRM designed for colleges, training institutes, universities and multi-branch education businesses. It connected the complete student lifecycle — enquiries, marketing, applications, enrolments, payments, communication, reporting and business intelligence.

This repository contains the browser-based client application.

## Repository purpose

This is the frontend half of the Oxygen platform. It implements:

- The modular single-page application built with Durandal, Knockout and BreezeJS
- The **Cylinder** frontend platform — authentication, routing, data services, validation, translation, widgets and shared application infrastructure
- Business-specific modules for enquiries, enrolments, payments, marketing, messaging, staff management and reporting
- Reusable platform and domain widgets
- Magic CRUD metadata-driven administration
- Dashboard and business intelligence visualisations

## My role

I served as Co-founder and CTO of Adrotec, the company behind Oxygen. I architected the full client and server platform and contributed directly to the frontend application architecture, the Cylinder platform, reusable widgets, metadata-driven tooling and the client-server BreezeJS integration.

## Architecture summary

The client application was organised as:

```
Cylinder frontend platform
    ↓
Business modules (enquiries, enrolments, payments, marketing, messaging, reporting)
    ↓
Reusable platform widgets and domain widgets
    ↓
BreezeJS entity and metadata layer
    ↓
Custom Web API integration → oxygen-server
```

## Technology stack

| Category | Technologies |
|----------|-------------|
| Framework | Durandal, Knockout.js |
| Data layer | BreezeJS |
| Module system | RequireJS, AMD |
| Build | Gulp, Babel, Traceur, Bower, npm |
| Styling | Bootstrap, Sass |
| Visualisation | D3, C3, Moment.js |
| Validation | Knockout Validation |

## Relationship to oxygen-server

This client communicates with the [oxygen-server](https://github.com/safrazik/oxygen-server) repository through a custom Web API and BreezeJS metadata integration. The server is a Symfony and Doctrine application that provides entity metadata, query processing, transactional save handling and reporting services.

## Important modules

- **Cylinder** — frontend platform layer (application bootstrap, routing, authentication, data services, validation, translation, widgets)
- **Widgets** — reusable platform widgets (grids, selectors, date pickers, file uploads, pagination, charts) and domain widgets (marketing, accounting, enquiry, revenue, executive dashboards)
- **Magic CRUD** — metadata-driven administration that generates grid and form experiences from server entity definitions
- **Business modules** — enquiries, enrolments, payments, marketing, messaging, staff, reporting

## Local setup

This repository reflects the original source code of a historical project. The dependencies, build tools and runtime environment are from an earlier generation of web development. They are not guaranteed to work with current Node.js, npm or browser versions.

Attempting to run this project locally will likely require resolving outdated dependency issues.

## Security and dependency warning

This codebase uses dependencies that are no longer maintained. It has not been audited for security vulnerabilities and should not be used in production environments.

## Archive status

This repository is archived and no longer actively maintained. Issues, pull requests and feature requests are not being accepted.

It is preserved as a historical reference for the architectural approach, the Cylinder frontend platform design and the BreezeJS integration patterns.

## Links

- [Oxygen case study on Zetmel](https://zetmel.com/work/oxygen-education-crm)
- [Oxygen server repository](https://github.com/safrazik/oxygen-server)
- [Archived product website](https://web.archive.org/web/20190226152808/http://oxygen.adrotec.com/)
