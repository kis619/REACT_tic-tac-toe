import React, {useState} from 'react';
import Board from './components/Board';
import ListMoves from './components/ListMoves';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const symbol = currentMove % 2 === 0 ? "X" : "O";
    const currentSquares = history[currentMove];
    
    function handlePlay(nextSquares) {
      const updatedHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setCurrentMove(updatedHistory.length - 1);
      setHistory(updatedHistory);
    }
    
    function jumpTo(move) {
      setCurrentMove(move);
    }

    return (
      <div className='game'>
        <div className='game-board'>
            <Board symbol={symbol} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className='game-info'>
          <ListMoves history={history} jumpTo={jumpTo}/>
        </div>
      </div>
    )
}
