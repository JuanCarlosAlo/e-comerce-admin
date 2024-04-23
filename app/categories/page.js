"use client";
import InputComponent from "@/components/Input-component/InputComponent";
import Layout from "@/components/Layout/Layout";
import { categoryFields } from "@/lib/Sections/fields";
import { useForm } from "react-hook-form";

export default function Categories() {
  const { handleSubmit, register, formState: { errors } } = useForm({ mode: 'onBlur' });
  return <>
    <h1>Categories</h1>
    <form>

    <InputComponent field={categoryFields} register={register} errors={errors} />
    <button>Save</button>
    </form>
  </>
}
