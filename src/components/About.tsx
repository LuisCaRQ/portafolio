import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <section id="sobre-mi" className="relative mx-auto max-w-6xl overflow-hidden border-t border-white/15 px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" />
      <div className="relative z-10">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{es ? 'Sobre mí' : 'About me'}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
          {es ? 'Ingeniero en Computación' : 'Computer Engineer'}
        </h2>
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 via-accent-2/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface">
            <img
              src="/profile.png"
              alt={es ? 'Foto de Luis Rodríguez' : 'Photo of Luis Rodriguez'}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-400">
          <p>
            {es
              ? 'Ingeniero de Software enfocado en el desarrollo backend, con experiencia práctica en el desarrollo de APIs RESTful, funcionalidades de backend y soluciones de bases de datos. Conocimientos en JavaScript, Python, Flask, PostgreSQL, SQL, Node.js y Express.js, así como experiencia práctica en el diseño y desarrollo de APIs, elaboración de consultas SQL, pruebas de funcionalidades de aplicaciones y resolución de problemas de software.'
              : 'Backend-focused Software Engineer with hands-on experience developing RESTful APIs, backend functionality and database solutions. Experienced with JavaScript, Python, Flask, PostgreSQL, SQL, Node.js and Express.js, with practical experience designing and developing APIs, writing SQL queries, testing application functionality and troubleshooting software issues.'}
          </p>
          <p>
            {es
              ? 'Experiencia trabajando con Git/GitHub, Postman, Jira y metodologías ágiles como Scrum, colaborando con equipos de desarrollo para crear y mantener aplicaciones web. Gran interés en el desarrollo backend, la creación de APIs y la ingeniería de bases de datos.'
              : 'Experienced working with Git/GitHub, Postman, Jira and Agile/Scrum environments, collaborating with development teams to build and maintain web applications. Strong interest in backend development, API development and database engineering.'}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}