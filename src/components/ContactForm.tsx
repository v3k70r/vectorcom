"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | "ok" | "err">(null);
    const [msg, setMsg] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        setMsg("");

        // Capturamos la referencia SIN depender del SyntheticEvent luego del await
        const formEl = formRef.current ?? e.currentTarget;

        const formData = new FormData(formEl);
        const payload = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await res.json();
            if (!res.ok || !json.ok) throw new Error(json.error || "Error");

            setStatus("ok");
            // Reset seguro (ya no usamos e.currentTarget)
            formEl?.reset?.();
        } catch (err: any) {
            setStatus("err");
            setMsg(err?.message || "Error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form ref={formRef} className="grid md:grid-cols-2 gap-3" onSubmit={onSubmit}>
            <div className="grid gap-1">
                <label className="text-sm text-zinc-300" htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" placeholder="Tu nombre"
                       className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:rgba(109,26,148,0.5)]" required />
            </div>
            <div className="grid gap-1">
                <label className="text-sm text-zinc-300" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tu@email.com"
                       className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:rgba(109,26,148,0.5)]" required />
            </div>
            <div className="grid gap-1">
                <label className="text-sm text-zinc-300" htmlFor="empresa">Empresa (opcional)</label>
                <input id="empresa" name="empresa" placeholder="Nombre de empresa"
                       className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:rgba(109,26,148,0.5)]" />
            </div>
            <div className="grid gap-1">
                <label className="text-sm text-zinc-300" htmlFor="tel">Teléfono</label>
                <input id="tel" name="tel" placeholder="+56 9 ..."
                       className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:rgba(109,26,148,0.5)]" />
            </div>
            <div className="grid gap-1 md:col-span-2">
                <label className="text-sm text-zinc-300" htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tu proyecto"
                          className="min-h-[140px] bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:rgba(109,26,148,0.5)]" required />
            </div>
            <div className="flex gap-2 items-center flex-wrap md:col-span-2">
                <button
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border border-transparent transition [background:#6d1a94] text-white shadow-[0_10px_30px_rgba(109,26,148,.35)] hover:brightness-110 hover:contrast-110 disabled:opacity-60"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
                {status === "ok"  && <span className="text-green-400 text-sm">¡Gracias! Te contactaremos pronto.</span>}
                {status === "err" && <span className="text-red-400 text-sm">Hubo un problema: {msg}</span>}
            </div>
        </form>
    );
}
