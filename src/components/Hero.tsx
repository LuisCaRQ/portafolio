import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-16 md:pt-24">
      <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl animate-fade-in-up [animation-delay:80ms]">
        {es ? 'Hola Mundo, soy ' : 'Hello World, I am '}
        <span className="whitespace-nowrap bg-gradient-to-r from-accent via-accent-3 to-accent-2 bg-clip-text text-transparent">
          Luis Rodríguez
        </span>
        .
      </h1>

      <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-accent animate-fade-in-up [animation-delay:160ms]">
        {es ? 'Ingeniero en Computación · Especializado en Backend' : 'Computer Engineer · Specialized in Backend'}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up [animation-delay:240ms]">
        <a
          href="#proyectos"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:shadow-glow"
        >
          {es ? 'Ver proyectos' : 'View projects'}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
        <a
          href="mailto:luisk374@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
        >
          {es ? 'Contactar' : 'Contact'}
        </a>
        <a
          href={es ? '/cv.pdf' : '/cv-en.pdf'}
          download
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
        >
          <Download className="h-4 w-4" /> {es ? 'Descargar CV' : 'Download CV'}
        </a>
      </div>

      <div className="mt-10 flex items-center gap-4 text-slate-500 animate-fade-in-up [animation-delay:320ms]">
        <a href="https://github.com/LuisCaRQ" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com/in/luis-rodriguez-quiros" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="mailto:luisk374@gmail.com" className="transition hover:text-white" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#sobre-mi"
          aria-label={es ? 'Desplazarse hacia abajo' : 'Scroll down'}
          className="text-slate-500 transition hover:text-accent animate-bounce"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
