import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="group relative text-xl font-bold">
            <span
              className="bg-gradient-to-r from-primary via-accent to-primary 
                           bg-[length:200%_auto] bg-clip-text text-transparent 
                           animate-gradient-flow"
            >
              Irsyad Murtadha
            </span>
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 
                           bg-gradient-to-r from-primary to-accent 
                           transition-all duration-300 group-hover:w-full 
                           opacity-0 group-hover:opacity-100"
            ></span>
            <span
              className="absolute inset-0 -z-10 blur-2xl 
                           bg-gradient-to-r from-primary/25 to-accent/25 
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"
            ></span>
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/experience">
              <Button variant="ghost">Experience</Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bg-background border-b shadow-lg">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <Link to="/" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Button>
              </Link>
              <Link to="/about" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Button>
              </Link>
              <Link to="/experience" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </Button>
              </Link>
              <Link to="/projects" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Button>
              </Link>
              <Link to="/contact" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
