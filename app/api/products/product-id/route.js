import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../auth/[...nextauth]/route";


export async function GET(req, res) {
    await mongooseConnect();
    await isAdminRequest(req,res);
   const id = ( req.nextUrl.searchParams.get('id'))
   if(id){
    try {
        const productById = await NewProductModel.findById(id);
        return NextResponse.json(productById);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        return NextResponse.json({ error: 'Error al crear el producto' });
    }
   }else {
    const productById = await NewProductModel.find();
    return NextResponse.json(productById);
}
   
}
