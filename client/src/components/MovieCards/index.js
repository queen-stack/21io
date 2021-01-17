import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// the useStyles is for the material UI styling, this is imported from "import { makeStyles } from '@material-ui/core/styles'"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

// DiscoverMovieList() imports all the titles to the landing page
// This uses the Material UI cards -> https://material-ui.com/components/cards/#Media
const DiscoverMovieList = (props) => {
  // styling for the Material UI cards
  const classes = useStyles();


  // console.log the data to see which titles don't have images

  return (
      <>
          {props.movies.map((movie, index) => (
        <Card className={classes.root} key={movie.id} id='movieCard'>
            <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                  title={movie.title}
                  alt={movie.title}
                  id='card-img'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      {movie.overview}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Avg. Rating {movie.vote_average}
                  </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
      ))}
      </>
      
  );
}

export default DiscoverMovieList
