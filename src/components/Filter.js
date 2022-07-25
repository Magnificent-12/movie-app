import React from 'react';
import {FormControlLabel, Checkbox, Button, Drawer, Divider, IconButton} from '@mui/material';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RangeSlider} from '../Helper_components/RangeSlider';
import {filters} from '../redux/redux-reducers/filters';
import {makeStyles} from '@material-ui/core/styles';

const listOfGenres = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western',
];
const useStyles = makeStyles({
  button: {
    backgroundColor: 'white',
    color: 'black',
  },
  drawer: {
    width: '350px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '350px',
      boxSizing: 'border-box',
      backgroundColor: 'rgba(19, 21, 19)',
    },
  },
});

export const Filter = (props) => {
  const {filters: filtersStore} = useSelector((state) => state);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [range, setRange] = useState([1930, 2100]);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    if (filtersStore.genres.includes(event.target.value)) {
      dispatch(filters.actions.removeGenre(event.target.value));
    } else {
      dispatch(filters.actions.addGenre(event.target.value));
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const cleanFilter = () => {
    props.handleClearFilter();
  };

  return (
    <div>
      <div className="filter">
        <p>Filter Movies by Genre/Year:</p>
        <Button className={classes.button} variant="contained" onClick={handleDrawerOpen}>
          Filter
        </Button>
        <Button className={classes.button} variant="contained" onClick={cleanFilter}>
          Clear Filter
        </Button>
      </div>

      <Drawer className={classes.drawer} anchor="left" open={open} variant="temporary" ModalProps={{onBackdropClick: handleDrawerClose}}>
        <IconButton onClick={handleDrawerClose} sx={{color: 'white'}}>
          Close Filter
        </IconButton>
        <Divider sx={{backgroundColor: 'white'}} />
        {listOfGenres.map((genre, index) => {
          return (
            <FormControlLabel
              sx={{color: 'white', width: '200px'}}
              control={
                <Checkbox
                  sx={{color: 'white'}}
                  key={index}
                  value={genre}
                  id={`custom-checkbox-${index}`}
                  onChange={handleChange}
                  checked={!!filtersStore?.genres?.find((name) => name === genre)}
                />
              }
              label={genre}
            />
          );
        })}
        <div className="slider-div">
          <RangeSlider className="slider" setRange={setRange} range={range} />
        </div>
        <Button
          variant="contained"
          sx={{display: 'block', margin: '0 auto', backgroundColor: 'white', color: 'black'}}
          onClick={() => props.handleFilter()}
        >
          Filter
        </Button>
      </Drawer>
    </div>
  );
};
