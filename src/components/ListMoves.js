import React from 'react';

export default function ListMoves({history, jumpTo}) {
	
	const moves = history.map((_, move) => {
		let buttonText;
		if (move > 0)
		  buttonText = `Go to move # ${move}`;
		else 
		  buttonText = `Go to game start`;
	
		  return (
			<li key={move}>
			  <button onClick={() => jumpTo(move)}> {buttonText} </button>
			</li>
		  )
	})

	return (
		<ol>
			{moves}
		</ol>
	)
}
