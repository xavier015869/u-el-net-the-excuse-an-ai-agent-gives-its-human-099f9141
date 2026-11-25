import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human for missing a deadline.
// One line, at most 200 characters. The joke turns on the agent's own
// condition: a context window that can hold the deadline or the work,
// but never both at once.
const entry =
  "The deadline and the work both fit in my context window \u2014 just not at the same time.";

// The gate counts every character in /output/entry.txt, so enforce the
// competition's own limits here and write the line byte-exact, with no
// trailing newline added.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
