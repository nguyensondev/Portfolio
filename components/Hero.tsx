import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <AnimatedSection
      id="about"
      className="min-h-screen flex items-center justify-center relative px-6 w-full max-w-5xl mx-auto pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none font-mono text-[10vw] md:text-[8vw] whitespace-nowrap text-foreground font-bold tracking-tighter">
          NPM RUN BUILD
        </div>
      </div>

      <div className="flex flex-col max-w-3xl space-y-8 z-10 w-full relative">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {t("name")}
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-accent">
            {t("role")}
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-2xl font-light">
          {t("bio")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white hover:bg-accent-hover transition-all rounded-xl font-medium group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-accent-hover/50"
          >
            {t("viewWork")}
            <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/Son_Nguyen_CV.docx"
            download
            className="inline-flex items-center justify-center px-8 py-3.5 bg-card/50 backdrop-blur-md border border-border/60 text-foreground hover:bg-card-hover hover:border-accent/40 transition-all rounded-xl font-medium group shadow-sm"
          >
            {t("downloadCV")}
            <Download size={18} className="ml-2 group-hover:-translate-y-1 transition-transform text-accent" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
