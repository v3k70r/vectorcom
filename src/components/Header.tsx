"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        addEventListener("scroll", onScroll);
        addEventListener("keydown", onKey);
        return () => {
            removeEventListener("scroll", onScroll);
            removeEventListener("keydown", onKey);
        };
    }, []);

    return (
        <header
            className={`sticky top-[4px] z-50 transition ${
                scrolled
                    ? "backdrop-blur bg-black/70 border-b border-zinc-800/60 shadow-[0_10px_30px_rgba(109,26,148,.25)]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-[1120px] w-[92%] mx-auto flex items-center justify-between py-3">
                {/* Logo nuevo (SVG + wordmark) */}
                <Logo size="lg" />

                {/* Navegación */}
                <nav className="relative">
                    {/* Botón móvil */}
                    <button
                        className="md:hidden inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold border border-zinc-700/50 bg-zinc-900/40 hover:bg-zinc-900/70 transition"
                        aria-label="Abrir menú"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        ☰
                    </button>

                    {/* Links desktop */}
                    <ul className="md:flex gap-4 text-zinc-300 hidden">
                        {[
                            { href: "#servicios", label: "Servicios" },
                            { href: "#proyectos", label: "Proyectos" },
                            { href: "#contacto", label: "Contacto" },
                        ].map((i) => (
                            <li key={i.href}>
                                <a
                                    href={i.href}
                                    className="px-2 py-2 rounded-lg hover:text-white relative after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition after:[background:#6d1a94]"
                                >
                                    {i.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Panel móvil */}
                    {open && (
                        <ul
                            className="md:hidden absolute right-0 mt-2 bg-black/90 border border-zinc-800/60 rounded-xl p-2 w-[86vw] max-w-[240px]"
                            role="menu"
                        >
                            <li>
                                <a
                                    className="block px-3 py-2 rounded-lg hover:bg-zinc-800/60"
                                    href="#servicios"
                                    role="menuitem"
                                    onClick={() => setOpen(false)}
                                >
                                    Servicios
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-3 py-2 rounded-lg hover:bg-zinc-800/60"
                                    href="#proyectos"
                                    role="menuitem"
                                    onClick={() => setOpen(false)}
                                >
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-3 py-2 rounded-lg hover:bg-zinc-800/60"
                                    href="#contacto"
                                    role="menuitem"
                                    onClick={() => setOpen(false)}
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}
