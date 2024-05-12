import { useCategoryById } from '@/hooks/useCategories';
import { HEADERS } from '@/lib/Constants/headers';
import { METHODS } from '@/lib/Constants/methods';
import React from 'react'

const DeleteCategoryModal = ({categoryId,onClose,mutate}) => {
    const { category, error, isLoading } = useCategoryById({id:categoryId});
    if(isLoading) return<p>Loading...</p>
    
  return (
    <div>
        
        <p>DeleteCategoryModal: {category.name}</p>
        <button onClick={()=>onClose()}>No</button>
        <button onClick={()=>handleClick(categoryId,onClose,mutate)}>Yes</button>
        </div>
  )
}

const handleClick = async (categoryId,onClose,mutate)=> {

    try {
        await fetch(
          `/api/categories/delete-category?id=${categoryId}`,
          {
            method: METHODS.DELETE,
            headers: HEADERS,
          }
        );
        mutate()
        onClose()
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
}

export default DeleteCategoryModal