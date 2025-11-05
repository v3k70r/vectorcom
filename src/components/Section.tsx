import { ReactNode } from "react";

export default function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
    return (
        <section id={id} className="py-16">
            <div className="max-w-[1120px] w-[92%] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                {subtitle && <p className="text-zinc-400 mt-2">{subtitle}</p>}
                <div className="mt-6">{children}</div>
            </div>
        </section>
    );
}
