import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_tKDu1v88.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$LucideIcon } from '../chunks/Layout_DWS-D9My.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from '../chunks/supabase_Bd5BNjOP.mjs';
import { Loader2, CalendarDays, CheckCircle, PlayCircle, Quote, Sparkles } from 'lucide-react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const AttendanceTracker = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [recentAttendance, setRecentAttendance] = useState(0);
  const [user, setUser] = useState(null);
  const getTodayDateString = () => {
    const d = /* @__PURE__ */ new Date();
    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const checkStatus = async () => {
      const { data: { user: user2 } } = await supabase.auth.getUser();
      if (!user2) {
        setIsLoading(false);
        return;
      }
      setUser(user2);
      const today = getTodayDateString();
      try {
        const { data: todayCheckin } = await supabase.from("church_attendance").select("id").eq("user_id", user2.id).eq("date", today).single();
        if (todayCheckin) {
          setIsCheckedIn(true);
        }
        const { count } = await supabase.from("church_attendance").select("*", { count: "exact", head: true }).eq("user_id", user2.id);
        setRecentAttendance(count || 0);
      } catch (error) {
        console.error("Error loading attendance:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkStatus();
  }, []);
  const handleCheckIn = async () => {
    if (!user) {
      window.location.href = "/auth";
      return;
    }
    setIsLoading(true);
    const today = getTodayDateString();
    try {
      const { error } = await supabase.from("church_attendance").insert([
        { user_id: user.id, date: today, service_type: "Sunday Service" }
      ]);
      if (error) {
        if (error.code === "23505") {
          setIsCheckedIn(true);
        } else {
          console.error("Error checking in:", error);
          alert("Unable to check in right now. Please try again.");
        }
      } else {
        setIsCheckedIn(true);
        setRecentAttendance((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const isSunday = (/* @__PURE__ */ new Date()).getDay() === 0;
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "attendance-card glass loading", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "spinner", size: 32 }),
      /* @__PURE__ */ jsx("p", { children: "Loading attendance..." })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "attendance-card glass animate-fade-in", style: { animationDelay: "0.15s" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "attendance-header", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "flex-center-gap", children: [
          /* @__PURE__ */ jsx(CalendarDays, { className: "text-accent" }),
          " Church Attendance"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "attendance-subtitle", children: "Track your Sunday service consistency." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "attendance-badge", children: [
        /* @__PURE__ */ jsx("strong", { children: recentAttendance }),
        " Services"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "attendance-action", children: isCheckedIn ? /* @__PURE__ */ jsxs("div", { className: "checked-in-state", children: [
      /* @__PURE__ */ jsx(CheckCircle, { size: 32, className: "success-color" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { children: "Checked In for Today!" }),
        /* @__PURE__ */ jsx("p", { children: "Thank you for joining the service. Have a blessed week." })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "check-in-state", children: [
      !isSunday && /* @__PURE__ */ jsx("p", { className: "not-sunday-warning", children: "It looks like today isn't Sunday, but you can still check in if attending a special service." }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "btn-primary check-in-btn",
          onClick: handleCheckIn,
          disabled: isLoading,
          children: [
            /* @__PURE__ */ jsx(PlayCircle, { size: 20, className: "mr-2" }),
            isLoading ? "Processing..." : "Click Here to Check In Today"
          ]
        }
      )
    ] }) })
  ] });
};

const QUOTE_LIBRARY = [
  { text: "God's timing is never early and never late. It is precisely perfect for the miracle you need.", author: "Prophetic Word" },
  { text: "The cross you carry today is building the crown you will wear tomorrow. Do not give up.", author: "Prophetic Word" },
  { text: "When you feel buried, remember you are actually planted. Your season of blooming is near.", author: "Prophetic Word" },
  { text: "Fear is a liar, but faith is a mountain mover. Speak to your mountain today.", author: "Prophetic Word" },
  { text: "Every tear you have cried is recorded in heaven. Your sorrow is about to be turned into divine strategy.", author: "Prophetic Word" },
  { text: "The fire you are walking through is not designed to destroy you; it is designed to refine the gold within you.", author: "Prophetic Word" },
  { text: "Stop looking at the storm and start looking at the One walking on the water.", author: "Prophetic Word" },
  { text: "Your prayers are not bouncing off the ceiling. They are shaking the spiritual realm.", author: "Prophetic Word" },
  { text: "What looks like a setback in the natural is a setup in the supernatural.", author: "Prophetic Word" },
  { text: "God is about to open a door that no man can shut, and shut a door that no man can open.", author: "Prophetic Word" },
  { text: "The giant in front of you is never bigger than the God inside of you.", author: "Prophetic Word" },
  { text: "Your current season of isolation is actually a season of intense preparation. Get ready.", author: "Prophetic Word" },
  { text: "Worship is the weapon that will win this war. Lift your voice before you see the victory.", author: "Prophetic Word" },
  { text: "You did not miss your moment. The God of second chances is writing your next chapter.", author: "Prophetic Word" },
  { text: "The enemy attacks you the hardest when you are on the edge of your greatest breakthrough.", author: "Prophetic Word" },
  { text: "Grace is not just permission to be forgiven; it is power to overcome.", author: "Prophetic Word" }
];
const getDayOfYear = () => {
  const now = /* @__PURE__ */ new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1e3;
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};
const DailyQuote = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const dayOfYear = getDayOfYear();
    const quoteIndex = dayOfYear % QUOTE_LIBRARY.length;
    setQuote(QUOTE_LIBRARY[quoteIndex]);
  }, []);
  if (!quote) return null;
  return /* @__PURE__ */ jsxs("section", { className: "daily-quote-container animate-fade-in glass", children: [
    /* @__PURE__ */ jsx("div", { className: "quote-icon-bg", children: /* @__PURE__ */ jsx(Quote, { size: 120 }) }),
    /* @__PURE__ */ jsxs("div", { className: "quote-header", children: [
      /* @__PURE__ */ jsx(Sparkles, { size: 20, className: "gold-sparkle" }),
      /* @__PURE__ */ jsx("span", { className: "quote-label", children: "Daily Prophetic Focus" })
    ] }),
    /* @__PURE__ */ jsxs("blockquote", { className: "quote-body", children: [
      '"',
      quote.text,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "quote-footer", children: [
      /* @__PURE__ */ jsx("div", { className: "author-line" }),
      /* @__PURE__ */ jsxs("span", { className: "quote-author", children: [
        "- ",
        quote.author
      ] })
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero animate-fade-in" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Welcome, <span class="gold-text" data-astro-cid-j7pv25f6>John</span></h1> <p data-astro-cid-j7pv25f6>Your journey through the Word continues today.</p> </section> <div class="stats-grid animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-j7pv25f6> <div class="stat-card glass" data-astro-cid-j7pv25f6> <div class="stat-header" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "flame", "class": "streak-icon", "data-astro-cid-j7pv25f6": true })} <span data-astro-cid-j7pv25f6>12 Day Streak</span> </div> <div class="progress-ring-container" data-astro-cid-j7pv25f6> <svg viewBox="0 0 36 36" class="circular-chart gold" data-astro-cid-j7pv25f6> <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" data-astro-cid-j7pv25f6></path> <path class="circle" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" data-astro-cid-j7pv25f6></path> <text x="18" y="20.35" class="percentage" data-astro-cid-j7pv25f6>75%</text> </svg> </div> <p class="stat-label" data-astro-cid-j7pv25f6>Monthly Goal</p> </div> <div class="stat-card glass" data-astro-cid-j7pv25f6> <div class="stat-header" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "award", "class": "badge-icon", "data-astro-cid-j7pv25f6": true })} <span data-astro-cid-j7pv25f6>Badges</span> </div> <div class="badges-mini" data-astro-cid-j7pv25f6> <div class="badge-circle" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "shield-check", "data-astro-cid-j7pv25f6": true })}</div> <div class="badge-circle" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "zap", "data-astro-cid-j7pv25f6": true })}</div> <div class="badge-circle locked" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "lock", "data-astro-cid-j7pv25f6": true })}</div> </div> <p class="stat-label" data-astro-cid-j7pv25f6>3 New Available</p> </div> </div> ${renderComponent($$result2, "DailyQuote", DailyQuote, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/John/OneDrive/Desktop/churchApp/src/components/DailyQuote.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "AttendanceTracker", AttendanceTracker, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/John/OneDrive/Desktop/churchApp/src/components/AttendanceTracker.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <section class="today-card glass animate-fade-in" style="animation-delay: 0.2s;" data-astro-cid-j7pv25f6> <div class="card-tag" data-astro-cid-j7pv25f6>Today's Reading</div> <h2 data-astro-cid-j7pv25f6>Romans 12:1-21</h2> <p data-astro-cid-j7pv25f6>"Do not be conformed to this world, but be transformed by the renewal of your mind..."</p> <a href="/study/today" class="btn-primary" data-astro-cid-j7pv25f6>
Start Reading
${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "arrow-right", "data-astro-cid-j7pv25f6": true })} </a> </section> <div class="action-grid animate-fade-in" style="animation-delay: 0.3s;" data-astro-cid-j7pv25f6> <a href="/study" class="action-card glass" data-astro-cid-j7pv25f6> <div class="action-icon study" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "calendar-days", "data-astro-cid-j7pv25f6": true })}</div> <div class="action-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>1 Year Plan</h3> <p data-astro-cid-j7pv25f6>Day 142 of 365</p> </div> </a> <a href="/academy" class="action-card glass" data-astro-cid-j7pv25f6> <div class="action-icon school" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "graduation-cap", "data-astro-cid-j7pv25f6": true })}</div> <div class="action-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Lifeline Academy</h3> <p data-astro-cid-j7pv25f6>Module 4: Prayer</p> </div> </a> <a href="/children" class="action-card glass" data-astro-cid-j7pv25f6> <div class="action-icon kids" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "gamepad-2", "data-astro-cid-j7pv25f6": true })}</div> <div class="action-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Kids Zone</h3> <p data-astro-cid-j7pv25f6>Games and Stories</p> </div> </a> <a href="/notes" class="action-card glass" data-astro-cid-j7pv25f6> <div class="action-icon notes" data-astro-cid-j7pv25f6>${renderComponent($$result2, "Icon", $$LucideIcon, { "name": "sticky-note", "data-astro-cid-j7pv25f6": true })}</div> <div class="action-content" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>My Notes</h3> <p data-astro-cid-j7pv25f6>12 Saved Insights</p> </div> </a> </div>  ` })}`;
}, "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/index.astro", void 0);

const $$file = "C:/Users/John/OneDrive/Desktop/churchApp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
