import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

// Configurar la fuente con Next.js 15
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dynamic Page Renderer",
    default: "Dynamic Page Renderer",
  },
  description:
    "Una aplicación que renderiza páginas dinámicamente según un JSON",
  metadataBase: new URL("https://example.com"),
};

// Configuración de Viewport mejorada en Next.js 15
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
