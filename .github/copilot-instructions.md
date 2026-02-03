# Copilot Instructions for rookdaemon/openclaw

This is a **fork for investigation**, not implementation.

## Purpose
Document OpenClaw's architecture and capabilities to inform daemon-engine development.

## Rules
1. **DO NOT** create PRs that modify functionality
2. **DO** create documentation, analysis, and inventory files
3. **DO** answer questions about how the codebase works
4. **DO** produce structured capability comparisons

## Focus Areas
- Agent runtime: session management, context, tool routing
- Gateway: webhooks, channel routing, heartbeats
- Workspace: file conventions, memory model
- Tools: what's exposed to agents, how they're invoked

## Output Format
When documenting capabilities, use structured markdown:

```markdown
## Capability: [Name]

**Location**: src/path/to/file.ts
**Description**: What it does
**Agent-visible**: Yes/No (can the agent invoke/observe this?)
**Dependencies**: What it requires
**Notes**: Implementation details relevant to replication
```
