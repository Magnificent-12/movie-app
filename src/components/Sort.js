import {Box, FormControl, InputLabel, MenuItem, Select} from '@mui/material';

export const Sort = (props) => {
  const handleChange = (e) => {
    props.handleSort(e.target.value);
  };
  return (
    <Box
      sx={{
        minWidth: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        pb: '20px',
        pl: '47px',
        pt: '100px',
        '& fieldset': {borderColor: 'white'},
      }}
    >
      <FormControl sx={{width: '150px', color: 'white'}}>
        <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>
          Sort by
        </InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Sort by" onChange={handleChange} sx={{color: 'white'}}>
          <MenuItem value={'nameasc'}>name(asc)</MenuItem>
          <MenuItem value={'namedesc'}>name(desc)</MenuItem>
          <MenuItem value={'yearasc'}>year(asc)</MenuItem>
          <MenuItem value={'yeardesc'}>year(desc)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
