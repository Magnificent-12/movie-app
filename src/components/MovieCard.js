import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from 'react';
import {ExpandMore} from '../Helper_components/ExpandMore';

export const MovieCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(props.movieFavorite);
  const color = favorite ? 'red' : 'black';

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{maxWidth: 345, margin: '20px'}}>
      <CardHeader title={props.movieTitle} subheader={props.movieGenre} />
      <CardMedia component="img" height="194" image={props.moviePoster} alt={props.movieTitle} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.movieActors}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon
            sx={{
              color: color,
              transition: '0.4s',
            }}
          />
        </IconButton>

        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Movie description:</Typography>
          <Typography paragraph>{props.movieDescription}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
