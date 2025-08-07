'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      // Update mouse position for the spotlight
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background text layer (dimmed version) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-[10vw] font-bold select-none leading-tight tracking-tighter text-center max-w-[80%] mx-auto text-muted/[0.09]">
          Looks like
          <br /> the page took a <br />
          coffee break.
        </p>
      </div>

      {/* Spotlight layer */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle 40vw at ${mousePosition.x}px ${mousePosition.y}px, white 5%, transparent 65%)`,
          WebkitMaskImage: `radial-gradient(circle 40vw at ${mousePosition.x}px ${mousePosition.y}px, white 5%, transparent 65%)`,
        }}
      >
        <p className="text-[10vw] font-bold select-none leading-tight tracking-tighter text-center max-w-[80%] mx-auto text-muted/[0.9]">
          Looks like <br />
          the page took a <br />
          coffee break.
        </p>
      </div>

      {/* Main content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-4xl font-semibold text-white">Coffee Break!!</h2>
        <p className="mt-2 text-xl text-gray-400">Try refreshing with an extra shot of caffeine.</p>
        <Button
          asChild
          className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6"
          size="lg"
        >
          <Link href="/">Take me home</Link>
        </Button>
      </div>
    </div>
  );
}
