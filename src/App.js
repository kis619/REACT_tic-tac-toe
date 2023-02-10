import React, {useState} from 'react';
import Square from './components/Square'
import someone_won from './utils';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [symbol, setSymbol] = useState("X");

  function handleSquareClick(idx) {
    if (squares[idx] || someone_won(squares))
      return ;
    const nextSquares = squares.slice();
    nextSquares[idx] = symbol;
    symbol === "X"?
    setSymbol("O")
    :
    setSymbol("X")

    setSquares(nextSquares);
  }
  let status;
  if (someone_won(squares)) {
    status = `Winner: ${symbol === "X"? "O":"X"}`;
  }
  else {
    status = `Next turn: ${symbol}`;
  }

  return (
    <div className='board'>
      <div className='status'> {status} </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)}/>

      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)}/>

      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
      </div>
    </div>
  )
}
