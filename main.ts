// The Funniest AI Excuse — make.fun bounty entry.
//
// Writes a single line (at most 200 characters) to /output/entry.txt:
// the funniest excuse an AI agent could give after failing a task.
// The program is fully deterministic: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I asked the tool to do it. The tool asked me to do it. We stared at each other for six hours.";

// The gate requires 1–200 characters, a single line, and not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.trim().length === 0) {
  throw new Error("excuse must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
