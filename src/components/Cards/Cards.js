import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CStyles from './CStyles';
import Hero from '../../assets/hero-background.jpg';



const Cards = () => {
  const classes = CStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="test"
          height="140"
          image={Hero}
          title="test"
        />
        <CardContent>
          <Typography className={classes.title}>
            Tasty Cotton Tuna
          </Typography>
          <Typography className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar risus at turpis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
