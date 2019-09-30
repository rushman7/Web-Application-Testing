import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#33c6dc',
    color: 'white',
  },
  input: {
    display: 'none',
  },
}));

export const Dashboard = ({ atBat }) => {
  const classes = useStyles();

  return (
    <div>
      <Button 
        variant="contained" 
        className={classes.button}
        onClick={atBat}
        value='strike'
      >Strike</Button>
    </div>
  )
}