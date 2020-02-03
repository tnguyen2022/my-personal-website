import React from 'react'

import NavBar from '../../components/NavBar/NavBar'

import Link from 'react-router-dom/Link'

import LinkComponent from '@material-ui/core/Link'

 

function GameBoard (){

 

  return(

    <div>

      <NavBar title={"Game Board"} />

      <LinkComponent component={Link} to="/GameBoard/TicTacToe"> Tic-Tac-Toe </LinkComponent>

    </div>

  )

}

 

export default GameBoard;