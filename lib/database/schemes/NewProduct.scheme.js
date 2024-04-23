import { Schema, model, models } from "mongoose";

const ImgsSchema = new Schema(
    {
        _id: String,
        imageURL: String,
        lastModified: Number,
        name: String,
        size: Number,
        type: String,
        webkitRelativePath: String,
   
    }
)

const NewProductSchema = new Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        imgs: [{ type: ImgsSchema }] 
    },

);

export const NewProductModel = models.products || model("products", NewProductSchema);
