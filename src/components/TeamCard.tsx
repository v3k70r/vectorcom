// src/components/TeamCard.tsx
type Props = {
    name: string;
    role: string;
    photoUrl?: string;      // opcional: /team/matias.jpg
    linkedin?: string;      // opcional
    email?: string;         // opcional
};

export default function TeamCard({ name, role, photoUrl, linkedin, email }: Props) {
    return (
        <div className="relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 md:p-7
                    shadow-[inset_0_1px_0_rgba(255,255,255,.04)]
                    transition hover:-translate-y-0.5 hover:border-purple-500/40">
            <div className="flex items-center gap-4">
                {photoUrl ? (
                    // Si tienes foto, colócala en /public/team/*.jpg y pásala por prop
                    <img
                        src={photoUrl}
                        alt={name}
                        className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover ring-1 ring-white/10"
                    />
                ) : (
                    // Avatar por defecto con iniciales
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl grid place-items-center
                          text-xl md:text-2xl font-extrabold text-white
                          bg-gradient-to-br from-[#6D1A94] to-[#A874E5]">
                        {getInitials(name)}
                    </div>
                )}

                <div>
                    <h4 className="text-xl md:text-2xl font-extrabold">{name}</h4>
                    <p className="text-zinc-400">{role}</p>

                    <div className="mt-2 flex gap-3">
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noreferrer"
                               className="text-zinc-300 hover:text-white transition" aria-label="LinkedIn">
                                {/* ícono simple */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5Zm.52 6.5H2V22h3.5V10ZM9 10H5.5V22H9v-6.5c0-2.2 3-2.37 3 0V22H15v-7.86c0-5.1-5.8-4.9-6-.96V10Z"/></svg>
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="text-zinc-300 hover:text-white transition" aria-label="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* halo sutil al pasar el mouse */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
                      hover:opacity-100 transition
                      [background:radial-gradient(600px_200px_at_20%_0%,rgba(109,26,148,.15),transparent_60%)]" />
        </div>
    );
}

function getInitials(name: string) {
    return name
        .split(" ")
        .filter(Boolean)
        .map((n) => n[0]!.toUpperCase())
        .slice(0, 2)
        .join("");
}
