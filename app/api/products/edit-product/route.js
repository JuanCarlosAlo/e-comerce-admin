import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";


export async function PUT(req, res) {
    await mongooseConnect();
    const body = await req.json();
   const _id = ( req.nextUrl.searchParams.get('id'))
   if(_id){
  
    try {
        await NewProductModel.updateOne({_id},{...body})

        return NextResponse.json('Object edited succsesfully');
    } catch (error) {
        console.error('Error al crear el producto:', error);
        return NextResponse.json({ error: 'Error al crear el producto' });
    }
   }else {
    const productById = await NewProductModel.find();
    return NextResponse.json(productById);
}
   
}
