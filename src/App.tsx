import './App.css'

function App() {
  const snakeCells = Array.from({ length: 64 }, (_, index) => index)

  const snake = [42, 43, 44, 45, 37, 29]
  const food = 14

  return (
    <div className="site">
      <header className="navbar">
        <a className="wordmark" href="#top">
          JONAH<span>.</span>GREEN
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-meta">
            <span>FULL-STACK SOFTWARE ENGINEER</span>
            <span>MINNESOTA / GRADUATING 2027</span>
          </div>

          <h1>
            Jonah
            <br />
            Green
          </h1>

          <h2>
            I build software for real processes,
            <br />
            real users, and occasionally snakes.
          </h2>

          <p className="hero-description">
            Software Engineering student and full-stack developer working with
            React, Node, SQL, Python, cloud infrastructure, and whatever else
            the problem calls for.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#work">
              View My Work
            </a>

            <a
              className="secondary-button"
              href="https://github.com/JonahG046"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="currently">
            <p className="micro-label">CURRENTLY</p>

            <div className="currently-grid">
              <span>Building internal business software</span>
              <span>Exploring reinforcement learning</span>
              <span>Finishing my B.S. in Software Engineering</span>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <span>01 /</span>
            <h2>Selected Work</h2>
          </div>

          <article className="snake-project">
            <div className="project-content">
              <div className="project-topline">
                <span>PROJECT_01</span>
                <span>AI / REINFORCEMENT LEARNING</span>
              </div>

              <div className="project-number">01</div>

              <h3>SnakeAI</h3>

              <p className="project-summary">
                A reinforcement learning project that teaches an AI agent to
                play Snake using Deep Q-Learning.
              </p>

              <p className="project-detail">
                The next version will turn this into an interactive portfolio
                demo where visitors can watch the agent improve, compare
                training stages, and run a trained model.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>PyTorch</span>
                <span>DQN</span>
                <span>Reinforcement Learning</span>
              </div>

              <div className="project-status">
                <span className="status-dot"></span>
                <span>Interactive demo planned</span>
              </div>
            </div>

            <div className="snake-demo">
              <div className="demo-header">
                <span>SNAKE_AI // TRAINING</span>
                <span>EPISODE 1842</span>
              </div>

              <div className="snake-grid" aria-label="Snake AI preview">
                {snakeCells.map((cell) => {
                  const isSnake = snake.includes(cell)
                  const isHead = cell === snake[snake.length - 1]
                  const isFood = cell === food

                  let className = 'snake-cell'

                  if (isSnake) className += ' snake-body'
                  if (isHead) className += ' snake-head'
                  if (isFood) className += ' snake-food'

                  return <div className={className} key={cell}></div>
                })}
              </div>

              <div className="demo-stats">
                <div>
                  <span>SCORE</span>
                  <strong>18</strong>
                </div>

                <div>
                  <span>HIGH</span>
                  <strong>37</strong>
                </div>

                <div>
                  <span>EPSILON</span>
                  <strong>0.13</strong>
                </div>
              </div>

              <p className="demo-note">Live browser version coming later.</p>
            </div>
          </article>

          <article className="secondary-project">
            <div>
              <span className="micro-label">PROJECT_02</span>
              <h3>More work coming soon.</h3>
            </div>

            <p>
              I&apos;m currently deciding which project best represents the
              next part of my work.
            </p>
          </article>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span>02 /</span>
            <h2>Experience</h2>
          </div>

          <div className="experience-layout">
            <div>
              <p className="micro-label">PROFESSIONAL DEVELOPMENT</p>
              <h3>Full-Stack Software Development</h3>
            </div>

            <div className="experience-copy">
              <p>
                I build internal web applications and tools that help turn
                manual business processes into usable software.
              </p>

              <p>
                My work includes frontend development, backend APIs, database
                integration, reporting, automation, and working directly with
                users to understand the problems they need solved.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-heading">
            <span>03 /</span>
            <h2>Technical Toolkit</h2>
          </div>

          <div className="skills-grid">
            <div>
              <p className="micro-label">FRONTEND</p>
              <p>React</p>
              <p>TypeScript</p>
              <p>JavaScript</p>
              <p>Redux Toolkit</p>
              <p>HTML / CSS</p>
            </div>

            <div>
              <p className="micro-label">BACKEND</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>Flask</p>
              <p>REST APIs</p>
            </div>

            <div>
              <p className="micro-label">DATA</p>
              <p>SQL Server</p>
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>Sequelize</p>
            </div>

            <div>
              <p className="micro-label">CLOUD & TOOLS</p>
              <p>AWS</p>
              <p>Azure</p>
              <p>Git / GitHub</p>
              <p>GitHub Actions</p>
              <p>CI/CD</p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span>04 /</span>
            <h2>About</h2>
          </div>

          <div className="about-layout">
            <h3>
              I like building things that have an actual reason to exist.
            </h3>

            <div>
              <p>
                I&apos;m a Software Engineering student interested in full-stack
                development, automation, data, and intelligent systems.
              </p>

              <p>
                I&apos;m especially interested in projects where software can
                remove repetitive work, make information easier to understand,
                or connect several complicated systems into something people
                can actually use.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <span>05 /</span>
            <h2>Education</h2>
          </div>

          <div className="education-row">
            <div>
              <p className="micro-label">
                MINNESOTA STATE UNIVERSITY, MANKATO
              </p>

              <h3>B.S. Software Engineering</h3>
            </div>

            <div>
              <p>Minor in Mathematics</p>
              <p>Expected Graduation / Spring 2027</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="micro-label">06 / CONTACT</p>

          <h2>Have something worth building?</h2>

          <p>
            I&apos;m always interested in talking about software, projects, and
            opportunities to build useful things.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://github.com/JonahG046"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Jonah Green</span>

        <span className="footer-build">
          React / TypeScript / Vite / Vercel
        </span>
      </footer>
    </div>
  )
}

export default App