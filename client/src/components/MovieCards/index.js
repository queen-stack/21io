import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShopIcon from "@material-ui/icons/Shop";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from '@material-ui/core/Typography';

// the useStyles is for the material UI styling, this is imported from "import { makeStyles } from '@material-ui/core/styles'"
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    textAlign: 'none'
  },
  media: {
  
    height: 200,
    width: '100%',
  },
  Card: {
    width: 300,
    margin: 'auto'
  },
  Media: {
    // height: 300,
    // width: '100%',
    objectFit: 'cover'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
}));

// DiscoverMovieList() imports all the titles to the landing page
// This uses the Material UI cards -> https://material-ui.com/components/cards/#Media
const DiscoverMovieList = (props) => {
  // styling for the Material UI cards
  const classes = useStyles();
  const movies = props.movies;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleAddClick =  (movieId) => {
    const movieToAdd = movies.find((movie) => movie.id === movieId);
    console.log(movieToAdd);
  };

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
        <CardActions disableSpacing>
          <IconButton 
          aria-label="add to wishlist"
          onClick={() => handleAddClick(movie.id)} >
            <FavoriteIcon />
          </IconButton>
          <IconButton 
          aria-label="share"
           >
            <ShopIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
        </Collapse>

      </CardActionArea>
    </Card>
    
  ))}
  </>
      
  );
}

export default DiscoverMovieList
