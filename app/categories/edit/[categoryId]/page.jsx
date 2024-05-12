"use client";
import CategoriesForm from "@/components/CategoriesForm/CategoriesForm";
import { useAllCategories } from "@/hooks/useCategories";
import { HEADERS } from "@/lib/Constants/headers";
import { METHODS } from "@/lib/Constants/methods";


import { useForm } from "react-hook-form";

const EditCategory = ({ params: { categoryId } }) => {
  const { categories, error, isLoading } = useAllCategories({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  if (isLoading) return <p>...Loading</p>;

  const categoryToEdit = categories.find((category) => category._id === categoryId);
  const filteredCategories = categories.filter((category) => category._id !== categoryId);
  return (
    <>
      <h1>Categories</h1>
      <CategoriesForm
        categories={filteredCategories}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        categoryToEdit={categoryToEdit}
      />
    </>
  );
};

const onSubmit = async (formData, e,router,categoryToEdit) => {
  e.preventDefault();
  console.log(formData,categoryToEdit._id)
  try {
    const response = await fetch(`/api/categories/edit-category?id=${categoryToEdit._id}`, {
      method: METHODS.PUT,
      headers: HEADERS,
      body: JSON.stringify({ ...formData, }),
    });

    router.push("/categories");
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
};

export default EditCategory;
