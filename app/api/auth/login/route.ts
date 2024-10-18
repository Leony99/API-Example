import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import connect from "@/lib/db";
import User from "@/lib/models/user";

//POST /api/auth/login
/*body {
    "email": string,
    "password": string
}*/
export const POST = async (req: Request) => {
    try {
        //Request params
        const { email, password } = await req.json();

        //Database connection
        await connect();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: "Invalid email or password!" },
                { status: 401 }
            );
        }

        if (password !== user.password) {
            return NextResponse.json(
                { message: "Invalid email or password!" },
                { status: 401 }
            );
        }

        //JWT Token
        const token = await new SignJWT({ userId: user._id, email: user.email })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));

        //Success response
        return NextResponse.json(
            { message: "Login successful!", token },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            { message: "Error during login -> " + err.message },
            { status: 500 }
        );
    }
};
