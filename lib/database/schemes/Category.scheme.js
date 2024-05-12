import mongoose, { Schema, models, model } from "mongoose";

const categorySchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  parent: {
    type: String,
    ref: "categories",
    required: false,
  },
  ancestors: [
    {
      type: String,
      ref: "categories",
      required: false,
    },
  ],
  products: [
    {
      type: String,
      ref: "products",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  properties: [
    {
      _id: String,
      name: String,
      values: [String], 
    },
  ],
});

export const categoryModel =
  models.categories || model("categories", categorySchema);
