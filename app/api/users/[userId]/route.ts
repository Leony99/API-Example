import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connect from "@/lib/db";
import User from "@/lib/models/user";

//PATCH /api/users/[userId]
/*body {
    "newUserName"?: string,
    "newEmail"?: string,
    "newPassword"?: string
}*/
export const PATCH = async (req: Request, context: { params: any }) => {
    try {
        //Request params
        const userId = context.params.userId;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return NextResponse.json(
                { message: "Invalid user_id!" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { newUserName, newEmail, newPassword } = body;

        if (!newUserName && !newEmail && !newPassword) {
            return NextResponse.json(
                { message: "No fields to update!" },
                { status: 400 }
            );
        }

        const updateFields: any = {};
        if (newUserName) updateFields.userName = newUserName;
        if (newEmail) updateFields.email = newEmail;
        if (newPassword) updateFields.password = newPassword;

        //Connection and query
        await connect();

        const updateUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: updateFields },
            { new: true }
        );

        if (!updateUser) {
            return NextResponse.json(
                { message: "User not found!" },
                { status: 404 }
            );
        }

        //Success response
        return NextResponse.json(
            { message: "User updated successfully!", user: updateUser },
            { status: 200 }
        );
    }
    catch (err: any) {
        return NextResponse.json(
            "Error updating user -> " + err.message,
            { status: 500 });
    }
}

//DELETE api/users/[userId]
export const DELETE = async (req: Request, context: { params: any }) => {
    try {
        //Request params
        const userId = context.params.userId;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return NextResponse.json(
                { message: "Invalid user_id!" },
                { status: 400 }
            );
        }

        //Connection and query
        await connect();

        const deletedUser = await User.findOneAndDelete(
            { _id: userId }
        );

        if (!deletedUser) {
            return NextResponse.json(
                { message: "User not found!" },
                { status: 404 }
            );
        }

        //Success response
        return NextResponse.json(
            { message: "User deleted successfully!", user: deletedUser },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error deleting user -> " + err.message,
            { status: 500 }
        );
    }
}