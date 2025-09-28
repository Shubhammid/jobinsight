import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ConvexClientProvider } from "@/context/ConvexClientProvider";
import { Suspense } from "react";
import FallbackLoader from "@/components/FallbackLoader";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Job Assistance | Smart Job Description Analysis, Resume & Career Tools",
  description:
    "Boost your career with AI-powered job assistance. Analyze job descriptions, create tailored resumes, generate personalized cover letters, and gain actionable insights to land your dream job faster.",
  keywords: [
    "AI job assistance",
    "job description analysis",
    "AI resume builder",
    "AI cover letter generator",
    "career tools",
    "job search tools",
    "AI career insights",
    "personalized job applications",
    "resume optimization",
    "AI job matching"
  ],
  openGraph: {
    title: "AI Job Assistance | Smart Career Tools to Land Your Dream Job",
    description:
      "Use AI to analyze job descriptions, generate resumes, write cover letters, and get career insights. Accelerate your job search with smart AI-powered tools.",
    url: "https://yourdomain.com",
    siteName: "AI Job Assistance",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Job Assistance Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Job Assistance | Smart Job Description Analysis & Career Tools",
    description:
      "AI-powered tools to analyze job descriptions, build resumes, and create personalized cover letters. Land your dream job with smarter career insights.",
    images: ["https://yourdomain.com/twitter-card.jpg"],
  },
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
          <ConvexClientProvider>
            <Suspense fallback={<FallbackLoader />}>
              <NuqsAdapter>{children}</NuqsAdapter>
            </Suspense>
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
