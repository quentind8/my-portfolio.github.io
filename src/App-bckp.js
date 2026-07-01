import { useState, useEffect, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaHtml5 } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJquery,
  SiMysql,
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const skills = [
  { name: "ReactJS", className: "skill-one", color: "#61DAFB", bg: "#0f1f2a", icon: <FaReact /> },
  { name: "Html & CSS", className: "skill-two", color: "#54C5F8", bg: "#1a3a4a", icon: <FaLaptopCode/> },
  { name: "JavaScript", className: "skill-three", color: "#E95420", bg: "#3d1a0f", icon: <FaJs /> },
  { name: "jQuery", className: "skill-four", color: "#F05032", bg: "#3d1a0f", icon: <SiJquery /> },
  { name: "Bootstrap", className: "skill-five", color: "#0089FF", bg: "#1a2a3d", icon: <FaBootstrap /> },
  { name: "HTML5", className: "skill-six", color: "#47A248", bg: "#1a2d1a", icon: <FaHtml5 /> },
  { name: "MySql", className: "skill-seven", color: "#E34F26", bg: "#3d1a0f", icon: <SiMysql /> },
  { name: "CSS3", className: "skill-eight", color: "#F7DF1E", bg: "#3d3010", icon: <FaCss3Alt /> },
  { name: "Wordpress", className: "skill-nine", color: "#5E64FF", bg: "#1e1a4a", icon: <FaWordpress /> },
];



const experiences = [
  {
    year: "MARCH 2023 — PRESENT",
    title: "Software Developer Analyst",
    company: "Accenture",
    // desc: "Led development of enterprise-grade Python applications for large-scale data processing pipelines. Architected RESTful APIs serving 50k+ requests daily, optimized database queries reducing latency by 40%, and mentored junior developers.",
  },
  {
    year: "FEBRUARY 2021 — FEBRUARY 2023",
    title: "Software Developer Associate",
    company: "Accenture",
    // desc: "Developed backend services for energy management systems using Python and Django. Collaborated with cross-functional teams to design scalable microservices architecture and implemented CI/CD pipelines for automated deployments.",
  },
  {
    year: "MAY 2019 — JULY 2019",
    title: "Project Coordinator",
    company: "Foxjab",
    // desc: "Developed backend services for energy management systems using Python and Django. Collaborated with cross-functional teams to design scalable microservices architecture and implemented CI/CD pipelines for automated deployments.",
  },
  {
    year: "JULY 2017 — JULY 2018",
    title: "Software Developer",
    company: "Foxjab",
    // desc: "Developed backend services for energy management systems using Python and Django. Collaborated with cross-functional teams to design scalable microservices architecture and implemented CI/CD pipelines for automated deployments.",
  },
  {
    year: "AUGUST 2016 — MARCH 2017",
    title: "Software Developer",
    company: "Studio Overhaul",
    // desc: "Developed backend services for energy management systems using Python and Django. Collaborated with cross-functional teams to design scalable microservices architecture and implemented CI/CD pipelines for automated deployments.",
  },
];

const portfolioItems = [
  { label: "Amazon Scrapper", sub: "Data extraction tool", accent: true },
  { label: "", sub: "" },
  { label: "", sub: "" },
  { label: "", sub: "" },
  { label: "", sub: "" },
  { label: "", sub: "" },
];

const portfolioBgs = [
  "linear-gradient(135deg, #1a2a3d 0%, #2a3d5f 100%)",
  "linear-gradient(135deg, #1a3d2a 0%, #2a5f3d 100%)",
  "linear-gradient(135deg, #1a1a3d 0%, #2a2a5f 100%)",
  "linear-gradient(135deg, #3d1a2a 0%, #5f2a3d 100%)",
  "linear-gradient(135deg, #2a1a3d 0%, #3d2a5f 100%)",
  "linear-gradient(135deg, #1a2d3d 0%, #2a4a5f 100%)",
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("About");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
  };

  return (
    <div style={{ fontFamily: "'Sora', 'Nunito Sans', sans-serif", background: "#1a1a2e", color: "#e8e8f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Nunito+Sans:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { scroll-behavior: smooth; }
        body { background: #1a1a2e; }
        ::selection { background: #d4a843; color: #1a1a2e; }
        .nav-link { cursor: pointer; transition: color 0.2s; font-size: 14px; font-weight: 400; letter-spacing: 0.04em; }
        .nav-link:hover { color: #d4a843; }
        .btn-primary { background: transparent; border: 1.5px solid #d4a843; color: #d4a843; padding: 10px 28px; border-radius: 2px; cursor: pointer; font-family: inherit; font-size: 14px; letter-spacing: 0.08em; font-weight: 600; transition: all 0.25s; }
        .btn-primary:hover { background: #d4a843; color: #1a1a2e; }
        .skill-card { background: #12122a; border: 1px solid #2a2a45; border-radius: 8px; padding: 20px 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; transition: all 0.25s; cursor: default; }
        .skill-card:hover { border-color: #d4a843; transform: translateY(-3px); background: #1e1e38; }
        .skill-one:hover .skill-icon { color: #61DAFB; }
        .skill-two:hover .skill-icon { color: #FF6B6B; }
        .skill-three:hover .skill-icon { color: #F7DF1E; }
        .skill-four:hover .skill-icon { color: #0868AC; }
        .skill-five:hover .skill-icon { color: #0d6efd; }
        .skill-six:hover .skill-icon { color: #7952B3; }
        .skill-seven:hover .skill-icon { color: #4479A1; }
        .skill-eight:hover .skill-icon { color: #1572B6; }
        .skill-nine:hover .skill-icon { color: #21759B; }

        .skill-card.accent { border-color: #d4a843; background: linear-gradient(135deg, #2a1f0a 0%, #3d2e0f 100%); }
        .portfolio-item { border-radius: 6px; overflow: hidden; position: relative; aspect-ratio: 4/3; cursor: pointer; transition: transform 0.3s; }
        .portfolio-item:hover { transform: scale(1.02); }
        .portfolio-item:hover .overlay { opacity: 1; }
        .overlay { position: absolute; inset: 0; background: rgba(212,168,67,0.15); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; }
        .exp-card { background: #12122a; border: 1px solid #2a2a45; border-radius: 8px; padding: 28px; position: relative; transition: border-color 0.3s; }
        .exp-card:hover { border-color: #d4a843; }
        .social-btn { width: 36px; height: 36px; border: 1px solid #3a3a55; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; font-size: 14px; color: #b0b0cc; text-decoration: none; }
        .social-btn:hover { border-color: #d4a843; color: #d4a843; }
        .contact-item { display: flex; align-items: center; gap: 12px; font-size: 15px; color: #c0c0d8; }
        .contact-item svg { color: #d4a843; flex-shrink: 0; }
        .section-label { display: inline-block; width: 36px; height: 3px; background: #d4a843; margin-right: 12px; vertical-align: middle; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(212,168,67,0.4); } 100% { box-shadow: 0 0 0 16px rgba(212,168,67,0); } }
        .hero-img { animation: float 4s ease-in-out infinite; }
        .year-badge { animation: pulse-ring 2s infinite; }
        .contact-item a {color:#c0c0d8;text-decoration: none;}
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(18,18,42,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2a2a45" : "none",
        transition: "all 0.3s",
        padding: "16px 6%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ width: 36, height: 36, background: "#d4a843", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, color: "#1a1a2e" }}>D</div>
        <div style={{ display: "flex", gap: 36 }}>
          {["about", "skills", "experience", "contact"].map(s => (
            <span key={s} className="nav-link" onClick={() => scrollTo(s)} style={{ color: activeNav.toLowerCase() === s ? "#d4a843" : "#c0c0d8", textTransform: "capitalize" }}>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
          ))}
        </div>
        {/* <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#7a7a99", fontSize: 14 }}>
          <span>Search</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </div> */}
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 6% 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "linear-gradient(135deg, #2a1f0a 0%, #1a1a2e 60%)", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)", opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "20%", right: "8%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 70%)" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1100, margin: "0 auto", gap: 40, position: "relative", zIndex: 1 }}>
          <div style={{ flex: 1, maxWidth: 520 }}>
            <FadeIn>
              <p style={{ color: "#9090b0", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>I'M</p>
              <h1 style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 800, lineHeight: 1.05, color: "#fff", marginBottom: 12 }}>Quentin Dmello</h1>
              <p style={{ color: "#d4a843", fontSize: 16, fontWeight: 600, marginBottom: 15, letterSpacing: "0.04em" }}>Software Developer</p>
              {/* <p style={{ color: "#9090b0", fontSize: 16, marginBottom: 36 }}>Consultant</p> */}
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Contact Me</button>
            </FadeIn>

            {/* <div style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 12 }}>
              {["f","t","in","w"].map((s, i) => (
                <a key={i} href="#" className="social-btn" style={{ fontSize: 12, fontWeight: 600 }}>{s}</a>
              ))}
            </div> */}
             <div style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/quentin-dmello-21a0a110b/"
                className="social-btn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <FadeIn delay={0.2} style={{ flex: 1, display: "flex", justifyContent: "center", maxWidth: 460 }}>
            <div className="hero-img" style={{ position: "relative" }}>
              <div style={{ width: 360, height: 420, background: "linear-gradient(160deg, #2a2040 0%, #12122a 100%)", borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%", border: "2px solid #2a2a45", overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <div style={{ width: "100%", height: "90%", background: "linear-gradient(180deg, #3a3060 0%, #1e1e38 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, filter: "grayscale(0.2)" }}>
                  <span style={{ opacity: 0.9 }}>👨‍💻</span>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 20, right: -16, width: 60, height: 60, background: "#d4a843", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>⚡</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section style={{ padding: "60px 6%", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>
            <span className="section-label" />About
          </h2>
          <p style={{ color: "#9090b0", lineHeight: 1.9, maxWidth: 750, fontSize: 15 }}>
            I am seeking a professional working platform, with a strong desire to put in my inherent skills and abilities to effective utilization and realization, and contribute to the progress of organization with subsequent expansion in my knowledge sphere. I foresee myself to be part of top-notch team of professionals with sincerity, creativity and dedication.
          </p>
        </FadeIn>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "60px 6% 80px", background: "#12122a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48 }}>My Skills</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 16 }}>
            {/* {skills.map((skill, i) => (
              <FadeIn key={skill.name} delay={i * 0.05}>
                <div className={`skill-card${skill.accent ? " accent" : ""}`}>
                  <div style={{ fontSize: 28, lineHeight: 1 }}>{skill.icon}</div>
                  <span style={{ fontSize: 12, textAlign: "center", color: "#b0b0cc", fontWeight: 500, lineHeight: 1.3 }}>{skill.name}</span>
                </div>
              </FadeIn>
            ))} */}
            {skills.map((skill, i) => (
              <FadeIn key={skill.name} delay={i * 0.05}>
  <div key={skill.name} className={`skill-card ${skill.className}`}>
    <span className="skill-icon" style={{ fontSize: 28, lineHeight: 1 }}>{skill.icon}</span>
    <span style={{ fontSize: 12, textAlign: "center", color: "#b0b0cc", fontWeight: 500, lineHeight: 1.3 }}>{skill.name}</span>
  </div>
  </FadeIn>
))}
          </div>
          
        </div>
      </section>

      {/* PORTFOLIO */}
      {/* <section id="portfolio" style={{ padding: "80px 6%", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48 }}>Portfolio</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 36 }}>
          {portfolioItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="portfolio-item" style={{ background: portfolioBgs[i] }}>
                <div style={{ width: "100%", height: "100%", minHeight: 160, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                  {item.label && (
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#fff" }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: "#9090b0" }}>{item.sub}</div>
                      <button className="btn-primary" style={{ marginTop: 12, padding: "6px 16px", fontSize: 12 }}>View More</button>
                    </div>
                  )}
                </div>
                <div className="overlay">
                  <div style={{ width: 40, height: 40, background: "#d4a843", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" fill="none" stroke="#1a1a2e" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="btn-primary">View More</button>
        </div>
      </section> */}

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "80px 6%", background: "#12122a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>Experience</h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="exp-card">
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 12 }}>
                    <div className="year-badge" style={{ background: "#2a2040", border: "1px solid #d4a843", borderRadius: 6, padding: "4px 12px", fontSize: 13, fontWeight: 700, color: "#d4a843", flexShrink: 0 }}>{exp.year}</div>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{exp.title}</h3>
                      <p style={{ color: "#d4a843", fontSize: 13, fontWeight: 600 }}>{exp.company}</p>
                    </div>
                  </div>
                  <p style={{ color: "#8080a0", fontSize: 14, lineHeight: 1.8, paddingLeft: 72 }}>{exp.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {/* <section style={{ padding: "80px 6%", background: "linear-gradient(135deg, #1a1a2e 60%, #2a1f0a 100%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 60 }}>
          <FadeIn style={{ flex: 1 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
              <span className="section-label" />Testimonial
            </h2>
            <blockquote style={{ color: "#9090b0", fontSize: 15, lineHeight: 1.9, borderLeft: "3px solid #d4a843", paddingLeft: 20, marginBottom: 20, fontStyle: "italic" }}>
              "The design quality, flexibility, documentation and support are all absolutely excellent. I buy the Aveda theme for all my clients, knowing that whatever they require, Aveda will be able to deliver."
            </blockquote>
            <p style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>Josef Sharon</p>
            <p style={{ color: "#d4a843", fontSize: 13 }}>CEO, Genuft</p>
          </FadeIn>
          <FadeIn delay={0.2} style={{ flex: "0 0 280px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: 220, height: 260, background: "linear-gradient(160deg, #d4a843 0%, #a07825 100%)", borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
              <span>🧑</span>
            </div>
          </FadeIn>
        </div>
      </section> */}

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 6%", background: "#12122a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>Contact Me</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", marginBottom: 40 }}>
              <div className="contact-item">
                <svg width="20" height="20" fill="none" stroke="#d4a843" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                <span><a href="mailto:quentindmello48@gmail.com">quentindmello48@gmail.com</a></span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" fill="none" stroke="#d4a843" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.12a16 16 0 006.29 6.29l1.45-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span><a href="tel:+919730208681">+91-9730208681</a></span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" fill="none" stroke="#d4a843" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Mumbai, India</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 14,
                marginBottom: 60,
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/quentin-dmello-21a0a110b/"
                className="social-btn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0d0d1f", padding: "24px 6%", textAlign: "center", borderTop: "1px solid #1e1e35" }}>
        <p style={{ color: "#d4a843", fontSize: 15, fontStyle: "italic", fontWeight: 600, letterSpacing: "0.04em" }}>"Thanks for Scrolling"</p>
      </footer>
    </div>
  );
}
