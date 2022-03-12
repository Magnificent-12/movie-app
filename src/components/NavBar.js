import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
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
import {useLayoutEffect, useRef, useState} from 'react';
import {DrawerHeader} from '../Helper_components/DrawerHeader';
import {AppBar} from '../Helper_components/AppBar';
import {SearchBar} from './SearchBar';
import {Link} from '@mui/material';
import {useSelector} from 'react-redux';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userStore);
  const [posy, setPosY] = useState(0);
  const [windowY, setWindowY] = useState(0);
  const navBar = useRef(null);
  const linkHome = useRef(null);
  const linkFav = useRef(null);
  const linkLogIn = useRef(null);
  useLayoutEffect(() => {
    if (window.location.pathname === '/' && linkHome.current !== null) {
      linkHome.current.classList.add('active');
    } else if (window.location.pathname === '/favorites' && linkFav.current !== null) {
      linkFav.current.classList.add('active');
    } else if (window.location.pathname === '/login' && linkLogIn.current !== null) {
      linkLogIn.current.classList.add('active');
    }
    const handleScroll = () => {
      setWindowY(window.scrollY);
      if (navBar.current !== null && posy < windowY && posy > 800) {
        setPosY(windowY);
        //adding the class which hides the navbar during scroll down
        navBar.current.classList.add('navbar-hide');
        navBar.current.classList.remove('navbar-show');
      } else {
        setPosY(windowY);
        navBar.current.classList.remove('navbar-hide');
        //adding the class which shows the navbar during scroll up
        navBar.current.classList.add('navbar-show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowY, posy]);

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
    <Box sx={{display: 'flex'}}>
      <AppBar
        ref={navBar}
        position="fixed"
        open={open}
        sx={{
          boxShadow: '0 7px 10px black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '65px',
          paddingLeft: '10px',
          paddingRight: '20px',
          justifyContent: 'space-around',
          backgroundColor: 'rgb(19, 21, 19)',
        }}
        className="navbar-show"
      >
        <div>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className="navbar-link">
            <MenuIcon fontSize="large" className="navbar-links" />
          </IconButton>
        </div>
        <Link
          href="/"
          underline="none"
          sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          className="navbar-link"
          ref={linkHome}
        >
          <HomeIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} className="navbar-links" />
          <Typography sx={{fontSize: {sm: '20px', md: '23px', lg: '27px'}}} color={'white'} className="navbar-links">
            Home
          </Typography>
        </Link>
        <Link
          href="/favorites"
          underline="none"
          sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
          className="navbar-link"
          ref={linkFav}
        >
          <FavoriteIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} className="navbar-links-icon" />
          <Typography sx={{fontSize: {sm: '20px', md: '23px', lg: '27px'}}} color={'white'} className="navbar-links">
            Favorites
          </Typography>
        </Link>
        {user.loggedIn ? (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography sx={{fontSize: {sm: '17px', md: '19px', lg: '21px'}}}>{user.email}</Typography>
            <Link
              href="/logout"
              underline="none"
              sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
              className="navbar-link"
            >
              <LogoutIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} className="navbar-links-icon" />
              <Typography sx={{fontSize: {sm: '17px', md: '19px', lg: '21px'}}} color={'white'} className="navbar-links">
                Logout
              </Typography>
            </Link>
          </div>
        ) : (
          <Link
            href="/login"
            underline="none"
            sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
            className="navbar-link"
            ref={linkLogIn}
          >
            <LoginIcon fontSize="medium" sx={{color: 'white', pr: '10px'}} className="navbar-links-icon" />
            <Typography sx={{fontSize: {sm: '22px', md: '23px', lg: '27px'}}} color={'white'} className="navbar-links">
              Login
            </Typography>
          </Link>
        )}
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
              <Link href={'/genre/' + genre} sx={{color: 'white'}} underline="none" className="categories">
                {genre}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
