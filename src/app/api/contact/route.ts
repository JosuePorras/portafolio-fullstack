import { NextResponse } from "next/server";
import { prisma } from "@/config/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    const errors: { field: string; message: string }[] = [];

    if (!name?.trim()) {
      errors.push({ field: "name", message: "El nombre es requerido" });
    }

    if (!email?.trim()) {
      errors.push({ field: "email", message: "El correo es requerido" });
    }

    if (!subject?.trim()) {
      errors.push({ field: "subject", message: "El asunto es requerido" });
    }

    if (!message?.trim()) {
      errors.push({ field: "message", message: "El mensaje es requerido" });
    }
    if (errors.length > 0) {
      return NextResponse.json(
        {
          message: "Error de validación",
          errors,
        },
        { status: 400 }
      );
    }

     await prisma.messages.create({
      data: {
        full_name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json(
      {
        message: "Mensaje enviado correctamente"
      },
      { status: 201 }
    );
  } catch  {
    return NextResponse.json(
      {
        message: "Error interno al enviar el mensaje",
      },
      { status: 500 }
    );
  }
}