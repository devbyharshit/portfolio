import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';
import { SkiperMarquee } from '@/components/ui/skiper-marquee';

export default function Home() {
  return (
    <>
      <header className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center overflow-hidden bg-background">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-extrabold leading-tight tracking-tighter flex flex-col items-center gap-2">
          <span className="block">
            <span className="text-white">HI, I'M </span>
            <span className="text-pink-300">HARSHIT ANAND</span>
          </span>
          <span className="block">
            <span className="text-white">A PASSIONATE </span>
            <span className="text-green-300">DEVELOPER</span>
          </span>
        </h1>
        {/* Subtitle */}
        <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground font-medium [font-family:var(--font-nunito-sans),_sans-serif]">
          I build high-performing websites and results-driven digital experiences using React,
          Next.js, and modern web technologies.
        </p>
        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Hire ME</Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/harshit_anand_resume.pdf" download>
              View CV
            </a>
          </Button>
        </div>
      </header>
      <main>
        <AboutSection />
        <SkiperMarquee />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
