import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight">
              Harshit Anand a passionate full-stack developer
            </h1>
            <p className="text-lg text-muted-foreground">
              I am a senior software engineer with five years of React / Next.js experience and
              growing Java back-end skills.
            </p>
            <div className="flex gap-4">
              <Button>Hire Me</Button>
              <Button variant="secondary" asChild>
                <a href="/harshit_anand_resume.pdf" download>
                  View CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <section className="container py-12">
        <Card>
          <CardHeader>
            <h2 className="text-3xl font-bold">About Me</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg text-muted-foreground">
                  I am a results-oriented senior software engineer with a proven track record of
                  developing and implementing scalable and efficient web applications. My expertise
                  lies in front-end technologies, particularly React and Next.js, and I am
                  passionate about creating intuitive and engaging user experiences. I am always
                  eager to learn new technologies and am currently expanding my skills in back-end
                  development with Java.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-muted" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
