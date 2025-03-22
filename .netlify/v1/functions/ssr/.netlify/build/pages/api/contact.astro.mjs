import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.json();
  const { name, email, msg } = data;
  if (!name || !email || !msg) {
    return new Response(JSON.stringify({ error: "Todos los campos son requeridos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}
Email: ${email}
Mensaje: ${msg}`
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Mensaje enviado con éxito" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error al enviar el mensaje" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
