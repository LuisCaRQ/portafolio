import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-slate-200">
      {/* Glow difuminado */}
      <div className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="pointer-events-none fixed top-1/2 left-0 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-3/10 blur-[100px]" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Stack />
          <Contact />
        </main>
        <div className="mx-auto flex max-w-6xl justify-center pb-10">
          <a
            href="#inicio"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-accent/40 hover:text-accent"
          >
            <ChevronUp className="h-5 w-5" />
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}
