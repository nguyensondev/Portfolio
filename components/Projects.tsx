"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection, AnimatedDiv, staggerContainer } from "./AnimatedSection";
import { CheckCircle2, UserCircle } from "lucide-react";

export function Projects() {
  const t = useTranslations("Projects");
  const projects = [0, 1];

  const getGradient = (domain: string) => {
    if (domain.toLowerCase() === "fintech") return "from-emerald-500/5 via-transparent to-transparent";
    if (domain.toLowerCase() === "banking") return "from-blue-500/5 via-transparent to-transparent";
    return "from-accent/5 via-transparent to-transparent";
  };

  return (
    <AnimatedSection id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground border-b border-border pb-6 font-mono">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg text-balance">
            {t("intro")}
          </p>
        </div>

        <AnimatedDiv variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((idx) => {
            const domain = t(`items.${idx}.domain`) as string;
            return (
              <AnimatedDiv
                key={idx}
                className={`relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br ${getGradient(domain)} p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.05)] transition-all duration-300 hover:border-accent/40 group flex flex-col h-full bg-card/60 backdrop-blur-md`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-background text-sm font-mono border border-border rounded-md text-foreground group-hover:border-accent/30 transition-colors">
                    {domain}
                  </span>
                  <div className="flex items-center text-xs font-medium text-muted-foreground bg-background px-2.5 py-1 rounded-full border border-border">
                    <UserCircle size={14} className="mr-1.5" />
                    Solo Build
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {t(`items.${idx}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-balance text-[15px]">
                    {t(`items.${idx}.description`)}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(t.raw(`items.${idx}.stack`) as string[]).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 text-xs font-mono bg-background border border-border/50 text-muted-foreground rounded hover:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-border/50 w-full" />

                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                    {(t.raw(`items.${idx}.badges`) as string[]).map((badge, badgeIdx) => (
                      <span key={badgeIdx} className="flex items-center text-sm font-medium text-foreground">
                        <CheckCircle2 size={14} className="mr-1.5 text-accent opacity-70" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedDiv>
            );
          })}
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
