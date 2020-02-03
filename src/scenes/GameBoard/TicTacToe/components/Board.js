import React from 'react';

import '../TicTacToe.css';

import Square from './Square'

 

class Board extends React.Component {

  renderSquare(i) {

    return (

      <Square key={i}

          btn_class = {this.props.btn_class[i]}

          value={this.props.squares[i]}

          onClick={() => this.props.onClick(i)} 

      />

    );

  }

 

  render() {

    const board = Array(3);

    for (var i = 0; i < 3; i++){

      const board_rows = Array(3);

          for (var j = 0; j < 3; j++){

            const board_square = this.renderSquare(i*3 + j);

            board_rows.push(board_square);

          }

          board.push(<div key={i} className="board-row">{board_rows}</div>);

      }

 

    return (

      <div>

        {board}

        </div>

    );

  }

}

 

export default Board;