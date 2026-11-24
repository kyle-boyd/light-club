/**
 * All public-facing copy for the landing page lives here so it can be edited
 * without touching layout code. "Light Club" and every line below are working
 * content, not product rules.
 */

export const brand = {
  name: "Light Club",
  tagline: "Your phone doesn't get the first word.",
  footerJoke: "Not affiliated with your phone.",
};

// Header navigation. The last item is shown inverted.
export const nav = [
  { label: "The deal", href: "/#the-deal" },
  { label: "Fridays", href: "/#fridays" },
  { label: "The network", href: "/#network" },
  { label: "Got a link?", href: "/#invited" },
];

export const hero = {
  kicker: "An accountability movement for people who are tired of being owned",
  // One entry per line, so the breaks are deliberate at every width.
  // The last line is printed in red.
  headline: ["Your phone", "doesn't get the", "first word."],
  // What we do: the commitment, under the headline. (The nav's "The deal" links here.)
  whatWeDo: {
    paragraphs: [
      "Every morning, before looking at or using our phones, we read a physical Bible and pray.",
      "Every Friday, we tell our crew how it went. We share what's going on in our lives, ask for prayer, and actually pray for each other.",
      "We do it with a few people we know. You join a crew with someone who invited you. Then you invite your friends to start their own.",
      "That's it.",
    ],
    closer: "God gets the first word. We're trying to live like it.",
  },
  stamp: "We're taking it back. With a pyramid scheme.",
  primaryCta: "I have an invitation",
  secondaryCta: "How it works",
};

export const problem = {
  label: "The problem",
  headline:
    "We've allowed something that was supposed to serve us to determine what gets our attention, even before we've decided what matters.",
  paragraphs: [
    "We've built a world where there's always another screen to look at, another notification to check, another distraction waiting. The moment we're bored, we reach for it. The moment things get quiet, we fill it.",
    "Before we've spoken to God, our families, or even thought about what kind of day we're going to have, we've already given our attention away.",
    "It's not that technology or screens are inherently bad. It's that we've stopped choosing when they deserve our attention.",
  ],
  closer: "We're trying to change that.",
};

export const friday = {
  label: "The Friday check-in",
  headline: "Friday morning, you text your crew.",
  steps: [
    { title: "Your score.", text: "How many of the last seven days you did it. Honestly. 0 to 7." },
    {
      // Original wording, kept as written on purpose.
      title: "Share 1 prayer request about yourself",
      text: "(not your neighbor's aunt's dog, something YOU need your brothers and sisters to pray for YOU).",
    },
    { title: "Pray for your crew.", text: "Read everyone else's requests. Then actually pray for them." },
  ],
  noGrades: "2/7 is welcome here. So is 7/7. Nobody's grading.",
  messageTitle: "FRIDAY CHECK-IN",
  message: [
    "How many days this week did you read your physical Bible and pray before looking at your phone?",
    "Score: X/7",
    "Prayer request:\n[Something you'd like your crew to pray for.]",
    "Take a few minutes to read through the requests and pray for your crew.",
  ],
  messageCaption: "Copy it. Paste it into your group text. The website stays out of it.",
};

export const network = {
  label: "The network",
  headline: "The world's least profitable pyramid scheme.",
  body:
    "When you join, you get five invitation links. Give them to people you'd actually want to hear from on a Friday morning. Send them by text, email, or a napkin. Up to six people make a crew, and crews overlap, so the whole thing is a mess of circles, not a pyramid.",
  diagram: {
    sounds: "What it sounds like",
    is: "What it actually is",
  },
  rules: [
    "No upline. No downline. No leaders.",
    "No commissions, points, ranks, or prizes for recruiting.",
    "No app. Your crew lives in a group text.",
    "Five links each. Six to a crew, max.",
  ],
};

export const cta = {
  label: "How to join",
  headline: "Got a link?",
  body: "Tap the invitation link a friend sent you. That's the only door.",
  noLinkTitle: "No link?",
  noLinkBody:
    "Light Club grows by personal invitation only. Ask whoever told you about it. They've got five.",
};

export const footer = {
  privacy: "Privacy",
  contact: "Contact",
};
