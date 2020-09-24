import React from 'react'
import './Cell.css';

function Cell(props) {
  return (
    <td
      data-row={props.row}
      data-col={props.col}
      className={props.state ? 'Cell Cell-lit' : 'Cell'}
      onClick={props.click}
    >
    </td>
  );
}

export default Cell;