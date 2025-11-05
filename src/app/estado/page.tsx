import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function EstadoPage() {
    return (
        <>
            <Header />
            <main className="max-w-[1120px] w-[92%] mx-auto py-12">
                <h1 className="text-3xl md:text-4xl font-extrabold">Trabajamos con el Estado</h1>
                <p className="text-zinc-400 mt-2">
                    Preparados para participar en procesos de compra pública a través de Mercado Público (ChileCompra).
                </p>

                <Section title="Qué ofrecemos al sector público">
                    <ul className="list-disc ml-6 text-zinc-300 space-y-2">
                        <li>Digitalización de procesos con IA y automatización documental</li>
                        <li>Soluciones IoT para monitoreo, telemetría y alertas</li>
                        <li>Visión computacional para control de calidad y seguridad</li>
                        <li>Integraciones con sistemas existentes y tableros de control</li>
                    </ul>
                </Section>

                <Section title="Cómo operamos en compra pública" subtitle="Acompañamiento desde la propuesta hasta la implementación.">
                    <ol className="list-decimal ml-6 text-zinc-300 space-y-2">
                        <li>Levantamiento de requerimientos técnicos</li>
                        <li>Propuesta técnica y económica</li>
                        <li>Ejecución por etapas (piloto → producción)</li>
                        <li>Capacitación, documentación y soporte</li>
                    </ol>
                    <p className="text-zinc-400 mt-4 text-sm">
                        Nota: Este sitio no sustituye la revisión de bases y normativa vigente de ChileCompra/ChileProveedores.
                    </p>
                </Section>

                <section className="mt-8 border border-zinc-800/60 bg-zinc-900/30 rounded-2xl p-6">
                    <h2 className="text-xl font-bold">¿Listos para una conversación?</h2>
                    <p className="text-zinc-300 mt-1">Agenda una reunión para explorar casos de uso y roadmap.</p>
                    <a href="/#contacto"
                       className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-xl font-semibold border border-transparent transition [background:#6d1a94] text-white shadow-[0_10px_30px_rgba(109,26,148,.35)] hover:brightness-110 hover:contrast-110">
                        Agenda una llamada
                    </a>
                </section>
            </main>
            <Footer />
        </>
    );
}
