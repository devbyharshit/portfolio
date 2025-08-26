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
            <span className="text-muted-foreground drop-shadow-sm">Hello, I'm </span>
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent drop-shadow-lg">
              Harshit Anand
            </span>
          </span>
          <span className="block">
            <span className="text-muted-foreground drop-shadow-sm">Full Stack </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent drop-shadow-lg">
              Engineer
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-medium [font-family:var(--font-nunito-sans),_sans-serif] backdrop-blur-sm bg-background/30 rounded-lg px-6 py-3 border border-primary/10">
          I turn coffee into scalable web applications and bugs into features ;)
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="backdrop-blur-sm bg-primary/90 hover:bg-primary border border-primary/20"
          >
            Let's Collaborate
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="backdrop-blur-sm bg-secondary/90 hover:bg-secondary border border-primary/20"
          >
            <a href="/harshit_anand_resume.pdf" download>
              Download Resume
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
