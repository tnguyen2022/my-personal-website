import React from 'react';

import '../TicTacToe.css';

 

function Square(props) {

  return (

      <button   className={props.btn_class} onClick={props.onClick} >

          {props.value}

      </button>

  );

}

 

export default Square;