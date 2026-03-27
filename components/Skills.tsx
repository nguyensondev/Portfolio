"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection, staggerContainer, AnimatedDiv } from "./AnimatedSection";
import { motion } from "framer-motion";

export function Skills() {
  const t = useTranslations("Skills");

  const skillGroups = [
    {
      id: "frontend",
      skills: ["ReactJS", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Styled Components"]
    },
    {
      id: "mobile",
      skills: ["React Native", "Expo", "iOS (Xcode)", "Android (Android Studio)", "Push Notifications", "Native Modules"]
    },
    {
      id: "state_management",
      skills: ["Redux", "Redux-Saga", "Redux Thunk", "MobX", "Context API"]
    },
    {
      id: "backend_api",
      skills: ["Node.js", "RESTful APIs", "GraphQL", "WebSocket", "WebRTC", "Axios"]
    },
    {
      id: "web3",
      skills: ["Ethereum/Solidity", "Web3Auth", "WalletConnect"]
    },
    {
      id: "tooling",
      skills: ["Vite", "Webpack", "Babel", "ESLint", "Prettier", "Firebase", "Fastlane", "Git"]
    },
    {
      id: "exploring",
      skills: ["AI/LLM API integration", "Edge deployment", "Micro-frontends", "Figma MCP"]
    }
  ];

  return (
    <AnimatedSection
      id="skills"
      className="py-24 max-w-5xl mx-auto px-6"
    >
      <div className="space-y-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground border-b border-border pb-6 font-mono">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group) => {
            const isExploring = group.id === "exploring";
            return (
              <AnimatedDiv
                key={group.id}
                className="space-y-4"
              >
                <h3 className={`text-lg font-medium text-foreground ${isExploring ? 'italic' : ''}`}>
                  {t(`categories.${group.id}`)}
                </h3>
                
                <AnimatedDiv
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className={`px-4 py-1.5 text-sm bg-card/60 backdrop-blur-sm hover:bg-zinc-800/10 dark:hover:bg-zinc-100/10 transition-all rounded-full border shadow-sm ${
                        isExploring 
                          ? 'border-dashed border-border text-muted-foreground hover:border-accent hover:text-accent' 
                          : 'border-border/60 text-foreground hover:border-accent/60 hover:text-accent font-medium'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </AnimatedDiv>
              </AnimatedDiv>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
