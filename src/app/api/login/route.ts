import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

const secret = "8enfdijh3";

export async function POST(req: NextRequest) {
  try {
    const reqbody = await req.json();
    const { email, password } = reqbody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "No user found" }, { status: 404 });
    }
    const verifyPassword = await bcryptjs.compare(password, user.password);
    if (!verifyPassword) {
      return NextResponse.json({ message: "Entered password is wrong" });
    }
    const tokenData = {
      id: user._id,
      email: user.email,
      username: user.name,
    };
    const token = await jwt.sign(tokenData, secret, { expiresIn: "1h" });

    return NextResponse.json({ message: "login successfull", token });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
