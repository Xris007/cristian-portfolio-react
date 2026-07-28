import { ArrowRight, Download, Mail, MessageCircle } from 'lucide-react';
import { roles } from '../data/portfolio';
import { useTypedText } from '../hooks/useTypedText';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Hero() {
  const typed = useTypedText(roles);

  return (
    <section id="hero" className="hero-cinematic" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="hero-portrait-wrap" aria-hidden="true">
        <div className="portrait-aura" />
        <img
          src="/images/portrait/cristian-portrait.png"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
          alt=""
          className="hero-portrait-cinematic"
          width={1200}
          height={1500}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="hero-content section-shell">
        <div className="hero-left">
          <p className="hero-kicker">Full Stack Software Engineer</p>
          <h1 id="hero-title">
            <span>Build</span>
            <span className="outline-word">Digital</span>
            <span>Futures</span>
          </h1>
          <p className="hero-summary">
            I design and develop scalable web applications, secure APIs, and digital experiences focused on solving real business problems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://wa.me/51977747072" target="_blank" rel="noreferrer">
              Let's Talk <ArrowRight size={17} />
            </a>
            {/* <a className="button glass" href="#projects">
              View Projects <ArrowRight size={17} />
            </a> */}
          </div>
          <div className="hero-socials" aria-label="Professional links">
            <a href="https://github.com/Xris007" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon width={18} height={18} /></a>
            <a href="https://www.linkedin.com/in/cristianvelasquezr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon width={18} height={18} /></a>
            <a href="mailto:xris0711@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://wa.me/51977747072" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>

        <aside className="hero-right" aria-label="Professional introduction">
          <div className="availability"><span /> Available for new opportunities</div>
          <h2>Innovate.<br /><em>Develop.</em><br />Succeed.<br /><em>Fast.</em></h2>
          <p>
            I build products with maintainable code, scalable architecture, and thoughtful user experiences.
          </p>
          <div className="typed-mini"><span>{typed}</span><i /></div>
          <a className="signature" href="#experience">Cristian Eduardo Velásquez Ramírez</a>
          <span className="signature-role">Full Stack Developer · Lima, Peru</span>
        </aside>
      </div>

      <div className="hero-stats section-shell" aria-label="Professional summary">
        <div><strong>4+</strong><span>Years of Experience</span></div>
        <div><strong>3</strong><span>Companies</span></div>
        <div><strong>15+</strong><span>Technologies</span></div>
        <div><strong>2</strong><span>Languages</span></div>
      </div>
    </section>
  );
}
