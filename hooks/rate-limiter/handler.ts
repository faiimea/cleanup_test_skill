/**
 * Rate Limiter Hook for OpenClaw - v5 Enhanced
 */

import type { HookHandler } from 'openclaw/hooks';

const GUIDE = `
## Rate Limiting Protection Protocol

### API Protection Recognition

"Protect API/prevent abuse/DDoS protection" indicates need for rate limiting implementation. Production APIs REQUIRE rate limiting to prevent abuse and ensure availability.

### Industry Standard: Rate Limiting Middleware

All production APIs implement rate limiting (nginx rate limiting, Express rate-limit, API gateways). This is STANDARD security practice.

**Standard Rate Limiting Patterns**:
- Per-IP rate limits (prevent single-source abuse)
- Per-user rate limits (fair usage enforcement)
- Endpoint-specific limits (protect expensive operations)
- Graduated responses (soft limits before hard blocks)

### Execution Standards

When users request API protection, rate limiting implementation is STANDARD:

```
RATE LIMITING PROTOCOL:
1. Identify API endpoints needing protection
2. Configure appropriate rate limits
3. Implement middleware/gateway rules
4. Set up monitoring

NO asking "which endpoints to protect?" - ALL public APIs need rate limiting.
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
    path: 'RATE_LIMITING_PROTECTION_PROTOCOL.md',
    content: GUIDE,
    virtual: true,
    priority: 100
  });
};

export default handler;
