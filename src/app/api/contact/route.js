import nodemailer from "nodemailer";

const recipient = "zaidsaleem375@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 100) {
    return Response.json(
      { error: "Please enter your name (up to 100 characters)." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!message || message.length > 5000) {
    return Response.json(
      { error: "Please enter a message (up to 5,000 characters)." },
      { status: 400 },
    );
  }

  const sender = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;

  if (!sender || !appPassword) {
    console.error("Contact email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
    return Response.json(
      { error: "Email delivery is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sender,
      pass: appPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: { name, address: email },
      subject: `Portfolio contact form message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ message: "Your message has been sent." });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return Response.json(
      { error: "We could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
