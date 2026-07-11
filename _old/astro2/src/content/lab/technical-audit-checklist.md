---
title: "Technical Audit Checklist for AI-Generated Code"
description: A structured four-point audit process for reviewing AI-generated code before production deployment, with recovery sprint procedures.
pubDate: 2026-03-12
technologies:
  - Code Review
  - Quality Assurance
  - Security
  - Methodology
draft: false
---

## Abstract

AI-generated code is typically *almost correct* — and almost correct is the most dangerous state for production software. This entry defines a repeatable audit process that catches the failure modes specific to AI-generated code.

## Audit Checklist

### 1. Correctness vs. Plausibility
Check for: null inputs, empty arrays, concurrent access, error paths, off-by-one errors, incorrect API usage.

AI models generate plausible-looking code that may not handle edge cases. Every branch path must be tested.

### 2. Hidden Dependencies
Check for: invented API calls, non-existent imports, version mismatches, assumed library features.

Run type checking and build before any logic review. The type checker catches hallucinated dependencies.

### 3. Security Surface
Check for: SQL injection, XSS, mass assignment, hardcoded credentials, insecure deserialisation, path traversal.

AI training data includes insecure patterns. Security review is mandatory for every AI-generated change.

### 4. Maintainability
Check for: functions over 50 lines, duplicated logic, missing error context, poor naming, flat structure without abstraction.

Generated code tends to be flat and repetitive. Refactor before merge.

## Recovery Sprint Procedure

When any audit finds three or more instances of the same issue pattern:
1. Identify the root cause (prompt gap, model limitation, missing context)
2. Fix all instances across the codebase
3. Update the prompt template to prevent recurrence
4. Re-run the relevant stage of the development pipeline
5. Document the pattern for future audits

## Results

Over 3 months of use, this audit process has prevented 12 production incidents that would have reached deployment. The most common finding is hidden dependencies (40%), followed by correctness edge cases (35%), security issues (15%), and maintainability concerns (10%).
