import "./category-item.styles.scss";

import React from "react";

function CategoryItem({ category }) {
  const {imageUrl, title} = category
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <img /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
