"use client";

export default function HeroCityCube() {
    return (
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-900/30 relative">
            {/* Glow de fondo */}
            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(700px_360px_at_15%_20%,rgba(109,26,148,.22),transparent_60%),radial-gradient(600px_280px_at_85%_30%,rgba(168,116,229,.16),transparent_60%)]" />

            <svg viewBox="0 0 480 360" className="absolute inset-0 w-full h-full" aria-hidden>
                <defs>
                    {/* Gradientes */}
                    <linearGradient id="gradPurple" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#A874E5" />
                        <stop offset="100%" stopColor="#6D1A94" />
                    </linearGradient>
                    <linearGradient id="gradPink" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c19cf0" />
                        <stop offset="100%" stopColor="#6D1A94" />
                    </linearGradient>
                    <linearGradient id="gradBuilding" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#141218" />
                        <stop offset="100%" stopColor="#211b2a" />
                    </linearGradient>

                    {/* Glow para líneas/neón */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                </defs>

                {/* --- Plataforma (cubo) ------------------------------------------------ */}
                {/* Sombra base */}
                <ellipse cx="240" cy="270" rx="160" ry="22" fill="black" opacity=".25" filter="url(#softGlow)" />
                {/* Caras del cubo estilizadas (isométrico) */}
                <g transform="translate(240,210)">
                    {/* Cara izquierda */}
                    <polygon points="-120,0 -20,-58 -20,20 -120,78" fill="#150f19" />
                    {/* Cara derecha */}
                    <polygon points="120,0 20,-58 20,20 120,78" fill="#0f0c14" />
                    {/* Tapa superior (losange) */}
                    <polygon points="-20,-58 20,-58 120,0 -120,0" fill="url(#gradPurple)" opacity=".95" />
                    {/* Borde brillante */}
                    <polyline points="-120,0 -20,-58 20,-58 120,0" fill="none" stroke="white" strokeOpacity=".35" />
                </g>

                {/* --- Calles (backbone) ------------------------------------------------ */}
                <g transform="translate(240,210) skewX(-14)">
                    {/* Líneas base discretas */}
                    <g stroke="rgba(255,255,255,.08)" strokeWidth="10" strokeLinecap="round">
                        <path d="M-140,40 L140,-40" />
                        <path d="M-120,60 L120,-20" />
                        <path d="M-40,78 L40,40" />
                        <path d="M-150,5 L-30,-45 L100,-10" />
                    </g>

                    {/* Flujo neón (movimiento) */}
                    <g
                        stroke="url(#gradPurple)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        filter="url(#glow)"
                    >
                        <path className="neonFlow slow"
                              d="M-140,40 L140,-40" />
                        <path className="neonFlow mid"
                              d="M-120,60 L120,-20" />
                        <path className="neonFlow fast"
                              d="M-40,78 L40,40" />
                        <path className="neonFlow mid"
                              d="M-150,5 L-30,-45 L100,-10" />
                    </g>
                </g>

                {/* --- Rascacielos que suben/bajan ------------------------------------- */}
                {/* Torre izquierda */}
                <g transform="translate(150,132)">
                    {/* Pedestal luminoso */}
                    <g>
                        <rect x="-32" y="16" width="64" height="12" rx="4" fill="url(#gradPurple)" opacity=".9" />
                        <rect x="-24" y="6" width="48" height="12" rx="4" fill="url(#gradPink)" opacity=".8" />
                        <rect x="-16" y="-2" width="32" height="10" rx="4" fill="#86ffe9" opacity=".6" />
                    </g>

                    {/* Cuerpo (animado) */}
                    <g className="riseA" style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}>
                        {/* Cuerpo principal */}
                        <rect x="-22" y="-110" width="44" height="126" fill="url(#gradBuilding)" />
                        {/* Ventanas */}
                        {[...Array(6)].map((_, r) => (
                            <rect key={r} x="2" y={-100 + r * 18} width="14" height="8" rx="1" fill="#ffffff" opacity=".65" />
                        ))}
                        {/* Bisel morado inferior */}
                        <rect x="-22" y="10" width="44" height="6" fill="url(#gradPurple)" opacity=".75" />
                    </g>
                </g>

                {/* Torre central */}
                <g transform="translate(240,110)">
                    {/* Pedestal */}
                    <g>
                        <rect x="-36" y="16" width="72" height="12" rx="4" fill="url(#gradPurple)" opacity=".95" />
                        <rect x="-26" y="6" width="52" height="12" rx="4" fill="url(#gradPink)" opacity=".85" />
                        <rect x="-18" y="-2" width="36" height="10" rx="4" fill="#86ffe9" opacity=".65" />
                    </g>

                    {/* Cuerpo (animado) */}
                    <g className="riseB" style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}>
                        <rect x="-26" y="-128" width="52" height="146" fill="url(#gradBuilding)" />
                        {[...Array(7)].map((_, r) => (
                            <rect key={r} x="-18" y={-116 + r * 18} width="14" height="8" rx="1" fill="#ffffff" opacity=".65" />
                        ))}
                        <rect x="-26" y="10" width="52" height="6" fill="url(#gradPurple)" opacity=".8" />
                    </g>
                </g>

                {/* Torre derecha */}
                <g transform="translate(330,132)">
                    {/* Pedestal */}
                    <g>
                        <rect x="-32" y="16" width="64" height="12" rx="4" fill="url(#gradPurple)" opacity=".9" />
                        <rect x="-24" y="6" width="48" height="12" rx="4" fill="url(#gradPink)" opacity=".8" />
                        <rect x="-16" y="-2" width="32" height="10" rx="4" fill="#86ffe9" opacity=".6" />
                    </g>

                    {/* Cuerpo (animado) */}
                    <g className="riseC" style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}>
                        <rect x="-22" y="-110" width="44" height="126" fill="url(#gradBuilding)" />
                        {[...Array(6)].map((_, r) => (
                            <rect key={r} x="-16" y={-100 + r * 18} width="14" height="8" rx="1" fill="#ffffff" opacity=".65" />
                        ))}
                        <rect x="-22" y="10" width="44" height="6" fill="url(#gradPurple)" opacity=".75" />
                    </g>
                </g>

                {/* Brillos en la “antena” (transmisión) */}
                {[{x:150,y:108},{x:240,y:86},{x:330,y:108}].map((p,i)=>(
                    <g key={i} transform={`translate(${p.x},${p.y})`}>
                        <circle r="22" fill="url(#gradPurple)" opacity=".12" filter="url(#softGlow)"/>
                        <circle r="10" fill="#86ffe9" opacity=".2" />
                    </g>
                ))}
            </svg>

            {/* degradé inferior para profundidad */}
            <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    );
}
