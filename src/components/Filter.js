import React from 'react';
import {FormControlLabel, Checkbox, Button, Drawer, Divider, IconButton} from '@mui/material';
import {useState} from 'react';
import {RangeSlider} from '../Helper_components/RangeSlider';




const listOfGenres = [
  'Comedy',
  'Fantasy',
  'Crime',
  'Drama',
  'Music',
  'Adventure',
  'History',
  'Thriller',
  'Animation',
  'Family',
  'Mystery',
  'Biography',
  'Action',
  'Film-Noir',
  'Romance',
  'Sci-Fi',
  'War',
  'Western',
  'Horror',
  'Musical',
  'Sport',
].sort();


export const Filter = (props) => {

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [range, setRange] = useState([1930, 2100]);
  const [open, setOpen] = useState(false);
  

  const handleChange = (event) => {
  if (selectedGenres.includes(event.target.value)){
    setSelectedGenres(selectedGenres.filter((genre) => event.target.value !== genre))
  } else {
    setSelectedGenres([event.target.value, ...selectedGenres])
  }
};

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <div className='filter'>
        <p>Filter Movies by Genre/Year:</p>
        <Button sx={{backgroundColor: 'white', color: 'black'}} variant="contained" onClick={handleDrawerOpen}>Filter</Button>
      </div>
      
      <Drawer
        sx={{
          width: '350px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '350px',
            boxSizing: 'border-box',
            backgroundColor: 'rgba(19, 21, 19)',
          },
        }}
        anchor="left"
        open={open}
        variant="temporary"
        ModalProps={{onBackdropClick: handleDrawerClose}}
      >
        <IconButton onClick={handleDrawerClose} sx={{color: 'white'}}>Close Filter</IconButton>  
        <Divider sx={{backgroundColor: 'white'}} />
        {listOfGenres.map((genre, index) => {
         return (
            <FormControlLabel sx={{color: 'white', width: '200px'}} control={
                <Checkbox sx={{color: 'white'}}
                  key={index} 
                  value={genre}
                  id={`custom-checkbox-${index}`}
                  onChange={handleChange}
                />
              } label={genre} />
          );
        })}
        <div className='slider-div'>
        <RangeSlider className='slider' setRange={setRange}/>
        </div>
          <Button variant='contained' sx={{display: 'block', margin: '0 auto', backgroundColor: 'white', color: 'black'}} 
          onClick={() => props.handleFilter(selectedGenres, range[0], range[1])}>Filter</Button>
      </Drawer>
    </div>
  );
}



        
        
        