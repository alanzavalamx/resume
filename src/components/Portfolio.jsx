import React, { useEffect, useMemo, useState } from "react";

export default function Portfolio() {
  const CONTACT = {
    name: "Alan Alexis Zavala Mendoza",
    title: "Ingeniero de Datos Senior | Líder de Datos y Analítica",
    email: "alan.zavalam@gmail.com",
    phone: "+528123540768",
    location: "Monterrey, Nuevo León, México",
    linkedin: "https://www.linkedin.com/in/tu-usuario", // TODO
    github: "https://github.com/tu-usuario", // TODO
    cvHref: "/alan-zavala-cv.pdf",
  };

  const SUMMARY = `Líder de Datos y Analítica con más de 12 años de experiencia impulsando la transformación digital y generando valor de negocio. Experto en la dirección de equipos multidisciplinarios, definición de estrategias de datos y despliegue de arquitecturas escalables con marcos de Gobernanza, calidad y seguridad. Actualmente fortaleciendo el liderazgo estratégico con una Maestría en Inteligencia Artificial Aplicada (ITESM).`;

  const EXPERIENCE = [
    {
      role: "Ingeniero de Datos para Inteligencia Artificial",
      company: "Arzyz Metals México",
      period: "Ago 2024 — Presente",
      points: [
        "Diseño e implementación de flujos de datos (ETL) y conectores de integración.",
        "Análisis exploratorio, limpieza y preparación de datos para modelos.",
        "Entrenamiento, evaluación y despliegue de soluciones analíticas en producción.",
      ],
    },
    {
      role: "IoT Technical Consultant",
      company: "Rockwell Automation",
      period: "Ago 2021 — Ago 2024",
      points: [
        "Integración de datos OT/IoT desde planta hacia soluciones analíticas de negocio.",
        "Diseño de dashboards y apps analíticas para eficiencia operativa.",
      ],
    },
    {
      role: "Ingeniero de Datos Senior",
      company: "Heineken México",
      period: "Ene 2020 — Ago 2021",
      points: [
        "Diseño e integración de flujos ELT para Ciencia de Datos.",
        "Preparación de datasets para modelos de predicción y clasificación.",
      ],
    },
    {
      role: "Ingeniero de Datos",
      company: "Kemet de México",
      period: "Mar 2018 — Dic 2019",
      points: [
        "Conexión de máquinas, extracción y orquestación ETL para manufactura.",
        "Desarrollo de tableros KPI y análisis de fallas para modelos predictivos.",
      ],
    },
    {
      role: "Ingeniero de Procesos",
      company: "Kemet de México",
      period: "Dic 2016 — Feb 2018",
      points: [
        "Análisis descriptivo, predictivo y prescriptivo para prevenir fallas y optimizar producción.",
        "DOE y mejora de procesos para alcanzar objetivos del área.",
      ],
    },
    {
      role: "Ingeniero de Procesos",
      company: "Lenovo",
      period: "Oct 2014 — Nov 2016",
      points: [
        "Mejora y optimización de procesos en líneas de producción y ensamble.",
      ],
    },
  ];

  const EDUCATION = [
    { degree: "Maestría en Inteligencia Artificial Aplicada", school: "Tecnológico de Monterrey" },
    { degree: "Ingeniería Electrónica y Automatización", school: "Universidad Autónoma de Nuevo León" },
  ];

  const SKILLS = {
    administrativas: [
      "Liderazgo de equipos técnicos",
      "Visión estratégica de negocio",
      "Comunicación ejecutiva",
      "Toma de decisiones basada en datos",
      "Gestión y negociación",
    ],
    tecnicas: [
      "Python, SQL, JavaScript",
      "Pandas, PySpark, SQLAlchemy",
      "SQL Server, PostgreSQL, MongoDB",
      "AWS, Azure, Snowflake, Databricks",
      "Scikit-Learn, TensorFlow",
      "Power BI, Matplotlib, Flask",
      "PTC Kepserver, AVEVA, ThingWorx, SCADA",
      "Git, Docker, Airflow",
    ],
    idiomas: ["Español (Nativo)", "Inglés (B2/C1)"],
  };

  const PROJECTS = [
    {
      title: "Optimización de procesos con IoT y ML",
      description: "Pipeline OT→Cloud para capturar telemetría, detectar anomalías y reducir scrap.",
      tags: ["IoT", "AWS", "PySpark", "MLOps"],
      link: "#",
    },
    {
      title: "Data Lakehouse para analítica avanzada",
      description: "Arquitectura Lakehouse con ingestión batch/stream, catálogo y gobernanza.",
      tags: ["Databricks", "Delta", "DBT", "Airflow"],
      link: "#",
    },
    {
      title: "Forecast de demanda con ML",
      description: "Modelos de pronóstico para optimizar inventarios y planeación de producción.",
      tags: ["Python", "SKLearn", "Timeseries"],
      link: "#",
    },
  ];

  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("az-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("az-theme", next ? "dark" : "light");
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
      <Meta contact={CONTACT} />

      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 bg-white/70 dark:bg-black/40 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-tight">
            <span className="hidden sm:inline">Alan Zavala</span>
            <span className="sm:hidden">AZ</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#experiencia">Experiencia</a>
            <a className="hover:opacity-80" href="#proyectos">Proyectos</a>
            <a className="hover:opacity-80" href="#habilidades">Habilidades</a>
            <a className="hover:opacity-80" href="#educacion">Educación</a>
            <a className="hover:opacity-80" href="#contacto">Contacto</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={CONTACT.cvHref}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <span>Descargar CV</span>
            </a>
            <button
              aria-label="Cambiar tema"
              onClick={toggleTheme}
              className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <ThemeIcon dark={dark} />
            </button>
          </div>
        </nav>
      </header>

      <section id="inicio" className="border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {CONTACT.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-700 dark:text-neutral-300">
              {CONTACT.title}
            </p>
            <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {SUMMARY}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="chip">
                <IconMail /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`} className="chip">
                <IconPhone /> {formatPhone(CONTACT.phone)}
              </a>
              <span className="chip !cursor-default">
                <IconMapPin /> {CONTACT.location}
              </span>
              {CONTACT.linkedin && (
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="chip">
                  <IconLinkedIn /> LinkedIn
                </a>
              )}
              {CONTACT.github && (
                <a href={CONTACT.github} target="_blank" rel="noreferrer" className="chip">
                  <IconGitHub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section">
        <SectionTitle title="Experiencia" subtitle="Trayectoria profesional" />
        <ol className="relative border-s border-neutral-200 dark:border-neutral-800">
          {EXPERIENCE.map((xp, i) => (
            <li key={i} className="ms-6 mb-10">
              <span className="absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs">{i+1}</span>
              <h3 className="font-semibold text-lg leading-snug">
                {xp.role} · <span className="text-neutral-600 dark:text-neutral-400">{xp.company}</span>
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{xp.period}</p>
              <ul className="mt-3 list-disc ps-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                {xp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="proyectos" className="section">
        <SectionTitle title="Proyectos" subtitle="Trabajo destacado y demos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={i} className="card group">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                <a href={p.link} className="rounded-full border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-xs group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900">Ver</a>
              </div>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, k) => <span key={k} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="habilidades" className="section">
        <SectionTitle title="Habilidades" subtitle="Técnicas, administrativas e idiomas" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard title="Administrativas" items={SKILLS.administrativas} />
          <SkillCard title="Técnicas" items={SKILLS.tecnicas} />
          <SkillCard title="Idiomas" items={SKILLS.idiomas} />
        </div>
      </section>

      <section id="educacion" className="section">
        <SectionTitle title="Educación" subtitle="Formación académica" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((e, i) => (
            <article key={i} className="card">
              <h3 className="font-semibold text-lg leading-snug">{e.degree}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{e.school}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="section">
        <SectionTitle title="Contacto" subtitle="¿Hablamos?" />
        <div className="card">
          <p className="text-neutral-700 dark:text-neutral-300">
            ¿Tienes una oportunidad o proyecto interesante? Escríbeme y con gusto coordinamos una llamada.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a href={`mailto:${CONTACT.email}`} className="chip"><IconMail /> {CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`} className="chip"><IconPhone /> {formatPhone(CONTACT.phone)}</a>
            <span className="chip !cursor-default"><IconMapPin /> {CONTACT.location}</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200/60 dark:border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 dark:text-neutral-400">© {year} {CONTACT.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <a href="#inicio" className="chip">Volver arriba ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <article className="card">
      <h3 className="font-semibold text-lg leading-snug">{title}</h3>
      <ul className="mt-3 space-y-1 text-neutral-700 dark:text-neutral-300 list-disc ps-5">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </article>
  );
}

function Meta({ contact }) {
  return (
    <>
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={`${contact.name} — ${contact.title}`} />
      <meta name="keywords" content="Data Engineering, Data Science, ETL, Python, SQL, PySpark, Azure, Snowflake, DBT, Machine Learning, Data Architecture, IoT" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: contact.name,
        jobTitle: contact.title,
        email: `mailto:${contact.email}`,
        telephone: contact.phone,
        address: { '@type': 'PostalAddress', addressLocality: 'Monterrey', addressRegion: 'NL', addressCountry: 'MX' },
        sameAs: [contact.linkedin, contact.github].filter(Boolean)
      }) }} />
    </>
  );
}

function ThemeIcon({ dark }) {
  return dark ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 0 0 21.64 13z"></path></svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
  );
}
function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
  );
}
function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.57 2.5a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.67-1.21a2 2 0 0 1 2.11-.45c.8.27 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"></path></svg>
  );
}
function IconMapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  );
}
function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.98 0h3.84v2.18h.06c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.22V24h-4v-7.44c0-1.78-.03-4.06-2.48-4.06-2.48 0-2.86 1.94-2.86 3.94V24h-4V8z"/></svg>
  );
}
function IconGitHub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 9.9 8.2 11.5.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.4-2-1.4-2-1.2-.9.1-.9.1-.9 1.3.1 2 .1 2.3 1.3 1.1 2 2.9 1.4 3.6 1 .1-.8.4-1.4.7-1.7-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 7 7.1c-.1-.3-.6-1.6.1-3.3 0 0 1.2-.4 3.9 1.5 1.1-.3 2.2-.4 3.3-.4s2.2.1 3.3.4c2.6-1.9 3.9-1.5 3.9-1.5.7 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2.1v3.2c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.5A12 12 0 0 0 12 .5z"/></svg>
  );
}

function formatPhone(phone) {
  return phone.replace(/(\+\d{2})(\d{2})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
