import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const t = {
    about: lang === 'es' ? 'Sobre mí' : 'About',
    projects: lang === 'es' ? 'Proyectos' : 'Projects',
    experience: lang === 'es' ? 'Experiencia' : 'Experience',
    stack: 'Stack',
    contact: lang === 'es' ? 'Contacto' : 'Contact',
  };

  const links = [
    { href: '#sobre-mi', label: t.about },
    { href: '#proyectos', label: t.projects },
    { href: '#experiencia', label: t.experience },
    { href: '#stack', label: t.stack },
    { href: '#contacto', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/40 hover:text-accent md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-bg transition hover:shadow-glow"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}