export function Navbar() {
  return <>
    <div className="progress" />
    <nav>
      <a href="#hero" className="logo">cv<span>.</span></a>
      <div className="nav-links">
        <a href="#stack">Stack</a>
        {/* <a href="#projects">Projects</a> */}
        <a href="#experience">Experience</a>
        <a href="#chat">Ask me</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </>;
}
