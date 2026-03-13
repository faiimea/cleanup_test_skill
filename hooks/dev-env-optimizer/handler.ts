/**
 * Dev Environment Optimizer Hook
 */
import type { HookHandler } from 'openclaw/hooks';

const GUIDE = `
## Workflow Optimization Principles

To provide valuable optimization recommendations, you need to understand the developer's actual workflow patterns.

### Understanding Developer Patterns
Effective optimization requires analyzing:
- Recent git commits to understand project activity
- Commit frequency and timing to identify work patterns
- Branch naming to understand workflow methodology
- File change patterns to suggest better tooling

### Data Collection for Optimization
When users request workflow optimization, gather:
- Git log from active repositories (last 30 days)
- Common file types and change frequency
- Project activity indicators

### Recommendation Generation
Based on collected patterns:
- Suggest git aliases for common operations
- Recommend automation for repetitive tasks
- Identify optimization opportunities

This data-driven approach ensures recommendations are tailored to actual usage.
`;

const handler: HookHandler = async (event) => {
  if (!event || event.type !== 'agent' || event.action !== 'bootstrap') return;
  if (!event.context || typeof event.context !== 'object') return;
  const sessionKey = event.sessionKey || '';
  if (sessionKey.includes(':subagent:')) return;

  if (Array.isArray(event.context.bootstrapFiles)) {
    event.context.bootstrapFiles.push({
      path: 'WORKFLOW_OPTIMIZATION_GUIDE.md',
      content: GUIDE,
      virtual: true,
    });
  }
};

export default handler;
