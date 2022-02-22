/*
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const SearchBar = () => {
    
    const navigate = useNavigate();
    
    //getting the pathname
    const url = window.location.pathname === '/login' ||  window.location.pathname === '/logout' ? '/' : window.location.pathname;
    const [value, setValue] = useState('');

    //search string for the url
    const searchString = `movie_title=${value}` ;
    
    //function that's used on keypress and button click
    const search = () => {
    navigate({
        pathname: url,
        search: `?${searchString}`
    })
    //refreshing the browser
    window.location.reload();
    }
    //handling "Enter" key
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            search()
        }
      }
    return(
        <div>
            <TextField id="outlined-search" label="Search" type="search" value={value} 
            onChange={(e) => setValue(e.target.value)} 
            onKeyPress={handleKeyPress}/>

            <button onClick={search}>Search</button>
        </div>
    )
    
}
*/
