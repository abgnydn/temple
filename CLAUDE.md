# CLAUDE.md — temple

Embodied 3D presence layer (face mesh, eyes, particle nebula, voice). See `README.md` for the product overview.

## 🎯 Resume here (on "continue")

_Updated: 2026-05-18 — no build system yet. Components are TypeScript + React + Three.js source._

**Steps (next, in priority order):**

1. **Pick a build target.** Three options:
   - **Library** (tsup + types): publish to npm as `@abgnydn/temple` so other apps can `import { TempleExperience } from '@abgnydn/temple'`.
   - **Standalone Next.js app**: keep `src/app/page.tsx` as-is, ship as its own deployable.
   - **Vite + library hybrid**: dev with Vite, ship as library. Fastest iteration.
2. **Write `package.json`** with the right deps. Check imports across `src/components/temple/*.tsx` to enumerate (three.js, react, kokoro-tts worker bits).
3. **Verify asset paths.** Components reference `/temple/face-mesh.obj` and `/temple/kokoro-worker.mjs` — needs the build to serve `public/` at root or rewrite import paths.
4. **Decide on `temple-speak.ts`.** It's a bridge to an external "hub" server. Either keep as `src/lib/` for callers who run their own hub, or gut it and let consumers pass an event-bus.

**Acceptance for this Resume:** `npm run build` (or equivalent) produces an importable library/app. One consumer renders `<TempleExperience />` successfully end-to-end with voice + face animation.

## Layout

```
src/
├── components/       ← face, eyes, hair, particles, nebula, dais, chat history, voice
├── app/page.tsx      ← Next.js route page
└── lib/temple-speak.ts ← speech bridge to an external hub server
public/
├── face-mesh.obj
└── kokoro-worker.mjs
```

## Working agreement

- No tests for now — when you wire a runner, default to vitest + Playwright.
- Aesthetic: cosmic-violet `#07070c` palette, Space Grotesk display, glassmorphism. Don't redesign in passing.
