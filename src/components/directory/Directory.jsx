import React from 'react';
import CategoryItem from '../category-item/CategoryItem';
import './directory.styles.scss';

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map(category => ( // Changed destructuring to directly access each category object
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory;
