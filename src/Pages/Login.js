import {Box, Button, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {addUser} from '../redux/redux-reducers/userstore';

const Login = () => {
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userStore.loggedIn);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    //checking if it's an email
    if (email.includes('@')) {
      dispatch(addUser(email));
    } else {
      toast.error('Please enter a valid e-mail', {
        theme: 'colored',
      });
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    if (userLogged) {
      const loginWait = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          navigate({
            pathname: '/',
          });
        }, 1500);
      });
      toast.promise(loginWait, {
        pending: 'Logging in!',
        success: 'You have been logged in!',
        error: 'There has been an error while logging in',
      });
    }
  }, [navigate, userLogged]);
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        WebkitTransform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1f222a',
        background: 'linear-gradient(140deg, #1f222a 0%, #4b5264 74%)',
        borderRadius: '30px',
        boxSizing: 'border-box',
        boxShadow: '-6px -6px 10px black',
      }}
      className="login-box"
    >
      <Typography variant="h4" sx={{marginBottom: '60px', color: 'white'}}>
        Please log in
      </Typography>
      <TextField
        size="medium"
        label="E-mail"
        value={email}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        variant="filled"
        sx={{width: '80%', '& .MuiInputLabel-root': {color: 'white'}, '& fieldset': {borderColor: 'white'}, '& input': {color: 'white'}}}
      />
      <Button variant="contained" size="medium" sx={{width: '80%', marginTop: '30px', mb: '30px'}} onClick={handleClick}>
        Log in
      </Button>
    </Box>
  );
};

export default Login;
