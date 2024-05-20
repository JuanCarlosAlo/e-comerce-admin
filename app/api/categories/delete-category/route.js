import { categoryModel } from "@/lib/database/schemes/Category.scheme";
import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../auth/[...nextauth]/route";

export async function DELETE(req, res) {
    await mongooseConnect();
    await isAdminRequest(req,res);
 
    const _id = req.nextUrl.searchParams.get('id');
    
    if (!_id) {
        return NextResponse.json({ error: 'ID is missing' });
    }

    try {

        const categoryToDelete = await categoryModel.deleteOne({ _id });
        const productsWithCategory = await NewProductModel.find({ categories: _id });
        console.log(categoryToDelete)
        for (const product of productsWithCategory) {
            product.categories = product.categories.filter(catId => catId !== _id);
            await product.save();
        }
        const allCategories = await categoryModel.find();
        for (const category of allCategories) {
            category.ancestors = category.ancestors.filter(ancestorId => ancestorId !== _id);

            if (category.parent === _id) {
                category.parent = null;
            }

            await category.save();
        }

        return NextResponse.json('Object deleted successfully');
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        return NextResponse.json({ error: 'Error al eliminar la categoría' });
    }
}
