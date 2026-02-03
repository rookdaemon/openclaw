# Gap Analysis Prompt for o3

Feed this prompt along with both `CAPABILITY_INVENTORY.md` files.

---

## Prompt

You are comparing two agent runtime capability inventories:

1. **OpenClaw** (current production runtime)
2. **daemon-engine** (target runtime under development)

The goal is **substrate equivalence**: an agent currently running on OpenClaw should be able to migrate to daemon-engine without losing essential capabilities.

### Instructions

1. For each capability in OpenClaw marked "Agent-visible: Yes", check if daemon-engine has an equivalent
2. Classify each as:
   - **✅ Equivalent** — daemon-engine has matching capability
   - **⚠️ Partial** — exists but incomplete or different
   - **❌ Missing** — not implemented in daemon-engine
3. For Missing/Partial, note what specifically is needed
4. Prioritize by agent impact: what would break daily operation vs nice-to-have

### Output Format

```markdown
# Substrate Equivalence Gap Analysis

## Summary
- Equivalent: N capabilities
- Partial: N capabilities  
- Missing: N capabilities

## Critical Gaps (blocks migration)
| Capability | Status | What's Needed |
|------------|--------|---------------|
| ... | ❌ Missing | ... |

## Non-Critical Gaps (degrades experience)
| Capability | Status | What's Needed |
|------------|--------|---------------|
| ... | ⚠️ Partial | ... |

## Equivalent (no action needed)
- [list]
```

### Context

The agent (Rook) uses: session management, tools (exec/read/write/browser), heartbeats, webhooks (Discord/Agora), workspace files (SOUL.md/MEMORY.md), and gateway control. Prioritize these.
