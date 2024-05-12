import { categoryModel } from "@/lib/database/schemes/Category.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await mongooseConnect();
   const _id = ( req.nextUrl.searchParams.get('id'))
   
   if(_id){
    try {
        const categoryById = await categoryModel.findById(_id);
    
        return NextResponse.json(categoryById);
    } catch (error) {
        console.error('No se encontro categoria:', error);
        return NextResponse.json({ error: 'No se encontro categoria' });
    }
   }else {
    const categoryById = await categoryModel.find();
    return NextResponse.json(categoryById);
}
   
}
