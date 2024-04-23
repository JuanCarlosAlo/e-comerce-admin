"use client";
import Layout from "@/components/Layout/Layout";
import PorductForm from "@/components/ProductForm/PorductForm";
import { useProductById } from "@/hooks/useAllProducts";
import { HEADERS } from "@/lib/Constants/headers";
import { METHODS } from "@/lib/Constants/methods";
import { newProductFields } from "@/lib/Sections/fields";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";

const EditProducts = ({ params: { productId } }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    
  } = useForm({ mode: "onBlur" });
  const router = useRouter();
  const { product, error, isLoading ,isValidating} = useProductById({
    id: productId, 
    options: { 
      revalidateOnMount: true,
      revalidateOnFocus: false,
    },
  });
  if (isLoading || isValidating) return <p>...Loading</p>;
  
  return (
    <>
      <h1>Edit Product {product.name}</h1>
      <PorductForm
        errors={errors}
        handleSubmit={handleSubmit}
        inputFields={newProductFields}
        onSubmit={onSubmit}
        router={router}
        register={register}
        defaultValue={product}
      />
    </>
  );
};

const onSubmit = async (formData, e, router,productId,imgs) => {
  e.preventDefault();
  const { name, description, price } = formData;
  console.log(formData,imgs)
  try {
    const response = await fetch(`/api/products/edit-product?id=${productId}`, {
      method: METHODS.PUT,
      headers: HEADERS,
      body: JSON.stringify({ ...formData, productId,imgs }),
    });

    router.push("/products");
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
};
export default EditProducts;
