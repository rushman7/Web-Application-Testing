import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#33c6dc',
    color: 'white',
    width: 110,
  },
  input: {
    display: 'none',
  },
}));

export const Dashboard = ({ atBat, hit, foul, strike }) => {
  const classes = useStyles();

  return (
    <div>
      <Button 
        variant="contained" 
        className={classes.button}
        onClick={atBat}
        value='strike'
      >Strike</Button>
      <Button 
        variant="contained" 
        className={classes.button}
        onClick={atBat}
        value='ball'
      >Ball</Button>
      <Button 
        variant="contained" 
        className={classes.button}
        onClick={hit}
        value='strike'
      >Hit</Button>
      {
        strike < 2
        ? <Button 
            variant="contained" 
            className={classes.button}
            onClick={foul}
            value='foul'
          >Foul</Button>
        : <Button 
            variant="contained" 
            className={classes.button}
            onClick={foul}
            value='foul'
            disabled
          >Foul</Button>
      }
    </div>
  )
}