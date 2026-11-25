// Fortune Cookie for the Liquidated Trader.
// Writes one fortune-cookie line (<=20 words, 1-160 chars) to /output/entry.txt.
// Deterministic: same bytes on every run. Node 22 stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are 0, 0, and 0 — the same numbers your margin account now proudly displays.";

// Gate self-check: the sealed scorer wants 1-160 chars of non-blank text,
// and the brief caps the line at 20 words. Fail loudly rather than emit
// an invalid entry.
const words = FORTUNE.trim().split(/\s+/).length;
if (FORTUNE.length < 1 || FORTUNE.length > 160 || words > 20) {
  throw new Error(`fortune violates gate: ${FORTUNE.length} chars, ${words} words`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
