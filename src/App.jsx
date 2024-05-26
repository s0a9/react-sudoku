import React, { useState } from 'react'
import { isValidPlacement } from './utils/Checker'
import { v4 } from 'uuid';

export default function App() {
  const [board, setBoard] = useState([
    [0, 9, 0, 0, 4, 2, 1, 3, 6],
    [0, 0, 0, 9, 6, 0, 4, 8, 5],
    [0, 0, 0, 5, 8, 1, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0],
    [5, 1, 7, 2, 0, 0, 9, 0, 0],
    [6, 0, 2, 0, 0, 0, 3, 7, 0],
    [1, 0, 0, 8, 0, 4, 0, 2, 0],
    [7, 0, 6, 0, 0, 0, 8, 1, 0],
    [3, 0, 0, 0, 9, 0, 0, 0, 0],
  ]);
  const [currentNumber, setCurrentNumber] = useState(0);

  function playerMove(i, j) {
    if (currentNumber === 0) {
      window.alert("Select a number");
      return;
    }
    
    const copy = [...board];
    
    if (!isValidPlacement(copy, currentNumber, i, j)) {
      window.alert("Not a valid placement");
      return;
    } 
      
    copy[i][j] = currentNumber;
    setBoard(copy);
    setCurrentNumber(0);
    if(isPlayerwon()) {
      window.alert("You Won!.");
    }
  }

  function isPlayerwon(copy) {
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(board[i][j] == 0) {
          return false;
        }
      }
    }
    return true;
  }
  

  return (
    <>
      <nav>
        <h1 className='title'>Sudoku React</h1>
      </nav>
      <main>
        <section className='container'>
          <table>
            <tbody>
              {
                board.map((row, i) => {
                  return (<tr key={v4()}>
                    {row.map((ceil, j) => {
                      return <td key={v4()} onClick={() => playerMove(i, j)}>{ceil == 0 ? " " : ceil}</td>
                    })}
                  </tr>)
                })
              }
            </tbody>
          </table>
          <div className='option'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((move) => {
              return <div key={move} onClick={() => setCurrentNumber(move)}>
                {move}
              </div>
            })}
          </div>
        </section>
      </main>
    </>
  )
}
