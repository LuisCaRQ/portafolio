import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  statusColor: string;
  github: string;
  live?: string;
  image?: string;
  highlights?: string[];
};

const completedES: Project[] = [
  {
    id: 'crm',
    title: 'Sistema CRM',
    description:
      'Aplicación full-stack para gestionar prospectos, clientes y etapas del proceso de ventas, con autenticación y control de acceso por roles.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    status: 'Completado',
    statusColor: 'text-accent-3',
    github: 'https://github.com/LuisCaRQ/crm-system',
    live: 'https://crm.demo',
    highlights: [
      'API RESTful con Node.js y Express para gestión de usuarios y prospectos',
      'Esquemas de MongoDB para etapas dinámicas del proceso de ventas',
      'Autenticación y control de acceso basado en roles',
    ],
  },
  {
    id: 'video-rtc',
    title: 'Sistema de Comunicación por Video en Tiempo Real',
    description:
      'Plataforma de videollamadas en tiempo real con señalización entre pares, salas y servidores STUN/TURN para conexiones a través de NAT.',
    tech: ['WebRTC', 'Node.js', 'Socket.IO'],
    status: 'Completado',
    statusColor: 'text-accent-3',
    github: 'https://github.com/LuisCaRQ/video-rtc',
    live: 'https://video-rtc.demo',
    highlights: [
      'Señalización y gestión de conexiones entre pares (peer-to-peer)',
      'Salas para organizar sesiones entre múltiples usuarios',
      'Servidores STUN/TURN para mejorar la confiabilidad',
    ],
  },
];

const completedEN: Project[] = [
  {
    id: 'crm',
    title: 'CRM System',
    description:
      'Full-stack application to manage leads, clients and sales pipeline stages, with authentication and role-based access control.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    status: 'Completed',
    statusColor: 'text-accent-3',
    github: 'https://github.com/LuisCaRQ/crm-system',
    live: 'https://crm.demo',
    highlights: [
      'RESTful API with Node.js and Express for user and lead management',
      'MongoDB schemas for dynamic pipeline stages and state transitions',
      'Authentication and role-based access control',
    ],
  },
  {
    id: 'video-rtc',
    title: 'Real-Time Video Communication System',
    description:
      'Real-time video calling platform with peer signaling, rooms and STUN/TURN servers for NAT traversal.',
    tech: ['WebRTC', 'Node.js', 'Socket.IO'],
    status: 'Completed',
    statusColor: 'text-accent-3',
    github: 'https://github.com/LuisCaRQ/video-rtc',
    live: 'https://video-rtc.demo',
    highlights: [
      'Signaling and peer connection management (peer-to-peer)',
      'Rooms to organize sessions between multiple users',
      'STUN/TURN servers to improve connection reliability',
    ],
  },
];

const progressES: Project[] = [
  {
    id: 'backend-api',
    title: 'APIs Backend (en progreso)',
    description:
      'Explorando nuevas arquitecturas de backend, optimización de consultas SQL y despliegue con Docker. Próximamente más detalles.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
    status: 'En desarrollo',
    statusColor: 'text-accent',
    github: 'https://github.com/LuisCaRQ',
  },
];

const progressEN: Project[] = [
  {
    id: 'backend-api',
    title: 'Backend APIs (in progress)',
    description:
      'Exploring new backend architectures, SQL query optimization and Docker deployment. More details coming soon.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
    status: 'In progress',
    statusColor: 'text-accent',
    github: 'https://github.com/LuisCaRQ',
  },
];

function ProjectCard({ project, lang }: { project: Project; lang: 'es' | 'en' }) {
  const es = lang === 'es';
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface transition duration-300 hover:border-white/15 hover:bg-surface-2">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`${es ? 'Captura de' : 'Screenshot of'} ${project.title}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-surface-2 to-accent-2/20">
            <span className="font-display text-2xl font-bold text-white/40">{project.title}</span>
          </div>
        )}
        <div className="absolute right-3 top-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-bg/70 px-2.5 py-1 font-mono text-[11px] backdrop-blur ${project.statusColor}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-slate-400">{project.description}</p>

        {project.highlights && (
          <ul className="mb-5 space-y-1.5 text-sm text-slate-400">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/8 bg-bg/60 px-2 py-1 font-mono text-[11px] text-slate-300 transition group-hover:border-accent/30"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
          >
            <Github className="h-4 w-4" /> {es ? 'Código' : 'Code'}
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:shadow-glow"
            >
              <ExternalLink className="h-4 w-4" /> {es ? 'Abrir web' : 'Open website'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const [tab, setTab] = useState<'completed' | 'progress'>('completed');

  const completed = es ? completedES : completedEN;
  const progress = es ? progressES : progressEN;
  const list = tab === 'completed' ? completed : progress;

  return (
    <section id="proyectos" className="mx-auto max-w-6xl border-t border-white/15 px-6 py-20">
      <div>
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{es ? 'Proyectos' : 'Projects'}</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
            {es ? 'Lo que he construido' : 'What I have built'}
          </h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:inline-grid md:w-auto">
          <button
            onClick={() => setTab('completed')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === 'completed' ? 'bg-accent text-bg shadow-glow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {es ? 'Completados' : 'Completed'}
          </button>
          <button
            onClick={() => setTab('progress')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tab === 'progress' ? 'bg-accent text-bg shadow-glow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {es ? 'En desarrollo' : 'In progress'}
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
      </div>
    </section>
  );
}
