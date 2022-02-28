import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logoutUserThunk } from '../../redux/authReducer';
import { getAuth } from '../../redux/authSelecrors';
// import classes from './Header.module.css'


export const Header: React.FC = React.memo(() => {
  const userData = useSelector(getAuth);
  const { isAuth, login, email } = userData;

  const dispatch = useDispatch();

  const logoutUser = () => dispatch(logoutUserThunk());

  return (
    <AppBar position='static'>
      <Toolbar>
        <img style={{height: '50px', width: '50px', marginRight: 'auto'}}  src="https://i.imgur.com/BrIpiK6.png" />
        {
          isAuth === 'authorized'
            ? <>
                <Typography sx={{mr: 5}}>
                  {login} ({email})
                </Typography>
                <Button  variant="contained" color='error' onClick={logoutUser}>Logout</Button>
              </>
            : <Link to='/login'>Login</Link>
        }
      </Toolbar>
    </AppBar>

  )
});