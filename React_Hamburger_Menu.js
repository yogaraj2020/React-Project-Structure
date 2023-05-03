import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const Header = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
});

const Main = styled('main')({
  flexGrow: 1,
  padding: '16px',
});

const NavList = styled(List)({
  width: drawerWidth,
});

const NavListItem = styled(ListItem)({
  paddingLeft: '24px',
});

const HamburgerIcon = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <div>
      <Header>
        <h1>My App</h1>
        <HamburgerIcon onClick={toggleDrawer(true)}>
          <MenuIcon />
        </HamburgerIcon>
      </Header>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <NavList>
          <NavListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </NavListItem>
          <NavListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </NavListItem>
          <NavListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </NavListItem>
        </NavList>
      </Drawer>
      <Main>
        <h2>Welcome to my app</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ac est quis ullamcorper.</p>
      </Main>
    </div>
  );
};

export default App;
