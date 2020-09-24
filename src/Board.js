import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './Board.css';

function Board(props) {
  const { nRows, nCols, nShuffles, neon, toggle } = props;

  const generateState = () => {
    return {
      hasWon: false,
      cellState: Array.from({ length: nRows },
        () => Array.from({ length: nCols },
          () => true))
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

  const makeSolvable = () => {
    let board = { ...boardState };
    const flipCell = (x, y) => {
      let cell = board.cellState;
      if (x >= 0 && y >= 0 && x < nRows && y < nCols) {
        cell[x][y] = !cell[x][y];
      }
    }
    for (let i = 0; i < nShuffles; i++) {
      let y = Math.floor(Math.random() * nRows);
      let x = Math.floor(Math.random() * nCols);
      flipCell(Number(x), Number(y));
      flipCell(Number(x) - 1, Number(y));
      flipCell(Number(x) + 1, Number(y));
      flipCell(Number(x), Number(y) - 1);
      flipCell(Number(x), Number(y) + 1);
    }
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

  useEffect(() => { makeSolvable() },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  if (boardState.hasWon) {
    return (
      <div className='Board-winner'>
        <span className={neon ? 'neon' : ''}>YOU</span>
        <span className={neon ? 'flux' : ''}>WIN!</span>
      </div>
    );
  }

  return (
    <div className='Board'>
      <div className='Board-title'>
        <div className={neon ? 'neon' : ''}>Lights</div>
        <div className={neon ? 'flux' : ''}>Out</div>
      </div>
      <div className='Board-toggle'>
        <div className={neon ? 'flux' : ''} onClick={() => toggle()}><strong>Toggle Grid</strong></div>
      </div>
      <table className='Board-game'>
        <tbody>{generateBoard()}</tbody>
      </table>
    </div>
  );
}

export default Board;