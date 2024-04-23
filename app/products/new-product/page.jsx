"use client"
import InputComponent from "@/components/Input-component/InputComponent";
import Layout from "@/components/Layout/Layout";
import PorductForm from "@/components/ProductForm/PorductForm";
import { HEADERS } from "@/lib/Constants/headers";
import { METHODS } from "@/lib/Constants/methods";
import { newProductFields } from "@/lib/Sections/fields";
import { FORM_VALIDATIONS } from "@/lib/formValidations";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

export default function NewProduct() {
  const { handleSubmit, register, formState: { errors } } = useForm({ mode: 'onBlur' });
  const router = useRouter()
  return (
 
      <div>
        <h1>New Product</h1>
        <PorductForm
        errors={errors}
        handleSubmit={handleSubmit}
        inputFields={newProductFields}
        onSubmit={onSubmit}
        router={router}
        register={register}
        />
      </div>
  
  );
}

const onSubmit = async (formData, e,router,productId,imgs) => {
  e.preventDefault();

  
  try {
    const response = await fetch('/api/products/new-product', {
      method: METHODS.POST,
      headers: HEADERS,
      body: JSON.stringify({...formData, productId,imgs}) 
    });

 
    router.push('/products')
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
};