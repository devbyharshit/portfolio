'use client';

import { JSX, useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'motion/react';
import { FaAws, FaGitAlt, FaJava, FaJira, FaLinux, FaNode, FaSass } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { RiReactjsFill } from 'react-icons/ri';
import {
  SiAnthropic,
  SiBitbucket,
  SiConfluence,
  SiDocker,
  SiEslint,
  SiExpress,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLodash,
  SiMongodb,
  SiNextdotjs,
  SiNotion,
  SiOpenai,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiRedux,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiZod,
} from 'react-icons/si';
import { Marquee } from './marquee';

const tiles = [
  {
    icon: <SiNextdotjs className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full  opacity-70 "></div>
    ),
    name: 'NextJS',
  },
  {
    icon: <FaNode className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'NodeJS',
  },
  {
    icon: <SiPostgresql className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'PostgreSQL',
  },
  {
    icon: <RiReactjsFill className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'ReactJS',
  },
  {
    icon: <SiRedux className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Redux',
  },
  {
    icon: <FaGitAlt className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Git',
  },
  {
    icon: <SiReactquery className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'ReactQuery',
  },
  {
    icon: <SiDocker className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Docker',
  },
  {
    icon: <SiPython className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Python',
  },
  {
    icon: <SiJavascript className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'JavaScript',
  },
  {
    icon: <FaJava className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Java',
  },
  {
    icon: <SiTypescript className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'TypeScript',
  },
  {
    icon: <SiGraphql className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'GraphQL',
  },
  {
    icon: <SiMongodb className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'MongoDB',
  },
  {
    icon: <SiHtml5 className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'HTML',
  },
  {
    icon: <SiTailwindcss className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'TailwindCSS',
  },
  {
    icon: <FaSass className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Sass',
  },
  {
    icon: <SiStorybook className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Storybook',
  },
  {
    icon: <SiWebpack className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Webpack',
  },
  {
    icon: <SiVite className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Vite',
  },
  {
    icon: <SiJest className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Jest',
  },
  {
    icon: <SiZod className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Zod',
  },
  {
    icon: <FaAws className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'AWS',
  },
  {
    icon: <GrMysql className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'MySQL',
  },
  {
    icon: <FaLinux className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Linux',
  },
  {
    icon: <SiPrettier className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Prettier',
  },
  {
    icon: <SiEslint className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'ESLint',
  },
  {
    icon: <SiExpress className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Express',
  },
  {
    icon: <SiLodash className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Lodash',
  },
  {
    icon: <SiPrisma className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Prisma',
  },
  {
    icon: <SiOpenai className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'OpenAI',
  },
  {
    icon: <SiAnthropic className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Anthropic',
  },
  {
    icon: <SiBitbucket className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Bitbucket',
  },
  {
    icon: <SiNotion className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Notion',
  },
  {
    icon: <FaJira className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Jira',
  },
  {
    icon: <SiConfluence className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 "></div>
    ),
    name: 'Confluence',
  },
];

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const ReviewCard = ({ icon, name, bg }: { icon: JSX.Element; bg: JSX.Element; name: string }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: 'easeOut', duration: 1 },
      });
    }
  }, [controls, inView]);
  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-2xl px-4 py-2 border [font-family:var(--font-nunito-sans),_sans-serif]',
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        'transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}
    >
      <span className="inline-flex items-center justify-center w-full gap-2 font-medium dark:text-white">
        {icon} {name}
      </span>
    </motion.div>
  );
};

export function SkiperMarquee() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray(tiles.slice(0, tiles.length / 3)));
      setRandomTiles2(shuffleArray(tiles.slice(tiles.length / 3, (tiles.length / 3) * 2)));
      setRandomTiles3(shuffleArray(tiles.slice((tiles.length / 3) * 2)));
    }
  }, []);

  return (
    <section id="cta">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {randomTiles1.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]">
              {randomTiles2.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:40s]">
              {randomTiles3.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--background)] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--background)] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
