import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*
// the movieImages need to be imported. Images are not working right now but putting this here for testing and reference
const movieImages = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
// or
// the movieImages need to be imported. Images are not working right now but putting this here for testing and reference
const movieImages = `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=d70418f0a8a661cab8f71cdbdb3da10d&language=en-US`
*/

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


  return (
      <>
          {props.movies.map((movie, index) => (
        <Card className={classes.root} key={movie.id}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={movie.poster_path}
                title={movie.title}
                background-image={movie.poster_path}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {movie.overview}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                Avg. Rating {movie.vote_average}
                </Typography>
            </CardActions>
        </Card>
        
      ))}
      </>
      
  );
}

export default DiscoverMovieList
