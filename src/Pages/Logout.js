import {useDispatch, useSelector} from 'react-redux';
import {removeUser} from '../redux/redux-reducers/userstore';

const Logout = () => {
  const loggedIn = useSelector((state) => state.userStore.loggedIn);
  const dispatch = useDispatch();
  if (loggedIn) {
    dispatch(removeUser());
    window.location.reload();
  } else return <h1 style={{color: 'white', fontFamily: 'monospace'}}>You have been logged out, thank you for using our movieApp</h1>;
};

export default Logout;
