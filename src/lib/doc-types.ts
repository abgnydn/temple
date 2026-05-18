// Minimal document shape that temple consumes from the hub.
// Mirrors the public surface of a "document in a vault"; consumers can pass
// their own richer types as long as these fields are present.

export type DocTint = 'cyan' | 'violet' | 'amber' | 'rose';

export interface DocLike {
  id: string;
  title: string;
  tint: DocTint;
  body?: string;
  content?: string;
  links?: string[];
  tags?: string[];
}
