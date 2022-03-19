import { AppBar, Avatar, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUserThunk } from '../../redux/authReducer';
import { getAuth } from '../../redux/authSelecrors';
import MenuIcon from '@mui/icons-material/Menu';
import { RootStateType } from '../../redux/reduxStore';
import { ColorModeContext } from '../common/ColorTheme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type PropsType = {
  toggleNavbar: (status: boolean) => (e: React.MouseEvent) => void;
}

export const Header: React.FC<PropsType> = React.memo(({ toggleNavbar }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const userData = useSelector(getAuth);
  const avatar = useSelector((state: RootStateType) => state.profilePage.userProfile?.photos.small)
  const { isAuth, login } = userData;

  const dispatch = useDispatch();

  const logoutUser = () => dispatch(logoutUserThunk());

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          onClick={toggleNavbar(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 'auto' }}
        >
          <MenuIcon />
        </IconButton>
        {
          isAuth === 'authorized'
            ? <>
              <Avatar src={avatar as string} alt='User avatar' sx={{ mr: 3 }} />
              <Typography sx={{ mr: 5 }}>
                {login}
              </Typography>
              <Button variant="contained" color='error' onClick={logoutUser}>Logout</Button>
            </>
            : <Link to='/login'>Login</Link>
        }
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>

  )
});