import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

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
import Tooltip from '@material-ui/core/Tooltip';

import { v4 as uuidv4 } from 'uuid';

import Auth from '../../utils/auth';
import {ADD_MOVIE, PURCHASE_MOVIE} from '../../utils/mutations';

// the useStyles is for the material UI styling, this is imported from "import { makeStyles } from '@material-ui/core/styles'"
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    textAlign: 'none',
    backgroundColor: '#3c4246'
  },
  media: {
    height: 200,
    width: '100%',
  },
  Card: {
    width: 300,
    margin: 'auto',
    color: 'white'
  },
  Media: {
    
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
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "red" }
  }
}));

let inWishlist = window.location.pathname === "/wishlist"; 

// DiscoverMovieList() imports all the titles to the landing page
// This uses the Material UI cards -> https://material-ui.com/components/cards/#Media
const MovieCards = (props) => {
  // styling for the Material UI cards
  const classes = useStyles();
  const movies = props.movies;

  const [addMovie, { error }] = useMutation(ADD_MOVIE);
  const [purchaseMovie, { e }] = useMutation(PURCHASE_MOVIE);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleAddClick =  async (movieId) => {
    
    const foundMovie = movies.find((movie) => movie.id === movieId);
    const movieToAdd = (({ id, title, overview, poster_path }) => ({ movieId, title, overview, poster_path }))(foundMovie);
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      await addMovie({
          variables: {input: movieToAdd}});

      if (error) {
        throw new Error('something went wrong!');
      }

      alert('Movie has been added to your wishlist!');

    } catch (err) {
      console.error(err);
    }
  };

  const handlePurchaseClick = async (movieId) => {
    const foundMovie = movies.find((movie) => movie.movieId === movieId);
    const movieToPurchase = (({ movieId, title, overview, poster_path }) => ({ movieId, title, overview, poster_path }))(foundMovie);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      await purchaseMovie({
        variables: {movieId: movieToPurchase.movieId}
      });
      if (e) {
        throw new Error('something went wrong!');
      }
    } catch (error) {
      throw new Error('something went wrong!');    
    }

  };

  // console.log the data to see which titles don't have images

  // -=- Return notes -=-
  // CardActions needs to have the key, if this does not have that it will throw a warning
  return (
    <>
    {props.movies.map((movie, index) => (
    <Card className={classes.root} key={uuidv4()} id='movieCard'>
      <CardActionArea key={uuidv4()}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
          title={movie.title}
          alt={movie.title}
          id='card-img'
        />
        <CardActions disableSpacing>
          {!inWishlist &&
          <Tooltip title="Add to Wishlist">
            <IconButton className={classes.customHoverFocus}
            aria-label="add to wishlist" 
            onClick={() => handleAddClick(movie.id)} >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          }
          {inWishlist &&
          <Tooltip title="Watch Movie">
            <IconButton className={classes.customHoverFocus}
            aria-label="watch"
            onClick={() => handlePurchaseClick(movie.movieId)}
            >
              <ShopIcon />
          </IconButton>
          </Tooltip>
          }
          <Tooltip title="See Movie Description">
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
          </Tooltip>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
          </Typography>
          <Typography variant="body2" component="p" id='overview'>
              {movie.overview}
          </Typography>
        </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
    
  ))}
  </>
      
  );
}

export default MovieCards

