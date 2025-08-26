'use client';

import { Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerRef = useRef(null);

  // Define animation variants for desktop navbar
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
      boxShadow: 'var(--shadow-lg)',
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
  const dynamicClasses = scrollState.isScrolledDown ? 'hover:shadow-2xl hover:bg-popover' : '';

  return (
    <>
      {/* Desktop Navigation - Hidden on Mobile */}
      <motion.header
        className="fixed top-0 z-50 w-full hidden md:block"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        ref={headerRef}
      >
        <motion.div
          className={`flex items-center justify-between px-6 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 transform-gpu ${dynamicClasses}`}
          initial="initial"
          animate={animationVariant}
          variants={headerVariants}
          layout="position"
          style={{ height: '6rem' }}
        >
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-bold text-foreground ml-2">devByHarshit</span>
          </Link>

          {/* Desktop Navigation menu */}
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors px-3 py-2"
                >
                  <Link href="/#about">ABOUT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors px-3 py-2"
                >
                  <Link href="/#skills">SKILLS</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors px-3 py-2"
                >
                  <Link href="/#experience">EXPERIENCE</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors px-3 py-2"
                >
                  <Link href="/#projects">PROJECTS</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            {/* Desktop CTA button */}
            <Button
              asChild
              className="font-medium rounded-full px-5 text-xl h-[3.5rem]"
              size="lg"
              variant="secondary"
            >
              <Link href="/#contact">Let's Talk</Link>
            </Button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Navigation - Hidden on Desktop */}
      <header className="fixed top-0 z-50 w-full md:hidden">
        <div className="flex items-center justify-between px-4 py-4 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border-b border-border/20">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-foreground">devByHarshit</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-10 w-10"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-border/40 shadow-lg"
          >
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/#about"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/#skills"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SKILLS
              </Link>
              <Link
                href="/#experience"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                EXPERIENCE
              </Link>
              <Link
                href="/#projects"
                className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROJECTS
              </Link>

              <div className="pt-4 mt-4 border-t border-border/30">
                <Button
                  asChild
                  className="w-full font-medium rounded-full text-lg h-12"
                  size="lg"
                  variant="secondary"
                >
                  <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Let's Talk
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
