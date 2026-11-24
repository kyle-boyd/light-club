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

export const hero = {
  kicker: "An accountability movement for people who are tired of being owned",
  headline: ["Your phone", "doesn't get", "the first word."],
  // The index of the headline line to print in red.
  accentLine: 2,
  stamp: "We're taking it back. With a pyramid scheme.",
  body:
    "Every day, before you look at or touch your phone, you read a physical Bible and you pray. On Friday mornings you tell a few friends how it went. That's it. That's the club.",
  primaryCta: "I have an invitation",
  secondaryCta: "How it works",
  notice: {
    title: "Notice",
    lines: ["This phone has been demoted.", "It no longer gets the first word."],
    signoff: "— The Management (there is no management)",
  },
};

export const problem = {
  label: "The problem",
  headline: "It's not just how much time it takes. It's that it gets there first.",
  moments: [
    { time: "6:02 AM", text: "Before your feet hit the floor." },
    { time: "12:15 PM", text: "Thirty seconds in line. Out it comes." },
    { time: "6:40 PM", text: "At dinner, between bites, across from people you love." },
    { time: "11:48 PM", text: "When you should be asleep." },
  ],
  closer:
    "Light Club is one small refusal: a screen doesn't get the first claim on you. God does.",
};

export const commitment = {
  label: "The deal",
  headline: "Every day. Before the phone.",
  items: [
    { n: "01", title: "Read a physical Bible.", note: "Paper. Pages. The kind with no notifications." },
    { n: "02", title: "Pray.", note: "Your own words. As long or short as you've got." },
  ],
  fine:
    "Seven days a week. No reading plan, no minimum, no devotional to buy. Just do it before you look at or use your phone.",
};

export const friday = {
  label: "The Friday ritual",
  headline: "Friday morning, you text your crew.",
  steps: [
    { title: "Your score.", text: "How many of the last seven days you did it. Honestly. 0 to 7." },
    {
      title: "One prayer request.",
      text: "About you. Not your coworker's cousin's dog. Something real.",
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
  headline: ["The world's least", "profitable pyramid", "scheme."],
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
