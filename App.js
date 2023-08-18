import { useState } from "react";
import "./App.css";

export default function App() {


return(
  Board()
);
}asdasdasdasdasdasdasda

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isTurnX, setIsTurnX] = useState(true);


  function handleSquareClick(i) {
    const tmpArray = squares.slice();
    if(tmpArray[i])
        return;
    if(isTurnX) {      
      tmpArray[i] = 'X';
      setIsTurnX(false)
    }
    else {
      tmpArray[i] = 'O';
      setIsTurnX(true)
    }
    setSquares(tmpArray);

  }

  return(
    <div className="board">
    <div className="row">
      <Square value = {squares[0]} onSquareClick = {() => handleSquareClick(0)}/>
      <Square value = {squares[1]} onSquareClick = {() => handleSquareClick(1)}/>
      <Square value = {squares[2]} onSquareClick = {() => handleSquareClick(2)}/>
    </div>
    <div className="row">
      <Square value = {squares[3]} onSquareClick = {() => handleSquareClick(3)}/>
      <Square value = {squares[4]} onSquareClick = {() => handleSquareClick(4)}/>
      <Square value = {squares[5]} onSquareClick = {() => handleSquareClick(5)}/>     
    </div>
    <div className="row">
      <Square value = {squares[6]} onSquareClick = {() => handleSquareClick(6)}/>
      <Square value = {squares[7]} onSquareClick = {() => handleSquareClick(7)}/>
      <Square value = {squares[8]} onSquareClick = {() => handleSquareClick(8)}/>
    </div>    
    </div>
  )
}

function Square({value, onSquareClick}) {


  function handleClick() {
    onSquareClick();
  }

  return(
    <button className="myButton" onClick={handleClick}>
      {value}
    </button>
  )
}

