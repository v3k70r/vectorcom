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
                      name="Matías Cañas"
                      role="CEO"
                      // Si luego agregas fotos: photoUrl="/team/matias.jpg"
                      // linkedin="https://www.linkedin.com/in/..."
                      // email="matias@vectorcom.cl"
                  />
                  <TeamCard
                      name="Víctor Albarrán"
                      role="CTO"
                      // photoUrl="/team/victor.jpg"
                      // linkedin="https://www.linkedin.com/in/..."
                      // email="victor@vectorcom.cl"
                  />
              </div>
          </Section>

        {/* CLIENTES */}
        <Section id="clientes" title="Confían en nosotros" subtitle="Agro, industria, retail y sector público.">
          <ClientsCloud />
        </Section>

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

        {/* PROYECTOS */}
        <Section id="proyectos" title="Proyectos" subtitle="Reemplaza con tus casos de éxito (KPI y breve descripción).">
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-gradient-to-br from-[rgba(109,26,148,0.15)] to-black/60 p-4 flex flex-col justify-between"
                >
                  <div className="text-sm text-purple-100/80 font-semibold">Proyecto #{i}</div>
                  <ul className="text-zinc-300/90 text-sm list-disc ml-5">
                    <li>Objetivo logrado (+XX% productividad)</li>
                    <li>Stack: Next.js • Edge • IoT</li>
                  </ul>
                </div>
            ))}
          </div>
        </Section>

        {/* CONTACTO */}
        <Section id="contacto" title="Contacto" subtitle="Completa el formulario y te respondemos a la brevedad.">
          <ContactForm />
        </Section>

        <Footer />
      </>
  );
}
