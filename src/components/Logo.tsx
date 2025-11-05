"use client";
import Link from "next/link";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
    const h =
        size === "lg" ? "h-12" :
            size === "sm" ? "h-8"  : "h-10";

    return (
        <Link href="#inicio" className="group flex items-center gap-3" aria-label="VECTORCOM — Inicio">
            {/* Isotipo “V” con degradado en SVG, nítido en retina */}
            <svg viewBox="0 0 40 40" className={`${h} w-auto`} role="img" aria-hidden="true">
                <defs>
                    <linearGradient id="vcg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#A874E5"/>
                        <stop offset="100%" stopColor="#6D1A94"/>
                    </linearGradient>
                    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,.35)"/>
                    </filter>
                </defs>
                {/* Placa redondeada */}
                <rect x="1.5" y="1.5" width="37" height="37" rx="9" fill="url(#vcg)" filter="url(#soft)"/>
                {/* V estilizada (piernas gruesas, legible a tamaños pequeños) */}
                <path
                    d="M9 12.5c0-1.1.9-2 2-2h3.2c.8 0 1.5.5 1.8 1.2l4.1 9.7c.2.5.9.5 1.1 0l4.1-9.7c.3-.7 1-1.2 1.8-1.2H30c1.1 0 2 .9 2 2 0 .3-.1.6-.2.9l-7 15.6c-.3.7-1 1.2-1.8 1.2h-4c-.8 0-1.5-.5-1.8-1.2l-7-15.6c-.1-.3-.2-.6-.2-.9z"
                    fill="white"
                />
            </svg>

            {/* Wordmark legible (texto real, sin imagen borrosa) */}
            <span className="hidden sm:inline text-white font-extrabold tracking-tight text-xl leading-none">
        VECTOR<span className="[color:#A874E5] group-hover:[color:#c19cf0] transition">COM</span>
      </span>
        </Link>
    );
}
