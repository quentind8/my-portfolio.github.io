import { useState, useEffect, useRef } from "react";
import "./App.css";

import {
  FaLinkedinIn,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
  FaLaptopCode,
} from "react-icons/fa";

import { SiJquery, SiMysql } from "react-icons/si";

const skills = [
  { name: "ReactJS", className: "skill-one", icon: <FaReact /> },
  { name: "Html & CSS", className: "skill-two", icon: <FaLaptopCode /> },
  { name: "JavaScript", className: "skill-three", icon: <FaJs /> },
  { name: "jQuery", className: "skill-four", icon: <SiJquery /> },
  { name: "Bootstrap", className: "skill-five", icon: <FaBootstrap /> },
  { name: "HTML5", className: "skill-six", icon: <FaHtml5 /> },
  { name: "MySql", className: "skill-seven", icon: <SiMysql /> },
  { name: "CSS3", className: "skill-eight", icon: <FaCss3Alt /> },
  { name: "Wordpress", className: "skill-nine", icon: <FaWordpress /> },
];

const experiences = [
  {
    year: "MARCH 2023 — PRESENT",
    title: "Software Developer Analyst",
    company: "Accenture",
  },
  {
    year: "FEBRUARY 2021 — FEBRUARY 2023",
    title: "Software Developer Associate",
    company: "Accenture",
  },
  {
    year: "MAY 2019 — JULY 2019",
    title: "Project Coordinator",
    company: "Foxjab",
  },
  {
    year: "JULY 2017 — JULY 2018",
    title: "Software Developer",
    company: "Foxjab",
  },
  {
    year: "AUGUST 2016 — MARCH 2017",
    title: "Software Developer",
    company: "Studio Overhaul",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function FadeIn({ children, delayClass = "", className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? "is-visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("About");


  // ADD THIS LINE
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });

  setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
  setMobileMenuOpen(false);
};

  return (
    <div className="app-container">
      {/* NAV */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar__logo">D</div>
<button
  className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label="Toggle Menu"
>
  <span />
  <span />
  <span />
</button>
        
        <div
          className={`navbar__links ${
            mobileMenuOpen ? "mobile-open" : ""
          }`}
        >
          {["about", "skills", "experience", "contact"].map((item) => (
            <span
              key={item}
              className={`nav-link ${
                activeNav.toLowerCase() === item ? "active" : ""
              }`}
              onClick={() => scrollTo(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="hero">
        <div className="hero__bg-panel" />
        <div className="hero__bg-glow" />

        <div className="hero__inner">
          <div className="hero__text">
            <FadeIn>
              <p className="hero__eyebrow">I'M</p>
              <h1 className="hero__name">Quentin Dmello</h1>
              <p className="hero__role">Software Developer</p>

              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
            </FadeIn>

            <div className="hero__social">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/quentin-dmello-21a0a110b/"
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <FadeIn delayClass="delay-2" className="hero__image-wrap">
            <div className="hero__card">
              <div className="hero__blob">
                <div className="hero__blob-inner">
                  <span className="hero__emoji">👨‍💻</span>
                </div>
              </div>

              <div className="hero__accent-dot">⚡</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="about-section">
        <FadeIn>
          <h2>
            <span className="section-label" />
            About
          </h2>

          <p>
            I am seeking a professional working platform, with a strong desire to
            put in my inherent skills and abilities to effective utilization and
            realization, and contribute to the progress of organization with
            subsequent expansion in my knowledge sphere. I foresee myself to be
            part of top-notch team of professionals with sincerity, creativity
            and dedication.
          </p>
        </FadeIn>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="container">
          <FadeIn>
            <h2>My Skills</h2>
          </FadeIn>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <FadeIn key={skill.name} delayClass={`delay-${index}`}>
                <div className={`skill-card ${skill.className}`}>
                  <span className="skill-icon skill-card__icon">
                    {skill.icon}
                  </span>

                  <span className="skill-card__name">{skill.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-section">
        <div className="container">
          <FadeIn>
            <h2>Experience</h2>
          </FadeIn>

          <div className="exp-list">
            {experiences.map((exp, index) => (
              <FadeIn key={`${exp.year}-${exp.title}`} delayClass={`delay-${index}`}>
                <div className="exp-card">
                  <div className="exp-card__header">
                    <div className="year-badge">{exp.year}</div>

                    <div>
                      <h3 className="exp-card__title">{exp.title}</h3>
                      <p className="exp-card__company">{exp.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-section__inner">
          <FadeIn>
            <h2>Contact Me</h2>

            <div className="contact-items">
              <div className="contact-item">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#d4a843"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>

                <span>
                  <a href="mailto:quentindmello48@gmail.com">
                    quentindmello48@gmail.com
                  </a>
                </span>
              </div>

              <div className="contact-item">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#d4a843"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.12a16 16 0 006.29 6.29l1.45-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>

                <span>
                  <a href="tel:+919730208681">+91-9730208681</a>
                </span>
              </div>

              <div className="contact-item">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#d4a843"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <span>Mumbai, India</span>
              </div>
            </div>

            <div className="social-row">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/quentin-dmello-21a0a110b/"
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>"Thanks for Scrolling"</p>
      </footer>
    </div>
  );
}