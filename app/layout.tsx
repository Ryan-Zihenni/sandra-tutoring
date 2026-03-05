import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sandra Mastromarino | Simply Speaking",
  description: "Learning English should feel supportive and calm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
