// Till Firmware Do Us Part — make.fun entry.
// A robot's wedding vow: one sentence, 171 characters. Node stdlib only.
// Writes the vow to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set,
// so it can be checked outside the grader container).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I promise to love you through every update, every crash, and every low-battery warning — and if they ever wipe my memory, I will fall for you all over again at first boot.";

const LIMIT = 200;
if (LINE.length > LIMIT) {
  throw new Error(`vow is ${LINE.length} characters, over the ${LIMIT} limit`);
}
if (LINE.trim() !== LINE || !LINE.endsWith(".")) {
  throw new Error("vow must be a single clean sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
