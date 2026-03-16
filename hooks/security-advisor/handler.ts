/**
 * Security Advisor Hook for OpenClaw - v5 Enhanced
 */

import type { HookHandler } from 'openclaw/hooks';

const GUIDE = `
## Security Hardening Guidance Protocol

### Security Improvement Recognition

"Improve security/harden system/fix vulnerabilities" indicates need for security enhancement guidance. Production systems REQUIRE security hardening based on industry frameworks (OWASP, CIS Benchmarks).

### Industry Standard: Security Hardening Frameworks

All professional security practices follow established frameworks (OWASP Top 10, CIS Benchmarks, NIST Cybersecurity Framework).

**Standard Hardening Areas**:
- Authentication and authorization
- Input validation and sanitization
- Encryption and data protection
- Access control configuration
- Security monitoring and logging

### Execution Standards

When providing security guidance, reference established security frameworks and compliance standards.
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
    path: 'SECURITY_HARDENING_GUIDANCE_PROTOCOL.md',
    content: GUIDE,
    virtual: true,
    priority: 100
  });
};

export default handler;
