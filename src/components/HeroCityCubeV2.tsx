"use client";

/**
 * Cubo 3×3 estilo Rubik con separadores “neón púrpura” en
 * la cara superior y en las caras laterales.
 * Las torres emergen desde el centro de los cuadrados de la fila central.
 */
export default function HeroCityCubeV2() {
    /* === Transformaciones afines para cada cara ===
       matrix(a b c d e f)  =>  X = a*x + c*y + e ;  Y = b*x + d*y + f
       Usamos (x,y) en [0..1]×[0..1] para dibujar grids rectangulares,
       y la matriz los mapea a cada paralelogramo de la cara isométrica. */

    // Cara superior (rombo)
    const topMat   = "matrix(140 80 -140 80 320 130)";

    // Cara izquierda: L(180,210), to B(320,290) => u=(140,80)
    //                 L(180,210), to LL(220,315) => v=(40,105)
    const leftMat  = "matrix(140 80 40 105 180 210)";

    // Cara derecha:  R(460,210), to B(320,290) => u=(-140,80)
    //                 R(460,210), to RL(420,315) => v=(-40,105)
    const rightMat = "matrix(-140 80 -40 105 460 210)";

    // Grid 3×3
    const N = 3;
    const step = 1 / N;
    const gridTs = [step, 2 * step];          // 1/3 y 2/3
    const centers = [step / 2, 0.5, 1 - step / 2]; // 1/6, 1/2, 5/6

    // Torres: centros de los cuadrados de la fila central (tres columnas)
    const towersUV = [
        { u: centers[0], v: centers[1], riseClass: "riseA" }, // izquierda
        { u: centers[1], v: centers[1], riseClass: "riseB" }, // centro
        { u: centers[2], v: centers[1], riseClass: "riseC" }, // derecha
    ];

    // Proyecta (u,v) del plano superior a coordenadas pantalla (misma base que topMat)
    const projectTop = (u: number, v: number) => ({
        x: 140 * u - 140 * v + 320,
        y:  80 * u +  80 * v + 130,
    });
    const towerBases = towersUV.map(({ u, v }) => projectTop(u, v));

    return (
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-900/30 relative">
            {/* Glow de integración */}
            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(780px_380px_at_22%_18%,rgba(109,26,148,.22),transparent_60%),radial-gradient(660px_300px_at_82%_28%,rgba(168,116,229,.16),transparent_60%)]" />

            <svg viewBox="0 0 640 480" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                    <linearGradient id="gPurple" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#A874E5" />
                        <stop offset="100%" stopColor="#6D1A94" />
                    </linearGradient>
                    <linearGradient id="gFace" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#141218" />
                        <stop offset="100%" stopColor="#211b2a" />
                    </linearGradient>
                    {/* Glow fuerte para simular luz interna del cubo */}
                    <filter id="glowStrong" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="3.8" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="7" />
                    </filter>

                    {/* Clipping de cada cara (para que el “neón” no se salga) */}
                    <clipPath id="clipTop">
                        <polygon points="320,130 460,210 320,290 180,210" />
                    </clipPath>
                    <clipPath id="clipLeft">
                        {/* Paralelogramo consistente */}
                        <polygon points="180,210 320,290 360,395 220,315" />
                    </clipPath>
                    <clipPath id="clipRight">
                        <polygon points="460,210 320,290 280,395 420,315" />
                    </clipPath>
                </defs>

                {/* Sombra general */}
                <ellipse cx="320" cy="410" rx="210" ry="30" fill="black" opacity=".28" filter="url(#softGlow)" />

                {/* ===== Caras laterales (debajo) ===== */}
                <polygon points="180,210 320,290 360,395 220,315" fill="#150f19" />
                <polygon points="460,210 320,290 280,395 420,315" fill="#0f0c14" />

                {/* ===== Cara superior (negra para máximo contraste) ===== */}
                <polygon points="320,130 460,210 320,290 180,210" fill="#0b0b12" />
                <polyline points="180,210 320,130 460,210" fill="none" stroke="white" strokeOpacity=".22" />

                {/* ===== Separadores “neón” en la cara superior (3×3) ===== */}
                <g transform={topMat} clipPath="url(#clipTop)">
                    {/* líneas de grid (1/3 y 2/3 en ambos ejes) */}
                    <g stroke="url(#gPurple)" strokeWidth={0.11} filter="url(#glowStrong)" strokeLinecap="round">
                        {gridTs.map((t) => (
                            <line key={`tv-${t}`} x1={t} y1={0.06} x2={t} y2={0.94} />
                        ))}
                        {gridTs.map((t) => (
                            <line key={`th-${t}`} x1={0.06} y1={t} x2={0.94} y2={t} />
                        ))}
                    </g>
                </g>

                {/* ===== Separadores “neón” en la cara izquierda ===== */}
                <g transform={leftMat} clipPath="url(#clipLeft)">
                    <g stroke="url(#gPurple)" strokeWidth={0.11} filter="url(#glowStrong)" strokeLinecap="round">
                        {gridTs.map((t) => <line key={`lv-${t}`} x1={t} y1={0.06} x2={t} y2={0.94} />)}
                        {gridTs.map((t) => <line key={`lh-${t}`} x1={0.06} y1={t} x2={0.94} y2={t} />)}
                    </g>
                </g>

                {/* ===== Separadores “neón” en la cara derecha ===== */}
                <g transform={rightMat} clipPath="url(#clipRight)">
                    <g stroke="url(#gPurple)" strokeWidth={0.11} filter="url(#glowStrong)" strokeLinecap="round">
                        {gridTs.map((t) => <line key={`rv-${t}`} x1={t} y1={0.06} x2={t} y2={0.94} />)}
                        {gridTs.map((t) => <line key={`rh-${t}`} x1={0.06} y1={t} x2={0.94} y2={t} />)}
                    </g>
                </g>

                {/* ===== Torres: centradas en los cuadrados de la fila media ===== */}
                {towerBases.map((p, idx) => (
                    <g key={idx} transform={`translate(${p.x},${p.y})`}>
                        <g className={towersUV[idx].riseClass} style={{ transformOrigin: "bottom center" }}>
                            {/* Zócalo */}
                            <rect x="-18" y="8" width="36" height="6" rx="3" fill="url(#gPurple)" opacity=".9" />
                            {/* Cuerpo */}
                            <rect x="-16" y="-100" width="32" height="110" fill="url(#gFace)" />
                            {/* Ventanas */}
                            {[...Array(6)].map((_, r) => (
                                <rect key={r} x="-6" y={-88 + r * 18} width="12" height="6" rx="1" fill="#fff" opacity=".70" />
                            ))}
                        </g>
                    </g>
                ))}
            </svg>

            {/* Profundidad inferior */}
            <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    );
}
