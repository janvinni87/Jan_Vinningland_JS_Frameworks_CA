import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Games from '../../components/games';

const useStyles = makeStyles(theme => ({
  games: {
    flexGrow: 1
  },
}));

const Home = ({data}) => {
  const classes = useStyles();

  return (
    <div className={classes.games}>
      {data.results && (
        <>
          <Typography gutterBottom variant="h5" component="h2">
            Games
          </Typography>
          <Grid container spacing={3}>
            <Games games={data.results} />
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;
