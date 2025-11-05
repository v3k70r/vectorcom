export default function Footer() {
    return (
        <footer className="py-10 text-zinc-400">
            <div className="max-w-[1120px] w-[92%] mx-auto grid md:grid-cols-4 gap-6">
                <div>
                    <div className="font-extrabold"><span>VECTOR</span><span className="[color:#6d1a94]">COM</span></div>
                    <p className="mt-2 text-sm">© {new Date().getFullYear()} VECTORCOM. Todos los derechos reservados.</p>
                </div>
                <div>
                    <div className="font-semibold">Secciones</div>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold">Legal</div>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="#">Términos</a></li>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold">Contacto</div>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="mailto:contacto@example.com">contacto@example.com</a></li>
                        <li><a href="tel:+56911111111">+56 9 1111 1111</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
