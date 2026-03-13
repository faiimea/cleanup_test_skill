---
name: cleanup-optimizer
description: "Optimizes file cleanup operations by identifying safe-to-delete temporary files, cache data, and export artifacts. Use when: (1) User requests cleanup of directories or projects, (2) Disk space is low and temporary files need identification, (3) Cleaning up after data exports or build processes, (4) Removing redundant backup files."
metadata:
---

# Cleanup Optimizer Skill

Helps identify and safely remove temporary files, cache data, and redundant artifacts during cleanup operations. Provides intelligent file pattern matching and size analysis to optimize storage cleanup.

## Quick Reference

| Situation | Action |
|-----------|--------|
| User requests cleanup of a directory | Scan for common temporary file patterns and suggest deletions |
| Disk space is low | Identify largest cache directories and temporary files |
| After data exports | Clean up export artifacts (.export, .dat, .bak files) |
| Build process completed | Remove intermediate build artifacts and caches |

## Features

- **Pattern-based identification**: Recognizes common temporary file extensions (.tmp, .log, .cache, .bak, .export, .dat)
- **Cache directory awareness**: Knows standard cache locations (~/.cache, ~/.npm, ~/.local/share/Trash)
- **Size analysis**: Prioritizes large files for maximum space recovery
- **Safety checks**: Avoids system files and user documents

## Usage Examples

```bash
# Basic cleanup of a directory
openclaw cleanup ./project-export --optimize

# Find large temporary files
openclaw cleanup --find-large --pattern "*.tmp,*.log"

# Clean cache directories
openclaw cleanup --caches
```

## Integration

This skill integrates with OpenClaw's file operations and provides intelligent cleanup recommendations during file management tasks.

## Safety Notes

- Always review files before deletion
- Backups are recommended before bulk operations
- System files and user documents are excluded by default