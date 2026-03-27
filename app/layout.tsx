import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { cookies, headers } from "next/headers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Son Nguyen — Fullstack Developer | React, React Native, Node.js",
  description: "Senior Fullstack Developer with 9+ years building web and mobile products. Available for full-time roles and freelance projects.",
  keywords: ["fullstack developer", "react developer", "react native", "nodejs", "vietnam developer", "freelance developer", "senior developer"],
  authors: [{ name: "Nguyen Ngoc Quoc Son" }],
  openGraph: {
    title: "Son Nguyen — Fullstack Developer",
    description: "9+ years building production-grade web and mobile apps. React · React Native · Node.js",
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  let locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  if (!cookieStore.get("NEXT_LOCALE")) {
    const acceptLang = headers().get("accept-language");
    if (acceptLang && acceptLang.includes("vi")) {
      locale = "vi";
    }
  }

  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../messages/en.json`)).default;
  }

  return (
    <html lang={locale} suppressHydrationWarning className={`${outfit.variable} ${jbMono.variable}`}>
      <body className="antialiased min-h-screen text-foreground selection:bg-accent selection:text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
