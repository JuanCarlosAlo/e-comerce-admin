import React from "react";

const CategoriesSelect = ({ categories, selectedCategory, onChange }) => {
  return (
    <div>
      <label>Category</label>
      <select
        name="category"
        value={selectedCategory}
        onChange={onChange}
      >
        <option value="">Select a category...</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesSelect;
