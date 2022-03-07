import {Box, Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useState} from 'react';

export const Sort = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box sx={{minWidth: 150, display: 'flex', flexDirection: 'row', justifyContent: 'center', pb: '20px'}}>
      <FormControl sx={{width: '10%', mr: '20px'}}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} label="Sort by" onChange={handleChange}>
          <MenuItem value={'nameasc'}>name(asc)</MenuItem>
          <MenuItem value={'namedesc'}>name(desc)</MenuItem>
          <MenuItem value={'yearasc'}>year(asc)</MenuItem>
          <MenuItem value={'yeardesc'}>year(desc)</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" sx={{color: 'white', width: '30px'}} onClick={() => props.handleSort(value)}>
        Sort
      </Button>
    </Box>
  );
};
