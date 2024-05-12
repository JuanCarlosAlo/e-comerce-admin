import { categoryModel } from "@/lib/database/schemes/Category.scheme";
import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { v4 } from "uuid";

export async function POST(req, res) {
  await mongooseConnect();
  const body = await req.json();

  try {
    const { name, description, parent, properties } = body;

    const newCategoryId = v4();

    if (parent !== "") {
      const parentCategory = await categoryModel.findById(parent);

      if (parentCategory) {
        const parentCategoryAncestors = parentCategory.ancestors;
        parentCategoryAncestors.push(newCategoryId);

        const newCategory = new categoryModel({
          _id: newCategoryId,
          name,
          description,
          parent: parentCategory._id,
          ancestors: [],
          products: [],
          createdAt: Date.now(),
          properties
        });
        await parentCategory.save();
        await newCategory.save();
        console.log(newCategory);
        return NextResponse.json(newCategory);
      }
    }

    const newCategory = new categoryModel({
      _id: newCategoryId,
      name,
      description,
      parent: null,
      ancestors: [],
      products: [],
      createdAt: Date.now(),
      properties
    });

    await newCategory.save();
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return NextResponse.json({ error: "Error al crear el producto" });
  }
}
