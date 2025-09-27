import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Assistance | AI-Powered Job Description Analysis & Career Tools",
  description:
    "Job Assistance uses AI to analyze job descriptions, generate personalized cover letters, build resumes, and provide essential insights to help you understand job requirements and land your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body
          className={`bg-white ${onest.className}`}
          suppressHydrationWarning
        >
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
