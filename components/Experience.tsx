"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection, AnimatedDiv } from "./AnimatedSection";

export function Experience() {
  const t = useTranslations("Experience");
  const jobs = [0, 1, 2, 3, 4, 5];

  return (
    <AnimatedSection id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <div className="space-y-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground border-b border-border pb-6 font-mono">
          {t("title")}
        </h2>

        <div className="relative border-l border-border/50 ml-6 md:ml-[160px]">
          {jobs.map((jobIdx) => (
            <AnimatedDiv
              key={jobIdx}
              className="relative pl-8 md:pl-16 py-6 border-b border-border/20 last:border-0"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-8 md:top-8 ring-4 ring-background shadow-sm" />
              
              {/* Date (Left side on desktop, top on mobile) */}
              <div className="md:absolute md:-left-[160px] md:top-7 text-sm font-mono text-muted-foreground w-36 mb-2 md:mb-0">
                {t(`jobs.${jobIdx}.period`)}
              </div>

              {/* Card Content */}
              <div className="bg-card/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-border/60 hover:border-accent/30 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.05)] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {t(`jobs.${jobIdx}.role`)}
                  </h3>
                </div>

                <div className="flex items-center text-sm font-medium text-muted-foreground mb-6">
                  <span>{t(`jobs.${jobIdx}.company`)}</span>
                  <span className="mx-2 opacity-50">•</span>
                  <span>{t(`jobs.${jobIdx}.teamSize`)}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {(t.raw(`jobs.${jobIdx}.bullets`) as string[]).map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground text-[15px] md:text-base leading-relaxed text-balance">
                      <span className="text-accent text-xs mt-1.5 opacity-50">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {(t.raw(`jobs.${jobIdx}.stack`) as string[]).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[13px] bg-background border border-border text-muted-foreground rounded-full hover:border-accent hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
