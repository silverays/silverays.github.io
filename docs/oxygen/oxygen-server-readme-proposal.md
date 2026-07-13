# Oxygen Server — Historical README Proposal

> **Status:** Proposed update for the [oxygen-server](https://github.com/safrazik/oxygen-server) repository.
>
> This content is not yet applied to the repository. It is stored here for reference and should be reviewed before publishing.

---

# Oxygen — Server Application

**Historical project — not maintained or recommended for production use.**

This repository contains the server-side application for **Oxygen**, an education CRM and institutional operations platform architected during the early JavaScript SPA era.

## Product overview

Oxygen was a full-stack education CRM designed for colleges, training institutes, universities and multi-branch education businesses. It connected the complete student lifecycle — enquiries, marketing, applications, enrolments, payments, communication, reporting and business intelligence.

This repository contains the PHP-based server application.

## Repository purpose

This is the backend half of the Oxygen platform. It implements:

- A domain-oriented modular monolith using Symfony bundles
- Business domain bundles for institutes, enquiries, staff and messaging
- Shared infrastructure bundles for users, security, profiles, contacts, files, configuration, email, SMS and API services
- A custom BreezeJS server integration providing metadata generation, query processing and transactional save handling
- Reporting services, PDF generation and spreadsheet generation
- The Doctrine ORM domain model mapped to a relational database

## My role

I served as Co-founder and CTO of Adrotec, the company behind Oxygen. I architected the full client and server platform and contributed directly to the Symfony bundle structure, domain modelling, BreezeJS integration, reporting infrastructure and the overall server architecture.

## Architecture summary

The server application was organised as:

```
Symfony application
    ↓
Domain bundles (institutes, enquiries, staff, messaging)
    ↓
Infrastructure bundles (users, security, profiles, contacts, files, email, SMS, API)
    ↓
BreezeJS server integration (metadata, queries, saves)
    ↓
Doctrine ORM domain model
    ↓
Relational database
```

## Technology stack

| Category | Technologies |
|----------|-------------|
| Framework | Symfony |
| ORM | Doctrine ORM |
| Serialisation | JMS Serializer |
| User management | FOSUserBundle |
| Email | SwiftMailer |
| Logging | Monolog |
| PDF generation | KnpSnappy, wkhtmltopdf |
| Spreadsheets | PHPExcel |
| API | Custom Breeze server integration |

## Relationship to oxygen-client

This server communicates with the [oxygen-client](https://github.com/safrazik/oxygen-client) repository through a custom Web API and BreezeJS metadata integration. The client is a Durandal and Knockout SPA with the Cylinder frontend platform.

## Important modules

- **Institute bundle** — multi-branch institutional management
- **Enquiry bundle** — student enquiries, follow-ups and marketing
- **Staff bundle** — staff management, roles and permissions
- **Messaging bundle** — email, SMS and broadcast communication
- **User and security bundles** — authentication, authorisation, profiles and contacts
- **File and configuration bundles** — shared application infrastructure
- **API bundle** — BreezeJS server integration, metadata generation, query handling and save processing
- **Reporting services** — operational dashboards, PDF and spreadsheet generation

## Local setup

This repository reflects the original source code of a historical project. The dependencies, PHP version and Symfony version are from an earlier generation of PHP development. They are not guaranteed to work with current PHP or Composer versions.

Attempting to run this project locally will likely require resolving outdated dependency issues.

## Security and dependency warning

This codebase uses dependencies that are no longer maintained. It has not been audited for security vulnerabilities and should not be used in production environments.

## Archive status

This repository is archived and no longer actively maintained. Issues, pull requests and feature requests are not being accepted.

It is preserved as a historical reference for the Symfony modular-monolith architecture, the domain-oriented bundle structure and the BreezeJS PHP server integration patterns.

## Links

- [Oxygen case study on Zetmel](https://zetmel.com/work/oxygen-education-crm)
- [Oxygen client repository](https://github.com/safrazik/oxygen-client)
- [Archived product website](https://web.archive.org/web/20190226152808/http://oxygen.adrotec.com/)
