import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema(
    {
        title: {type: "string", required: true},
        content: {type: "string", required: true},
        user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
        categories_id: [{type: Schema.Types.ObjectId, ref: "Category", required: true}],
    },
    {
        timestamps: true,
    }
);

const Article = models.Article || model("Article", ArticleSchema);
export default Article;