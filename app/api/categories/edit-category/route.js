// categories-edit.js
import { categoryModel } from "@/lib/database/schemes/Category.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  await mongooseConnect();
  const body = await req.json();
  const categoryId = ( req.nextUrl.searchParams.get('id'))

  const { productId } = body;

  if (!productId || !categoryId) {
    return NextResponse.json({ error: "Se requiere ID de producto y categoría" }, { status: 400 });
  }

  try {
    // Buscar la categoría a la que pertenecía el producto antes
    const oldCategories = await categoryModel.find({
      products: productId
    });

    // Si se encuentra la categoría a la que pertenecía antes
    if (oldCategories.length > 0) {
      // Iterar sobre cada categoría y eliminar el ID del producto
      await Promise.all(
        oldCategories.map(async (oldCategory) => {
          oldCategory.products = oldCategory.products.filter(
            (product) => product.toString() !== productId
          );
          await oldCategory.save();
        })
      );
    }

    // Actualizar la nueva categoría con el ID del producto
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
