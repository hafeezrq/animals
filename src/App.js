import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const myAnimals = ['Bird', 'Cow', 'Gator', 'Horse', 'Cat', 'Dog'];
  return myAnimals[Math.floor(Math.random() * myAnimals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>Number of Animals = {animals}</p>
    </div>
  );
};
export default App;
