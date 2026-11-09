import {
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiJira,
  SiLinux,
} from 'react-icons/si';
import { Code2, Server, Database, Wrench, Layers } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type Tech = { name: string; icon: React.ReactNode };
type Category = { nameEs: string; nameEn: string; icon: React.ReactNode; items: Tech[] };

const categories: Category[] = [
  {
    nameEs: 'Backend',
    nameEn: 'Backend',
    icon: <Server className="h-4 w-4" />,
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="h-7 w-7" /> },
      { name: 'Express.js', icon: <SiExpress className="h-7 w-7" /> },
      { name: 'Flask', icon: <SiFlask className="h-7 w-7" /> },
      { name: 'RESTful API', icon: <Server className="h-7 w-7" /> },
    ],
  },
  {
    nameEs: 'Bases de datos',
    nameEn: 'Databases',
    icon: <Database className="h-4 w-4" />,
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="h-7 w-7" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-7 w-7" /> },
      { name: 'Oracle', icon: <Database className="h-7 w-7" /> },
      { name: 'SQL', icon: <Database className="h-7 w-7" /> },
      { name: 'SQL Server', icon: <Database className="h-7 w-7" /> },
    ],
  },
  {
    nameEs: 'Lenguajes',
    nameEn: 'Languages',
    icon: <Code2 className="h-4 w-4" />,
    items: [
      { name: 'JavaScript', icon: <SiJavascript className="h-7 w-7" /> },
      { name: 'Python', icon: <SiPython className="h-7 w-7" /> },
      { name: 'Java', icon: <SiOpenjdk className="h-7 w-7" /> },
      { name: 'HTML', icon: <SiHtml5 className="h-7 w-7" /> },
      { name: 'CSS', icon: <SiCss className="h-7 w-7" /> },
    ],
  },
  {
    nameEs: 'Herramientas',
    nameEn: 'Tools',
    icon: <Wrench className="h-4 w-4" />,
    items: [
      { name: 'Git', icon: <SiGit className="h-7 w-7" /> },
      { name: 'GitHub', icon: <SiGithub className="h-7 w-7" /> },
      { name: 'Postman', icon: <SiPostman className="h-7 w-7" /> },
      { name: 'Docker', icon: <SiDocker className="h-7 w-7" /> },
      { name: 'Jira', icon: <SiJira className="h-7 w-7" /> },
      { name: 'Linux', icon: <SiLinux className="h-7 w-7" /> },
    ],
  },
  {
    nameEs: 'Frontend',
    nameEn: 'Frontend',
    icon: <Layers className="h-4 w-4" />,
    items: [
      { name: 'React', icon: <SiReact className="h-7 w-7" /> },
    ],
  },
];

export default function Stack() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <section id="stack" className="mx-auto max-w-6xl border-t border-white/15 px-6 py-20">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Stack</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
          {es ? 'Tecnologías que domino' : 'Technologies I work with'}
        </h2>
      </div>

      <div className="space-y-8">
        {categories.map((c) => (
          <div key={c.nameEs}>
            <div className="mb-3 flex items-center gap-2 text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">{c.icon}</span>
              <h3 className="font-display text-base font-semibold">{es ? c.nameEs : c.nameEn}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {c.items.map((t) => (
                <div
                  key={t.name}
                  title={t.name}
                  aria-label={t.name}
                  className="group flex items-center gap-3 rounded-xl border border-white/8 bg-surface px-3 py-2.5 transition duration-300 hover:border-accent/40 hover:bg-surface-2"
                >
                  <span className="text-slate-300 transition group-hover:scale-110 group-hover:text-accent">
                    {t.icon}
                  </span>
                  <span className="font-mono text-xs text-slate-300 transition group-hover:text-white">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}