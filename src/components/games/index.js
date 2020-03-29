import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140
  }
}));

const Games = ({ games }) => {
  const classes = useStyles();

  const gamesList = games.map(game => {
    const { id, slug, name, background_image, released, rating } = game;

    return (
      <Grid key={slug} item xs={12} sm={6} md={3}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={background_image}
            title={name}
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Released: {released}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" href={`/game/${id}`}>
              See More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return gamesList;
};

export default Games;
