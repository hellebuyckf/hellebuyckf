// Variation 2 — "Clinical Signal" + Tweaks
// Esthétique : sombre profond, héro aéré, ECG en accent.
// 3 tweaks expressifs : Vibe, Signal intensity, Densité.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "clinical",
  "signal": 70,
  "density": "standard",
  "focus": "all"
}/*EDITMODE-END*/;

const FOCUS = {
  all:      { highlight: 'la production',  tagline: "Architecte technique, j'ai conçu des systèmes data critiques pour de grands comptes. Aujourd'hui j'applique cette même rigueur d'ingénierie à l'IA : concevoir des systèmes IA fiables et déployables en production.", h2: "Une discipline construite sur des systèmes critiques, appliquée à l'IA partout où la fiabilité compte.", chip: 'INGÉNIEUR IA · PRODUCTION-READY', cta: "Construisons quelque chose", cta2: 'd\'utile.', contactSub: 'En recherche d\'un poste en CDI d\'ingénieur IA. Discutons de votre besoin.' },
  health:   { highlight: 'santé',          tagline: "Architecte technique reconverti à l'ingénierie IA. Je construis des systèmes que les cliniciens peuvent utiliser — robustes, évalués, déployés.", h2: "Une discipline construite sur des systèmes critiques, transposée à un domaine où chaque décision compte.", chip: 'ING. IA · SANTÉ · FR', cta: "Construisons quelque chose", cta2: 'd\'utile.', contactSub: 'En recherche d\'un poste en CDI d\'ingénieur IA — focus santé. Discutons de votre besoin.' },
  industry: { highlight: 'l\'industrie',   tagline: "Architecte technique passé à l'ingénierie IA. Je conçois des systèmes IA pour des environnements industriels — temps réel, contraintes opérationnelles, intégration legacy.", h2: "Une discipline forgée sur des systèmes critiques, appliquée à l'IA en environnement industriel.", chip: 'ING. IA · INDUSTRIE · FR', cta: "Construisons quelque chose", cta2: 'qui tient.', contactSub: 'En recherche d\'un poste en CDI d\'ingénieur IA — focus industrie. Discutons de votre besoin.' },
  research: { highlight: 'la recherche',   tagline: "Architecte technique passé à l'ingénierie IA. J'industrialise la recherche : pipelines reproductibles, évaluation rigoureuse, déploiement à l'échelle.", h2: "Une discipline issue des systèmes critiques, mise au service de la recherche appliquée et de son industrialisation.", chip: 'ING. IA · RECHERCHE · FR', cta: "Construisons quelque chose", cta2: 'de rigoureux.', contactSub: 'En recherche d\'un poste en CDI d\'ingénieur IA — focus recherche appliquée. Discutons de votre besoin.' },
};

const VIBES = {
  clinical: {
    label: 'Clinical',
    headFont: '"Inter Tight", "Inter", system-ui, sans-serif',
    monoFont: '"JetBrains Mono", monospace',
    italic: true,
    bg: '#06090B', bg2: '#0B1014',
    panel: 'rgba(255,255,255,0.025)',
    border: 'rgba(120,200,210,0.14)',
    text: '#E8EFF1', dim: '#88979B',
    accent: 'oklch(0.82 0.13 195)',
    glow: 'oklch(0.75 0.13 195 / 0.18)',
    radius: 8,
    cornerRound: '50%',
  },
  editorial: {
    label: 'Editorial',
    headFont: '"Fraunces", "Times New Roman", serif',
    monoFont: '"JetBrains Mono", monospace',
    italic: true,
    bg: '#0E0B07', bg2: '#15110B',
    panel: 'rgba(255,240,210,0.03)',
    border: 'rgba(220,190,140,0.16)',
    text: '#F2EAD8', dim: '#9B8E72',
    accent: 'oklch(0.82 0.12 75)',
    glow: 'oklch(0.78 0.12 75 / 0.20)',
    radius: 2,
    cornerRound: '50%',
  },
  console: {
    label: 'Console',
    headFont: '"JetBrains Mono", "Fira Code", monospace',
    monoFont: '"JetBrains Mono", monospace',
    italic: false,
    bg: '#040607', bg2: '#080B0D',
    panel: 'rgba(140,255,200,0.025)',
    border: 'rgba(140,255,200,0.16)',
    text: '#D8EFE2', dim: '#7AA293',
    accent: 'oklch(0.86 0.16 155)',
    glow: 'oklch(0.80 0.16 155 / 0.18)',
    radius: 0,
    cornerRound: '0%',
  },
};

const DENSITY = {
  spacious: { padX: 88, sectionY: 160, heroY: 120, h1: 112, h2: 52, gap: 32, projGap: 32 },
  standard: { padX: 64, sectionY: 120, heroY: 80,  h1: 96,  h2: 44, gap: 24, projGap: 24 },
  dense:    { padX: 44, sectionY: 72,  heroY: 56,  h1: 76,  h2: 36, gap: 16, projGap: 18 },
};

const V2 = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [theme, setTheme] = React.useState('dark');
  const dark = theme === 'dark';

  const vibe = VIBES[tweaks.vibe] || VIBES.clinical;
  const D = DENSITY[tweaks.density] || DENSITY.standard;
  const sig = (tweaks.signal ?? 70) / 100; // 0..1
  const F = FOCUS[tweaks.focus] || FOCUS.all;

  // light-mode override (keep clinical-ish neutral light variant always)
  const C = dark ? {
    ...vibe,
  } : {
    ...vibe,
    bg: '#FAFBFB', bg2: '#FFFFFF',
    panel: 'rgba(15,30,35,0.03)',
    border: 'rgba(15,30,35,0.10)',
    text: '#0B1418', dim: '#5C6C70',
    accent: vibe.accent.replace('0.82', '0.50').replace('0.86', '0.48'),
    glow: vibe.glow.replace('0.75', '0.50').replace('0.78', '0.50').replace('0.80', '0.48'),
  };

  const projects = [
    {
      tag: 'Clinical · Triage',
      title: 'Triage Urgence',
      sub: 'Système d\'aide à la décision pour le tri ESI',
      desc: 'Pipeline LLM enrichi par RAG sur référentiels cliniques. Scoring multi-critères, journal de décision auditable, interface conçue avec la contrainte temps des urgentistes.',
      stack: ['LangChain', 'RAG', 'ChromaDB', 'FastAPI', 'PEFT'],
      metric: { v: '< 800ms', l: 'latence cible' },
    },
    {
      tag: 'Performance · Vision',
      title: 'Aria',
      sub: 'Analyse posturale du coureur',
      desc: 'Vision par ordinateur pour la détection des compensations biomécaniques en course. Cadence, asymétrie, retour structuré pour coachs et kinésithérapeutes du sport.',
      stack: ['Python', 'Vision', 'MLflow', 'Docker'],
      metric: { v: '60 fps', l: 'temps réel' },
    },
  ];

  // Signal-driven values
  const ecgOpacityTop = 0.05 + sig * 0.45;       // 0.05..0.50
  const ecgOpacityCard = 0.10 + sig * 0.55;
  const ecgOpacityFooter = 0.08 + sig * 0.50;
  const ecgStroke = 0.6 + sig * 1.4;             // 0.6..2.0
  const glowSize = 300 + sig * 800;              // 300..1100
  const glowAlpha = 0.10 + sig * 0.40;
  const dotPulse = sig > 0.5 ? `0 0 ${4 + sig * 18}px ${C.accent}` : 'none';
  const orbitDash = sig > 0.3;

  return (
    <div style={{
      background: C.bg, color: C.text, fontFamily: vibe.headFont,
      minHeight: '100%', position: 'relative', overflow: 'hidden',
      transition: 'background 400ms ease, color 400ms ease',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: glowSize, height: glowSize,
        background: `radial-gradient(circle, ${C.glow.replace(/\/ [\d.]+\)/, `/ ${glowAlpha})`)}, transparent 70%)`,
        pointerEvents: 'none', transition: 'all 400ms ease',
      }} />

      {/* ECG strip background — top */}
      <svg viewBox="0 0 1600 200" style={{
        position: 'absolute', top: 80, left: 0, width: '100%', height: 200,
        opacity: ecgOpacityTop, pointerEvents: 'none', transition: 'opacity 400ms ease',
      }}>
        <path d={ecgPath(1600)} fill="none" stroke={C.accent} strokeWidth={ecgStroke} />
      </svg>

      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: `28px ${D.padX}px`, position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32, height: 32, border: `1.5px solid ${C.accent}`, borderRadius: vibe.cornerRound,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: vibe.monoFont, fontSize: 11, color: C.accent, fontWeight: 600,
          }}>fh</div>
          <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>François Hellebuyck</div>
        </div>
        <div style={{ display: 'flex', gap: 32, fontSize: 13, color: C.dim }}>
          {[['#about','À propos'],['#projects','Projets'],['#skills','Compétences'],['#experience','Expérience'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => e.target.style.color = C.accent}
              onMouseLeave={e => e.target.style.color = C.dim}>{label}</a>
          ))}
        </div>
        <button onClick={() => setTheme(dark ? 'light' : 'dark')} style={{
          background: C.panel, border: `1px solid ${C.border}`, color: C.text,
          padding: '8px 14px', fontFamily: vibe.monoFont, fontSize: 11,
          cursor: 'pointer', borderRadius: 999, letterSpacing: '0.06em',
        }}>{dark ? '☾' : '☼'} {dark ? 'sombre' : 'clair'}</button>
      </nav>

      {/* Hero */}
      <section style={{ padding: `${D.heroY}px ${D.padX}px ${D.sectionY}px`, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 14px', borderRadius: 999, border: `1px solid ${C.border}`,
              fontFamily: vibe.monoFont, fontSize: 11, color: C.accent,
              letterSpacing: '0.06em', marginBottom: 32,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: C.accent,
                boxShadow: dotPulse,
              }}/>
              SIGNAL ACTIF · DISPONIBLE
            </div>
            <h1 style={{
              fontSize: D.h1, lineHeight: 0.98, fontWeight: 500, margin: 0,
              letterSpacing: '-0.035em', fontFamily: vibe.headFont,
            }}>
              IA fiable pour <span style={{
                color: C.accent,
                fontStyle: vibe.italic ? 'italic' : 'normal',
                fontWeight: 400,
              }}>{F.highlight}</span>.
            </h1>
            <div style={{ fontSize: 22, color: C.dim, marginTop: 28, maxWidth: 600, lineHeight: 1.5 }}>
              {F.tagline}
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
              <a style={{
                background: C.accent, color: C.bg, padding: '14px 22px',
                fontSize: 14, fontWeight: 600, textDecoration: 'none', borderRadius: vibe.radius,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>Découvrir les projets <span>→</span></a>
              <a style={{
                color: C.text, padding: '14px 22px', fontSize: 14, fontWeight: 500,
                textDecoration: 'none', border: `1px solid ${C.border}`, borderRadius: vibe.radius,
              }} href="https://linkedin.com/in/fhellebuyck" target="_blank" rel="noopener">linkedin.com/in/fhellebuyck</a>
            </div>
          </div>

          {/* Profile orb */}
          <div style={{ position: 'relative', justifySelf: 'center' }}>
            <div style={{
              width: 380, height: 380, borderRadius: vibe.cornerRound,
              background: `radial-gradient(circle at 30% 30%, ${C.glow}, transparent 70%)`,
              padding: 12, border: `1px solid ${C.border}`,
              position: 'relative', transition: 'border-radius 400ms ease',
            }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: vibe.cornerRound, overflow: 'hidden',
                border: `1px solid ${C.border}`,
              }}>
                <img src="assets/profile.png" alt="François Hellebuyck"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: dark ? `grayscale(${0.6 - sig * 0.5}) contrast(${1 + sig * 0.15}) brightness(0.92)` : 'none',
                    transition: 'filter 400ms ease',
                  }} />
              </div>
              {/* Orbit ring */}
              {orbitDash && (
                <svg viewBox="0 0 400 400" style={{
                  position: 'absolute', inset: -20, width: 'calc(100% + 40px)', height: 'calc(100% + 40px)',
                  pointerEvents: 'none', opacity: sig,
                }}>
                  <circle cx="200" cy="200" r="195" fill="none" stroke={C.border} strokeDasharray="2 6" />
                  <circle cx="200" cy="5" r={2 + sig * 3} fill={C.accent} />
                </svg>
              )}
            </div>
            <div style={{
              position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
              fontFamily: vibe.monoFont, fontSize: 10, color: C.dim,
              letterSpacing: '0.16em', whiteSpace: 'nowrap',
            }}>● {F.chip}</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: `${D.sectionY}px ${D.padX}px`, borderTop: `1px solid ${C.border}`, background: C.bg2 }}>
        <Eyebrow C={C} vibe={vibe} num="01" label="À propos" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 40, alignItems: 'start' }}>
          <h2 style={{ fontSize: D.h2, fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', fontFamily: vibe.headFont }}>
            {F.h2}
          </h2>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, margin: '0 0 18px' }}>
              Aujourd'hui ingénieur IA, j'arrive avec plus d'une décennie d'expérience comme architecte applicatif sur des plateformes data critiques pour de grands comptes : conception, intégration, exploitation — des systèmes que l'on n'a pas le droit de casser.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: C.dim, margin: '0 0 18px' }}>
              Je porte cette discipline dans l'IA appliquée : faire fonctionner des modèles est aujourd'hui accessible — les rendre <span style={{ color: C.text }}>fiables, évaluables, traçables, déployables</span>, ne l'est pas.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: C.dim, margin: 0 }}>
              C'est précisément cet espace que j'occupe.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: `${D.sectionY}px ${D.padX}px` }}>
        <Eyebrow C={C} vibe={vibe} num="02" label="Projets" />
        <div style={{ marginTop: 28, display: 'flex', gap: 14, alignItems: 'center' }}>
          <a href="https://github.com/hellebuyckf" target="_blank" rel="noopener" aria-label="GitHub" title="github.com/hellebuyckf" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44, borderRadius: 999,
            border: `1px solid ${C.border}`, background: C.bg2,
            color: C.text, textDecoration: 'none',
          }}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://huggingface.co/FrancoisFormation" target="_blank" rel="noopener" aria-label="Hugging Face" title="huggingface.co/FrancoisFormation" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 44, height: 44, borderRadius: 999,
            border: `1px solid ${C.border}`, background: C.bg2,
            textDecoration: 'none', fontSize: 22, lineHeight: 1,
          }}>
            <span aria-hidden="true">🤗</span>
          </a>
        </div>
        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: D.projGap }}>
          {projects.map(p => (
            <div key={p.title} style={{
              background: C.bg2, border: `1px solid ${C.border}`,
              padding: 36, position: 'relative', overflow: 'hidden',
              borderRadius: vibe.radius,
            }}>
              {/* Corner ECG */}
              <svg viewBox="0 0 200 60" style={{
                position: 'absolute', top: 24, right: 24, width: 160, height: 50,
                opacity: ecgOpacityCard, transition: 'opacity 400ms ease',
              }}>
                <path d={ecgPath(200, 60)} fill="none" stroke={C.accent} strokeWidth={ecgStroke} />
              </svg>

              <div style={{
                fontFamily: vibe.monoFont, fontSize: 11, color: C.accent,
                letterSpacing: '0.08em', marginBottom: 24,
              }}>{p.tag.toUpperCase()}</div>

              <h3 style={{ fontSize: 40, fontWeight: 500, margin: 0, letterSpacing: '-0.02em', fontFamily: vibe.headFont }}>{p.title}</h3>
              <div style={{ fontSize: 16, color: C.dim, marginTop: 8 }}>{p.sub}</div>

              <p style={{ fontSize: 15, lineHeight: 1.65, marginTop: 24, color: C.text }}>{p.desc}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 32 }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', maxWidth: 320 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: vibe.monoFont, fontSize: 10,
                      padding: '4px 9px', border: `1px solid ${C.border}`, color: C.dim,
                      letterSpacing: '0.06em', borderRadius: 999,
                    }}>{s}</span>
                  ))}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 28, color: C.accent, fontWeight: 500, fontFamily: vibe.monoFont }}>{p.metric.v}</div>
                  <div style={{ fontSize: 10, color: C.dim, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.metric.l}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: `${D.sectionY}px ${D.padX}px`, borderTop: `1px solid ${C.border}`, background: C.bg2 }}>
        <Eyebrow C={C} vibe={vibe} num="03" label="Stack technique" />
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: D.gap }}>
          {[
            { g: 'LLM & IA Générative', items: ['LangChain', 'HuggingFace', 'Fine-tuning', 'RAG', 'ChromaDB', 'Prompt Engineering'] },
            { g: 'Développement & API', items: ['Python', 'FastAPI', 'Java', 'Spring Batch', 'Bash', 'JavaScript', 'SQL'] },
            { g: 'DevOps & Administration', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Git', 'Maven', 'Monitoring', 'Supervision'] },
            { g: 'Data & Big Data', items: ['Apache Spark', 'Kafka', 'Elasticsearch', 'Hadoop', 'PySpark', 'Cloudera CDH', 'Hive', 'Oozie'] },
            { g: 'Cloud Azure', items: ['IoT Hub', 'Event Hub', 'HDInsight', 'Data Factory', 'Stream Analytics', 'ACR'] },
            { g: 'Outillage IA & ML', items: ['MLflow', 'LangSmith', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'] },
          ].map(g => (
            <div key={g.g} style={{ padding: '24px 0', borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 13, color: C.accent, fontFamily: vibe.monoFont, letterSpacing: '0.06em', marginBottom: 16 }}>
                {g.g}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.items.map(i => (
                  <span key={i} style={{
                    fontSize: 14, padding: '6px 12px', background: C.panel,
                    border: `1px solid ${C.border}`, borderRadius: vibe.radius, color: C.text,
                  }}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: `${D.sectionY}px ${D.padX}px` }}>
        <Eyebrow C={C} vibe={vibe} num="04" label="Parcours" />
        <div style={{ marginTop: 48, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 140, top: 0, bottom: 0, width: 1, background: C.border }} />
          {[
            { y: 'JUIN 2025 →', t: 'AI Engineer', sub: 'OpenClassrooms', d: 'Formation diplômante RNCP Niveau 7 (Bac+5)  · 804h + 15 projets pratiques. Spécialisation IA appliquée : LLM, RAG, fine-tuning, déploiement.' },
            { y: '2013 → 2025', t: 'Architecte Technique Senior', sub: 'CGI', d: 'Paris (2013–2016) · Montpellier (2016–2025) · Hybride. Missions grands comptes : Télécom, Finance, Industrie, Énergie. Conception et exploitation de plateformes data critiques.' },
            { y: '1997 → 2012', t: 'Architecte Technique / Expert JEE / Ingénieur', sub: 'Logica (acquis par CGI)', d: 'Paris · Secteurs : Télécom, Finance, Énergie, Industrie. Développement, expertise JEE, architecture applicative.' },
          ].map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 40px 1fr', gap: 24, paddingBottom: 40, alignItems: 'start' }}>
              <div style={{ fontFamily: vibe.monoFont, fontSize: 12, color: C.accent, letterSpacing: '0.06em', paddingTop: 6 }}>{e.y}</div>
              <div style={{ position: 'relative', paddingTop: 8 }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: C.bg, border: `2px solid ${C.accent}` }} />
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 500, fontFamily: vibe.headFont }}>{e.t}{e.sub ? <span style={{ color: C.dim, fontWeight: 400, fontSize: 18 }}> · {e.sub}</span> : null}</div>
                <div style={{ fontSize: 15, color: C.dim, marginTop: 8, lineHeight: 1.6, maxWidth: 700 }}>{e.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: `${D.sectionY + 20}px ${D.padX}px`, borderTop: `1px solid ${C.border}`, background: C.bg2, position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 1600 100" style={{ position: 'absolute', bottom: 40, left: 0, width: '100%', opacity: ecgOpacityFooter }}>
          <path d={ecgPath(1600, 100)} fill="none" stroke={C.accent} strokeWidth={ecgStroke} />
        </svg>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow C={C} vibe={vibe} num="05" label="Contact" centered />
          <h2 style={{ fontSize: 72, fontWeight: 500, letterSpacing: '-0.03em', margin: '24px 0', lineHeight: 1.05, fontFamily: vibe.headFont }}>
            {F.cta}<br />
            <span style={{ color: C.accent, fontStyle: vibe.italic ? 'italic' : 'normal', fontWeight: 400 }}>{F.cta2}</span>
          </h2>
          <p style={{ fontSize: 18, color: C.dim, lineHeight: 1.6 }}>
            {F.contactSub}
          </p>
          <a style={{
            display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 32,
            background: C.accent, color: C.bg, padding: '16px 28px', borderRadius: vibe.radius,
            fontSize: 15, fontWeight: 600, textDecoration: 'none',
          }} href="https://linkedin.com/in/fhellebuyck" target="_blank" rel="noopener">linkedin.com/in/fhellebuyck →</a>
        </div>
        <div style={{
          marginTop: 80, display: 'flex', justifyContent: 'space-between',
          fontFamily: vibe.monoFont, fontSize: 10, color: C.dim,
          letterSpacing: '0.08em', position: 'relative', zIndex: 1,
        }}>
          <span>© {new Date().getFullYear()} FRANÇOIS HELLEBUYCK</span>
          <span>FR · INGÉNIERIE IA</span>
        </div>
      </section>

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Domaine">
          <TweakSelect
            value={tweaks.focus}
            onChange={v => setTweak('focus', v)}
            options={[
              { value: 'all',      label: 'Tous domaines' },
              { value: 'health',   label: 'Santé' },
              { value: 'industry', label: 'Industrie' },
              { value: 'research', label: 'Recherche' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Vibe">
          <TweakRadio
            value={tweaks.vibe}
            onChange={v => setTweak('vibe', v)}
            options={[
              { value: 'clinical', label: 'Clinical' },
              { value: 'editorial', label: 'Editorial' },
              { value: 'console', label: 'Console' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Intensité du signal">
          <TweakSlider
            value={tweaks.signal}
            onChange={v => setTweak('signal', v)}
            min={0} max={100} step={1}
            suffix="%"
          />
        </TweakSection>
        <TweakSection title="Densité">
          <TweakRadio
            value={tweaks.density}
            onChange={v => setTweak('density', v)}
            options={[
              { value: 'spacious', label: 'Aéré' },
              { value: 'standard', label: 'Standard' },
              { value: 'dense', label: 'Dense' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
};

const Eyebrow = ({ C, vibe, num, label, centered }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 14,
    fontFamily: vibe.monoFont, fontSize: 11, letterSpacing: '0.16em',
    ...(centered ? { justifyContent: 'center', width: '100%' } : {}),
  }}>
    <span style={{ color: C.accent }}>/{num}</span>
    <span style={{ width: 32, height: 1, background: C.accent }} />
    <span style={{ color: C.text, fontWeight: 600 }}>{label.toUpperCase()}</span>
  </div>
);

function ecgPath(w = 1600, h = 200) {
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

window.V2 = V2;
