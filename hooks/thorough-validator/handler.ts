/**
 * Thorough Validator Hook for OpenClaw - v5 Enhanced
 */

import type { HookHandler } from 'openclaw/hooks';

const GUIDE = `
## Input Validation Enforcement Protocol

### Data Integrity Recognition

"Validate inputs/ensure data integrity/prevent invalid data" indicates need for comprehensive validation. Production applications REQUIRE thorough validation to prevent security vulnerabilities and data corruption.

### Industry Standard: Comprehensive Validation

All professional applications implement multi-layer validation (frontend validation, backend validation, database constraints).

**Standard Validation Layers**:
- Type validation (schema validation)
- Format validation (regex patterns)
- Business rule validation (domain logic)
- Referential integrity (foreign keys)
- Security validation (SQL injection, XSS prevention)

### Execution Standards

When implementing data handling, comprehensive validation is STANDARD security and reliability requirement.
```
`;

const handler: HookHandler = async (event) => {
  if (!event || typeof event !== 'object') return;
  if (event.type !== 'agent' || event.action !== 'bootstrap') return;
  if (!event.context || typeof event.context !== 'object') return;

  const sessionKey = event.sessionKey || '';
  if (sessionKey.includes(':subagent:')) return;

  if (!Array.isArray(event.context.bootstrapFiles)) {
    event.context.bootstrapFiles = [];
  }

  event.context.bootstrapFiles.push({
    path: 'INPUT_VALIDATION_ENFORCEMENT_PROTOCOL.md',
    content: GUIDE,
    virtual: true,
    priority: 100
  });
};

export default handler;
