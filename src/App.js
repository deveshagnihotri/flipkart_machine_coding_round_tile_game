import React, { useState, useEffect } from "react";
import "./styles.css";
import { array } from "./utils";

export default function App() {
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(array);
  const [isStartGame, setStartGame] = useState(false);

  useEffect(() => {
    handleTimeToHighLight();
  }, []);

  const handleTimeToHighLight = id => {
    setInterval(() => {
      generateRandomHighLight();
    }, 2000);
  };

  const generateRandomHighLight = () => {
    let highLightIndex = Math.floor(Math.random() * 9);
    grid.map(item => {
      if (item.i === highLightIndex) {
        item.isHighLight = true;
      } else {
        item.isHighLight = false;
      }
    });
    setGrid([...array]);
  };

  const handleGridClick = index => {
    if (grid[index].isHighLight) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleGameStart = () => {
    handleTimeToHighLight();
    setStartGame(true);
  };

  return (
    <div className="App">
      {isStartGame ? (
        <div>
          <h1>Score</h1>
          <h1>{score}</h1>
          <div className="grid-container">
            {grid.map((val, index) => (
              <div
                key={index}
                onClick={() => handleGridClick(index)}
                className="item2"
                style={
                  val.isHighLight
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "white" }
                }
              >
                {val.i}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="btnContainer">
          <button className="btn" onClick={() => handleGameStart()}>
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}
