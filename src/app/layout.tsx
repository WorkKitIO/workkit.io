import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workkit.io"),
  keywords: [
    "Work",
    "Jobs",
    "Projects",
    "Freelance",
    "Tasks",
    "Clients",
    "Invoices",
    "Payments",
    "Contracts",
    "Proposals",
    "Time tracking",
    "Productivity",
    "Automation",
    "Collaboration",
    "Workflow",
    "Scheduling",
    "Management",
    "Dashboard",
    "CRM",
    "Reports",
  ],
  title: "WorkKitIO | Freelance Management Toolkit",
  description:
    "Open-source freelance management toolkit for tracking clients, projects, tasks, invoices, and time. Self-hosted and customizable for developers and freelancers.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: new URL("https://www.workkit.io"),
    title: "WorkKitIO",
    description:
      "Open-source freelance management toolkit for tracking clients, projects, tasks, invoices, and time. Self-hosted and customizable for developers and freelancers.",
    siteName: "WorkKitIO",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            {children}
            <Toaster position="top-center" />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
