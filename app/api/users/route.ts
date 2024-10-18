import { NextResponse } from "next/server";
import connect from "@/lib/db";
import User from "@/lib/models/user";

//GET /api/users
export const GET = async () => {
    try {
        //Connection and query
        await connect();
        const users = await User.find();

        //Success response
        return NextResponse.json(
            { message: "Users fetched successfully!", users: users },
            { status: 200 }
        );
    }
    catch (err: any) {
        return NextResponse.json(
            "Error fetching users -> " + err.message,
            { status: 500 }
        );
    }
};

//POST /api/users
/*body {
    "userName": string,
    "email": string,
    "password": string
}*/
export const POST = async (req: Request) => {
    try {
        //Request params
        const body = await req.json();
        const newUser = new User(body);

        //Connection and query
        await connect();
        await newUser.save();

        //Success response
        return NextResponse.json(
            { message: "User created successfully!", user: newUser },
            { status: 200 }
        );
    }
    catch (err: any) {
        return NextResponse.json(
            "Error creating user -> " + err.message,
            { status: 500 }
        );
    }
}