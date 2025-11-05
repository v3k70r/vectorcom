// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // para poder usar node en esta ruta

export async function POST(req: Request) {
    try {
        const isJSON = (req.headers.get("content-type") || "").includes("application/json");
        const data: Record<string, string> = isJSON ? await req.json() : Object.fromEntries((await req.formData()).entries());

        const nombre  = (data.nombre  || "").trim();
        const email   = (data.email   || "").trim();
        const empresa = (data.empresa || "").trim();
        const tel     = (data.tel     || "").trim();
        const mensaje = (data.mensaje || "").trim();

        if (!nombre || !email || !mensaje) {
            return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
        }

        // Aquí “recibimos” el contacto. De momento solo lo dejamos en consola.
        console.log("CONTACTO VECTORCOM:", { nombre, email, empresa, tel, mensaje });

        // 👉 Más adelante, aquí puedes enviar un correo, guardar en DB, etc.
        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ ok: false, error: "Error procesando el formulario." }, { status: 500 });
    }
}
