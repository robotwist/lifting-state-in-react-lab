
import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import { useState } from 'react';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Sourdough Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Elk Patty', color: '#3F250B' },
    { name: 'Bison Patty', color: '#3F250B' },
    { name: 'Lamb Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const handleAddIngredient = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };
  
  const addToBurger = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };
  
  const removeFromBurger = (ingredient) => {
    setStack((prevStack) => prevStack.filter((item) => item !== ingredient));
  };
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} onAdd={addToBurger} />
        <BurgerStack ingredients={stack} onRemove={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
