// Minimal document shape that temple consumes from the hub.
// Mirrors the public surface of a "document in a vault"; consumers can pass
// their own richer types as long as these fields are present.

export interface DocLike {
  id: string;
  title: string;
  body?: string;
  content?: string;
  links?: string[];
  tags?: string[];
  tint?: 'cyan' | 'violet' | 'amber' | 'rose';
}
