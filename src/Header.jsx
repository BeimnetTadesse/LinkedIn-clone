import React from 'react'
import "./Header.css"
 
import { Search } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
 
const dispatch = useDispatch();
function logoutOfApp(){
  dispatch(logout());
  auth.signOut();
}

  return (
    <div className='header'> 
       <div className='header__left'> 
      <img src='data:image/png;base64,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' alt='logo'/>
        </div>  
       <div className='header__search'>
       <Search />
       <input type="text" placeholder='Search'/> </div>  
       <div className='header__right'>
       <HeaderOption Icon={HomeIcon} title="Home"/>
       <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
       <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
       <HeaderOption Icon={ChatIcon} title="Messaging"/>
       <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
       <HeaderOption onClick={logoutOfApp}  avatar={true} title="me" />
        </div>
    </div>
  )
}

export default Header