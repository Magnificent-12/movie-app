import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import {useState} from 'react';
import {DrawerHeader} from '../Helper_components/DrawerHeader';
import {AppBar} from '../Helper_components/AppBar';
import {SearchBar} from './SearchBar';
import {Link} from '@mui/material';

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const genreList = [
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
  return (
    <Box sx={{display: 'flex', pb: '100px'}}>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '65px',
          paddingLeft: '10px',
          paddingRight: '20px',
          justifyContent: 'space-around',
          backgroundColor: 'rgb(19, 21, 19)',
        }}
      >
        <div>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
        <Link href="/" underline="none" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <HomeIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} />
          <Typography variant="h5" color={'white'}>
            Home
          </Typography>
        </Link>
        <Link href="/favorites" underline="none" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <FavoriteIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} />
          <Typography variant="h5" color={'white'}>
            Favorites
          </Typography>
        </Link>
        <Link href="/login" underline="none" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <LoginIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} />
          <Typography variant="h5" color={'white'}>
            Login
          </Typography>
        </Link>
      </AppBar>
      <Drawer
        sx={{
          width: '240px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '240px',
            boxSizing: 'border-box',
            backgroundColor: 'rgba(19, 21, 19)',
          },
        }}
        anchor="left"
        open={open}
        variant="temporary"
        ModalProps={{onBackdropClick: handleDrawerClose}}
      >
        <DrawerHeader sx={{justifyContent: 'space-between'}}>
          <SearchBar />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon sx={{color: 'white'}} />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{backgroundColor: 'white'}} />
        <List sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="h6" color={'white'}>
            Categories
          </Typography>
        </List>
        <Divider sx={{backgroundColor: 'white'}} />
        <List sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {genreList.map((genre) => (
            <ListItem>
              <Link href={'/genre/' + genre} sx={{color: 'white'}} underline="none">
                {genre}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
