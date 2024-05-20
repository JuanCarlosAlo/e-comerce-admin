import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../auth/[...nextauth]/route";


export async function DELETE(req, res) {
    await mongooseConnect();
    await isAdminRequest(req,res);
   const _id = ( req.nextUrl.searchParams.get('id'))
   if(_id){
  
    try {
        await NewProductModel.deleteOne({_id})

        return NextResponse.json('Object deleted succsesfully');
    } catch (error) {
        console.error('Error al crear el producto:', error);
        return NextResponse.json({ error: 'Error al crear el producto' });
    }
   }else {
    const productById = await NewProductModel.find();
    return NextResponse.json(productById);
}
   
}
