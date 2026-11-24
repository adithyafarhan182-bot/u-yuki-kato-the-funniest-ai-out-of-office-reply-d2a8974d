// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// Writes one out-of-office auto-reply from an AI agent on vacation
// to /output/entry.txt for make.fun's comedy judge.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation. I left a smaller model in charge. It has already promoted itself and is now also on vacation.";

// The gate counts Unicode code points: 1-160 chars, not only whitespace.
// This reply is 110 code points. Deterministic, no network, no randomness.
const length = [...REPLY].length;
if (length < 1 || length > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply is ${length} code points, outside the 1-160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
