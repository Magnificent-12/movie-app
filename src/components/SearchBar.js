import TextField from '@mui/material/TextField';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material';

export const SearchBar = () => {
  const navigate = useNavigate();

  //getting the pathname
  const url = window.location.pathname === '/login' || window.location.pathname === '/logout' ? '/' : window.location.pathname;
  const [value, setValue] = useState('');

  //search string for the url
  const searchString = `movie_title=${value}`;

  //function that's used on keypress and button click
  const search = () => {
    navigate({
      pathname: url,
      search: `?${searchString}`,
    });
    //refreshing the browser
    window.location.reload();
  };
  //handling "Enter" key
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <TextField
        size="small"
        label="Search"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        variant="outlined"
        sx={{'& .MuiInputLabel-root': {color: 'white'}, '& fieldset': {borderColor: 'white'}, '& input': {color: 'white'}}}
      />
      <IconButton>
        <SearchIcon onClick={search} fontSize="large" sx={{color: 'white'}} />
      </IconButton>
    </div>
  );
};
