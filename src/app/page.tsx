import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ClientsCloud from "@/components/ClientsCloud";
import ContactForm from "@/components/ContactForm";
import HeroCityCube from "@/components/HeroCityCube";
import HeroCityCubeV2 from "@/components/HeroCityCubeV2";
import RubikNeonCube from "@/components/RubikNeonCube";
import TronCityNeon from "@/components/TronCityNeon";
import TeamCard from "@/components/TeamCard";
import ProductCard from "@/components/ProductCard";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects"; // 

export default function HomePage() {
    return (
        <>
            <Header />

            {/* HERO */}
            <section
                id="inicio"
                className="max-w-[1120px] w-[92%] mx-auto py-20 grid md:grid-cols-2 gap-10 items-center"
            >
                <div>
          <span className="inline-flex px-2 py-1 rounded-full text-xs border border-[color:rgba(109,26,148,0.45)] text-purple-200 [background:rgba(109,26,148,0.18)]">
            Tecnología aplicada a tu negocio
          </span>
                    <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                        Software, inteligencia artificial, Internet of Things en tu negocio.
                    </h1>
                    <p className="mt-3 text-zinc-400">
                        Implementamos soluciones que elevan la productividad sin interrumpir tu operación.
                    </p>
                    <div className="mt-6 flex gap-3 flex-wrap">
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border border-transparent transition [background:#6d1a94] text-white shadow-[0_10px_30px_rgba(109,26,148,.35)] hover:brightness-110 hover:contrast-110"
                        >
                            Solicitar propuesta
                        </a>
                        <a
                            href="#servicios"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border border-zinc-700/50 bg-zinc-900/40 hover:bg-zinc-900/70 transition"
                        >
                            Ver servicios
                        </a>
                    </div>
                    <div className="mt-3 text-purple-200/80 text-sm">⚡ Rápido • ♿ Accesible • 🤖 Inteligente</div>
                </div>

                <div className="rounded-2xl p-4 border border-zinc-800/60 bg-zinc-900/30 shadow-[0_10px_30px_rgba(109,26,148,.35)]">
                    <TronCityNeon />
                </div>
            </section>

            {/* EQUIPO */}
            <Section
                id="equipo"
                title="Equipo"
                subtitle="Un equipo compacto y senior, con foco en entregar valor rápido."
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <TeamCard
                        name="Javier Gomez"
                        role="CEO"
                    />
                    <TeamCard
                        name="Víctor Albarrán"
                        role="CTO"
                    />
                </div>
            </Section>

            {/* PRODUCTOS */}
            <Section
                id="productos"
                title="Productos"
                subtitle="Soluciones para digitalizar tu operación con IA, IoT y software moderno."
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ProductCard
                        kind="agro"
                        name="AgroVector IA"
                        badge="IA+IoT"
                        tagline="Agronomía inteligente: sensores + modelos predictivos para riego y sanidad."
                        features={[
                            "Monitoreo de suelo y clima",
                            "Alertas y riego inteligente",
                            "KPIs en web y móvil",
                        ]}
                    />

                    <ProductCard
                        kind="productivity"
                        name="Aladino"
                        badge="Visión + IA"
                        tagline="IA para productividad: visión + analítica de tiempos y flujos."
                        features={[
                            "KPIs y cuellos de botella",
                            "Integración con cámaras",
                            "Privacidad por diseño",
                        ]}
                    />

                    <ProductCard
                        kind="ecommerce"
                        name="VectorCommerce"
                        badge="SaaS"
                        tagline="E-commerce headless listo para crecer: storefront veloz y APIs abiertas."
                        features={[
                            "Checkout moderno",
                            "Catálogo e inventario",
                            "Integración logística",
                        ]}
                    />

                    {/* Nuevo producto de seguridad */}
                    <ProductCard
                        kind="security"
                        name="Aladino Sentinel"
                        badge="Visión + IA"
                        tagline="Seguridad para casas y parcelas con visión computacional y alertas en tiempo real."
                        features={[
                            "Detección de personas/vehículos y cruce perimetral",
                            "Compatibilidad con cámaras IP/RTSP y NVR",
                            "Procesamiento on-edge (Jetson/RPi) + notificaciones",
                        ]}
                    />

                    <ProductCard
                        kind="custom"
                        name="VectorForge"
                        badge="A medida"
                        tagline="Software a la medida: sitios web, apps móviles y sistemas internos."
                        features={[
                            "Discovery + UX/UI + dev",
                            "APIs/ETL e integraciones",
                            "Soporte continuo",
                        ]}
                    />
                    <ProductCard
                        kind="custom"
                        name="VectorView"
                        badge="BI + ETL"
                        tagline="Analítica y dashboards en tiempo real a partir de tus sistemas e IoT."
                        features={[
                            "Conectores a ERP/CRM/IoT",
                            "Modelado y alertas con IA",
                            "KPIs en web y móvil",
                        ]}
                    />
                </div>
            </Section>

            {/* CLIENTES */}
            <Clients />

            {/* SERVICIOS */}
            <Section id="servicios" title="Servicios" subtitle="Implementa lo necesario hoy y escala cuando lo requieras.">
                <div className="grid md:grid-cols-3 gap-4">
                    <ServiceCard
                        kind="software"
                        title="Software Empresarial"
                        desc="Aplicaciones de gestión, paneles e integraciones (API/ETL)."
                    />
                    <ServiceCard
                        kind="iot"
                        title="IoT Agronómico"
                        desc="Sensores (ESP32/Arduino), telemetría y control de riego."
                    />
                    <ServiceCard
                        kind="vision"
                        title="Visión Computacional"
                        desc="QA y conteo con cámaras + modelos de IA en borde o nube."
                    />
                </div>
            </Section>

            {/* PROYECTOS (ahora componente) */}
            <Projects />

            {/* CONTACTO */}
            <Section id="contacto" title="Contacto" subtitle="Completa el formulario y te respondemos a la brevedad.">
                <ContactForm />
            </Section>

            <Footer />
        </>
    );
}
