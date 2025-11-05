import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
    title: "VECTORCOM — Tecnología aplicada a tu negocio",
    description: "Software, IoT Agronómico y Visión Computacional para empresas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="
        bg-black text-zinc-100
        bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(109,26,148,0.18),transparent_60%),radial-gradient(900px_600px_at_90%_10%,rgba(109,26,148,0.15),transparent_60%)]
      ">
        <TopBar />
        {children}
        </body>
        </html>
    );
}
