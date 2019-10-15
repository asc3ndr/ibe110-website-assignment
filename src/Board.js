import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

function Board(props) {
  const { nRows, nCols, chanceLightStartsOn } = props;

  const generateState = () => {
    return {
      hasWon: false,
      cellState: Array.from({ length: nRows },
        () => Array.from({ length: nCols },
          () => Math.random() < chanceLightStartsOn))
    };
  }

  const [boardState, setBoardState] = useState(generateState());

  const updateCells = (e) => {
    let { row, col } = e.target.dataset;
    let board = { ...boardState };

    const flipCell = (x, y) => {
      let cell = board.cellState;
      if (x >= 0 && y >= 0 && x < nRows && y < nCols) {
        cell[x][y] = !cell[x][y];
      }
    }
    flipCell(Number(row), Number(col));
    flipCell(Number(row) - 1, Number(col));
    flipCell(Number(row) + 1, Number(col));
    flipCell(Number(row), Number(col) - 1);
    flipCell(Number(row), Number(col) + 1);

    board.hasWon = board.cellState.every(row => row.every(cell => !cell));
    setBoardState(board);
  }

  const generateBoard = () => {
    var board = [];
    for (let i = 0; i < nRows; i++) {
      let row = [];
      boardState.cellState[i].map((state, index) => (
        row.push(
          <Cell
            state={state}
            row={i}
            col={index}
            click={updateCells}
            key={String(i) + String(index)}
          />
        )));
      board.push(<tr key={i}>{row}</tr>);
    }
    return board;
  }

  if (boardState.hasWon) {
    return (
      <div className='Board-title'>
        <div className='Board-winner'>
          <span className='neon'>YOU</span>
          <span className='flux'>WIN!</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='Board-title'>
        <div className='neon'>Lights</div>
        <div className='flux'>Out</div>
      </div>
      <table className='Board'>
        <tbody>{generateBoard()}</tbody>
      </table>
    </div>
  );
}

export default Board;