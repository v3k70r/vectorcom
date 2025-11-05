import { ReactNode } from "react";

export default function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon?: ReactNode }) {
    return (
        <article className="border border-zinc-800/60 bg-zinc-900/30 rounded-2xl p-5 hover:translate-y-[-2px] transition">
            <div className="text-purple-200">{icon}</div>
            <h3 className="mt-2 font-semibold">{title}</h3>
            <p className="text-zinc-400 text-sm mt-1">{desc}</p>
        </article>
    );
}
