import React from "react";
import { StyledInput, StyledInputContainer, StyledLabel, StyledTextArea } from "./styles";

const InputComponent = ({ field, register,formValidation ,errors,defaultValue}) => {
  
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={field.name}>{field.label}</StyledLabel>
      {field.type === "textarea" ? (
        <StyledTextArea 
        id={field.name}
        type={field.type} 
        name={field.name}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        {...register(field.name, formValidation)}
        >

        </StyledTextArea>
        

      ) : (
        
        <StyledInput 
        id={field.name}
        type={field.type} 
        name={field.name}
        placeholder={field.placeholder}
        defaultValue={defaultValue}
        {...register(field.name, formValidation)}
        >
        </StyledInput>
      )}
      <p>{errors?.[field.name]?.message}</p>
    </StyledInputContainer>
  );
};

export default InputComponent;
