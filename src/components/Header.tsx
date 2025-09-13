import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <>
      <header className="sticky top-4 z-50 mx-4 mb-4">
        <div className="glass-pane rounded-[var(--radius-md)]">
          <div className="container-custom">
            <div className="flex justify-between items-center py-3 px-6">
              {/* Logo */}
              <a 
                href="#" 
                className="text-xl font-bold text-text-primary hover:text-brand-primary transition-colors"
                aria-label="Homepage"
              >
                R.K.
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2" aria-label="Primary Navigation">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="glass-interactive px-4 py-2 rounded-[var(--radius-sm)] text-text-secondary hover:text-text-primary font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-4">
                <Button 
                  variant="default"
                  className="bg-text-primary text-background hover:bg-text-primary/90 font-semibold"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden glass-interactive"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Toggle menu</span>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 glass-pane flex flex-col items-center justify-center"
          id="mobile-menu"
        >
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-3xl font-semibold text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default"
              size="lg"
              className="btn-brand mt-8"
              asChild
            >
              <a href="/resume.pdf" target="_blank">
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;