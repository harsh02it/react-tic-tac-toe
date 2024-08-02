import { useState } from "react";

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        <span className="player-name">
          {isEditing ? (
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
              onBlur={() => setIsEditing(false)}
            />
          ) : (
            <span>{playerName}</span>
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
