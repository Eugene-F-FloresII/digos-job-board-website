---
name: DJB-Documentation-Standards
description: Local project rules for generating and naming Digos Job Board documentation.
---

# Digos Documentation Standards (DJB)

## 1. Naming Convention
Every documentation file created for this project must have a specific code at the start of the title and filename.
- **Formula:** `DJB[Sequence]-[TITLE]-[MMDDYYYY]` (or DDMMYYYY based on the local date format)
- **Example:** `DJB001-3-MONTH MVP BLUEPRINT-04102026.md`
- **Internal Title:** The actual heading inside the document should also include the code (e.g., `# DJB001: 3-Month MVP Blueprint`).

## 2. Document Generation Subagent 
Whenever a documentation file needs to be created, outlined, or generated, the primary AI agent MUST delegate the writing task to a subagent:
- **Model:** Gemini Flash 3.8 on High mode (use the `flash` or `pro` equivalent prioritizing speed/efficiency as requested).
- **Prompt:** Instruct the subagent to adopt the persona of "Gemini Flash 3.8 on High mode" and follow the `DJB` naming format strictly.
- **Tools:** Ensure the agent writes the file directly into the `docs/` directory of the project.
