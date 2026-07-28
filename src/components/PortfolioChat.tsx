import { FormEvent, useEffect, useRef, useState } from 'react';

type ChatMessage = { id: number; author: 'ai' | 'user'; text: string };

const suggestions = [
  "What's your tech stack?",
  'Tell me about Cineplanet',
  'Do you use AI tools?',
  'Are you available for hire?',
  'What languages do you speak?',
];

function getResponse(question: string) {
  const value = question.toLowerCase();
  if (/spanish|language|speak/.test(value)) return 'Cristian is a native Spanish speaker and uses professional English for meetings, documentation, and technical collaboration.';
  if (/cinep|cinema|prime|mozo/.test(value)) return 'At Cineplanet, Cristian worked on full-stack digital products with NestJS, PostgreSQL, Angular/React-related frontend flows, authentication and the Prime room waiter-request experience.';
  if (/fyran|carga masiva|transport/.test(value)) return 'At Fyranova, Cristian built and improved Angular and .NET modules for corporate transportation, including bulk Excel uploads, service workflows, stored procedures and production-oriented maintenance.';
  if (/ai|ia|chatgpt|claude/.test(value)) return 'Yes. Cristian uses AI tools for code review, debugging, documentation and rapid prototyping while validating every technical decision.';
  if (/avail|hire|job|freelan|work|oportunid|contrat/.test(value)) return 'Cristian is available for full-time and freelance opportunities. You can contact him through WhatsApp, LinkedIn or email from this portfolio.';
  if (/skill|tech|stack|frontend|backend|react|angular|nestjs|\.net|node|sql/.test(value)) return 'Frontend: React, Angular, TypeScript, RxJS and PrimeNG. Backend: NestJS, Node.js, C#/.NET and REST APIs. Databases: PostgreSQL and SQL Server. Cloud and delivery: AWS, Azure, Docker and CI/CD.';
  return 'That topic is not yet included in the local assistant. For a detailed answer, contact Cristian directly through the links below.';
}

export function PortfolioChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, author: 'ai', text: "Hi! I'm Cristian's portfolio assistant. Ask me about his experience, skills or availability — in English or Spanish." },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const nextId = useRef(2);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy]);

  const submit = (question: string) => {
    const clean = question.trim();
    if (!clean || busy) return;
    setMessages((current) => [...current, { id: nextId.current++, author: 'user', text: clean }]);
    setInput('');
    setBusy(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { id: nextId.current++, author: 'ai', text: getResponse(clean) }]);
      setBusy(false);
    }, 650);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(input);
  };

  return (
    <section data-reveal id="chat" className="section-band chat-section section">
      <div className="section-shell">
      <p className="eyebrow">Ask my portfolio</p>
      <p className="section-intro">A lightweight local assistant that answers common questions without sending information to an external service.</p>
      <div className="chat-box">
        <div className="chat-header"><div><span className="traffic red"/><span className="traffic yellow"/><span className="traffic green"/></div><span>portfolio-assistant.local</span><b>AI · Online</b></div>
        <div ref={listRef} className="chat-messages">
          {messages.map((message) => <div className={`message ${message.author}`} key={message.id}><span className="avatar">{message.author === 'ai' ? 'AI' : 'You'}</span><p>{message.text}</p></div>)}
          {busy && <div className="message ai"><span className="avatar">AI</span><p className="typing"><i/><i/><i/></p></div>}
        </div>
        <div className="chat-suggestions">{suggestions.map((suggestion) => <button type="button" onClick={() => submit(suggestion)} key={suggestion}>{suggestion}</button>)}</div>
        <form className="chat-form" onSubmit={onSubmit}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about experience, skills or availability..." aria-label="Portfolio question"/><button type="submit" disabled={busy}>Send →</button></form>
      </div>
      </div>
    </section>
  );
}
