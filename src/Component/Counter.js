import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const initialInput = '';
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(initialInput);

  const startingValue = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    setCount(parseInt(input));
    setInput(initialInput);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label >
          Valeur de départ du compteur :
        <input type="text" value={input} onChange={startingValue} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;

