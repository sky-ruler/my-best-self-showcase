import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      setCurrentTime(`| ${timeString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/rk-codes",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/ritesh-k",
      icon: Linkedin,
      label: "LinkedIn", 
    },
    {
      href: "https://twitter.com/ritesh_codes",
      icon: Twitter,
      label: "Twitter",
    },
  ];

  return (
    <footer className="bg-surface-elevated/50 border-t border-glass-border">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-glass-border">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-text-primary mb-2">
              Ritesh Kumar
            </h4>
            <p className="text-text-secondary">
              Jamshedpur, IN <span className="text-brand-primary">{currentTime}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-interactive p-3 rounded-[var(--radius-sm)] text-text-secondary hover:text-text-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-text-muted">
            © {currentYear}. Built with meticulous attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;