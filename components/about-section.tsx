'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Code2, Coffee, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const EXPERTISE = [
  'React',
  'Next.js',
  'TypeScript',
  'Redux',
  'Node.js',
  'Java',
  'MongoDB',
  'PostgreSQL',
  'AWS',
];

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const ctx = gsap.context(() => {
        // Smooth entrance animation
        gsap.fromTo(
          '.about-content',
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
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        );

        // Image hover effect
        const imageContainer = document.querySelector('.image-container');
        if (imageContainer) {
          imageContainer.addEventListener('mouseenter', () => {
            gsap.to('.profile-image', {
              scale: 1.05,
              duration: 0.4,
              ease: 'power2.out',
            });
          });

          imageContainer.addEventListener('mouseleave', () => {
            gsap.to('.profile-image', {
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
        }

        // Stats animation
        const stats = gsap.utils.toArray('.stat-item') as HTMLElement[];
        stats.forEach((stat, index) => {
          gsap.fromTo(
            stat,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              delay: index * 0.1,
              scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            },
          );
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
    <section id="about" className="container py-24 sm:py-32" ref={sectionRef}>
      <div className="about-content">
        <Card className="border-2 hover:border-primary/30 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm transition-all duration-500 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50" />

          <CardContent className="p-8 lg:p-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    About Me
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-6" />
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I&apos;m a{' '}
                    <span className="text-primary font-semibold">Full Stack Engineer</span> with 5
                    years of experience turning caffeine into code and bugs into features (sometimes
                    accidentally, but we don&apos;t talk about that).
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I&apos;ve spent my career at places like{' '}
                    <span className="text-primary font-semibold">Publicis Sapient</span> and fintech
                    startups, where I&apos;ve learned that the best way to handle 10,000+ RPM is
                    with a good sense of humor and even better error handling.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My superpower? Making React components so reusable, they&apos;ve started
                    appearing in other people&apos;s dreams. When I&apos;m not optimizing
                    performance by 50% or reducing security vulnerabilities by 25%, you&apos;ll find
                    me mentoring junior developers and pretending I knew what I was doing when I
                    first started coding.
                  </p>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-medium italic">
                      &ldquo;I believe the best software is like a good joke—if you have to explain
                      it, it probably needs refactoring.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="stat-item space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">Experience</span>
                    </div>
                    <p className="text-2xl font-bold">5+ Years</p>
                  </div>

                  <div className="stat-item space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Code2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Projects</span>
                    </div>
                    <p className="text-2xl font-bold">50+ Built</p>
                  </div>

                  <div className="stat-item space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Coffee className="w-4 h-4" />
                      <span className="text-sm font-medium">Coffee</span>
                    </div>
                    <p className="text-2xl font-bold">∞ Cups</p>
                  </div>

                  <div className="stat-item space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">Location</span>
                    </div>
                    <p className="text-2xl font-bold">New Delhi</p>
                  </div>
                </div>
              </div>

              {/* Right side - Image and badges */}
              <div className="space-y-6">
                {/* Profile image */}
                <div className="image-container relative">
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
                    <Image
                      src="/harshit.webp"
                      alt="Harshit Anand"
                      fill
                      className="object-cover profile-image transition-transform duration-300"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Skills badges */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Core Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {EXPERTISE.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1.5 hover:bg-primary/20 transition-all duration-200 cursor-default backdrop-blur-sm border border-primary/10"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Fun fact */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Fun Fact</h4>
                  <p className="text-sm text-muted-foreground">
                    I once debugged a production issue at 3 AM and found out it was caused by a
                    missing semicolon. Now I have trust issues with JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default AboutSection;
