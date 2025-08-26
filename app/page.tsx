import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';
import { SkiperMarquee } from '@/components/ui/skiper-marquee';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center overflow-hidden bg-background">
        {/* Background effects */}
        <div className="absolute inset-0">
          {/* Working glowing gradient effects */}
          <div className="absolute w-full h-1/2 opacity-50 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/6 w-[800px] h-[300px] bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Smooth transition gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Main headline */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-extrabold leading-tight tracking-tighter flex flex-col items-center gap-2 relative">
            {/* Working text glow effect */}
            {/* <div className="absolute inset-0 bg-primary/20 rounded-lg blur-2xl " /> */}
            <span className="block">
              <span className="text-muted-foreground drop-shadow-sm">Hello, I&apos;m </span>
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
              className="backdrop-blur-sm bg-primary/90 hover:bg-primary border border-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Link href="/#contact">Let&apos;s Collaborate</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="backdrop-blur-sm bg-secondary/90 hover:bg-secondary border border-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <a href="/harshit_anand_resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
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
