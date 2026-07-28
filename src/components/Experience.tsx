import { experiences } from '../data/portfolio';

export function Experience() {
  return (
    <section data-reveal id="experience" className="section-band experience-section section">
      <div className="section-shell">
        <p className="eyebrow">Where I've built</p>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="experience" key={experience.company}>
              <div className="dot"/>
              <div>
                <div className="experience-head"><h3>{experience.company}</h3><span>{experience.period}</span></div>
                <p className="job-role">{experience.role}</p>
                <h4>{experience.headline}</h4>
                <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="tags">{experience.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
