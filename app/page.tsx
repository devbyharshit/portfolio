import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <header className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Harshit Anand a passionate full-stack developer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I am a senior software engineer with five years of React / Next.js experience and growing
          Java back-end skills.
        </p>
        <div className="mt-8 flex gap-4">
          <Button>Hire Me</Button>
          <Button variant="secondary" asChild>
            <a href="/harshit_anand_resume.pdf" download>
              View CV
            </a>
          </Button>
        </div>
      </header>
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
