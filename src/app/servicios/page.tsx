import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
    return (
        <>
            <Header />
            <main className="max-w-[1120px] w-[92%] mx-auto py-12">
                <h1 className="text-3xl md:text-4xl font-extrabold">Servicios</h1>
                <p className="text-zinc-400 mt-2">
                    Digitalizamos procesos con IA, IoT y visión computacional para reducir costos, errores y tiempos de ciclo.
                </p>

                <Section title="Oferta principal">
                    <div className="grid md:grid-cols-3 gap-4">
                        <ServiceCard title="Automatización con IA"
                                     desc="Chatbots internos, RAG, clasificación y extracción de datos en documentos, asistentes para procesos." />
                        <ServiceCard title="Visión Computacional"
                                     desc="Control de calidad, conteo, seguridad perimetral, OCR e inspección con cámaras e IA." />
                        <ServiceCard title="IoT Industrial/Agrícola"
                                     desc="Telemetría (ESP32/LoRa), control de riego/bombas, mantenimiento predictivo y alarmas." />
                    </div>
                </Section>

                <Section title="Datos & Integraciones"
                         subtitle="Unimos tus sistemas para que la información fluya.">
                    <div className="grid md:grid-cols-3 gap-4">
                        <ServiceCard title="Dashboards & BI" desc="KPIs, cuadros de mando operativos y ejecutivos." />
                        <ServiceCard title="APIs & ETL" desc="Integraciones con ERP/CRM, normalización de datos y pipelines." />
                        <ServiceCard title="Seguridad" desc="Autenticación, autorización y buenas prácticas OWASP." />
                    </div>
                </Section>

                <Section title="Metodología" subtitle="De idea a producción sin fricciones.">
                    <ol className="list-decimal ml-6 text-zinc-300 space-y-2">
                        <li>Descubrimiento y priorización de casos de uso</li>
                        <li>Piloto (PoC) con entregables en semanas</li>
                        <li>Despliegue y capacitación</li>
                        <li>Operación gestionada y mejora continua</li>
                    </ol>
                </Section>
            </main>
            <Footer />
        </>
    );
}
