import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import HomePage from './scenes/HomePage/HomePage';
import GameBoard from './scenes/GameBoard/GameBoard';
import TicTacToe from './scenes/GameBoard/TicTacToe/TicTacToe';

  const routing = (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/GameBoard" component={GameBoard} />
        <Route exact path="/GameBoard/TicTacToe" component={TicTacToe} />
        {/* <Route path="/ms/biws-assets/ui/server/:id" component={Server} /> */}
      </div>
    </BrowserRouter>
  )

  ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();