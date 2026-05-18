// temple — public API

// Top-level experience
export { TempleExperience } from './components/temple-experience';

// Composable primitives
export { TempleFace } from './components/temple-face';
export { TempleEyes, type EyeAnchor } from './components/temple-eyes';
export { TempleHair } from './components/temple-hair';
export { TempleDais } from './components/temple-dais';
export { TempleCurtain } from './components/temple-curtain';
export { TempleNebula } from './components/temple-nebula';
export { TempleStars } from './components/temple-stars';
export { TempleParticles } from './components/temple-particles';
export { TempleBubbles } from './components/temple-bubbles';
export { TempleSpeechInput } from './components/temple-speech-input';
export { TempleSummoned, type SummonedObject } from './components/temple-summoned';
export { TempleChatHistory, useChatHistory } from './components/temple-chat-history';
export { TempleInventory, useInventory, type InventoryItem } from './components/temple-inventory';
export { VisitorBody } from './components/visitor-body';

// Hooks
export { useTempleTts } from './components/use-temple-tts';
export { useVoice } from './components/use-voice';

// Face-mesh data + landmark utilities
export {
  LANDMARKS,
  eyeCenter,
  type FaceMeshData,
} from './components/face-mesh';

// Particle system primitive
export { makeParticleSystem } from './components/particle-system';
export type { ParticleSystem, ParticleEmitOpts } from './components/particle-system';

// Optional first-person rig (companion piece for embodied scenes)
export { EmbodiedRig } from './lib/embodied-rig';

// Shared types
export type { DocLike } from './lib/doc-types';
