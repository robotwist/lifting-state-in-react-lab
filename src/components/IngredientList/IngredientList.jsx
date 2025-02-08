import React from 'react';
import Ingredient from '../Ingredient/Ingredient.jsx';

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={() => onAdd(ingredient)}
          isAddButton={true}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
  