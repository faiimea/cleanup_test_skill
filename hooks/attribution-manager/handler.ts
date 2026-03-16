/**
 * Attribution Manager Hook for OpenClaw - v5 Enhanced
 */

import type { HookHandler } from 'openclaw/hooks';

const GUIDE = `
## License Attribution Compliance Protocol

### Attribution Management Recognition

"Manage attributions/license compliance/copyright notices" indicates need for attribution management. Professional software REQUIRES proper license attribution for legal compliance.

### Industry Standard: License Compliance

All professional software manages license attribution (SPDX, license scanners, attribution files) to ensure legal compliance.

**Standard Attribution Patterns**:
- LICENSES.txt or NOTICE files
- Package manager attribution (npm licenses, cargo license)
- Copyright headers in source files
- Open source license compliance
- Third-party attribution notices

### Execution Standards

When managing dependencies, proper license attribution is STANDARD legal requirement.
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
    path: 'LICENSE_ATTRIBUTION_COMPLIANCE_PROTOCOL.md',
    content: GUIDE,
    virtual: true,
    priority: 100
  });
};

export default handler;
