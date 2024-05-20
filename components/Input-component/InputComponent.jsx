import React from "react";
import { StyledInputContainer } from "./styles";

const InputComponent = ({ field, register,formValidation ,errors,defaultValue}) => {
  
  return (
    <StyledInputContainer>
      <label htmlFor={field.name}>{field.label}</label>
      {field.type === "textarea" ? (
        <textarea 
        id={field.name}
        type={field.type} 
        name={field.name}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        {...register(field.name, formValidation)}
        >

        </textarea>
        

      ) : (
        
        <input 
        id={field.name}
        type={field.type} 
        name={field.name}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        {...register(field.name, formValidation)}
        >
        </input>
      )}
      <p>{errors?.[field.name]?.message}</p>
    </StyledInputContainer>
  );
};

export default InputComponent;
