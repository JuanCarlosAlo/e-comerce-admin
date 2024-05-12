import React, { useState, useEffect } from "react";
import InputComponent from "../Input-component/InputComponent";
import { FORM_VALIDATIONS } from "@/lib/formValidations";
import UploadPhoto from "../upload-photo/UploadPhoto";
import { v4 } from "uuid";
import {
  StyledCategoriesContainer,
  StyledCategoryBullet,
  StyledImgsContainer,
  StyledImgsPreview,
  StyledReactSortable,
} from "./styles";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "@/config/firebase";
import ButtonComponent from "../button-component/ButtonComponent";
import {
  CREATE_PRODUCT_BUTTON,
  EDIT_PRODUCT_BUTTON,
} from "@/lib/Sections/buttons";
import { useAllCategories } from "@/hooks/useCategories";
import CategoriesSelect from "../Categories-select/CategoriesSelect";
import PropertiesSelect from "../Properties-select/PropertiesSelect";


const ProductForm = ({
  inputFields,
  handleSubmit,
  router,
  onSubmit,
  errors,
  register,
  defaultValue,
}) => {
  const { categories, error, isLoading } = useAllCategories({});
  const productId = defaultValue ? defaultValue._id : v4();
  const [imgs, setImgs] = useState(defaultValue ? defaultValue.imgs : []);
  const [selectedCategory, setSelectedCategory] = useState(
    defaultValue?.categories ? defaultValue.categories[0] : ""
  );
  const [selectedProperties, setSelectedProperties] = useState([]);

  useEffect(() => {
    if (!categories) return;
    
    if (selectedCategory) {
      const category = categories.find((cat) => cat._id === selectedCategory);
      if (category) {
        const propertiesFromCategory = category.properties || [];
        const propertiesFromParent = category.parent
          ? category.parent.properties || []
          : [];
        
        const combinedProperties = propertiesFromCategory.concat(propertiesFromParent);
  
        const initialSelectedProperties = combinedProperties.map((property) => {
          const existingProperty = defaultValue && defaultValue.properties
            ? defaultValue.properties.find((p) => p._id === property._id)
            : null;
  
          return {
            _id: property._id,
            name: property.name,
            values: property.values,
            selectedValues: existingProperty ? existingProperty.values : [],
          };
        });
  
        setSelectedProperties(initialSelectedProperties);
      }
    }
  }, [selectedCategory, categories, defaultValue]);
  
  const updateImagesOrder = (images) => {
    setImgs(images);
  };

  const deleteImage = async (index) => {
    const imageToDelete = imgs[index];
    const storageRefDelete = ref(storage, `${imageToDelete.imageURL}`);
    try {
      await deleteObject(storageRefDelete);
      setImgs(imgs.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePropertyChange = (propertyId, value) => {
    setSelectedProperties((prevSelectedProperties) =>
      prevSelectedProperties.map((property) =>
        property._id === propertyId
          ? {
              ...property,
              selectedValues: property.selectedValues.includes(value)
                ? property.selectedValues.filter((v) => v !== value)
                : [...property.selectedValues, value],
            }
          : property
      )
    );
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit((formData, e) => {
        const formattedProperties = selectedProperties.map((property) => ({
          _id: property._id,
          name: property.name,
          values: property.selectedValues,
        }));

        const formDataWithProperties = {
          ...formData,
          category: selectedCategory,
          properties: formattedProperties,
        };
        onSubmit(formDataWithProperties, e, router, productId, imgs);
      })}
    >
      {inputFields.map((field) => (
        <InputComponent
          key={field._id}
          field={field}
          register={register}
          formValidation={FORM_VALIDATIONS[field.name]}
          errors={errors}
          defaultValue={defaultValue ? defaultValue[field.name] : ""}
        />
      ))}
      <CategoriesSelect
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <PropertiesSelect
        properties={selectedProperties}
        onChange={handlePropertyChange}
      />
      <StyledImgsContainer>
        <UploadPhoto
          setValue={setImgs}
          value={imgs}
          directory={productId}
        />
        <StyledReactSortable list={imgs} setList={updateImagesOrder}>
          {imgs.length !== 0 ? (
            imgs.map((img, index) => (
              <div key={img.name}>
                <div onClick={() => deleteImage(index)}>X</div>
                <StyledImgsPreview src={img.imageURL} />
              </div>
            ))
          ) : (
            <p>No product images</p>
          )}
        </StyledReactSortable>
      </StyledImgsContainer>
      {defaultValue ? (
        <ButtonComponent button={EDIT_PRODUCT_BUTTON} />
      ) : (
        <ButtonComponent button={CREATE_PRODUCT_BUTTON} />
      )}
    </form>
  );
};

export default ProductForm;