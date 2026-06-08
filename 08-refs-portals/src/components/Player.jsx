import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleSubmit() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
    console.log(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> 
      {/* ?? insert the same variable value if is true same as var ? var : '' */}
      <p>
        <input 
        ref={playerName}
        type="text"
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
