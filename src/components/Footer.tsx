import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const socials = [
  { icon: <Github className="h-5 w-5" />, href: 'https://github.com/LuisCaRQ', label: 'GitHub' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/luis-rodriguez-quiros', label: 'LinkedIn' },
  { icon: <Mail className="h-5 w-5" />, href: 'mailto:luisk374@gmail.com', label: 'Email' },
];

export default function Footer() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:24px_24px] opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-white">Luis Carlos Rodríguez Quirós</p>
            <p className="mt-1 text-sm text-slate-500">
              {es ? 'Ingeniero de Software · Backend Developer.' : 'Software Engineer · Backend Developer.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/40 hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
            <a
              href={es ? '/cv.pdf' : '/cv-en.pdf'}
              download
              aria-label={es ? 'Descargar CV' : 'Download CV'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/40 hover:text-accent"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} Luis Carlos Rodríguez Quirós. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}
