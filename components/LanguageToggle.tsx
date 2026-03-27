"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "vi" : "en";
    // Persist to cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    // Persist to localStorage as requested
    localStorage.setItem("NEXT_LOCALE", newLocale);
    
    // Soft refresh to fetch new server props without full page reload
    router.refresh();
  };

  if (!mounted) return <div className="w-[60px] h-9" />;

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-md hover:bg-card transition-colors text-sm font-mono text-muted-foreground hover:text-foreground"
      aria-label="Toggle language"
    >
      {locale.toUpperCase()} / {locale === "en" ? "VI" : "EN"}
    </button>
  );
}
