import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
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
      </Drawer>
      <main className={classes.content}>
        <h1>Welcome to my app!</h1>
        <p>Here's some content that you might find useful:</p>
        <ul>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/mail">Mail</Link></li>
          <li><Link to="/drafts">Drafts</Link></li>
        </ul>
      </main>
    </div>
  );
}

export default Sidebar;
