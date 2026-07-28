import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section data-reveal id="stack" className="skills-section section">
      <div className="section-shell">
        <p className="eyebrow">Tech I work with</p>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className={`card ${group.ai ? 'ai' : ''}`} key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
              {group.note && <p>{group.note}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
