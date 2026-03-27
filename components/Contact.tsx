import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { Send, MapPin, MessageCircle, Mail, Phone } from "lucide-react";
import QRCode from "react-qr-code";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <AnimatedSection id="contact" className="py-24 max-w-5xl mx-auto px-6">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground border-border font-mono inline-flex pb-4 border-b">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t("copy")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Card */}
          <div className="flex flex-col items-center justify-between p-6 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/60 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all group">
            <div className="w-[124px] h-[124px] flex items-center justify-center bg-accent/5 rounded-2xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Mail size={48} className="text-accent/60" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="font-bold text-xl text-foreground mb-2">Email</h3>
              <span className="text-[13px] text-muted-foreground font-mono mb-6 break-all">nguyensonrc<br/>@gmail.com</span>
            </div>
            <a
              href="mailto:nguyensonrc@gmail.com?subject=Let's work together"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-card border border-border hover:bg-card-hover text-foreground transition-all rounded-xl font-medium shadow-sm hover:border-accent/40 mt-auto"
            >
              <Mail size={18} className="mr-2" />
              Email
            </a>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center justify-between p-6 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/60 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all group">
            <div className="w-[124px] h-[124px] flex items-center justify-center bg-accent/5 rounded-2xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Phone size={48} className="text-accent/60" />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="font-bold text-xl text-foreground mb-2">Phone</h3>
              <span className="text-[14px] text-muted-foreground font-mono mb-6">+84 376<br/>586 716</span>
            </div>
            <a
              href="tel:+84376586716"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-card border border-border hover:bg-card-hover text-foreground transition-all rounded-xl font-medium shadow-sm hover:border-accent/40 mt-auto"
            >
              <Phone size={18} className="mr-2" />
              Call
            </a>
          </div>

          {/* Zalo Card */}
          <div className="flex flex-col items-center justify-between p-6 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/60 hover:border-[#0068FF]/40 hover:shadow-xl hover:shadow-[#0068FF]/5 transition-all group">
            <div className="bg-white p-2.5 rounded-2xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 w-[124px] h-[124px] flex items-center justify-center">
              <QRCode value="https://zalo.me/84376586716" size={104} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="font-bold text-xl text-foreground mb-2">Zalo</h3>
              <span className="text-[14px] text-muted-foreground font-mono mb-6">+84 376<br/>586 716</span>
            </div>
            <a
              href="https://zalo.me/84376586716"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#0068FF] hover:bg-[#0055D4] text-white transition-colors rounded-xl font-medium shadow-sm mt-auto"
            >
              <MessageCircle size={18} className="mr-2" />
              Zalo
            </a>
          </div>

          {/* Telegram Card */}
          <div className="flex flex-col items-center justify-between p-6 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/60 hover:border-[#2AABEE]/40 hover:shadow-xl hover:shadow-[#2AABEE]/5 transition-all group">
            <div className="bg-white p-2.5 rounded-2xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 w-[124px] h-[124px] flex items-center justify-center">
              <QRCode value="https://t.me/+84376586716" size={104} style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="font-bold text-xl text-foreground mb-2">Telegram</h3>
              <span className="text-[14px] text-muted-foreground font-mono mb-6">@sonnguyen<br/>(or phone)</span>
            </div>
            <a
              href="https://t.me/+84376586716"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#2AABEE] hover:bg-[#229ED9] text-white transition-colors rounded-xl font-medium shadow-sm mt-auto"
            >
              <Send size={18} className="mr-2" />
              Telegram
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-12 border-t border-border/50">
          <div className="flex items-center text-foreground font-medium group cursor-default">
            <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center mr-4 border border-border shadow-sm group-hover:border-accent/40 transition-all">
              <MapPin size={22} className="text-accent/80 transition-colors" />
            </div>
            Ho Chi Minh City, Vietnam
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed sm:text-right max-w-[250px] sm:max-w-none">
            {t("education")}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
