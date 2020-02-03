import React from 'react';

import '../TicTacToe.css'

import FormGroup from '@material-ui/core/FormGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Switch from '@material-ui/core/Switch';

import Typography from '@material-ui/core/Typography';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

 

function SwitchLabel({moves}) {

  const [state, setState] = React.useState({

    checkedA: false,

    moves: moves,

    is_checked: false

  });

  

  const theme = createMuiTheme({

    typography: {

      fontFamily: 'Comic Sans MS',

      fontSize: 15,

    },

  });

 

  state.moves = moves

 

  

const handleChange = name => event => {

  setState({ ...state, [name]: event.target.checked, moves: moves.reverse(), is_checked: true});

};

 

if (state.checkedA && !state.is_checked){

    state.moves = state.moves.reverse();

    state.is_checked = false;

  }

else if (state.is_checked){

    state.is_checked = false;

}

 

  return (

    <div>

      <ol reversed={state.checkedA} className="history">

        {state.moves}

      </ol>

      <FormGroup row>

        <FormControlLabel

          control={

          <Switch 

              checked={state.checkedA}

              onChange={handleChange('checkedA')}

              value="checkedA"

            />} 

          label= {<ThemeProvider theme={theme}>

              <Typography>Sort by ascending order</Typography>      

 

          </ThemeProvider>}

          />

      </FormGroup>

    </div>

  );

}

 

export default SwitchLabel;