import { SkillsChart } from '@/components/skills-chart';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function AboutSection() {
  return (
    <section id="about" className="container py-24 sm:py-32">
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
                lies in front-end technologies, particularly React and Next.js, and I am passionate
                about creating intuitive and engaging user experiences. I am always eager to learn
                new technologies and am currently expanding my skills in back-end development with
                Java.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <SkillsChart />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
