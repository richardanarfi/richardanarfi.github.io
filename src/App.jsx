import { siteContent } from './content'

export default function App() {
  const { name, title, subtitle, links, projects, writing, about, contactEmail } = siteContent

  return (
    <div className="page">
      <header className="hero card">
        <p className="eyebrow">{name}</p>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        <div className="linkRow">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="section">
          <h2>Featured Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p className="muted">{project.subtitle}</p>
                <p>{project.summary}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub repo</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section twoCol">
          <div className="card">
            <h2>Writing</h2>
            <ul>
              {writing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>About</h2>
            {about.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p>
              Contact: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
