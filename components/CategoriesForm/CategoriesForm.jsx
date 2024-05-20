import { categoryFields } from "@/lib/Sections/fields";
import React, { useState } from "react";
import InputComponent from "../Input-component/InputComponent";
import { useRouter } from "next/navigation";
import {
  CREATE_CATEGORY_BUTTON,
  EDIT_CATEGORY_BUTTON,
} from "@/lib/Sections/buttons";
import ButtonComponent from "../button-component/ButtonComponent";
import { v4 } from "uuid";

const CategoriesForm = ({
  categories,
  onSubmit,
  handleSubmit,
  register,
  errors,
  categoryToEdit,
}) => {
  const router = useRouter();
  const [properties, setProperties] = useState(
    categoryToEdit ? categoryToEdit.properties : []
  );

 const addProperty = () => {
  setProperties([...properties, { name: "", values: [],_id: v4() }]);
};


const removeProperty = (index) => {
  const newProperties = [...properties];
  newProperties.splice(index, 1);
  setProperties(newProperties);
};


const handlePropertyNameChange = (index, e) => {
  const newProperties = [...properties];
  newProperties[index].name = e.target.value;
  setProperties(newProperties);
};

const handlePropertyValuesChange = (index, e) => {
  const newProperties = [...properties];
  newProperties[index].values = e.target.value.split(",").map((value) => value.trim());
  setProperties(newProperties);
};

  return (
    <form
      onSubmit={handleSubmit((formData, e) => { const formDataWithProperties = { ...formData, properties };
      onSubmit(formDataWithProperties, e, router, categoryToEdit);
      })}
    >
      {categoryFields.map((category) => (
        <InputComponent
          key={category._id}
          field={category}
          register={register}
          errors={errors}
          defaultValue={categoryToEdit ? categoryToEdit[category.name] : null}
        />
      ))}
      <div>
        <label htmlFor="parent">Subcategory</label>
        <select
          name="parent"
          id="parent"
          {...register("parent")}
          defaultValue={
            categoryToEdit?.parent?._id ? categoryToEdit.parent._id : ""
          }
        >
          {categories.length === 0 ? (
            <option value="" disabled>
              No Categories yet
            </option>
          ) : (
            <>
              <option value="" disabled>
                Subcategories
              </option>
              <option value="">None</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      <div>
        <label>Properties</label>
        <button type="button" onClick={addProperty}>
          Add New property
        </button>
        {properties.map((property, index) => (
          <div key={index}>
            <input
              type="text"
              value={property.name}
              onChange={(e) => handlePropertyNameChange(index, e)}
              placeholder="Property Name"
            />
            <input
              type="text"
              value={property.values.join(", ")} 
              onChange={(e) => handlePropertyValuesChange(index, e)} 
              placeholder="Enter values separated by commas"
            />
            <button type="button" onClick={() => removeProperty(index)}>
              Remove Property
            </button>
          </div>
        ))}
      </div>
      {categoryToEdit ? (
        <ButtonComponent button={EDIT_CATEGORY_BUTTON} />
      ) : (
        <ButtonComponent button={CREATE_CATEGORY_BUTTON} />
      )}
    </form>
  );
};

export default CategoriesForm;
