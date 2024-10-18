import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connect from "@/lib/db";
import User from "@/lib/models/user";
import Category from "@/lib/models/category";
import Article from "@/lib/models/article";

//GET /api/articles
//GET /api/articles?userId={userId}
//GET /api/articles?searchString={searchString}
export const GET = async (req: Request) => {
    try {
        //Request params
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");
        const searchString = searchParams.get("searchString");

        //Connection and query
        await connect();
        let query: any = {};

        if (userId) {
            if (!Types.ObjectId.isValid(userId)) {
                return NextResponse.json(
                    { message: "Invalid user_id!" },
                    { status: 400 }
                );
            }
            query.user_id = userId;
        }

        if (searchString) {
            query.$or = [
                { title: { $regex: searchString, $options: 'i' } },
                { content: { $regex: searchString, $options: 'i' } }
            ];
        }

        const articles = await Article.find(query);

        //Success response
        return NextResponse.json(
            { message: "Articles fetched successfully!", articles: articles },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error fetching articles -> " + err.message,
            { status: 500 }
        );
    }
}

//POST /api/articles?userId={userId}
/*body {
    "title": string,
    "content": string,
    "categories_id": [CategoryId]
}*/
export const POST = async (req: Request) => {
    try {
        //Request params
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return NextResponse.json(
                { message: "Invalid user_id!" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { title, content, categories_id } = body;

        //Connection and query
        await connect();

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json(
                { message: "User not found!" },
                { status: 404 }
            );
        }

        const validCategories = await Category.find({ _id: { $in: categories_id } });
        if (validCategories.length !== categories_id.length) {
            return NextResponse.json(
                { message: "One or more categories are invalid!" },
                { status: 400 }
            );
        }

        const newArticle = new Article({
            title,
            content,
            user_id: new Types.ObjectId(userId),
            categories_id: categories_id.map(
                (catId: string) => new Types.ObjectId(catId)
            ),
        });
        await newArticle.save();

        //Success response
        return NextResponse.json(
            { message: "Article created successfully!", article: newArticle },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error creating user -> " + err.message,
            { status: 500 }
        );
    }
}