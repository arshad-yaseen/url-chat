import SiteHero from "@/components/site-hero";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generate Contents With Your Own Data",
  description: "Generate Contents With Your Own Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("", inter.className)}>
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute="class"
          defaultTheme="light"
        >
          <div className="h-[300px] w-[3004x] bg-purple-300 dark:bg-purple-800 blur-[200px] absolute -top-[200px] -left-[400px]"></div>
          <div className="h-[300px] w-[300px] bg-cyan-300 dark:bg-cyan-800 blur-[200px] absolute -bottom-[200px] -left-[400px]"></div>
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_2px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <SiteHeader />
          <div className="p-20">
            <SiteHero />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
