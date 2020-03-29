import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 600,
  },
}));

const Games = () => {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Game />
        </Route>
        <Route path={match.path}>
          <h3>Please select a game from the home page.</h3>
        </Route>
      </Switch>
    </div>
  );
};

const Game = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [hasError, setErrors] = useState(false); // eslint-disable-line
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.rawg.io/api/games/${id}`);
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  const { name, background_image, description, website } = data;

  return (
    <div>
      {data &&
        <div className={classes.container}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <img width="100%" src={background_image} alt={name} />
          { ReactHtmlParser(description) }
          <Button variant="contained" color="primary" href={website} target="_blank">
            Game Website
          </Button>
        </div>
      }
    </div>
  );
};

export default Games;
