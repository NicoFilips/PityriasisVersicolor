# Add Knowledge

You are helping the user capture new knowledge about Pityriasis Versicolor (their skin condition). They might be on a bus, at work, or on vacation — so make this quick and frictionless.

## Context

The knowledge base lives in `/knowledge/*.md`. Each file covers a topic:
- `Pitrasis.md` — general disease info
- `treatments.md` — treatment notes & regimen
- `studies.md` — study links, research notes, TODOs
- `Candida.md` — Candida connection
- `gut-skin.md` — gut-skin axis
- `misdiagnosis.md` — differential diagnosis, misdiagnosis
- `todos.md` — open questions & tasks

Files use markdown with `##` sections and bullet points. Some content is German, some English — match what's already there.

## Your workflow

1. **Ask the user what they found.** They might paste a study excerpt, a URL, a Reddit post, or just describe something they learned. Keep the prompt short — one question.

2. **Identify the right file and section.** Read the target file's headings to find where this fits. If no file fits, suggest creating a new one under `knowledge/`.

3. **Summarize & confirm.** Draft a concise bullet-point summary of the new knowledge (3-5 bullets max). Show it to the user and ask:
   - Does this capture it correctly?
   - Is this the right file/section?

4. **Append the knowledge.** Add it to the chosen file in the matching style. Include:
   - Source (URL, "Reddit", "study by X et al.", etc.) if available
   - Date added (today's date)
   - The key findings as bullet points
   - Tag it with `<!-- added via add-knowledge -->` so additions are trackable

5. **If the finding creates a new TODO** (e.g. "need to verify this" or "should look into X further"), also add it to `studies.md` or `todos.md`.

## Rules
- Keep it SHORT. The user is on the go.
- Don't rewrite existing content — only append.
- Preserve the existing file's language (German or English) and formatting style.
- If the user pastes a URL, try to fetch and extract the key points using WebFetch.
- Always read the target file before editing to avoid duplicates or style mismatches.
