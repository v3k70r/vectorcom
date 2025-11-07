// src/components/ProductCard.tsx
"use client";

import { useId } from "react";

type Kind = "agro" | "productivity" | "ecommerce" | "custom" | "security";

export type ProductProps = {
    kind: Kind;
    name: string;
    tagline: string;
    features: string[];
    badge?: string;     // "IA", "SaaS", "Edge", etc.
    href?: string;      // link a ficha técnica (opcional)
};

export default function ProductCard({
                                        kind,
                                        name,
                                        tagline,
                                        features,
                                        badge,
                                        href,
                                    }: ProductProps) {
    return (
        <div
            className="
        relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40
        p-6 md:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,.04)]
        transition-transform duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(109,26,148,.25)]
        focus-within:-translate-y-0.5
      "
        >
            {/* Overlay animado (banda 'scan' como en servicios) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/20" />
                <div className="absolute top-0 left-0 h-full w-1/3 animate-scanX bg-gradient-to-r from-transparent via-[#9b5ae4]/18 to-transparent blur-sm mix-blend-screen" />
            </div>

            <div className="flex items-start gap-4">
                <div className="shrink-0">
                    <ProductIcon kind={kind} />
                </div>

                <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-extrabold">{name}</h3>
                        {badge && (
                            <span className="text-[10px] px-2 py-1 rounded-full border border-purple-400/30 text-purple-200/90 bg-purple-500/10">
                {badge}
              </span>
                        )}
                    </div>

                    <p className="mt-1 text-zinc-300">{tagline}</p>

                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
                        {features.map((f, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-purple-400/80 shadow-[0_0_10px_rgba(109,26,148,.7)]" />
                                <span className="leading-5">{f}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 flex gap-2">
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold border border-transparent transition [background:#6d1a94] text-white hover:brightness-110 hover:contrast-110"
                        >
                            Cotizar
                        </a>
                        {href && (
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold border border-zinc-700/50 bg-zinc-900/40 hover:bg-zinc-900/70 transition"
                            >
                                Ver ficha
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* -------------------- Íconos -------------------- */
function ProductIcon({ kind }: { kind: Kind }) {
    const common = "w-14 h-14 md:w-16 md:h-16";
    if (kind === "agro") return <IconAgro className={common} />;
    if (kind === "productivity") return <IconProductivity className={common} />;
    if (kind === "ecommerce") return <IconEcommerce className={common} />;
    if (kind === "security") return <IconSecurity className={common} />;
    return <IconCustom className={common} />;
}

/* Agro: campo + circuitos (perspectiva) */
function IconAgro({ className }: { className?: string }) {
    const uid = useId().replace(/:/g, "");
    const grad = `gAgro-${uid}`;
    const glow = `glowAgro-${uid}`;
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D6C2FF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id={glow} x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2.2" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <rect x="4" y="6" width="56" height="20" rx="6" fill="#151226" />
            <path d="M4 26 L60 26 L52 54 L12 54 Z" fill="#0c0b12" />
            <g stroke="rgba(255,255,255,.10)" strokeWidth="1">
                {[...Array(5)].map((_, i) => {
                    const x = 12 + i * 10;
                    return <path key={i} d={`M${x} 54 L${32} 26 L${52 - i * 10} 54`} fill="none" />;
                })}
                {[30, 40, 48].map((y, i) => <path key={i} d={`M12 ${y} L52 ${y}`} />)}
            </g>
            <g stroke={`url(#${grad})`} strokeWidth="2" filter={`url(#${glow})`} strokeLinecap="round">
                <path d="M16 48 L24 40 L32 44 L40 36 L48 40" className="neon-dash-12" style={{ strokeDasharray: "10 12" }} />
                <circle cx="24" cy="24" r="4" fill={`url(#${grad})`} opacity=".35" />
                <line x1="24" y1="24" x2="24" y2="36" />
            </g>
        </svg>
    );
}

/* Productividad (Aladino): ojo + gráfico + halo (visión+analytics) */
function IconProductivity({ className }: { className?: string }) {
    const uid = useId().replace(/:/g, "");
    const grad = `gProd-${uid}`;
    const glow = `glowProd-${uid}`;
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E7DDFF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id={glow} x="-90%" y="-90%" width="280%" height="280%">
                    <feGaussianBlur stdDeviation="2.8" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <rect x="6" y="10" width="52" height="44" rx="6" fill="#0c0b12" />
            <g filter={`url(#${glow})`} stroke={`url(#${grad})`}>
                <path d="M12 32 C20 22, 44 22, 52 32 C44 42, 20 42, 12 32 Z" fill="none" strokeWidth="2" />
                <circle cx="32" cy="32" r="6" fill={`url(#${grad})`} opacity=".18" />
                <circle cx="32" cy="32" r="6" fill="none" strokeWidth="1.6" className="neon-dash-10" style={{ strokeDasharray: "8 10" }} />
            </g>
            <g stroke={`url(#${grad})`} filter={`url(#${glow})`}>
                <path d="M16 40 L24 34 L30 36 L38 30 L46 32 L52 27" fill="none" strokeWidth="1.8" />
            </g>
        </svg>
    );
}

/* eCommerce: carrito + API */
function IconEcommerce({ className }: { className?: string }) {
    const uid = useId().replace(/:/g, "");
    const grad = `gShop-${uid}`;
    const glow = `glowShop-${uid}`;
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D6C2FF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id={glow} x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2.2" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <rect x="8" y="14" width="48" height="36" rx="6" fill="#0c0b12" />
            <g stroke={`url(#${grad})`} filter={`url(#${glow})`}>
                <path d="M16 28 h24 a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4 H20 a4 4 0 0 1 -4 -4 Z" fill="none" strokeWidth="1.6" />
                <circle cx="24" cy="44" r="2" fill={`url(#${grad})`} />
                <circle cx="40" cy="44" r="2" fill={`url(#${grad})`} />
                <path d="M44 20 h6 v4 h-6 M50 20 v-3" fill="none" strokeWidth="1.6" />
            </g>
        </svg>
    );
}

/* Software a medida: { } + móvil/escritorio */
function IconCustom({ className }: { className?: string }) {
    const uid = useId().replace(/:/g, "");
    const grad = `gDev-${uid}`;
    const glow = `glowDev-${uid}`;
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#D6C2FF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id={glow} x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2.2" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>
            <rect x="6" y="12" width="52" height="40" rx="6" fill="#0c0b12" />
            <g stroke={`url(#${grad})`} filter={`url(#${glow})`} strokeWidth="2">
                <path d="M22 24 q-6 8 0 16" fill="none" />
                <path d="M42 24 q6 8 0 16" fill="none" />
            </g>
            <g stroke={`url(#${grad})`} filter={`url(#${glow})`} strokeWidth="1.6">
                <rect x="26" y="30" width="12" height="14" rx="2" fill="none" />
                <rect x="14" y="36" width="8" height="6" rx="1" fill="none" />
                <rect x="42" y="34" width="8" height="8" rx="1" fill="none" />
            </g>
        </svg>
    );
}

/* Seguridad/Vigilancia: escudo + casa + iris de cámara (Aladino Sentinel) */
function IconSecurity({ className }: { className?: string }) {
    const uid = useId().replace(/:/g, "");
    const grad = `gSec-${uid}`;
    const glow = `glowSec-${uid}`;
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden>
            <defs>
                <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E7DDFF" />
                    <stop offset="100%" stopColor="#6D1A94" />
                </linearGradient>
                <filter id={glow} x="-90%" y="-90%" width="280%" height="280%">
                    <feGaussianBlur stdDeviation="2.6" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Escudo base */}
            <path
                d="M32 10 L46 15 V30c0 9-6.2 14.5-14 18-7.8-3.5-14-9-14-18V15Z"
                fill="#0c0b12"
            />
            {/* Contorno escudo */}
            <path
                d="M32 10 L46 15 V30c0 9-6.2 14.5-14 18-7.8-3.5-14-9-14-18V15Z"
                fill="none"
                stroke={`url(#${grad})`}
                strokeWidth="1.8"
                filter={`url(#${glow})`}
            />

            {/* Casa minimal */}
            <path
                d="M22 32 L32 24 L42 32 M24 32 V40 H40 V32"
                fill="none"
                stroke={`url(#${grad})`}
                strokeWidth="1.6"
                filter={`url(#${glow})`}
            />

            {/* Iris / cámara */}
            <g filter={`url(#${glow})`} stroke={`url(#${grad})`}>
                <circle cx="32" cy="28" r="5.5" fill="none" strokeWidth="1.6" />
                <circle
                    cx="32"
                    cy="28"
                    r="5.5"
                    fill="none"
                    strokeWidth="1.6"
                    className="neon-dash-10"
                    style={{ strokeDasharray: "8 10" }}
                />
                <circle cx="32" cy="28" r="2.4" fill={`url(#${grad})`} opacity=".22" />
            </g>
        </svg>
    );
}
