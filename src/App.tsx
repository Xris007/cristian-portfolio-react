import { BackgroundEffects } from './components/BackgroundEffects';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PortfolioChat } from './components/PortfolioChat';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useReveal } from './hooks/useReveal';
import { useScrollTheme } from './hooks/useScrollTheme';

export default function App() {
  useScrollTheme();
  useReveal();
  return <>
    <BackgroundEffects />
    <Navbar />
    <main className="portfolio-page">
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <PortfolioChat />
      <Contact />
    </main>
    <footer>Cristian Eduardo Velásquez Ramírez · Lima, Peru · 2026</footer>
  </>;
}
