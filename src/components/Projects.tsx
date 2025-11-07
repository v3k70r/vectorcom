// src/components/Projects.tsx
import Section from "@/components/Section";

export default function Projects() {
    return (
        <Section
            id="proyectos"
            title="Proyectos"
            subtitle="Casos de éxito donde aplicamos IA, visión computacional y software moderno."
        >
            <div className="grid md:grid-cols-3 gap-4">
                {/* Aladino Sentinel — Fogones de Mallarauco */}
                <article className="aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(109,26,148,.25)] transition">
                    <div>
                        <div className="text-sm text-purple-100/80 font-semibold">Aladino Sentinel</div>
                        <div className="text-xs text-zinc-400 mb-2">Fogones de Mallarauco</div>
                        <p className="text-zinc-300/90 text-sm">
                            Sistema de seguridad perimetral basado en visión computacional: detección de personas y vehículos, cruce de línea y alertas en tiempo real.
                        </p>
                    </div>
                    <ul className="mt-3 text-sm text-zinc-400 list-disc ml-5">
                        <li>−62% falsos positivos</li>
                        <li>−40% tiempo de respuesta</li>
                        <li>Stack: Jetson • RTSP • Edge AI</li>
                    </ul>
                </article>

                {/* AgroVector IA — Fogones de Mallarauco */}
                <article className="aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(109,26,148,.25)] transition">
                    <div>
                        <div className="text-sm text-purple-100/80 font-semibold">AgroVector IA</div>
                        <div className="text-xs text-zinc-400 mb-2">Fogones de Mallarauco</div>
                        <p className="text-zinc-300/90 text-sm">
                            Telemetría agronómica inteligente con sensores de humedad y modelos predictivos de riego.
                        </p>
                    </div>
                    <ul className="mt-3 text-sm text-zinc-400 list-disc ml-5">
                        <li>−28% consumo de agua</li>
                        <li>−17% horas de riego</li>
                        <li>Stack: LoRaWAN • IA • Edge IoT</li>
                    </ul>
                </article>

                {/* Aladino — Osso Graphic */}
                <article className="aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(109,26,148,.25)] transition">
                    <div>
                        <div className="text-sm text-purple-100/80 font-semibold">Aladino (Control de productividad)</div>
                        <div className="text-xs text-zinc-400 mb-2">Osso Graphic</div>
                        <p className="text-zinc-300/90 text-sm">
                            Análisis de productividad mediante visión computacional, conteo de ciclos y detección de tiempos muertos para mejorar OEE.
                        </p>
                    </div>
                    <ul className="mt-3 text-sm text-zinc-400 list-disc ml-5">
                        <li>+22% productividad</li>
                        <li>+9 pts OEE</li>
                        <li>Stack: Python • TensorFlow • Edge AI</li>
                    </ul>
                </article>

                {/* VectorCommerce — Osso Graphic */}
                <article className="aspect-[4/3] rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(109,26,148,.25)] transition">
                    <div>
                        <div className="text-sm text-purple-100/80 font-semibold">VectorCommerce</div>
                        <div className="text-xs text-zinc-400 mb-2">Osso Graphic</div>
                        <p className="text-zinc-300/90 text-sm">
                            Plataforma e-commerce headless con APIs abiertas, checkout moderno y alto rendimiento SEO.
                        </p>
                    </div>
                    <ul className="mt-3 text-sm text-zinc-400 list-disc ml-5">
                        <li>+18% conversión</li>
                        <li>LCP 1.7s (mejora UX)</li>
                        <li>Stack: Next.js • Headless CMS • API</li>
                    </ul>
                </article>
            </div>
        </Section>
    );
}
