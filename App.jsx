import { useState } from 'react';

import Square from './Components/Square.jsx'


function Board() {
  const [Squares, setSquares] = useState(Array(9).fill(null))
  const [XIsNext, setXIsNext] = useState(true)
  


  
  function CalculateWinner (Squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i]
        if (Squares[a] && Squares [a] === Squares[b] && Squares[a] === Squares[c] ){
          return Squares[a];
        }

      }
      return null;
  }

  const Winner = CalculateWinner(Squares);
  let status;
  if (Winner) {
    status = 'Winner : ' + Winner;
  
  }
  // else if (Resets){
  //   status = "Next Player : " + (XIsNext ? 'X' : 'O"')
  // }
  else{
    status = "Next Player : " + (XIsNext ? 'X' : 'O"')
  }

  function handleClick(i) {
    if (Squares[i] || CalculateWinner(Squares)){
      return;
    }
    if(Squares[i]){
      return;
    }
    const nextSquares = Squares.slice();

    if (XIsNext){
      nextSquares[i] = 'X';
    }
    else{
      nextSquares[i] = 'O';
    }

    
    setSquares(nextSquares);
    setXIsNext(!XIsNext);
  }

  function Resets() {
    setSquares(Array(9).fill(null));
    status = "Next Player : " + (XIsNext ? 'X' : 'O"')


  }

  return(
    <div style={{justifyContent: 'space-between', margin: '0px 500px'}}>
    <div className='status'>{status}</div>
    <div className = "board-row">
    <Square value = {Squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value = {Squares[1]} onSquareClick={() => handleClick(1)}/>
    <Square value = {Squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className= "board-row">
    <Square value = {Squares[3]} onSquareClick={() => handleClick(3)}/>
    <Square value = {Squares[4]} onSquareClick={() => handleClick(4)}/>
    <Square value = {Squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className = 'board-row'>
    <Square value = {Squares[6]} onSquareClick={() => handleClick(6)}/>
    <Square value = {Squares[7]} onSquareClick={() => handleClick(7)}/>
    <Square value = {Squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    <button  className='reset' onClick={Resets}>Reset</button>
    </div>
  );
  
}

export default Board;





