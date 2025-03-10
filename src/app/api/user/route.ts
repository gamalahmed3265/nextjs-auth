import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { signupValidation } from "@/validations/auth";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = signupValidation.parse(body);

    // check for user is exists
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with ths email already exists",
        },
        {
          status: 409,
        }
      );
    }
    // create user
    const hashPawword = await hash(password, 10);
    const userNew = await db.user.create({
      data: {
        email: email,
        username: username,
        password: hashPawword,
      },
    });
    const { password: newUserPassword, ...rest } = userNew;
    if (userNew) {
      return NextResponse.json(
        {
          user: userNew,
          message: "User with ths email has been Created",
        },
        {
          status: 200,
        }
      );
    }
    return NextResponse.json(
      {
        user: null,
        message: "some Error there",
      },
      {
        status: 409,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        user: null,
        message: "some Error there",
        error,
      },
      {
        status: 409,
      }
    );
  }
}
