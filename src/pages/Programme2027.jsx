import { Link } from 'react-router-dom';
const months = [
['January','UPLIFT — Rise Again','Personal growth and practical next steps'],
['February',"Men, Let’s Talk",'Stress, loneliness and asking for support'],
['March','Relationships & Responsibilities','Family, fatherhood and communication'],
['April','Pressure, Stress & Survival','Money worries, work and life under pressure'],
['May','Mental Health Conversations','Mental Health Awareness Week'],
['June','The Healthy Man',"Men’s Health Week: body and mind"],
['July','Brotherhood Outdoors','Informal social gathering'],
['August','Money & Opportunities','Work, enterprise and financial wellbeing'],
['September','Behind the Smile','Grief, listening and suicide-prevention awareness'],
['October','Black Men, History & Legacy','Black History Month'],
['November',"International Men’s Day",'Community, connection and recognition'],
['December','Brotherhood Gathering','Reflection and appreciation']
];
export default function Programme2027(){return <div style={{background:'#faf9f5',color:'#17283c',minHeight:'100vh',paddingBottom:80}}>
<header style={{background:'#112640',color:'white',padding:'90px 24px 65px'}}><div style={{maxWidth:1100,margin:'auto'}}><p style={{color:'#e7c88d',fontWeight:700}}>BACKUP MEN'S NETWORK · 2027 PROGRAMME</p><h1 style={{fontFamily:'Inter, sans-serif',fontSize:'clamp(2.5rem,6vw,4rem)',margin:'16px 0'}}>A place to turn to, all year round.</h1><p style={{fontSize:20,maxWidth:740}}>Men's circles, wellbeing conversations, mentoring and opportunities to connect. Not just conferences — ongoing brotherhood.</p><p style={{marginTop:24,color:'#e5eaf0'}}>Planning calendar only. Dates, venues and registration have not yet been confirmed.</p></div></header>
<main style={{maxWidth:1100,margin:'auto',padding:'60px 24px'}}>
<section aria-labelledby="barcelona-heading" style={{background:'#e9f0e9',padding:'clamp(20px,4vw,32px)',borderRadius:12,marginBottom:60,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,300px),1fr))',gap:28,alignItems:'center'}}>
  <div>
    <p style={{fontWeight:700}}>BARCELONA 2027 · COMING SOON</p>
    <h2 id="barcelona-heading" style={{fontFamily:'Inter, sans-serif',margin:'12px 0'}}>Men’s Empowerment &amp; Networking Week</h2>
    <p>Brotherhood Beyond Borders brings men together in Barcelona, Spain, for leadership, finance, mentoring and networking.</p>
    <ul style={{paddingLeft:22,margin:'16px 0'}}>
      <li>Rev. John Carl Acquah, host and convenor (UK)</li>
      <li>Rev. Dr. Patrick E. Quainoo, guest speaker (USA)</li>
      <li>Rev. Stephen Amenya, resource person (Ghana)</li>
    </ul>
    <p style={{marginBottom:12}}>Dates, venue and registration details will be announced.</p>
    <Link to="/contact" style={{color:'#112640',fontWeight:700,textDecoration:'underline'}}>Contact Backup for enquiries</Link>
  </div>
  <a href="/barcelona-2027-flyer.webp" aria-label="Open the Barcelona 2027 flyer at full size">
    <img src="/barcelona-2027-flyer.webp" alt="Barcelona 2027 coming soon flyer with portraits of the host and speakers" width="880" height="1100" style={{display:'block',width:'100%',height:'auto',borderRadius:8}} />
  </a>
</section>
<h2 style={{fontFamily:'Inter, sans-serif',fontSize:30}}>Support beyond the events</h2><p style={{maxWidth:780,marginBottom:28}}>We are developing regular listening circles, Anchor mentoring and wellbeing check-ins. Peer support is not a replacement for professional mental healthcare.</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginBottom:70}}>{[['Men’s circles','A welcoming place for conversation without judgement.'],['Anchor mentoring','Practical guidance and encouragement from trained volunteers.'],['Wellbeing signposting','Connections to appropriate professional help when needed.']].map(([a,b])=><article key={a} style={{background:'white',padding:28,border:'1px solid #e1e5e8',borderRadius:12}}><h3 style={{fontFamily:'Inter, sans-serif',fontSize:21}}>{a}</h3><p>{b}</p></article>)}</div>
<h2 style={{fontFamily:'Inter, sans-serif',fontSize:30}}>Our proposed monthly programme</h2><p style={{marginBottom:25}}>Every month offers a new reason to meet and connect.</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>{months.map(([month,title,desc])=><article key={month} style={{background:'white',border:'1px solid #e1e5e8',borderRadius:12,padding:25}}><p style={{color:'#86652f',fontWeight:800,letterSpacing:1}}>{month.toUpperCase()}</p><h3 style={{fontFamily:'Inter, sans-serif',fontSize:20,margin:'12px 0'}}>{title}</h3><p>{desc}</p><small style={{color:'#526477'}}>Proposed · Details to follow</small></article>)}</div>
<p style={{marginTop:35}}>Need urgent mental health help? In the UK, call 999 in immediate danger, or NHS 111 for urgent health advice. Samaritans are available on 116 123.</p>
</main></div>}
