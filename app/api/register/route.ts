import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body.data;

  if (!name || !email || !password) {
    return new NextResponse(
      JSON.stringify({ message: "Missing Name, Email, or Password" }),
      {
        status: 400,
      }
    );
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse(
      JSON.stringify({ message: "Email already existed" }),
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
