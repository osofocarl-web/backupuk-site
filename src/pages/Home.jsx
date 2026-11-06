import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Users, CalendarDays, Compass, Globe, MessageCircle, ShieldCheck } from 'lucide-react';
import './Home.css';

const priorities = [
 {icon:HeartHandshake,title:'Mental health & wellbeing',body:'Space for honest conversations, listening circles and guidance towards appropriate professional support.',link:'/contact',action:'Ask about support'},
 {icon:Users,title:'Brotherhood & mentoring',body:'Find people in your corner. Connect with fellow members and learn about our Anchor mentoring approach.',link:'/anchors',action:'Meet the Anchors'},
 {icon:Compass,title:'Life, work & opportunity',body:'Practical encouragement around work, finances, family, confidence and the everyday challenges men face.',link:'/programs',action:'Explore programmes'}
];
export default function Home(){
 return <div className="home-page fresh-home">
   <section className="fresh-hero">
     <div className="container fresh-hero-grid">
       <div className="fresh-hero-copy">
         <p className="fresh-kicker">BACKUP MEN'S NETWORK UK</p>
         <h1>Life can be heavy.<br/><em>You don't have to face it alone.</em></h1>
         <p className="fresh-intro">A community where men can talk openly, find encouragement, meet people who understand and take the next step. No man should stay down.</p>
         <div className="fresh-actions"><Link to="/join" className="fresh-button primary">Join the brotherhood <ArrowRight size={18}/></Link><Link to="/contact" className="fresh-button secondary">Get in touch</Link><Link to="/events" className="fresh-text-link">Explore events →</Link></div>
       </div>
       <div className="fresh-hero-aside"><div className="fresh-hero-quote"><MessageCircle size={29}/><p>Sometimes the most useful thing a man can hear is, “I'm here. Let's talk.”</p><span>BACKUP · LISTENING, CONNECTION, PRACTICAL SUPPORT</span></div></div>
     </div>
   </section>
   <section className="fresh-section fresh-light"><div className="container">
     <div className="fresh-section-heading"><p className="fresh-kicker">HERE FOR MORE THAN THE BIG MOMENTS</p><h2>Support that continues after the event.</h2><p>Conferences bring people together. The real work happens in the conversations and friendships that follow.</p></div>
     <div className="fresh-priority-grid">{priorities.map(({icon:Icon,title,body,link,action})=><article className="fresh-priority" key={title}><Icon size={30} aria-hidden="true"/><h3>{title}</h3><p>{body}</p><Link to={link}>{action} <ArrowRight size={16}/></Link></article>)}</div>
     <p className="fresh-safety">Peer support and mentoring are not a replacement for clinical mental health care. If you or someone else is in immediate danger in the UK, call 999; for urgent NHS advice, call 111.</p>
   </div></section>
   <section className="fresh-section fresh-warm"><div className="container fresh-two-column">
      <div><p className="fresh-kicker">BACKUP CIRCLES</p><h2>Real conversations. Room to belong.</h2><p>We're developing regular men's circles, wellbeing check-ins and mentoring opportunities. Whether you're carrying pressure at work, navigating family life or simply want to make new connections, there's room to start a conversation.</p><Link className="fresh-button primary" to="/contact">Enquire about a circle <ArrowRight size={17}/></Link></div>
      <div className="fresh-note"><ShieldCheck size={32}/><h3>Listening without judgement</h3><p>We aim to create respectful spaces with trained volunteers, clear boundaries and signposting when specialist help is needed.</p><p className="fresh-small">Details of individual circles will be shared once facilitators, safeguarding arrangements and venues are confirmed.</p></div>
   </div></section>
   <section className="fresh-section fresh-light"><div className="container">
     <div className="fresh-section-heading"><p className="fresh-kicker">LOOKING AHEAD</p><h2>More reasons to come together in 2027.</h2><p>Our working programme brings together wellbeing, Black History Month, men's health, networking and time to connect.</p></div>
     <div className="fresh-events-grid">
       <article><CalendarDays size={28}/><p className="fresh-tag">YEAR-ROUND · PROPOSED</p><h3>2027 activity calendar</h3><p>Monthly themes and regular circles, designed to keep the network connected throughout the year.</p><Link to="/programme-2027">Explore the calendar →</Link></article>
       <article><Globe size={28}/><p className="fresh-tag">BARCELONA 2027 · COMING SOON</p><h3>Brotherhood beyond borders</h3><p>Men’s Empowerment &amp; Networking Week in Barcelona, Spain. Dates, venue and registration details will be announced.</p><Link to="/programme-2027">View the Barcelona flyer →</Link></article>
     </div>
   </div></section>
   <section className="fresh-section fresh-founder"><div className="container fresh-founder-grid"><img src="/john-carl-acquah.jpg" alt="John Carl Acquah, convenor of Backup Men's Network" loading="lazy"/><div><p className="fresh-kicker">A WORD FROM OUR CONVENOR</p><h2>“No man should stay down.”</h2><p>Backup exists because men need people who will listen, encourage them and stand alongside them through difficult seasons. We want to build a network that stays connected in everyday life, not only when there's a conference.</p><p className="fresh-founder-name">John Carl Acquah · Convenor</p><Link to="/about" className="fresh-text-link">Our story →</Link></div></div></section>
   <section className="fresh-footer-cta"><div className="container"><h2>There's a place for you here.</h2><p>Join a conversation, make a connection or find a way to support another man.</p><Link to="/join" className="fresh-button primary">Join Backup <ArrowRight size={18}/></Link></div></section>
 </div>
}