import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl border-t border-white/15 px-6 py-20">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{es ? 'Sobre mí' : 'About me'}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
          {es ? 'Ingeniero en Computación' : 'Computer Engineer'}
        </h2>
      </div>

      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-slate-400">
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
    </section>
  );
}