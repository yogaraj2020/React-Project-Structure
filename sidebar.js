import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

const StyledDrawerPaper = styled('div')({
  width: drawerWidth,
});

const StyledContent = styled('main')({
  flexGrow: 1,
  padding: 3,
});

function Sidebar() {
  return (
    <div sx={{ display: 'flex' }}>
      <StyledDrawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/inbox">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button component={Link} to="/mail">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
          <ListItem button component={Link} to="/drafts">
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </StyledDrawer>
      <StyledContent>
        <h1>Welcome to my app!</h1>
        <p>Here's some content that you might find useful:</p>
        <ul>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/mail">Mail</Link></li>
          <li><Link to="/drafts">Drafts</Link></li>
        </ul>
      </StyledContent>
    </div>
  );
}

export default Sidebar;
