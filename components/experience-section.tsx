import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { experienceData } from '@/lib/experience-data';

function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <Accordion type="single" collapsible className="w-full">
        {experienceData.map((experience, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <div className="flex justify-between w-full pr-4">
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{experience.role}</h3>
                  <p className="text-sm text-muted-foreground">{experience.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{experience.date}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{experience.description}</p>
              <div className="flex items-center gap-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <div className="flex items-center gap-2">
                  {experience.stack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <tech.icon />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default ExperienceSection;
