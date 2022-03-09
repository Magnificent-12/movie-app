import {Box, Button, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {addUser} from '../redux/redux-reducers/userstore';

const Login = () => {
  const loggedIn = useSelector((state) => state.userStore.loggedIn);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const handleClick = () => {
    //checking if it's an email
    if (email.includes('@')) {
      dispatch(addUser(email));
      window.location.reload();
    } else {
      alert('Please enter a valid e-mail');
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
  return !loggedIn ? (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        WebkitTransform: 'translate(-50%, -50%)',
        width: 500,
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" sx={{marginBottom: '20px', color: 'white'}}>
        Please log in
      </Typography>
      <TextField
        size="medium"
        label="E-mail"
        value={email}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        variant="outlined"
        sx={{width: '60%', '& .MuiInputLabel-root': {color: 'white'}, '& fieldset': {borderColor: 'white'}, '& input': {color: 'white'}}}
      />
      <Button variant="contained" size="medium" sx={{width: '60%', marginTop: '10px'}} onClick={handleClick}>
        Log in
      </Button>
    </Box>
  ) : (
    <Navigate to={'/'} />
  );
};

export default Login;
