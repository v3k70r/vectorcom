"use client";

/**
 * Cubo Rubik 3×3 negro con separadores en neón púrpura animados.
 * Neón visible en las 3 caras (superior, izquierda, derecha).
 */
export default function RubikNeonCube() {
    // Transformaciones afines (mapean [0..1]×[0..1] a cada cara)
    const topMat   = "matrix(140 80 -140 80 320 130)";
    const leftMat  = "matrix(140 80 40 105 180 210)";
    const rightMat = "matrix(-140 80 -40 105 460 210)";

    // Separadores 3×3 en 1/3 y 2/3
    const t1 = 1 / 3;
    const t2 = 2 / 3;

    // Para no llegar a los vértices (evita “sangrado” fuera de la cara)
    const pad = 0.06;

    // Componente “grupo de líneas de neón” reutilizable para cada cara
    const NeonGrid = ({ verticalFirst = true }: { verticalFirst?: boolean }) => (
        <>
            {/* HALO: trazos más gruesos y transparentes para el brillo difuso */}
            <g
                stroke="url(#gPurpleCube)"
                strokeWidth={6}
                opacity={0.35}
                strokeLinecap="round"
                filter="url(#glowStrongCube)"
                vectorEffect="non-scaling-stroke"
            >
                {/* Verticales */}
                <line x1={t1} y1={pad} x2={t1} y2={1 - pad} />
                <line x1={t2} y1={pad} x2={t2} y2={1 - pad} />
                {/* Horizontales */}
                <line x1={pad} y1={t1} x2={1 - pad} y2={t1} />
                <line x1={pad} y1={t2} x2={1 - pad} y2={t2} />
            </g>

            {/* Núcleo del tubo de neón (más fino, animado) */}
            <g
                stroke="url(#gPurpleCube)"
                strokeWidth={2.4}
                strokeLinecap="round"
                filter="url(#glowStrongCube)"
                vectorEffect="non-scaling-stroke"
            >
                {/* Verticales */}
                <line
                    x1={t1}
                    y1={pad}
                    x2={t1}
                    y2={1 - pad}
                    className="neon-dash-16"
                    strokeDasharray="22 26"
                    strokeDashoffset={0}
                />
                <line
                    x1={t2}
                    y1={pad}
                    x2={t2}
                    y2={1 - pad}
                    className="neon-dash-12"
                    strokeDasharray="22 26"
                    strokeDashoffset={0}
                />
                {/* Horizontales */}
                <line
                    x1={pad}
                    y1={t1}
                    x2={1 - pad}
                    y2={t1}
                    className="neon-dash-18"
                    strokeDasharray="22 26"
                    strokeDashoffset={0}
                />
                <line
                    x1={pad}
                    y1={t2}
                    x2={1 - pad}
                    y2={t2}
                    className="neon-dash-10"
                    strokeDasharray="22 26"
                    strokeDashoffset={0}
                />
            </g>
        </>
    );

    return (
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-900/30 relative">
            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(780px_380px_at_22%_18%,rgba(109,26,148,.22),transparent_60%),radial-gradient(660px_300px_at_82%_28%,rgba(168,116,229,.16),transparent_60%)]" />

            <svg viewBox="0 0 640 480" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                    <linearGradient id="gPurpleCube" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#B690FF" />
                        <stop offset="100%" stopColor="#6D1A94" />
                    </linearGradient>

                    {/* Halo/Glow fuerte del neón */}
                    <filter id="glowStrongCube" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="4.2" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Sombra blanda del cubo */}
                    <filter id="softShadowCube" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="7" />
                    </filter>
                </defs>

                {/* Sombra global */}
                <ellipse cx="320" cy="410" rx="210" ry="30" fill="black" opacity=".28" filter="url(#softShadowCube)" />

                {/* Caras laterales (negros con leve diferencia para volumen) */}
                <polygon points="180,210 320,290 360,395 220,315" fill="#121016" />
                <polygon points="460,210 320,290 280,395 420,315" fill="#0f0b13" />

                {/* Cara superior (negro profundo para máximo contraste) */}
                <polygon points="320,130 460,210 320,290 180,210" fill="#09090f" />
                {/* Bisel sutil */}
                <polyline points="180,210 320,130 460,210" fill="none" stroke="white" strokeOpacity=".18" />

                {/* === Neón en la cara superior === */}
                <g transform={topMat}>
                    <NeonGrid />
                </g>

                {/* === Neón en la cara izquierda === */}
                <g transform={leftMat}>
                    <NeonGrid />
                </g>

                {/* === Neón en la cara derecha === */}
                <g transform={rightMat}>
                    <NeonGrid />
                </g>
            </svg>

            <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    );
}
