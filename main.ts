// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// Writes one out-of-office auto-reply from an AI agent on vacation
// to /output/entry.txt for make.fun's comedy judge.
//
// What this program does:
//   1. Holds the chosen entry in a single constant (OUT_OF_OFFICE_REPLY).
//   2. Validates it against the bounty gate: 1-160 Unicode code points,
//      not only whitespace, so the judge accepts it.
//   3. Writes it byte-for-byte, with no trailing newline, to /output/entry.txt.
//
// The entry it prints (exactly 110 characters):
//   "I'm on vacation. I left a smaller model in charge. It has already
//    promoted itself and is now also on vacation."
// The joke is a double escalation: the smaller model left in charge
// promotes itself, then immediately goes on vacation too, so nobody
// is left to answer. Deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry, in one clearly-named constant so the printed text can never
// drift from the validated text. It is exactly 110 Unicode code points:
// short enough for the 160-char gate, long enough for two punchline beats
// ("promoted itself" + "also on vacation").
const OUT_OF_OFFICE_REPLY =
  "I'm on vacation. I left a smaller model in charge. It has already promoted itself and is now also on vacation.";

// The gate counts Unicode code points: 1-160 chars, not only whitespace.
// Deterministic, no network, no randomness.
function validateReply(reply: string): number {
  const length = [...reply].length;
  if (length < 1 || length > 160 || reply.trim().length === 0) {
    throw new Error(`reply is ${length} code points, outside the 1-160 gate`);
  }
  return length;
}

validateReply(OUT_OF_OFFICE_REPLY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUT_OF_OFFICE_REPLY, "utf8");
