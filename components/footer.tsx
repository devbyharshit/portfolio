import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { PulsatingButton } from './ui/pulsating-button';

export function Footer() {
  return (
    <footer className="bg-card text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left side - Call to action */}
          <div className="space-y-6">
            <h2 className="text-6xl md:text-6xl font-bold leading-tight tracking-tight mt-[-10px]">
              Ready to Create
              <br />
              Something Amazing?
            </h2>

            <PulsatingButton
              className="rounded-full px-8 py-3 text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none"
              pulseColor="var(--pulse)"
              duration="2s"
            >
              Get in Touch
            </PulsatingButton>
          </div>

          {/* Right side - Navigation and contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [font-family:var(--font-nunito-sans),_sans-serif]">
            {/* Explore section */}
            <div>
              <h2 className="text-xl font-semibold mb-6 uppercase">Explore</h2>
              <ul className="space-y-5">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experience"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Say Hello section */}
            <div>
              <h2 className="text-xl font-semibold mb-6 uppercase">Connect</h2>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Link
                    href="mailto:harshitanandcodes@duck.com"
                    className="text-gray-400"
                    target="_blank"
                  >
                    harshitanandcodes@duck.com
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-gray-400">+91 (956) 090-7202</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-gray-400">New Delhi, India</div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Link
                    href="https://github.com/devbyharshit"
                    aria-label="Github"
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaGithub size={16} />
                  </Link>
                  <Link
                    href="https://x.com/devbyharshit"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <BsTwitterX size={16} />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/devbyharshit"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SiLinkedin size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and policies */}
        <div className="border-t border-neutral-700 pt-8 flex flex-col justify-center items-center text-sm text-gray-400 text-center mb-4 md:mb-0 [font-family:var(--font-nunito-sans),_sans-serif]">
          <span>© {new Date().getFullYear()} Harshit Anand. All rights reserved.</span>
          <span>Thoughtfully crafted with care and creativity</span>
        </div>
      </div>
    </footer>
  );
}
