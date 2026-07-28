import { Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section data-reveal id="contact" className="section-band contact-section section">
      <div className="section-shell">
        <div className="contact-card">
          <p className="eyebrow">Let's work together</p>
          <h2>Have a project or role in mind?</h2>
          <p>Open to full-time opportunities, freelance projects and technical consulting.</p>
          <div className="actions">
            <a className="button primary" href="https://wa.me/51977747072" target="_blank" rel="noreferrer"><MessageCircle size={17}/> Start a conversation</a>
            <a className="button" href="mailto:xris0711@gmail.com"><Mail size={17}/> Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
