import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderScript } from '../../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../../chunks/Layout_DWS-D9My.mjs';
import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_FL5zKjFJ.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import '../../chunks/supabase_Bd5BNjOP.mjs';
import { Loader2, CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const QUIZ_BANK = {
  1: [
    { q: "What is Bibliology the study of?", options: ["The Nature of God", "The Authority of Scripture", "The End Times", "The Holy Spirit"], a: 1 },
    { q: "What does 'Inerrancy' mean?", options: ["The Bible contains no errors", "The Bible is hard to read", "The Bible is a history book", "The Bible is just human ideas"], a: 0 },
    { q: "According to 2 Timothy 3:16, all Scripture is what?", options: ["Written by angels", "Breathed out by God", "A good suggestion", "Difficult to understand"], a: 1 }
  ],
  2: [
    { q: "What is an incommunicable attribute of God?", options: ["Love", "Mercy", "Omnipresence", "Creativity"], a: 2 },
    { q: "The Trinity means God is:", options: ["Three Gods", "One essence, three persons", "One person who changes masks", "A metaphor"], a: 1 },
    { q: "Which attribute means God is entirely separated from sin?", options: ["Omniscience", "Holiness", "Immutability", "Justice"], a: 1 }
  ],
  3: [
    { q: "What is the Hypostatic Union?", options: ["Jesus was fully God and fully man", "Jesus was half God, half man", "Jesus was an angel", "Jesus was just a good teacher"], a: 0 },
    { q: "What is Substitutionary Atonement?", options: ["Jesus died as our substitute", "Jesus showed us a good example", "Jesus didn't actually die", "We suffer for our own sins"], a: 0 },
    { q: "What event vindicated Christ's claims and secured eternal life?", options: ["His birth", "His miracles", "His resurrection", "His teachings"], a: 2 }
  ],
  4: [
    { q: "What is Justification?", options: ["God declares us righteous based on Christ", "A gradual process of getting better", "Earning our salvation", "Trying very hard to be good"], a: 0 },
    { q: "Regeneration is described as:", options: ["Going to church", "The Holy Spirit imparting new spiritual life", "Being baptized", "Doing good works"], a: 1 },
    { q: "What is the final stage of salvation?", options: ["Sanctification", "Calling", "Justification", "Glorification"], a: 3 }
  ],
  5: [
    { q: "The Holy Spirit is:", options: ["An impersonal force", "The third person of the Trinity", "A feeling", "A type of energy"], a: 1 },
    { q: "Which of the following describes the Fruit of the Spirit?", options: ["Speaking in tongues", "Love, joy, peace, patience...", "Preaching", "Healing"], a: 1 },
    { q: "What does the Holy Spirit do in salvation?", options: ["Convicts of sin and regenerates", "Forces us to believe", "Leaves us when we sin", "Nothing"], a: 0 }
  ],
  6: [
    { q: "What is Ecclesiology?", options: ["Study of the end times", "Study of salvation", "Study of the Church", "Study of angels"], a: 2 },
    { q: "What are the two primary Protestant ordinances?", options: ["Confirmation and Penance", "Baptism and Communion", "Marriage and Ordination", "Tithing and Fasting"], a: 1 },
    { q: "According to 1 Timothy 3, who is tasked with shepherding the local flock?", options: ["Elders (Pastors) and Deacons", "Only Evangelists", "The government", "Anyone who wants to"], a: 0 }
  ],
  7: [
    { q: "According to Ephesians 6:12, who is our true enemy?", options: ["People who disagree with us", "Flesh and blood", "Rulers and cosmic powers of darkness", "The culture"], a: 2 },
    { q: "What is the Sword of the Spirit?", options: ["Positive thinking", "The Word of God", "Emotional strength", "Good arguments"], a: 1 },
    { q: "Satan's primary tactics include:", options: ["Physical force only", "Deception, accusation, and temptation", "Make us sick", "Distracting us with good things"], a: 1 }
  ],
  8: [
    { q: "What is Eschatology?", options: ["Study of the end times", "Study of sin", "Study of the past", "Study of Jesus"], a: 0 },
    { q: "How is Christ returning?", options: ["Secretly", "As a bodily, visible, conquering King", "Only in spirit", "He already returned"], a: 1 },
    { q: "What is the purpose of studying the end times?", options: ["To figure out the exact date", "To fuel fear", "To motivate holiness and urgent evangelism", "To write speculative books"], a: 2 }
  ],
  9: [
    { q: "What is a Biblical steward?", options: ["An owner of property", "A manager of God's resources", "Someone who hoards wealth", "Someone who spends freely"], a: 1 },
    { q: "Which of these is the only non-renewable resource?", options: ["Money", "Talent", "Time", "Energy"], a: 2 },
    { q: "What is the Principle of First Fruits?", options: ["Giving God what is left over", "Giving God the first and best", "Only giving when you feel like it", "Tithing exactly 1 percent"], a: 1 }
  ],
  10: [
    { q: "Where does Christian Ethics find its foundation?", options: ["Cultural consensus", "Personal preference", "The unchanging character of God", "Government laws"], a: 2 },
    { q: "What is the motive for Christian obedience?", options: ["To earn God's love", "Fear of punishment", "Gratitude for grace already received", "To look good to others"], a: 2 },
    { q: "The 'Imago Dei' refers to:", options: ["The Image of God", "A famous painting", "The heart of man", "A Latin prayer"], a: 0 }
  ],
  11: [
    { q: "Prayer is primarily about:", options: ["Bending God to our will", "Aligning our desires with God's will", "Getting what we want", "A religious ritual"], a: 1 },
    { q: "What does 'Supplication' mean?", options: ["Praising God", "Confessing sin", "Presenting our needs to God", "Thanking God"], a: 2 },
    { q: "What is a major hindrance to powerful prayer?", options: ["Not praying long enough", "Praying in English", "Unconfessed sin", "Praying with eyes open"], a: 2 }
  ],
  12: [
    { q: "What is the Great Commission?", options: ["A suggestion for pastors", "The mandate to make disciples of all nations", "A building project", "A conference name"], a: 1 },
    { q: "What is Evangelism?", options: ["Arguing with people", "The joyful proclamation of the Gospel", "Hiding our faith", "Only doing good deeds"], a: 1 },
    { q: "Discipleship requires:", options: ["Teaching them to observe all Christ commanded", "Just getting them baptized", "Giving them a Bible", "Bringing them to church once"], a: 0 }
  ]
};
const FALLBACK_QUESTIONS = [
  { q: "Did you complete the required reading for this module?", options: ["Yes", "No"], a: 0 },
  { q: "Are you ready to advance to the next module?", options: ["Yes", "Not yet"], a: 0 }
];
const AcademyQuiz = ({ moduleId, onAttemptComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [score, setScore] = useState(null);
  const questions = QUIZ_BANK[moduleId] || FALLBACK_QUESTIONS;
  const isFinished = currentStep >= questions.length;
  const handleOptionSelect = (qIndex, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };
  const nextStep = () => {
    if (answers[currentStep] !== void 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.a) correct++;
    });
    return Math.round(correct / questions.length * 100);
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const finalScore = calculateScore();
    setScore(finalScore);
    await new Promise((r) => setTimeout(r, 800));
    const passed = finalScore >= 80;
    if (onAttemptComplete) {
      onAttemptComplete(passed, finalScore);
    }
    setIsSubmitting(false);
  };
  if (isFinished) {
    if (score === null && !isSubmitting) {
      handleSubmit();
    }
    if (isSubmitting) {
      return /* @__PURE__ */ jsxs("div", { className: "quiz-container saving", children: [
        /* @__PURE__ */ jsx(Loader2, { className: "spinner", size: 32 }),
        /* @__PURE__ */ jsx("p", { children: "Grading Assessment..." })
      ] });
    }
    const passed = score >= 80;
    return /* @__PURE__ */ jsx("div", { className: `quiz-container results ${passed ? "passed" : "failed"}`, children: passed ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(CheckCircle, { size: 48, className: "result-icon success" }),
      /* @__PURE__ */ jsx("h3", { children: "Assessment Passed!" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "You scored ",
        /* @__PURE__ */ jsxs("strong", { children: [
          score,
          "%"
        ] }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "result-desc", children: "You have successfully mastered the theological concepts in this module. You may now mark this module as complete below." })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(XCircle, { size: 48, className: "result-icon error" }),
      /* @__PURE__ */ jsx("h3", { children: "Review Required" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "You scored ",
        /* @__PURE__ */ jsxs("strong", { children: [
          score,
          "%"
        ] }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "result-desc", children: "A passing score of 80% is required for the Level 4 Certificate. Please review the material and try again." }),
      /* @__PURE__ */ jsx("button", { className: "btn-secondary", onClick: () => {
        setCurrentStep(0);
        setAnswers({});
        setScore(null);
      }, children: "Retake Quiz" })
    ] }) });
  }
  const currentQ = questions[currentStep];
  return /* @__PURE__ */ jsxs("div", { className: "quiz-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "quiz-header", children: [
      /* @__PURE__ */ jsxs("h4", { children: [
        /* @__PURE__ */ jsx(AlertCircle, { size: 18 }),
        " Module Assessment"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "quiz-progress", children: [
        "Question ",
        currentStep + 1,
        " of ",
        questions.length
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "quiz-body", children: [
      /* @__PURE__ */ jsx("p", { className: "question-text", children: currentQ.q }),
      /* @__PURE__ */ jsx("div", { className: "options-grid", children: currentQ.options.map((opt, i) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `quiz-option ${answers[currentStep] === i ? "selected" : ""}`,
          onClick: () => handleOptionSelect(currentStep, i),
          children: opt
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "quiz-footer", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "btn-primary",
        disabled: answers[currentStep] === void 0,
        onClick: nextStep,
        children: [
          currentStep === questions.length - 1 ? "Submit Assessment" : "Next Question",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ]
      }
    ) })
  ] });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const entries = await getCollection("academy");
  return entries.map((entry) => ({
    params: { slug: entry.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntry("academy", slug);
  if (!entry) {
    return Astro2.redirect("/academy");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "data-astro-cid-qnmbk4tp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="module-page animate-fade-in" data-astro-cid-qnmbk4tp> <header class="module-header glass" data-astro-cid-qnmbk4tp> <div class="module-num" data-astro-cid-qnmbk4tp>Module ${entry.data.module}</div> <h1 data-astro-cid-qnmbk4tp>${entry.data.title}</h1> <p class="desc" data-astro-cid-qnmbk4tp>${entry.data.description}</p> </header> <div class="module-body" data-astro-cid-qnmbk4tp> <div class="lesson-card glass" data-astro-cid-qnmbk4tp> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qnmbk4tp": true })} <div id="quiz-anchor" data-astro-cid-qnmbk4tp> ${renderComponent($$result2, "AcademyQuiz", AcademyQuiz, { "client:load": true, "moduleId": entry.data.module, "client:component-hydration": "load", "client:component-path": "C:/Users/John/OneDrive/Desktop/churchApp/src/components/AcademyQuiz.jsx", "client:component-export": "default", "data-astro-cid-qnmbk4tp": true })} </div> </div> <aside class="module-sidebar" data-astro-cid-qnmbk4tp> <div class="sidebar-info glass" data-astro-cid-qnmbk4tp> <h3 data-astro-cid-qnmbk4tp>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "check-square", "data-astro-cid-qnmbk4tp": true })} Requirements</h3> <ul data-astro-cid-qnmbk4tp> <li data-astro-cid-qnmbk4tp>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "book-open", "size": 16, "data-astro-cid-qnmbk4tp": true })} Read all materials</li> <li data-astro-cid-qnmbk4tp>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "help-circle", "size": 16, "data-astro-cid-qnmbk4tp": true })} Complete Quiz (80%+)</li> </ul> </div> <div id="status-display" class="status-box glass" data-astro-cid-qnmbk4tp> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "clock", "id": "status-icon", "data-astro-cid-qnmbk4tp": true })} <span id="status-text" data-astro-cid-qnmbk4tp>Module In Progress</span> </div> </aside> </div> </article>  ${renderScript($$result2, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/academy/[slug].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/academy/[slug].astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/academy/[slug].astro";
const $$url = "/academy/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
