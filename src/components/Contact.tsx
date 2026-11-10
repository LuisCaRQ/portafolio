import { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative mx-auto max-w-6xl overflow-hidden border-t border-white/15 px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:24px_24px] opacity-20" />
      <div className="relative z-10">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{es ? 'Contacto' : 'Contact'}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
          {es ? 'Hablemos' : "Let's talk"}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          {es
            ? '¿Tienes un proyecto o una oportunidad backend? Envíame un mensaje y te responderé pronto.'
            : 'Have a project or a backend opportunity? Send me a message and I will get back to you soon.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-white/8 bg-surface p-6">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">{es ? 'Nombre' : 'Name'}</label>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-bg/60 px-3 focus-within:border-accent/40">
            <User className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-slate-600"
              placeholder={es ? 'Tu nombre' : 'Your name'}
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-bg/60 px-3 focus-within:border-accent/40">
            <Mail className="h-4 w-4 text-slate-500" />
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-slate-600"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-400">{es ? 'Mensaje' : 'Message'}</label>
          <div className="flex items-start gap-2 rounded-lg border border-white/10 bg-bg/60 px-3 focus-within:border-accent/40">
            <MessageSquare className="mt-3 h-4 w-4 text-slate-500" />
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-slate-600"
              placeholder={es ? 'Cuéntame sobre tu proyecto...' : 'Tell me about your project...'}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending'
            ? (es ? 'Enviando...' : 'Sending...')
            : (es ? 'Enviar mensaje' : 'Send message')}
          <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>

        {status === 'sent' && (
          <p className="text-center text-xs text-accent">
            {es ? 'Mensaje enviado correctamente.' : 'Message sent successfully.'}
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-xs text-red-400">
            {es
              ? 'No se pudo enviar el mensaje. Inténtalo de nuevo.'
              : 'Could not send the message. Please try again.'}
          </p>
        )}
      </form>
      </div>
    </section>
  );
}
