import React from 'react';

const Ingredient = ({ ingredient, onClick, isAddButton }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={onClick}>
        {isAddButton ? '+' : 'X'}
      </button>
    </li>
  );
};

export default Ingredient;