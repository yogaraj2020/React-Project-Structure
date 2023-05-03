import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <MenuIcon />
      </div>
      <div className="header-center">
        <div className="search-box">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span className="username">John Doe</span>
          <AccountCircleIcon className="user-icon" />
        </div>
        <NotificationsIcon className="notification-icon" />
      </div>
    </header>
  );
}

export default Header;

// CSS

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.header-left {
  flex: 1;
}

.header-center {
  flex: 4;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.search-icon {
  margin-right: 0.5rem;
}

input[type="text"] {
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
}

.header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.user-info {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.user-icon {
  margin-left: 0.5rem;
}

.notification-icon {
  font-size: 2rem;
}
