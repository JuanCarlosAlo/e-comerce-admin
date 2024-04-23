import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await mongooseConnect();
    const allProducts = await NewProductModel.find();
    try {
     
        return NextResponse.json(allProducts);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        return NextResponse.json({ error: 'Error al crear el producto' });
    }
}

