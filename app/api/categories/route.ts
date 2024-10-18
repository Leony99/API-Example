import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Category from "@/lib/models/category";

//GET /api/categories
export const GET = async () => {
    try {
        //Connection and query
        await connect();
        const categories = await Category.find();

        //Success response
        return NextResponse.json(
            { message: "Categories fetched successfully!", categories: categories },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error fetching categories -> " + err.message,
            { status: 500 }
        );
    }
}

//POST /api/categories
/*body {
    "title": string
}*/
export const POST = async (req: Request) => {
    try {
        //Request params
        const body = await req.json();
        const newCategory = new Category(body);

        //Connection and query
        await connect();
        await newCategory.save();

        //Success response
        return NextResponse.json(
            { message: "Category created successfully!", category: newCategory },
            { status: 200 }
        );
    } catch (err: any) {
        //11000 = Code to check for duplicate title
        if (err.code === 11000) {
            return NextResponse.json(
                { message: "Error creating category -> Category already exists!" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            "Error creating categories -> " + err.message,
            { status: 500 }
        );
    }
}