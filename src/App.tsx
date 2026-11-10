import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-slate-200">
      {/* Glow difuminado */}
      <div className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent-2/10 blur-[120px]" />
      <div className="pointer-events-none fixed top-1/2 left-0 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-3/10 blur-[100px]" />
      {/* Líneas blancas estilo PS2 */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 2px, transparent 2px, transparent 16px)',
        }}
      />

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
        <Footer />
      </div>
    </div>
  );
}
