import React from 'react';
import './TicTacToe.css';

import SwitchLabel from './components/SwitchLabel'
import Board from './components/Board'
//import 'typeface-roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from '../../../components/NavBar/NavBar';
  
//represents the TicTacToe Game
class TicTacToe extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          history: [{
              squares: Array(9).fill(null),
          }],
          history_row: [0,],
          history_col: [0,],
          stepNumber: 0,
          xIsNext: true,
          background_color: new Array(9).fill("square"),
      };
  }

 

  //handles the clicking of a square tile in the game board
  handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const history_row = this.state.history_row;
      const history_col = this.state.history_col;
      const row = getCurrentRow(i);
      const col = getCurrentCol(i);

      if (calculateWinner(squares) || squares[i]) {
          return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
          history: history.concat([{
              squares: squares,
          }]),
          history_row: history_row.concat([
              row,
          ]),
          history_col: history_col.concat([
              col,
          ]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
      });
  }

  jumpTo(step) {
      this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
      });

  }

  render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const history_row = this.state.history_row;
      const history_col = this.state.history_col;
      const current_row = history_row[this.state.stepNumber];
      const current_col = history_col[this.state.stepNumber];
      var background_color = new Array(9).fill("square");

      const theme = createMuiTheme({
        typography: {
          fontFamily: 'Comic Sans MS',
        },

        palette: {
          primary: {main: '#90caf9'},
          secondary: {main: '#e3f2fd'},
        },
      });

      const moves = history.map((step, move) => {
          const desc = move ?
              'Go to move #' + move : 
              'Go to game start';
          if (move === this.state.stepNumber){
              return(
                  <li key={move}>   
                  <ThemeProvider theme={theme}>               
                    <Button variant="contained" color="primary" onClick={() => this.jumpTo(move)}><b>{desc}</b></Button>
                  </ThemeProvider>
                  </li>
              );
          }
          else{
              return (
                  <li key={move}>
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" color="secondary" onClick={() => this.jumpTo(move)}>{desc}</Button>
                    </ThemeProvider>
                  </li>
              );
          }
      });

      let status;

      if (winner) {
          status = 'Winner ' + winner;
          const winningSquares = returnWinningSquares(current.squares);
          for (var i = 0; i < winningSquares.length; i++){
            background_color[winningSquares[i]] = "square-finish";
          }
      } 
      else if (this.state.stepNumber === 9){
          status = 'Tie!'
      } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O') + ' | Coord: (' + current_col + ', ' + current_row + ')';
      }
      
    return (
      <div className="app">
      <NavBar title="Game Board - Tic-Tac-Toe"/>
      <div className="game">
        <div className="game-board">
          <Board
            btn_class= {background_color}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <SwitchLabel moves={moves}/>
        </div>
      </div>
    </div>
    );
  }
}

//checks whether or not a player won the game
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//returns the squares thats a three-in-a-row
function returnWinningSquares(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

//returns the current column coordinates
function getCurrentCol(i){
  return i % 3 + 1;
}

//returns the current row coordinates
function getCurrentRow(i){
  return Math.ceil((i+1) / 3);
}

export default TicTacToe;
