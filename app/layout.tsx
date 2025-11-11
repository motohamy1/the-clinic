import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '@/lib/registry';

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "THe Clinic",
  description: "Created to make your health in safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inriaSerif.variable} font-sans antialiased`} suppressHydrationWarning={true}
        style={{ fontFamily: 'var(--font-inria-serif)' }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
