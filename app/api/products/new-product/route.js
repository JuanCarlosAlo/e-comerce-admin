import { NewProductModel } from "@/lib/database/schemes/NewProduct.scheme";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

import { v4 } from "uuid";
import { isAdminRequest } from "../../auth/[...nextauth]/route";

export async function POST(req, res) {
    await mongooseConnect();
    await isAdminRequest(req,res);
    const body = await req.json()

    try {
        const { name, description, price, productId, imgs ,parent,properties} = body;
        const imageItem = imgs.map((img) => {
            const imageId = v4();

            return {
                _id: imageId,
                imageURL: img.imageURL,
                lastModified: img.lastModified,
                name: img.name,
                size: img.size,
                type: img.type,
                webkitRelativePath: img.webkitRelativePath,
            };
        });
    
        const newProduct = new NewProductModel({
            _id: productId,
            name,
            description,
            price,
            imgs: imageItem,
            categories: [...parent],
            properties
        });
  
        await newProduct.save();
        return NextResponse.json(newProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        return NextResponse.json({ error: 'Error al crear el producto' });
    }
}

