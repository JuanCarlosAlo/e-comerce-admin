"use client";
import { useAllCategories } from "@/hooks/useCategories";
import { HEADERS } from "@/lib/Constants/headers";
import { METHODS } from "@/lib/Constants/methods";

import { useForm } from "react-hook-form";

import CategoriesForm from "@/components/CategoriesForm/CategoriesForm";
import { StyledButton, StyledLegendContainer, StyledProductContainer, StyledProductList } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/Modal/Modal";
import DeleteCategoryModal from "@/components/Delete-category-modal/DeleteCategoryModal";


export default function Categories() {

  const { categories, error, isLoading,mutate} = useAllCategories({options: { 
    revalidateOnMount: true,
    revalidateOnFocus: false,
  },});
  const { isOpen, openModal, closeModal } = useModal();

  const { handleSubmit, register, formState: { errors } } = useForm({ mode: 'onBlur' });
  if (isLoading) return <p>...Loading</p>;

  const onSubmit = async (formData, e,) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/categories/new-category`, {
        method: METHODS.POST,
        headers: HEADERS,
        body: JSON.stringify({ ...formData }),
      });
      if (response.ok) {
        mutate(); 
      }
  
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };


  return <>
    <h1>Categories</h1>
    <CategoriesForm categories={categories} onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} errors={errors} />
    <StyledLegendContainer>
                <StyledProductContainer>
                <p>Category Name</p>
                <p>Sub-category</p>
                <p>Actions</p>
                </StyledProductContainer>
        </StyledLegendContainer>
        <StyledProductList>
  
          {categories.length !== 0 ? (categories.map(category => 
            <StyledProductContainer key={category._id}>
              <p>{category.name}</p> 
              <p>{category.parent ? category.parent.name : `None`}</p>
              <div>
              <StyledButton href={"/categories/edit/" + category._id}>
                  <FontAwesomeIcon  icon={faEdit} />
                   Edit
                </StyledButton>
                <button onClick={()=> openModal()}>
                <FontAwesomeIcon icon={faTrash} />
                   Delete
                </button>
              </div>
              <Modal isOpen={isOpen} onClose={closeModal}>
        <DeleteCategoryModal categoryId={category._id} onClose={closeModal}mutate={mutate}/>
      </Modal>
              </StyledProductContainer>
            )): (
              <p>No categories yet</p>
            )}
        </StyledProductList>
     
     
  </>
}

