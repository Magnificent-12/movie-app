import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {removeUser} from '../redux/redux-reducers/userstore';

const Logout = () => {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.userStore.loggedIn);
  const dispatch = useDispatch();

  dispatch(removeUser());
  useEffect(() => {
    const logoutWait = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        navigate({
          pathname: '/login',
        });
      }, 1000);
    });
    if (!loggedIn) {
      toast.promise(logoutWait, {
        pending: 'Logging out',
        success: 'You have been logged out',
        error: 'There has been a problem',
      });
    }
  }, [loggedIn, navigate, dispatch]);
  return null;
};

export default Logout;
