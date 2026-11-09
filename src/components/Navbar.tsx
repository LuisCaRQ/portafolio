import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

  const t = {
    about: lang === 'es' ? 'Sobre mí' : 'About',
    projects: lang === 'es' ? 'Proyectos' : 'Projects',
    experience: lang === 'es' ? 'Experiencia' : 'Experience',
    stack: 'Stack',
    contact: lang === 'es' ? 'Contacto' : 'Contact',
    talk: lang === 'es' ? 'Hablemos' : "Let's talk",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#sobre-mi" className="transition-colors hover:text-white">{t.about}</a>
          <a href="#proyectos" className="transition-colors hover:text-white">{t.projects}</a>
          <a href="#experiencia" className="transition-colors hover:text-white">{t.experience}</a>
          <a href="#stack" className="transition-colors hover:text-white">{t.stack}</a>
          <a href="#contacto" className="transition-colors hover:text-white">{t.contact}</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href="#contacto"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            {t.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
