import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ResumeSection, ResumeModal } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/30 selection:text-primary relative">
      
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Page Sections */}
      <main className="space-y-4">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;
