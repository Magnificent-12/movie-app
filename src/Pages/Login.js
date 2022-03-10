import {Box, Button, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {addUser} from '../redux/redux-reducers/userstore';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    //checking if it's an email
    if (email.includes('@')) {
      dispatch(addUser(email));
      navigate({
        pathname: '/',
      });
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
  return (
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
      <Typography variant="h4" sx={{marginBottom: '30px', color: 'white'}}>
        Please log in
      </Typography>
      <TextField
        size="medium"
        label="E-mail"
        value={email}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        variant="filled"
        sx={{width: '60%', '& .MuiInputLabel-root': {color: 'white'}, '& fieldset': {borderColor: 'white'}, '& input': {color: 'white'}}}
      />
      <Button variant="contained" size="medium" sx={{width: '60%', marginTop: '30px'}} onClick={handleClick}>
        Log in
      </Button>
    </Box>
  );
};

export default Login;
