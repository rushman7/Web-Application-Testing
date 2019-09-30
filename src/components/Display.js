import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 40,
  },
  paper: {
    height: 120,
    width: 160,
    paddingTop: 25,
  },
  // control: {
  //   padding: theme.spacing(2),
  // },
}));

export default function Display(props) {
  const classes = useStyles();
  const { strike, ball } = props.count;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          <Grid item>
            <Paper className={classes.paper} >
              <h2>Balls: {ball}</h2>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} >
              <h2>Strikes: {strike}</h2>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}