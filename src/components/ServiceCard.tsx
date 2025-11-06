// src/components/ServiceCard.tsx
"use client";

type Kind = "software" | "iot" | "vision";

export default function ServiceCard({
                                        title,
                                        desc,
                                        kind = "software",
                                    }: {
    title: string;
    desc: string;
    kind?: Kind;
}) {
    return (
        <div
            className="
        relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40
        p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,.04)]
        transition-transform duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(109,26,148,.25)]
        focus-within:-translate-y-0.5
      "
        >
            {/* Animación SCAN para TODOS los recuadros */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/20" />
                <div
                    className="
            absolute top-0 left-0 h-full w-1/3 animate-scanX
            bg-gradient-to-r from-transparent via-[#9b5ae4]/18 to-transparent
            blur-sm mix-blend-screen
          "
                />
            </div>

            {/* Contenido */}
            <div className="flex items-start gap-4">
                <div className="shrink-0">
                    <ServiceIcon kind={kind} />
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-extrabold">{title}</h3>
                    <p className="mt-2 text-zinc-300">{desc}</p>
                </div>
            </div>
        </div>
    );
}

/* ================== ICONOS (SVG inline) ================== */
function ServiceIcon({ kind }: { kind: "software" | "iot" | "vision" }) {
    const common = "w-14 h-14 md:w-16 md:h-16";
    if (kind === "iot") return <IconIoT className={common} />;
    if (kind === "vision") return <IconVision className={common} />;
    return <IconSoftware className={common} />;
}

/* --- Software: Dashboard con charts --- */
function IconSoftware({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D6C2FF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id="glow1" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2.2" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <rect x="6" y="10" width="52" height="44" rx="6" fill="#0c0b12" />
            <rect x="6" y="10" width="52" height="8" rx="6" fill="#131022" />
            <circle cx="14" cy="14" r="2" fill="url(#g1)" />
            <circle cx="21" cy="14" r="2" fill="url(#g1)" opacity=".65" />
            <circle cx="28" cy="14" r="2" fill="url(#g1)" opacity=".35" />
            {/* barras */}
            {[12, 20, 28, 36, 44].map((x, i) => (
                <rect key={i} x={x} y={28 - i * 3} width="4" height={20 + i * 3} fill="url(#g1)" filter="url(#glow1)" opacity=".85" />
            ))}
            {/* línea */}
            <path
                d="M12 40 L20 34 L28 36 L36 30 L44 32 L52 26"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="1.8"
                filter="url(#glow1)"
            />
        </svg>
    );
}

/* --- IoT Agronómico: campo + circuitos --- */
function IconIoT({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D6C2FF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id="glow2" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2.2" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {/* cielo */}
            <rect x="4" y="6" width="56" height="20" rx="6" fill="#151226" />
            {/* suelo en perspectiva */}
            <path d="M4 26 L60 26 L52 54 L12 54 Z" fill="#0c0b12" />
            {/* surcos/grid */}
            <g stroke="rgba(255,255,255,.10)" strokeWidth="1">
                {[...Array(5)].map((_, i) => {
                    const x = 12 + i * 10;
                    return <path key={i} d={`M${x} 54 L${32} 26 L${52 - i * 10} 54`} fill="none" />;
                })}
                {[30, 40, 48].map((y, i) => (
                    <path key={i} d={`M12 ${y} L52 ${y}`} />
                ))}
            </g>
            {/* circuitos/luz */}
            <g stroke="url(#g2)" strokeWidth="2" filter="url(#glow2)" strokeLinecap="round">
                <path d="M16 48 L24 40 L32 44 L40 36 L48 40" className="neon-dash-12" style={{ strokeDasharray: "10 12" }} />
                <circle cx="24" cy="24" r="4" fill="url(#g2)" opacity=".35" />
                <line x1="24" y1="24" x2="24" y2="36" />
            </g>
            {/* planta stylized */}
            <g transform="translate(24,24)" filter="url(#glow2)">
                <path d="M0 0 C2 -4, 6 -6, 8 -2 C5 -2, 2 0, 0 2 Z" fill="url(#g2)" opacity=".8" />
                <path d="M0 0 C-2 -4, -6 -6, -8 -2 C-5 -2, -2 0, 0 2 Z" fill="url(#g2)" opacity=".6" />
            </g>
        </svg>
    );
}

/* --- Visión Computacional: lente + HUD --- */
function IconVision({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D6C2FF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id="glow3" x="-90%" y="-90%" width="280%" height="280%">
                    <feGaussianBlur stdDeviation="2.6" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <rect x="6" y="10" width="52" height="44" rx="6" fill="#0c0b12" />
            {/* bounding box */}
            <rect x="12" y="16" width="40" height="32" rx="2" fill="none" stroke="rgba(255,255,255,.18)" />
            {/* lente */}
            <g filter="url(#glow3)" stroke="url(#g3)">
                <circle cx="32" cy="32" r="10" fill="none" strokeWidth="2" />
                <circle cx="32" cy="32" r="6" fill="url(#g3)" opacity=".20" />
                <circle cx="32" cy="32" r="6" fill="none" strokeWidth="1.6" className="neon-dash-10" style={{ strokeDasharray: "8 10" }} />
            </g>
            {/* cruz central */}
            <g stroke="url(#g3)" filter="url(#glow3)" opacity=".9">
                <line x1="24" y1="32" x2="40" y2="32" strokeWidth="1.2" />
                <line x1="32" y1="24" x2="32" y2="40" strokeWidth="1.2" />
            </g>
        </svg>
    );
}
