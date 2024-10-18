import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connect from "@/lib/db";
import Category from "@/lib/models/category";

//PATCH /api/categories/[categoryId]
/*body {
    "newTitle": string
}*/
export const PATCH = async (req: Request, context: { params: any }) => {
    try {
        //Request params
        const categoryId = context.params.categoryId;

        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return NextResponse.json(
                { message: "Invalid category_id!" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { newTitle } = body;

        if (!newTitle) {
            return NextResponse.json(
                { message: "No fields to update!" },
                { status: 400 }
            );
        }

        //Connection and query
        await connect();

        const updateCategory = await Category.findOneAndUpdate(
            { _id: categoryId },
            { title: newTitle },
            { new: true }
        );

        if (!updateCategory) {
            return NextResponse.json(
                { message: "Category not found!" },
                { status: 404 }
            );
        }

        //Success response
        return NextResponse.json(
            { message: "Category updated successfully!", user: updateCategory },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error updating category -> " + err.message,
            { status: 500 });
    }
}

//DELETE api/category/[categoryId]
export const DELETE = async (req: Request, context: { params: any }) => {
    try {
        //Request params
        const categoryId = context.params.categoryId;

        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return NextResponse.json(
                { message: "Invalid category_id!" },
                { status: 400 }
            );
        }

        //Connection and query
        await connect();

        const deletedCategory = await Category.findOneAndDelete(
            { _id: categoryId }
        );

        if (!deletedCategory) {
            return NextResponse.json(
                { message: "Category not found!" },
                { status: 404 }
            );
        }

        //Success response
        return NextResponse.json(
            { message: "Category deleted successfully!", user: deletedCategory },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error deleting category -> " + err.message,
            { status: 500 }
        );
    }
}