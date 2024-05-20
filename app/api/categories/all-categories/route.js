import { categoryModel } from "@/lib/database/schemes/Category.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { isAdminRequest } from "../../auth/[...nextauth]/route";


export async function GET(req, res) {
    await mongooseConnect();
    await isAdminRequest(req, res);
    try {
        const allCategories = await categoryModel.find().populate('parent');
        return NextResponse.json(allCategories);
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        return NextResponse.json({ error: 'Error al obtener las categorías' });
    }
}
