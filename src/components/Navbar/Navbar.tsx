import React from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

type PropsType = {
  navbarStatus: boolean;
  toggleNavbar: (status: boolean) => (e: React.MouseEvent) => void;
}

export const Navbar: React.FC<PropsType> = ({ navbarStatus, toggleNavbar }) => {
  return (
    <Drawer
      anchor='left'
      open={navbarStatus}
      onClose={toggleNavbar(false)}
    >
      <img style={{ height: '50px', width: '50px', marginRight: 'auto' }} src="https://i.imgur.com/BrIpiK6.png" />
      <Box
        sx={{ width: 250 }}
        onClick={toggleNavbar(false)}
        component='nav'
      >
        <List>
          {
            ['Profile', 'Dialogs', 'Chat', 'News', 'Music', 'Users'].map((item) => {
              return (
                <ListItemLink 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  primary={item} 
                />
              );
            })
          }
        </List>
        <Divider />
      </Box>
    </Drawer >
  )
}


type ListItemLinkPropsType = {
  primary: string;
  to: string;
}

const ListItemLink = (props: ListItemLinkPropsType) => {
  const location = useLocation();
  const { primary, to } = props;
  const isMatchPath = location.pathname === to;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>(function Link(
        itemProps,
        ref,
      ) {
        return <NavLink
          to={to} ref={ref}
          {...itemProps} role={undefined}
        />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem 
        button component={renderLink}
        sx={ (theme) => (isMatchPath ? { bgcolor: theme.palette.action.hover,  color: theme.palette.info.main } : {}) } 
      >
        <ListItemText 
          primary={primary} 
        />
      </ListItem>
    </li>
  );
}