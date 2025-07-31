'use client';

import { motion, useScroll, Variants } from 'motion/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function Header() {
  const [scrollState, setScrollState] = useState({
    isScrolledDown: false,
    isScrolledToTop: true,
    prevScrollY: 0,
  });
  const { scrollY } = useScroll();
  const headerRef = useRef(null);

  // Define animation variants
  const headerVariants: Variants = {
    initial: {
      width: '100%',
      maxWidth: '100%',
      marginTop: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 0,
      scale: 1,
      boxShadow: 'none',
    },
    scrolled: {
      width: 'calc(100% - 3rem)',
      maxWidth: '70vw',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 9999,
      scale: 0.97,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.075)',
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
        mass: 2.2,
      },
    },
    top: {
      width: '100%',
      maxWidth: '100%',
      marginTop: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 0,
      scale: 1,
      boxShadow: 'none',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        restDelta: 0.001,
        borderRadius: {
          type: 'tween',
          duration: 0.15,
          ease: 'easeOut',
        },
      },
    },
  };

  useEffect(() => {
    const unsubscribe = scrollY.onChange((current) => {
      const previous = scrollState.prevScrollY;

      // Check if we've crossed the 100px threshold going down
      if (current > 100 && previous <= 100) {
        setScrollState({
          isScrolledDown: true,
          isScrolledToTop: false,
          prevScrollY: current,
        });
      }
      // Check if we've crossed back to the top
      else if (current <= 10 && previous > 10) {
        setScrollState({
          isScrolledDown: false,
          isScrolledToTop: true,
          prevScrollY: current,
        });
      } else {
        setScrollState((prev) => ({
          ...prev,
          prevScrollY: current,
        }));
      }
    });

    return () => unsubscribe();
  }, [scrollY, scrollState.prevScrollY]);

  // Determine which animation variant to use
  const animationVariant = scrollState.isScrolledDown ? 'scrolled' : 'top';

  // Dynamic classes based on scroll state
  const dynamicClasses = scrollState.isScrolledDown ? 'hover:shadow-2xl hover:bg-[#1e1e1e]' : '';

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      ref={headerRef}
    >
      <motion.div
        className={`flex items-center justify-between px-6 bg-[#1e1e1e]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1e1e1e]/90 transform-gpu ${dynamicClasses}`}
        initial="initial"
        animate={animationVariant}
        variants={headerVariants}
        layout="position"
        style={{ height: '6rem' }}
      >
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <span className="text-4xl font-bold text-white ml-2">devByHarshit</span>
        </Link>

        {/* Navigation menu */}
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors px-3 py-2"
              >
                <Link href="/#about">ABOUT</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors px-3 py-2"
              >
                <Link href="/#skills">SKILLS</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors px-3 py-2"
              >
                <Link href="/#experience">EXPERIENCE</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors px-3 py-2"
              >
                <Link href="/#projects">PROJECTS</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          {/* CTA button */}
          <Button
            className="bg-[#c1ff72] hover:bg-[#a8e55e] text-black font-medium rounded-full px-5 text-xl"
            size="lg"
            style={{ height: '3.5rem', width: '8rem' }}
          >
            LET'S TALK
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
