import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "../globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { LocaleProvider } from "@/lib/locale-context";
import { isLocale, LOCALES } from "@/lib/i18n";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const zh = locale === "zh";
  return {
    title: {
      default: zh ? "宠物社交平台 — 产品研究与 AI 策略" : "Pet Social Platform — Product Research & AI Strategy",
      template: zh ? "%s — 宠物社交平台案例" : "%s — Pet Social Platform Case",
    },
    description: zh
      ? "一份产品研究案例：从内容社区到 AI 原生的宠物生态。"
      : "A product research case: from content community to AI-native pet ecosystem.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} className={`${plexSans.variable} ${plexMono.variable} ${instrument.variable}`}>
      <body>
        <LocaleProvider locale={locale}>
          <AppShell>{children}</AppShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
