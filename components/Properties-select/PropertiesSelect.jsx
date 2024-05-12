import React from "react";

const PropertiesSelect = React.memo(({ properties, onChange }) => {
  const handlePropertyChange = (propertyId, value) => {
    onChange(propertyId, value);
  };

  return (
    <div>
      <label>Properties</label>
      {properties.length > 0 ? (
        properties.map((property) => (
          <div key={property._id}>
            <label>{property.name}</label>
            <div>
              {property.values.map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    checked={property.selectedValues.includes(value)}
                    onChange={() => handlePropertyChange(property._id, value)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
});

export default PropertiesSelect;
