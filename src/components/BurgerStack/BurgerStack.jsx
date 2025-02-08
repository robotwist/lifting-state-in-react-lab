import React from 'react';
import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => onRemove(ingredient)}
            isAddButton={false}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
