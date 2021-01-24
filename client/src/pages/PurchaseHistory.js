import React , { useState } from "react";
import Navbar from '../components/Navbar';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

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
  }
}));

function PurchaseHistory() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }

  return (
    <>
    <Navbar/>
    <div>
    {user ? (
      <>
      <section className='movie-section'>
        <Grid container spacing={0}>
        <h2>Purchase History for {user.email}</h2>
          <Grid container item xs={12} spacing={0}>
            {user.purchaseHistory.map((history, index) => (
            <Card className={classes.root} key={history.moviePurchase.id} id='movieCard'>
              <CardActionArea key={history.moviePurchase.id}>
                <CardMedia
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/w1280/${history.moviePurchase.poster_path}`}
                  title={history.moviePurchase.title}
                  alt={history.moviePurchase.title}
                  id='card-img'
                />
                <CardActions disableSpacing>
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
                        {history.moviePurchase.title}
                    </Typography>
                    <Typography variant="body2" component="p" id='overview'>
                        {history.moviePurchase.overview}
                    </Typography>
                  </CardContent>
                </Collapse>
              </CardActionArea>
            </Card>
            ))
            }
  
          </Grid>
        </Grid>
      </section>
      </>
      ) : ( 
    <h2> Your purchases will be listed here!</h2>
    )}
  </div>
  </>
  )

};

export default PurchaseHistory;
