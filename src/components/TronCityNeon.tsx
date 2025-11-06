"use client";

import React from "react";

export default function TronCityNeon() {
    // Geometría base (punto de fuga y bordes del piso)
    const vp = { x: 320, y: 140 };
    const bl = { x: 80, y: 440 };
    const br = { x: 560, y: 440 };

    // Rejilla en perspectiva
    const vCount = 17;
    const verticals = Array.from({ length: vCount }, (_, i) => {
        const xBottom = bl.x + ((br.x - bl.x) * i) / (vCount - 1);
        return `M ${xBottom} ${bl.y} L ${vp.x} ${vp.y}`;
    });

    const hLevels = 13;
    const tVals = Array.from({ length: hLevels }, (_, k) => 1 - Math.pow(0.86, k + 1));
    const horizontals = tVals.map((t) => {
        const xL = bl.x + (vp.x - bl.x) * t;
        const yL = bl.y + (vp.y - bl.y) * t;
        const xR = br.x + (vp.x - br.x) * t;
        const yR = br.y + (vp.y - br.y) * t;
        return `M ${xL} ${yL} L ${xR} ${yR}`;
    });

    // Vías principales (con neón animado)
    const roads = [
        `M ${bl.x + 44} ${bl.y} L ${vp.x} ${vp.y}`,
        `M ${br.x - 44} ${br.y} L ${vp.x} ${vp.y}`,
        (() => {
            const t = 0.56;
            const xL = bl.x + (vp.x - bl.x) * t;
            const y = bl.y + (vp.y - bl.y) * t;
            const xR = br.x + (vp.x - br.x) * t;
            return `M ${xL} ${y} L ${xR} ${y}`;
        })(),
    ];

    // Edificios (x: centro base, y: base; w: ancho; h: alto)
    const buildings = [
        { x: 260, y: 300, w: 40, h: 140, delay: 0.0, cols: 2 },
        { x: 320, y: 280, w: 56, h: 180, delay: 0.2, cols: 3 }, // torre central
        { x: 380, y: 295, w: 42, h: 150, delay: 0.4, cols: 2 },
    ];

    // Render de un edificio detallado
    const Building: React.FC<{
        x: number; y: number; w: number; h: number; delay?: number; cols?: number;
    }> = ({ x, y, w, h, delay = 0, cols = 2 }) => {
        const left = x - w / 2;
        const top = y - h;

        // Ventanas
        const rows = Math.max(6, Math.floor(h / 25));
        const c = Math.min(4, Math.max(2, cols));
        const winW = (w - (c + 1) * 4) / c;  // padding interno 4px
        const winH = 10;
        const winGapY = (h - 24 - rows * winH) / (rows + 1); // deja margen arriba/abajo

        return (
            <g>
                {/* Cuerpo con gradiente y “biseles” */}
                <defs>
                    <linearGradient id="faceGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0b0a10" />
                        <stop offset="55%" stopColor="#121121" />
                        <stop offset="100%" stopColor="#0a0a12" />
                    </linearGradient>
                    <linearGradient id="edgeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D6C2FF" />
                        <stop offset="100%" stopColor="#6D1A94" />
                    </linearGradient>
                    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="2.4" />
                    </filter>
                </defs>

                {/* Sombra al pie */}
                <ellipse cx={x} cy={y + 4} rx={w * 0.45} ry={6} fill="black" opacity=".35" filter="url(#soft)" />

                {/* Cuerpo */}
                <rect x={left} y={top} width={w} height={h} rx={2} fill="url(#faceGrad)" />

                {/* Borde de neón (marco) */}
                <g
                    stroke="url(#edgeGrad)"
                    strokeWidth={1.8}
                    filter="url(#glowStrong)"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                >
                    <rect x={left + 0.9} y={top + 0.9} width={w - 1.8} height={h - 1.8} rx={2} fill="none" />
                </g>

                {/* “Biseles”/nervaduras verticales sutiles */}
                <g stroke="rgba(255,255,255,.06)" strokeWidth={1}>
                    {[...Array(c - 1)].map((_, i) => {
                        const xx = left + ((i + 1) * w) / c;
                        return <line key={i} x1={xx} y1={top + 6} x2={xx} y2={y - 6} />;
                    })}
                </g>

                {/* Holograma en azotea */}
                <g transform={`translate(${x},${top - 10})`} filter="url(#glowStrong)">
                    <rect x={-w * 0.35} y={-6} width={w * 0.7} height={12} rx={3} fill="url(#edgeGrad)" opacity=".18" />
                    <rect
                        x={-w * 0.32}
                        y={-4}
                        width={w * 0.64}
                        height={8}
                        rx={2}
                        fill="url(#edgeGrad)"
                        opacity=".22"
                        className="tc-scan"
                        style={{ animationDelay: `${delay}s` } as React.CSSProperties}
                    />
                </g>

                {/* Antena con pulsos */}
                <g transform={`translate(${x},${top - 18})`} filter="url(#glowStrong)">
                    <line x1={0} y1={0} x2={0} y2={-16} stroke="url(#edgeGrad)" strokeWidth={1.5} />
                    <circle cx={0} cy={-18} r={2.5} fill="url(#edgeGrad)" />
                    {/* Pulsos (SVG animate) */}
                    <circle cx={0} cy={-18} r={3} stroke="url(#edgeGrad)" strokeWidth={1.2} fill="none" opacity=".7">
                        <animate attributeName="r" from="3" to="18" dur="2.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from=".6" to="0" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={0} cy={-18} r={3} stroke="url(#edgeGrad)" strokeWidth={1.2} fill="none" opacity=".7">
                        <animate attributeName="r" from="3" to="18" dur="2.2s" begin=".9s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from=".6" to="0" dur="2.2s" begin=".9s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Ventanas (con titileo) */}
                <g filter="url(#softGlow)">
                    {Array.from({ length: rows }).map((_, r) =>
                        Array.from({ length: c }).map((__, cc) => {
                            const vx = left + 4 + cc * (winW + 4);
                            const vy = top + 12 + (r + 1) * winGapY + r * winH;
                            const cls = (r + cc) % 2 === 0 ? "tc-twinkle-slow" : "tc-twinkle-fast";
                            return (
                                <rect
                                    key={`${r}-${cc}`}
                                    x={vx}
                                    y={vy}
                                    width={winW}
                                    height={winH}
                                    rx={2}
                                    fill="url(#edgeGrad)"
                                    opacity=".85"
                                    className={cls}
                                    style={{ animationDelay: `${(r * 0.07 + cc * 0.05 + (delay || 0)) % 1.2}s` } as React.CSSProperties}
                                />
                            );
                        })
                    )}
                </g>
            </g>
        );
    };

    return (
        <div className="aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800/60 bg-zinc-900/30 relative">
            {/* Glow del panel */}
            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(780px_380px_at_22%_18%,rgba(109,26,148,.22),transparent_60%),radial-gradient(660px_300px_at_82%_28%,rgba(168,116,229,.16),transparent_60%)]" />

            <svg viewBox="0 0 640 480" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                    <linearGradient id="neon" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#D6C2FF" />
                        <stop offset="100%" stopColor="#6D1A94" />
                    </linearGradient>

                    <filter id="glowStrong" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="4.2" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="7" />
                    </filter>
                </defs>

                {/* Sombra general */}
                <ellipse cx="320" cy="410" rx="210" ry="30" fill="black" opacity=".28" filter="url(#soft)" />

                {/* Rejilla base */}
                <g stroke="rgba(255,255,255,.08)" strokeWidth="2">
                    {verticals.map((d, i) => <path key={`vb-${i}`} d={d} />)}
                    {horizontals.map((d, i) => <path key={`hb-${i}`} d={d} />)}
                </g>

                {/* Neón en vías principales */}
                <g stroke="url(#neon)" strokeWidth="3.5" strokeLinecap="round" filter="url(#glowStrong)">
                    {roads.map((d, i) => (
                        <path
                            key={`rn-${i}`}
                            d={d}
                            className={i === 0 ? "neon-dash-16" : i === 1 ? "neon-dash-12" : "neon-dash-18"}
                            style={{ strokeDasharray: "22 26", strokeDashoffset: 0 } as React.CSSProperties}
                        />
                    ))}
                </g>

                {/* Edificios detallados */}
                {buildings.map((b, idx) => (
                    <Building key={idx} {...b} />
                ))}

                {/* Tráfico/drones */}
                <g filter="url(#glowStrong)">
                    {[
                        { d: roads[0], color: "#D6C2FF", r: 3.2, dur: 7.2, starts: [0, 1.8, 3.6] },
                        { d: roads[1], color: "#B892FF", r: 3.0, dur: 7.6, starts: [0.9, 2.7] },
                        { d: roads[2], color: "#9AE6FF", r: 2.8, dur: 6.6, starts: [0.5, 2.0, 3.5] },
                    ].flatMap((road, i) =>
                        road.starts.map((begin, j) => (
                            <circle key={`${i}-${j}`} r={road.r} fill={road.color}>
                                <animateMotion path={road.d} dur={`${road.dur}s`} begin={`${begin}s`} rotate="auto" repeatCount="indefinite" />
                            </circle>
                        ))
                    )}
                </g>

                {/* Borde del panel del piso */}
                <path
                    d={`M ${bl.x} ${bl.y} L ${vp.x} ${vp.y} L ${br.x} ${br.y}`}
                    fill="none"
                    stroke="url(#neon)"
                    strokeOpacity=".12"
                    strokeWidth="6"
                    filter="url(#glowStrong)"
                />
            </svg>

            {/* Scanline sutil del panel */}
            <div className="pointer-events-none absolute inset-x-0 h-1/2 tc-scan opacity-[0.06] bg-[linear-gradient(to_bottom,rgba(214,194,255,.2),transparent_25%)]" />

            {/* Fade inferior */}
            <div className="absolute inset-x-0 bottom-0 h-12 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
        </div>
    );
}
