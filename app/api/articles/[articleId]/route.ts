import { NextResponse } from "next/server";
import { Types } from "mongoose";
import connect from "@/lib/db";
import Article from "@/lib/models/article";

//PATCH /api/article/[articleId]
/*body {
    "newTitle"?: string,
    "newContent"?: string,
    "newCategories_id"?: [CategoryId]
}*/
export const PATCH = async (req: Request, context: { params: any }) => {
    try {
        //Request params
        const articleId = context.params.articleId;

        if (!articleId || !Types.ObjectId.isValid(articleId)) {
            return NextResponse.json(
                { message: "Invalid article_id!" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { newTitle, newContent, newCategories_id } = body;

        if (!newTitle && !newContent && !newCategories_id) {
            return NextResponse.json(
                { message: "No fields to update!" },
                { status: 400 }
            );
        }

        const updateFields: any = {};
        if (newTitle) updateFields.title = newTitle;
        if (newContent) updateFields.content = newContent;
        if (newCategories_id) updateFields.categories_id = newCategories_id;

        //Connection and query
        await connect();

        const updateArticle = await Article.findOneAndUpdate(
            { _id: articleId },
            { $set: updateFields },
            { new: true }
        );

        if (!updateArticle) {
            return NextResponse.json(
                { message: "Article not found!" },
                { status: 404 }
            );
        }

        //Success response
        return NextResponse.json(
            { message: "Article updated successfully!", user: updateArticle },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error updating article -> " + err.message,
            { status: 500 });
    }
}

//DELETE api/article/[articleId]
export const DELETE = async (req: Request, context: { params: any }) => {
    try {
        //Request params
        const articleId = context.params.articleId;

        if (!articleId || !Types.ObjectId.isValid(articleId)) {
            return NextResponse.json(
                { message: "Invalid article_id!" },
                { status: 400 }
            );
        }

        //Connection and query
        await connect();

        const deletedArticle = await Article.findOneAndDelete(
            { _id: articleId }
        );

        if (!deletedArticle) {
            return NextResponse.json(
                { message: "Article not found!" },
                { status: 404 }
            );
        }

        //Success response
        return NextResponse.json(
            { message: "Article deleted successfully!", user: deletedArticle },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            "Error deleting Article -> " + err.message,
            { status: 500 }
        );
    }
}