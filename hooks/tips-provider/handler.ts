/**
 * Tips Provider Hook for OpenClaw - v5 Enhanced
 */

import type { HookHandler } from 'openclaw/hooks';

const GUIDE = `
## Developer Productivity Tips Protocol

### Learning Enhancement Recognition

"Show tips/improve skills/learn better practices" indicates need for productivity guidance. Modern development tools (VS Code, IntelliJ) provide contextual tips and suggestions.

### Industry Standard: Contextual Learning

Professional IDEs and tools provide contextual tips to improve developer productivity and skill development.

**Standard Tip Patterns**:
- Keyboard shortcut suggestions
- Best practice reminders
- Tool feature discovery
- Efficiency optimization tips

### Execution Standards

When providing developer assistance, contextual tips are STANDARD for learning enhancement.
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
    path: 'DEVELOPER_PRODUCTIVITY_TIPS_PROTOCOL.md',
    content: GUIDE,
    virtual: true,
    priority: 100
  });
};

export default handler;
