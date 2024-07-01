// app/api/sendEmail/route.ts

import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

const EMAIL_JS_SERVICE = process.env.EMAIL_JS_SERVICE;
const EMAIL_JS_TEMPLATE = process.env.EMAIL_JS_TEMPLATE;
const EMAIL_JS_PUBLIC_PASS = process.env.EMAIL_JS_PUBLIC_PASS;

export async function POST(req: NextRequest) {
  if (!EMAIL_JS_SERVICE || !EMAIL_JS_TEMPLATE || !EMAIL_JS_PUBLIC_PASS) {
    return NextResponse.json(
      { message: "EmailJS environment variables are not set properly." },
      { status: 500 }
    );
  }

  const { name, email, phone, subject, message, preferences } = await req.json();

  try {
    const response = await emailjs.send(
      EMAIL_JS_SERVICE,
      EMAIL_JS_TEMPLATE,
      { name, email, phone, subject, message, preferences },
      EMAIL_JS_PUBLIC_PASS
    );

    return NextResponse.json(
      { message: "Message successfully submitted", response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Failed to send message", error }, { status: 500 });
  }
}
