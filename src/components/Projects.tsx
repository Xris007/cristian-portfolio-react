import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section data-reveal id="projects" className="section-band projects-section section">
      <div className="section-shell">
        <p className="eyebrow">Selected projects</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <span>0{index + 1}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a href="https://github.com/" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
