import React from 'react';
import './Navbar.css';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import GroupIcon from '@mui/icons-material/Group'; 
import StarIcon from '@mui/icons-material/Star';
import MemoryIcon from '@mui/icons-material/Memory';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navibar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#dashboard" className='imag'><DashboardIcon/>Dashboards</a></li>
        <div className='div'></div>
        <li><a href="#user-management" className='imag'><GroupIcon/>User Management</a></li>
        <li><a href="#masters" className='imag'><StarIcon/>Masters</a></li>
        <li><a href="#process" className='imag'><MemoryIcon/>Process</a></li>
        <li><a href="#search" className='imag'><SearchIcon/>Search</a></li>
        <li><a href="#reports" className='imag'><BookmarksIcon/>Reports</a></li>
      </ul>
      {/* <li><button className='admin'>New Admin</button></li> */}
      <div>
        <span className= 'admin'> <AccountCircleIcon/>New Admin</span>
      </div>
    </nav>
  );
};

export default Navibar;
