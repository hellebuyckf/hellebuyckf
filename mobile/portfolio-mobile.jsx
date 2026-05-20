// Mobile portfolio — Clinical Signal
// Single-column, touch-friendly, no tweaks panel.

const VIBE = {
  headFont: '"Inter Tight", "Inter", system-ui, sans-serif',
  monoFont: '"JetBrains Mono", monospace',
  bg: '#06090B', bg2: '#0B1014',
  panel: 'rgba(255,255,255,0.025)',
  border: 'rgba(120,200,210,0.14)',
  text: '#E8EFF1', dim: '#88979B',
  accent: 'oklch(0.82 0.13 195)',
  glow: 'oklch(0.75 0.13 195 / 0.18)',
  radius: 8,
};

const PROJECTS = [
  {
    tag: 'Performance · Vision',
    title: 'Aria',
    sub: 'Analyse posturale du coureur',
    desc: 'Vision par ordinateur pour la détection des compensations biomécaniques en course. Cadence, asymétrie, retour structuré pour coachs et kinésithérapeutes du sport.',
    stack: ['Python', 'Vision', 'MLflow', 'Docker'],
    metric: { v: '60 fps', l: 'temps réel' },
    github: 'https://github.com/hellebuyckf/aria',
  },
  {
    tag: 'Clinical · Triage',
    title: 'Triage Urgence',
    sub: "Système d'aide à la décision pour le tri ESI",
    desc: 'Pipeline LLM enrichi par RAG sur référentiels cliniques. Scoring multi-critères, journal de décision auditable, interface conçue avec la contrainte temps des urgentistes.',
    stack: ['LangChain', 'RAG', 'ChromaDB', 'FastAPI', 'PEFT'],
    metric: { v: '< 800ms', l: 'latence cible' },
    github: 'https://github.com/hellebuyckf/triage_medical',
  },
];

const SKILLS = [
  { g: 'LLM & IA Générative', items: ['LangChain', 'HuggingFace', 'Fine-tuning', 'RAG', 'ChromaDB', 'Prompt Engineering'] },
  { g: 'Développement & API', items: ['Python', 'FastAPI', 'Java', 'Spring Batch', 'Bash', 'JavaScript', 'SQL'] },
  { g: 'DevOps & Administration', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Git', 'Maven', 'Monitoring'] },
  { g: 'Data & Big Data', items: ['Apache Spark', 'Kafka', 'Elasticsearch', 'Hadoop', 'PySpark', 'Cloudera CDH'] },
  { g: 'Cloud Azure', items: ['IoT Hub', 'Event Hub', 'HDInsight', 'Data Factory', 'Stream Analytics', 'ACR'] },
  { g: 'Outillage IA & ML', items: ['MLflow', 'LangSmith', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'] },
];

const EXPERIENCE = [
  {
    y: 'JUIN 2025 →',
    t: 'AI Engineer',
    sub: 'OpenClassrooms',
    subColor: 'rgb(46.3% 31.8% 92.2%)',
    d: 'Formation diplômante RNCP Niveau 7 (Bac+5) · 804h + 14 projets pratiques. Spécialisation IA appliquée : LLM, RAG, fine-tuning, déploiement.',
  },
  {
    y: '2013 → 2025',
    t: 'Architecte Technique Senior',
    sub: 'CGI',
    subColor: 'rgb(88.3% 13.1% 21.4%)',
    d: 'Paris (2013–2016) · Montpellier (2016–2025). Missions grands comptes : Télécom, Finance, Industrie, Énergie. Conception et exploitation de plateformes data critiques.',
  },
  {
    y: '1997 → 2012',
    t: 'Architecte Technique / Expert JEE',
    sub: 'Logica → CGI',
    subColor: 'rgb(100% 80% 0%)',
    d: 'Paris · Secteurs : Télécom, Finance, Énergie, Industrie. Développement, expertise JEE, architecture applicative.',
  },
];

function ecgPath(w = 800, h = 80) {
  const mid = h / 2;
  const segments = Math.floor(w / 200);
  let d = `M 0 ${mid}`;
  for (let i = 0; i < segments; i++) {
    const x = i * 200;
    d += ` L ${x + 60} ${mid}`;
    d += ` L ${x + 75} ${mid - 8}`;
    d += ` L ${x + 90} ${mid + 5}`;
    d += ` L ${x + 100} ${mid - h * 0.35}`;
    d += ` L ${x + 110} ${mid + h * 0.18}`;
    d += ` L ${x + 125} ${mid - 4}`;
    d += ` L ${x + 145} ${mid + 10}`;
    d += ` L ${x + 200} ${mid}`;
  }
  d += ` L ${w} ${mid}`;
  return d;
}

const C = VIBE;

const Eyebrow = ({ num, label }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    fontFamily: C.monoFont, fontSize: 13, letterSpacing: '0.16em',
  }}>
    <span style={{ color: C.accent }}>/{num}</span>
    <span style={{ width: 24, height: 1, background: C.accent }} />
    <span style={{ color: C.text, fontWeight: 600 }}>{label.toUpperCase()}</span>
  </div>
);

const PortfolioMobile = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const linkStyle = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    height: 38, borderRadius: 999, padding: '0 12px',
    border: `1px solid ${C.border}`, background: C.panel,
    color: C.dim, textDecoration: 'none',
    fontFamily: C.monoFont, fontSize: 13,
  };

  return (
    <div style={{
      background: C.bg, color: C.text, fontFamily: C.headFont,
      minHeight: '100%', position: 'relative', overflowX: 'hidden',
    }}>

      {/* Ambient glow */}
      <div style={{
        position: 'fixed', top: -150, right: -150,
        width: 400, height: 400, pointerEvents: 'none', zIndex: 0,
        background: `radial-gradient(circle, ${C.glow}, transparent 70%)`,
      }} />

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: C.bg + 'EE', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '14px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, border: `1.5px solid ${C.accent}`, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: C.monoFont, fontSize: 11, color: C.accent, fontWeight: 600,
          }}>fh</div>
          <span style={{ fontSize: 15, fontWeight: 500 }}>François Hellebuyck</span>
        </div>
        <button
          onClick={() => setNavOpen(o => !o)}
          style={{
            background: 'none', border: `1px solid ${C.border}`, color: C.text,
            padding: '6px 10px', borderRadius: 6, cursor: 'pointer',
            fontFamily: C.monoFont, fontSize: 18, lineHeight: 1,
          }}
          aria-label="Menu"
        >{navOpen ? '✕' : '☰'}</button>
      </nav>

      {/* Dropdown nav */}
      {navOpen && (
        <div style={{
          position: 'fixed', top: 57, left: 0, right: 0, zIndex: 99,
          background: C.bg2, borderBottom: `1px solid ${C.border}`,
          padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {[['#about','À propos'],['#projects','Projets'],['#skills','Compétences'],['#experience','Expérience'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setNavOpen(false)} style={{
              color: C.dim, textDecoration: 'none', fontFamily: C.monoFont,
              fontSize: 15, padding: '12px 0', borderBottom: `1px solid ${C.border}`,
              letterSpacing: '0.06em',
            }}>{label}</a>
          ))}
        </div>
      )}

      {/* ECG background hero */}
      <svg viewBox="0 0 800 80" style={{
        position: 'absolute', top: 56, left: 0, width: '100%', height: 80,
        opacity: 0.18, pointerEvents: 'none',
      }}>
        <path d={ecgPath(800, 80)} fill="none" stroke={C.accent} strokeWidth={1} />
      </svg>

      {/* Hero */}
      <section style={{ padding: '60px 20px 48px', position: 'relative', zIndex: 1 }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 12px', borderRadius: 999, border: `1px solid ${C.border}`,
          fontFamily: C.monoFont, fontSize: 11, color: C.accent,
          letterSpacing: '0.06em', marginBottom: 28,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent }} />
          SIGNAL ACTIF · DISPONIBLE
        </div>

        {/* Profile image */}
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          border: `1px solid ${C.border}`, overflow: 'hidden',
          marginBottom: 28,
        }}>
          <img src="../assets/profile.png" alt="François Hellebuyck"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.4) contrast(1.1) brightness(0.92)' }} />
        </div>

        <h1 style={{
          fontSize: 44, lineHeight: 1.0, fontWeight: 500, margin: '0 0 20px',
          letterSpacing: '-0.03em', fontFamily: C.headFont,
        }}>
          IA fiable pour <span style={{ color: C.accent, fontStyle: 'italic', fontWeight: 400 }}>la production</span>.
        </h1>

        <p style={{ fontSize: 17, color: C.dim, lineHeight: 1.6, margin: '0 0 32px', maxWidth: 420 }}>
          Architecte technique, j'ai conçu des systèmes data critiques pour de grands comptes. Aujourd'hui j'applique cette même rigueur d'ingénierie à l'IA.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="#projects" style={{
            background: C.accent, color: C.bg, padding: '14px 20px',
            fontSize: 16, fontWeight: 600, textDecoration: 'none', borderRadius: C.radius,
            display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start',
          }}>Découvrir les projets <span>→</span></a>

          <a href="https://linkedin.com/in/fhellebuyck" target="_blank" rel="noopener" style={{
            color: C.text, padding: '12px 20px', fontSize: 15, fontWeight: 500,
            textDecoration: 'none', border: `1px solid ${C.border}`, borderRadius: C.radius,
            alignSelf: 'flex-start',
          }}>linkedin.com/in/fhellebuyck</a>
        </div>

        {/* Icon links */}
        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          <a href="https://github.com/hellebuyckf" target="_blank" rel="noopener" style={linkStyle}>
            Mon GitHub
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://huggingface.co/FrancoisFormation" target="_blank" rel="noopener" style={linkStyle}>
            Mon HF <span>🤗</span>
          </a>
          <a href="../CV_FrancoisHellebuyck_AIEngineer_v6_aere.pdf" target="_blank" rel="noopener" style={linkStyle}>
            Mon CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '48px 20px', borderTop: `1px solid ${C.border}`, background: C.bg2 }}>
        <Eyebrow num="01" label="À propos" />
        <h2 style={{ fontSize: 26, fontWeight: 500, lineHeight: 1.2, margin: '20px 0', letterSpacing: '-0.02em', fontFamily: C.headFont }}>
          Une discipline construite sur des systèmes critiques, appliquée à l'IA partout où la fiabilité compte.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, margin: '0 0 16px' }}>
          Aujourd'hui ingénieur IA, j'arrive avec plus d'une décennie d'expérience comme architecte applicatif sur des plateformes data critiques pour de grands comptes.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: C.dim, margin: '0 0 16px' }}>
          Je porte cette discipline dans l'IA appliquée : faire fonctionner des modèles est aujourd'hui accessible — les rendre <span style={{ color: C.text }}>fiables, évaluables, traçables, déployables</span>, ne l'est pas.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: C.dim, margin: 0 }}>
          C'est précisément cet espace que j'occupe.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: '48px 20px' }}>
        <Eyebrow num="02" label="Projets" />
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PROJECTS.map(p => (
            <div key={p.title} style={{
              background: C.bg2, border: `1px solid ${C.border}`,
              padding: 24, borderRadius: C.radius, position: 'relative', overflow: 'hidden',
            }}>
              <svg viewBox="0 0 200 50" style={{
                position: 'absolute', top: 16, right: 16, width: 120, height: 36,
                opacity: 0.2, pointerEvents: 'none',
              }}>
                <path d={ecgPath(200, 50)} fill="none" stroke={C.accent} strokeWidth={1} />
              </svg>

              <div style={{ fontFamily: C.monoFont, fontSize: 11, color: C.accent, letterSpacing: '0.08em', marginBottom: 16 }}>
                {p.tag.toUpperCase()}
              </div>
              <h3 style={{ fontSize: 32, fontWeight: 500, margin: '0 0 6px', letterSpacing: '-0.02em', fontFamily: C.headFont }}>{p.title}</h3>
              <div style={{ fontSize: 15, color: C.dim, marginBottom: 16 }}>{p.sub}</div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: C.text, margin: '0 0 20px' }}>{p.desc}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 8 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', maxWidth: '70%' }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: C.monoFont, fontSize: 11,
                      padding: '3px 8px', border: `1px solid ${C.border}`, color: C.dim,
                      letterSpacing: '0.06em', borderRadius: 999,
                    }}>{s}</span>
                  ))}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 24, color: C.accent, fontWeight: 500, fontFamily: C.monoFont }}>{p.metric.v}</div>
                  <div style={{ fontSize: 11, color: C.dim, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.metric.l}</div>
                </div>
              </div>

              {p.migration && (
                <div style={{ marginTop: 16, borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
                  <span style={{ fontFamily: C.monoFont, fontSize: 12, color: C.dim, letterSpacing: '0.04em' }}>Projet en cours de migration vers le portfolio</span>
                </div>
              )}
              {p.github && (
                <div style={{ marginTop: 16, borderTop: `1px solid ${C.border}`, paddingTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: C.monoFont, fontSize: 12, color: C.dim, letterSpacing: '0.04em' }}>Découvrir le projet :</span>
                  <a href={p.github} target="_blank" rel="noopener" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: C.accent, textDecoration: 'none', fontSize: 13,
                    fontFamily: C.monoFont, letterSpacing: '0.04em',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    {p.github.replace('https://github.com/', '')}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: '48px 20px', borderTop: `1px solid ${C.border}`, background: C.bg2 }}>
        <Eyebrow num="03" label="Stack technique" />
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {SKILLS.map(g => (
            <div key={g.g} style={{ padding: '20px 0', borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 13, color: C.accent, fontFamily: C.monoFont, letterSpacing: '0.06em', marginBottom: 12 }}>
                {g.g}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map(i => (
                  <span key={i} style={{
                    fontSize: 13, padding: '5px 10px', background: C.panel,
                    border: `1px solid ${C.border}`, borderRadius: C.radius, color: C.text,
                  }}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '48px 20px' }}>
        <Eyebrow num="04" label="Parcours" />
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ paddingBottom: 32, borderLeft: `1px solid ${C.border}`, paddingLeft: 20, marginLeft: 6, position: 'relative' }}>
              <div style={{
                position: 'absolute', left: -5, top: 6,
                width: 10, height: 10, borderRadius: '50%',
                background: C.bg, border: `2px solid ${C.accent}`,
              }} />
              <div style={{ fontFamily: C.monoFont, fontSize: 11, color: C.accent, letterSpacing: '0.06em', marginBottom: 6 }}>{e.y}</div>
              <div style={{ fontSize: 20, fontWeight: 500, fontFamily: C.headFont, lineHeight: 1.2 }}>
                {e.t}
                {e.sub && <span style={{ color: e.subColor, fontWeight: 400, fontSize: 16 }}> · {e.sub}</span>}
              </div>
              <div style={{ fontSize: 15, color: C.dim, marginTop: 6, lineHeight: 1.6 }}>{e.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '48px 20px', borderTop: `1px solid ${C.border}`, background: C.bg2, position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 800 60" style={{ position: 'absolute', bottom: 20, left: 0, width: '100%', opacity: 0.12, pointerEvents: 'none' }}>
          <path d={ecgPath(800, 60)} fill="none" stroke={C.accent} strokeWidth={1} />
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow num="05" label="Contact" />
          <h2 style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.03em', margin: '20px 0 12px', lineHeight: 1.1, fontFamily: C.headFont }}>
            Construisons quelque chose<br />
            <span style={{ color: C.accent, fontStyle: 'italic', fontWeight: 400 }}>d'utile.</span>
          </h2>
          <p style={{ fontSize: 16, color: C.dim, lineHeight: 1.6, margin: '0 0 28px' }}>
            En recherche d'un poste en CDI d'ingénieur IA. Discutons de votre besoin.
          </p>
          <a style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: C.accent, color: C.bg, padding: '14px 20px', borderRadius: C.radius,
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
          }} href="https://linkedin.com/in/fhellebuyck" target="_blank" rel="noopener">
            linkedin.com/in/fhellebuyck →
          </a>
        </div>
        <div style={{
          marginTop: 60, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
          fontFamily: C.monoFont, fontSize: 11, color: C.dim,
          letterSpacing: '0.08em', position: 'relative', zIndex: 1,
        }}>
          <span>© {new Date().getFullYear()} FRANÇOIS HELLEBUYCK</span>
          <span>FR · INGÉNIERIE IA</span>
        </div>
      </section>
    </div>
  );
};

window.PortfolioMobile = PortfolioMobile;
