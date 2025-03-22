import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  console.log("Datos recibidos:", data);
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Todos los campos son requeridos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Mensaje enviado con éxito" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response(JSON.stringify({ error: "Error al enviar el mensaje" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};