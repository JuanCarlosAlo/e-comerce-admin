// categories-edit.js
import { categoryModel } from "@/lib/database/schemes/Category.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../auth/[...nextauth]/route";

export async function PUT(req, res) {
  await mongooseConnect();
  await isAdminRequest(req,res);
  const body = await req.json();


  const { productId } = body;

  if (!productId || !categoryId) {
    return NextResponse.json({ error: "Se requiere ID de producto y categoría" }, { status: 400 });
  }

  try {
    const oldCategories = await categoryModel.find({
      products: productId
    });

    if (oldCategories.length > 0) {
      await Promise.all(
        oldCategories.map(async (oldCategory) => {
          oldCategory.products = oldCategory.products.filter(
            (product) => product.toString() !== productId
          );
          await oldCategory.save();
        })
      );
    }

    const category = await categoryModel.findById(categoryId);
    if (!category) {
      return NextResponse.json({ error: "La categoría no existe" }, { status: 404 });
    }

    const productExists = category.products.some((product) => product.toString() === productId);
    if (!productExists) {
      category.products.push(productId);
    }

    await category.save();

    return NextResponse.json("Categoría editada exitosamente");
  } catch (error) {
    console.error("Error al editar la categoría:", error);
    return NextResponse.json({ error: "Error al editar la categoría" }, { status: 500 });
  }
}
