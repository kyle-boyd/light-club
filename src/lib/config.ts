/**
 * Runtime configuration. Unsettled product rules (crew sizes, cooldowns) are
 * read from the environment so they can change without a code change.
 */

function intFromEnv(name: string, fallback: number): number {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === "") return fallback;
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 0) {
    throw new Error(`${name} must be a non-negative integer, got "${raw}"`);
  }
  return n;
}

export const config = {
  get appUrl() {
    return (process.env.APP_URL ?? "http://localhost:3000").replace(/\/$/, "");
  },
  get contactEmail() {
    return process.env.CONTACT_EMAIL ?? "hello@example.com";
  },
  get invitationCooldownDays() {
    return intFromEnv("INVITATION_COOLDOWN_DAYS", 14);
  },
  get crewMinMembers() {
    return intFromEnv("CREW_MIN_MEMBERS", 2);
  },
  get crewMaxMembers() {
    return intFromEnv("CREW_MAX_MEMBERS", 6);
  },
};
