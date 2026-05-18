# temple

An embodied 3D presence layer for the web — face mesh with eye tracking, particle nebula, voice bridge, ritual staging. Drop `<TempleExperience />` into a React + Three.js app and you get a living oracle / avatar interface for chat, voice agents, guided experiences, or meditative UIs.

## Highlights

- **Animated face mesh** with eyes, hair, visitor body, dais
- **Particle nebula** for ambient atmosphere + ritual moments (entrance, summon, dismiss)
- **Voice bridge** wired for Kokoro TTS web workers (swap in any TTS / STT pipeline)
- **Composable primitives**: `<TempleEyes />`, `<TempleFace />`, `<TempleDais />`, `<TempleNebula />`, `<TempleCurtain />`, `<TempleChatHistory />`, `<TempleSpeechInput />`
- **No backend required** — all rendering and TTS in the browser

## Quick look

```tsx
import { TempleExperience } from 'temple';

export default function OraclePage() {
  return <TempleExperience onUtterance={(text) => console.log(text)} />;
}
```

## Layout

```
src/
├── components/    Three.js + React components (face, eyes, particles, dais, voice)
├── app/page.tsx   Standalone Next.js route page
└── lib/temple-speak.ts   Speech bridge for an external hub server
public/
├── face-mesh.obj  3D face geometry
└── kokoro-worker.mjs  TTS web worker
```

## Status

Early. No build system wired yet — the source is TypeScript + React + Three.js, consumable by any bundler that resolves `.ts/.tsx`. Pick a build target (library bundle, Next.js app, Vite static) before depending on it.

## License

Apache-2.0.
