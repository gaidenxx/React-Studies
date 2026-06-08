import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(editing => !editing); // Best Practice for React, avoid using !isEditing/state
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleInputChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : null}>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{playerName}</span>
                ) : (
                    <input type="text" value={playerName} 
                    onChange={handleInputChange} required/>
                )}
                {/* <span className="player-name">{name}</span> */}
                <span className="player-symbol">{symbol}</span>
            </span>
            {/* <button onClick={() => setIsEditing(!isEditing)}>Edit</button> */}
            <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit" }</button>
        </li>
    );
}