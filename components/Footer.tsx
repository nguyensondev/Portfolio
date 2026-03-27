import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  
  return (
    <footer className="w-full bg-[#0a0f18] text-[#9ca3af] py-8 text-sm font-mono border-t border-[#1f2937]/50 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="text-center md:text-left">
          {t("left")}
        </div>
        <div className="text-center md:text-right">
          {t("right")}
        </div>
      </div>
    </footer>
  );
}
