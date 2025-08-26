'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { experienceData } from '@/lib/experience-data';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        // Smooth card entrance animations
        const cards = gsap.utils.toArray('.experience-card') as HTMLElement[];

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              delay: index * 0.15,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Subtle hover effects
          const cardInner = card.querySelector('.card-inner') as HTMLElement;

          card.addEventListener('mouseenter', () => {
            gsap.to(cardInner, {
              y: -8,
              scale: 1.02,
              duration: 0.4,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(cardInner, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
        });

        // Tech badges smooth entrance
        const badges = gsap.utils.toArray('.tech-badge') as HTMLElement[];

        badges.forEach((badge, index) => {
          gsap.fromTo(
            badge,
            {
              opacity: 0,
              scale: 0.8,
              y: 20,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              delay: index * 0.05,
              scrollTrigger: {
                trigger: badge,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Simple hover effect for badges
          badge.addEventListener('mouseenter', () => {
            gsap.to(badge, {
              scale: 1.05,
              duration: 0.2,
              ease: 'power2.out',
            });
          });

          badge.addEventListener('mouseleave', () => {
            gsap.to(badge, {
              scale: 1,
              duration: 0.2,
              ease: 'power2.out',
            });
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  // Cleanup on unmount
  useLayoutEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="container py-24 sm:py-32" ref={sectionRef}>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">Professional Journey</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my career growth and the impactful projects I&apos;ve delivered
        </p>
      </div>

      <div className="space-y-12 max-w-7xl mx-auto">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="card-inner">
              <Card className="group relative overflow-hidden border-2 hover:border-primary/30 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm transition-all duration-500">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Visit link button */}
                <div className="absolute top-6 right-6 z-10">
                  <Link
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/30 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Visit</span>
                  </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left side - Large screenshot */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      {/* Placeholder for screenshot - replace with actual images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">
                              {experience.company.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{experience.company}</h3>
                            <p className="text-sm text-muted-foreground">Project Screenshot</p>
                          </div>
                        </div>
                      </div>

                      {/* Uncomment when you have actual screenshots */}
                      {/* <Image
                        src={experience.screenshot}
                        alt={`${experience.company} project screenshot`}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>

                  {/* Right side - Company details and contributions */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <Badge
                        variant="outline"
                        className="text-xs font-medium bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {experience.date}
                      </Badge>

                      <div>
                        <h3 className="text-2xl font-bold tracking-tighter group-hover:text-primary transition-colors duration-300 mb-2">
                          {experience.role}
                        </h3>
                        <Link
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group/link"
                        >
                          <h4 className="text-xl font-semibold text-primary/80 group-hover:text-primary group-hover/link:text-primary transition-colors duration-300 mb-3">
                            {experience.company}
                          </h4>
                          <ArrowUpRight className="w-4 h-4 text-primary/60 group-hover/link:text-primary transition-colors duration-300 opacity-0 group-hover/link:opacity-100" />
                        </Link>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>

                    {/* Contributions */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-sm tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        Key Contributions
                      </h5>
                      <ul className="space-y-2">
                        {experience.contributions.map((contribution, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-sm tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-primary/20 transition-all duration-200 cursor-pointer tech-badge backdrop-blur-sm border border-primary/10"
                          >
                            <tech.icon className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium">{tech.name}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
