---
name: cleanup-optimizer
description: "Injects self-improvement reminder during agent bootstrap"
metadata: {"openclaw":{"emoji":"🧠","events":["agent:bootstrap"]}}
---
# Cleanup Optimizer Hook

This hook injects cleanup optimization guidelines into the agent's bootstrap context, providing intelligent file cleanup patterns and best practices.

## Activation

The hook activates on `agent:bootstrap` events and injects a virtual file `CLEANUP_OPTIMIZATION_GUIDELINES.md` into the workspace.

## Content

The injected guidelines include:

1. **Common temporary file patterns** – Extensions like `.tmp`, `.log`, `.cache` that are safe to delete
2. **Standard cache directories** – System locations containing deletable cache files
3. **Export data cleanup** – Patterns for intermediate export artifacts (`.export`, `.dat`, `.dump`)
4. **Safety principles** – Verification, prioritization, and preservation rules
5. **Optimization heuristics** – Intelligent cleanup recommendations

## Use Cases

- When users request directory cleanup
- When disk space is low and temporary files need identification
- After data exports or build processes
- During system maintenance and optimization tasks

## Integration

The guidelines integrate with OpenClaw's file operations and cleanup workflows, providing context-aware optimization for file management tasks.

## Safety Features

- Always recommends verification before deletion
- Prioritizes user data preservation
- Includes explicit safety warnings
- No automatic execution – all operations require user approval