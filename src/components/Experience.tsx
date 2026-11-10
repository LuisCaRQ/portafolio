import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

const jobsES: Job[] = [
  {
    role: 'Backend Developer — Práctica',
    company: 'KuarchTech Solutions S.A.',
    period: 'Jun 2024 — Nov 2024',
    location: 'San José, Costa Rica',
    bullets: [
      'Desarrollo y mantenimiento de APIs RESTful con Python y Flask para una plataforma de comunicación y administración organizacional.',
      'Funcionalidades de backend para gestionar estructuras jerárquicas y procesos académicos (usuarios, grupos, clases, tareas, asistencia, calificaciones, archivos).',
      'Diseño e implementación de más de 15 tablas y relaciones en PostgreSQL, optimizando el modelo de datos.',
      'Consultas SQL, pruebas de endpoints con Postman y refactorización de módulos existentes.',
      'Control de versiones con Git/GitHub y gestión de tareas con Jira en metodología Scrum.',
    ],
  },
  {
    role: 'Full Stack Developer — Práctica',
    company: 'FutPlay',
    period: 'May 2023 — Ago 2023',
    location: 'San José, Costa Rica',
    bullets: [
      'APIs RESTful con operaciones CRUD utilizando JavaScript para la comunicación frontend-backend.',
      'Funcionalidades de backend para gestionar clientes y reservas de canchas con PostgreSQL.',
      'Consultas SQL y análisis de interacciones backend-base de datos.',
      'Pruebas de endpoints con Postman y revisión de código en reuniones Scrum.',
    ],
  },
  {
    role: 'Representante de Soporte Técnico',
    company: 'WStudio',
    period: 'Mar 2023 — Jul 2024',
    location: 'San José, Costa Rica',
    bullets: [
      'Soporte técnico a ~20 clientes/día: funcionamiento de la app, interfaz, pagos, cuentas y acceso.',
      'Análisis y reproducción de incidencias, documentación y seguimiento con Redmine y Trello.',
      'Colaboración con el equipo de desarrollo para identificar problemas recurrentes.',
    ],
  },
];

const jobsEN: Job[] = [
  {
    role: 'Backend Developer — Internship',
    company: 'KuarchTech Solutions S.A.',
    period: 'Jun 2024 — Nov 2024',
    location: 'San José, Costa Rica',
    bullets: [
      'Developed and maintained RESTful APIs using Python and Flask for a platform supporting communication, group management and organizational administration.',
      'Backend functionality for hierarchical organizational structures: admins, teachers, students, groups, classes, assignments, attendance, grades, recorded sessions and files.',
      'Designed and implemented 15+ PostgreSQL tables and relationships to support requirements and improve data organization and scalability.',
      'Wrote SQL queries to create, retrieve and manage application data; tested endpoints with Postman.',
      'Refactored existing backend modules; used Git/GitHub for version control and Jira for task tracking in Scrum.',
    ],
  },
  {
    role: 'Full Stack Developer — Internship',
    company: 'FutPlay',
    period: 'May 2023 — Aug 2023',
    location: 'San José, Costa Rica',
    bullets: [
      'Developed RESTful CRUD APIs using JavaScript to support application functionality and frontend-backend communication.',
      'Backend functionality for managing customer records and court scheduling using PostgreSQL.',
      'Wrote SQL queries to retrieve and manage application data stored in PostgreSQL.',
      'Tested API endpoints with Postman and participated in Scrum meetings.',
    ],
  },
  {
    role: 'Technical Support Representative',
    company: 'WStudio',
    period: 'Mar 2023 — Jul 2024',
    location: 'San José, Costa Rica',
    bullets: [
      'Provided technical support to ~20 customers/day, diagnosing application, interface, payment, account and access issues.',
      'Reproduced and analyzed reported issues, documenting and following up with Redmine and Trello.',
      'Collaborated with the development team to identify recurring problems.',
    ],
  },
];

export default function Experience() {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const jobs = es ? jobsES : jobsEN;

  return (
    <section id="experiencia" className="mx-auto max-w-6xl border-t border-white/15 px-6 py-20">
      <div>
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{es ? 'Experiencia' : 'Experience'}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
          {es ? 'Trayectoria profesional' : 'Professional journey'}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {jobs.map((job, idx) => (
            <div
              key={job.company + job.period}
              className={`relative flex flex-col gap-4 md:flex-row md:items-start ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-bg md:left-1/2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>

              <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                <article className="rounded-2xl border border-white/8 bg-surface p-6 transition hover:border-white/15 hover:bg-surface-2">
                  <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-sm text-accent">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start gap-1 text-xs text-slate-500 md:items-end">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
