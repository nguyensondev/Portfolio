"use client";

import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#about" className="font-mono text-xl font-bold text-accent tracking-tight hover:opacity-80 transition-opacity">
          Son Nguyen
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-2 border-l border-border pl-6">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
            className="p-2 ml-2 hover:bg-card rounded-md transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 top-20 bg-background z-40 flex flex-col p-6 md:hidden"
          >
            <ul className="flex flex-col space-y-6 mt-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-foreground hover:text-accent transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
