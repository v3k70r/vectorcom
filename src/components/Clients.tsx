// src/components/Clients.tsx
type ClientItem = {
    src: string;
    alt: string;
    label?: string;        // texto bajo el logo (p.ej. "OSSO GRAPHIC")
    variant?: "mono" | "invert"; // filtro visual
};

export default function Clients() {
    const items: ClientItem[] = [
        // Usa la versión blanca procesada
        { src: "/clients/quimlab-white.png", alt: "Quimlab", variant: "mono" },

        // Fogón: usa el ORIGINAL a color para preservar la tipografía
        // Pon el archivo original en /public/clients/fogon-mallarauco.jpg
        { src: "/clients/fogon-mallarauco.jpg", alt: "Fogón Mallarauco", variant: "invert" },

        // Osso Graphic: isotipo blanco + etiqueta en texto
        { src: "/clients/bear-white.png", alt: "Osso Graphic", label: "OSSO GRAPHIC", variant: "mono" },

        // AquaLab: versión blanca, contención correcta para que no se corte
        { src: "/clients/aqualab-white.png", alt: "AquaLab", variant: "mono" },
    ];

    return (
        <section
            id="clientes"
            className="max-w-[1120px] w-[92%] mx-auto py-16 md:py-20"
            aria-labelledby="clientes-title"
        >
            <h2 id="clientes-title" className="text-3xl md:text-4xl font-extrabold">
                Confían en nosotros
            </h2>
            <p className="mt-2 text-zinc-400">
                Empresas y marcas que han trabajado con nuestro equipo.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
                {items.map((it) => (
                    <figure
                        key={it.alt}
                        className="group flex flex-col items-center justify-center rounded-2xl
                       border border-zinc-800/60 bg-zinc-900/30 p-6
                       hover:border-purple-500/40 transition"
                    >
                        <img
                            src={it.src}
                            alt={it.alt}
                            className={`
                h-10 md:h-12 w-auto object-contain
                ${it.variant === "mono" ? "opacity-90" : ""}
              `}
                            style={{
                                // Filtros: mantienen consistencia visual sin destruir detalles
                                filter:
                                    it.variant === "invert"
                                        ? "invert(1) grayscale(1) brightness(1.65) contrast(1.2) drop-shadow(0 0 8px rgba(109,26,148,.25))"
                                        : "grayscale(1) brightness(1.25) contrast(1.05) drop-shadow(0 0 8px rgba(109,26,148,.25))",
                            }}
                        />
                        {it.label && (
                            <figcaption className="mt-2 text-[11px] tracking-wide text-zinc-400">
                                {it.label}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>
        </section>
    );
}
