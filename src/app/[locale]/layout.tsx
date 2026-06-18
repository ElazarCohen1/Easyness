// src/app/[lng]/layout.tsx
import "./globals.css"; // déplace globals.css ici
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider ,hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales,locale)){
    notFound();
  }
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <Navbar lng={locale} />
          <main className="flex-1">{children}</main>
          <Footer lng={locale} />
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}