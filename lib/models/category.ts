import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
    {
        title: {type: "string", required: true, unique: true},
    }
);

const Category = models.Category || model("Category", CategorySchema);
export default Category;