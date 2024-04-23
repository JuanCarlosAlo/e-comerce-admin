import React, { useState } from "react";
import InputComponent from "../Input-component/InputComponent";
import { FORM_VALIDATIONS } from "@/lib/formValidations";
import UploadPhoto from "../upload-photo/UploadPhoto";
import { v4 } from "uuid";
import {
  StyledImgsContainer,
  StyledImgsPreview,
  StyledReactSortable,
} from "./styles";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "@/config/firebase";

const PorductForm = ({
  inputFields,
  handleSubmit,
  router,
  onSubmit,
  errors,
  register,
  defaultValue,
}) => {
  const productId = defaultValue ? defaultValue._id : v4();
  const [imgs, setImgs] = useState(defaultValue ? defaultValue.imgs : []);
  const updateImagesOrder = (images) => {
    setImgs(images);
  };
  const deleteImage = async (index) => {
    const imageToDelete = imgs[index];
    console.log(imageToDelete)
    const storageRefDelete = ref(storage, `${imageToDelete.imageURL}`);
    try {
      await deleteObject(storageRefDelete);

      setImgs(imgs.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((formData, e) => {
        onSubmit(formData, e, router, productId, imgs);
      })}
    >
      {inputFields.map((field) => {
        return (
          <InputComponent
            key={field._id}
            field={field}
            register={register}
            formValidation={FORM_VALIDATIONS[field.name]}
            errors={errors}
            defaultValue={defaultValue ? defaultValue[field.name] : ""}
          />
        );
      })}
      <StyledImgsContainer>
        <UploadPhoto setValue={setImgs} value={imgs} directory={productId} />
        <StyledReactSortable list={imgs} setList={updateImagesOrder}>
          {imgs.length !== 0 ? (
            imgs.map((img, index) => (
              <div key={img.name}>
                <div onClick={() => deleteImage(index)}>X</div>
                <StyledImgsPreview  src={img.imageURL} />
              </div>
            ))
          ) : (
            <p>No product Images!</p>
          )}
        </StyledReactSortable>
      </StyledImgsContainer>
      <button type="submit">Add product</button>
    </form>
  );
};

export default PorductForm;
