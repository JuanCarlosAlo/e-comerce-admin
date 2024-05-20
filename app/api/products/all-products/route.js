import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../auth/[...nextauth]/route";


export async function GET(req, res) {
    await mongooseConnect();
    await isAdminRequest(req, res);
    try {
        const allProducts = await NewProductModel.find();
        return NextResponse.json(allProducts);
    } catch (error) {
        console.error('Error en la solicitud de administrador:', error);
        return NextResponse.json({ error: 'Acceso denegado' }, { status: 401 });
    }
}
