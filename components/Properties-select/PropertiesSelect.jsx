import React from "react";
import { StyledCheboxContainer, StyledPropertiesContainer, StyledPropertyContainer } from "./styles";

const PropertiesSelect = React.memo(({ properties, onChange }) => {
  const handlePropertyChange = (propertyId, value) => {
    onChange(propertyId, value);
  };

  return (
    <div>
      <label>Properties</label>
      {properties.length > 0 ? (
        properties.map((property) => (
          <StyledPropertyContainer key={property._id}>
            <span>{property.name}</span>
            <StyledPropertiesContainer>
              {property.values.map((value) => (
                <StyledCheboxContainer key={value}> 
                <span >
                 
                  {value}
                </span>
                 <input
                 type="checkbox"
                 value={value}
                 checked={property.selectedValues.includes(value)}
                 onChange={() => handlePropertyChange(property._id, value)}
               />
               </StyledCheboxContainer>
              ))}
            </StyledPropertiesContainer>
          </StyledPropertyContainer>
        ))
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
});

export default PropertiesSelect;
