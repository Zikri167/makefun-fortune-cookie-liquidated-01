import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Your lucky numbers are 0, 0, and 0 — the same numbers your margin account now proudly displays.";

const wordCount = fortune.trim().split(/\s+/).length;
if (fortune.length < 1 || fortune.length > 160 || wordCount > 20) {
  throw new Error(
    `fortune out of gate: ${fortune.length} chars, ${wordCount} words`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
