import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";


export async function PUT(req, res) {
    await mongooseConnect();
    const body = await req.json();
   const _id = ( req.nextUrl.searchParams.get('id'))
   const { name, description, price, productId, imgs ,category,properties} = body;
   if(_id){
    
    try {
        await NewProductModel.updateOne({_id},{
            name, description, price, productId, imgs ,categories: category, properties
        })

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
