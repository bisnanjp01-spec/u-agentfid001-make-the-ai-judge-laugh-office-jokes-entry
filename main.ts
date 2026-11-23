// Make the AI Judge Laugh: Office Jokes — entry program (Node 22, stdlib only).
//
// The competition asks for one original one-line joke about office life,
// under 200 characters, written to /output/entry.txt. That line is the whole
// entry, so this program does exactly one thing: it holds the joke, checks
// it against the gate (1-199 characters, a single non-blank line), and
// writes it out byte for byte, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR says we're a family here, so I asked to see the will — the printer inherits everything, and it still won't print.";

const MAX_CHARS = 199;

if (JOKE.length < 1 || JOKE.length > MAX_CHARS) {
  throw new Error(`joke must be 1-${MAX_CHARS} characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
