import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewGen – AI Interview Questions & Rubrics",
  description: "Generate role-specific interview questions with scoring rubrics from any job description. Built for startup founders and HR managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="22ffe113-3a8e-4e5b-b833-f21c45b1a77d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
