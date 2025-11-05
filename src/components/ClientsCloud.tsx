export default function ClientsCloud() {
    const items = [
        { name: "AgroTech", src: "/mark-square.png" },
        { name: "InduFlow", src: "/mark-square.png" },
        { name: "LogiMax", src: "/mark-square.png" },
        { name: "Retailia", src: "/mark-square.png" },
        { name: "HealthNet", src: "/mark-square.png" },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {items.map((it) => (
                <div
                    key={it.name}
                    className="h-12 md:h-14 opacity-80 hover:opacity-100 transition grid place-items-center border border-zinc-800/60 rounded-xl bg-zinc-900/30"
                    title={it.name}
                >
                    {/* Reemplaza src por tus logos reales si los tienes en /public/clients/*.svg */}
                    <img src={it.src} alt={it.name} className="h-6 md:h-8 opacity-90" />
                </div>
            ))}
        </div>
    );
}