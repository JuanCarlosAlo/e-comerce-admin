"use client";
import Layout from "@/components/Layout/Layout";
import { storage } from "@/config/firebase";
import { useProductById } from "@/hooks/useAllProducts";
import { HEADERS } from "@/lib/Constants/headers";
import { METHODS } from "@/lib/Constants/methods";
import { deleteObject, ref } from "firebase/storage";
import { useRouter } from "next/navigation";

import React from "react";

const DeleteProducts = ({ params: { productId } }) => {
  const router = useRouter();
  const { product, error, isLoading } = useProductById({ id: productId });
  if (isLoading) return <p>...Loading</p>;

  const handleClickBack = () => {
    router.push("/products");
  };
  const handleClckDelete = async () => {
    try {
      product.imgs.map(async (img) => {
        const storageRefDelete = ref(storage, `${img.imageURL}`);
        await deleteObject(storageRefDelete);
      });

      const response = await fetch(
        `/api/products/delete-product?id=${productId}`,
        {
          method: METHODS.DELETE,
          headers: HEADERS,
        }
      );

      router.push("/products");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <>
      Do you really want to delete {product.name}?
      <div>
        <button onClick={handleClickBack}>No</button>
        <button onClick={handleClckDelete}>Yes</button>
      </div>
    </>
  );
};

export default DeleteProducts;
