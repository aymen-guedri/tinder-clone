import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton  from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'
function Header() {
  return (
    <div className='Header'>
    
    <IconButton>
    <PersonIcon fontSize="large" className="header__icon" />
    </IconButton>

    <img
    className='header_logo'
    src='/images/tinder-logo.png'
    alt='logo'
     />
     <IconButton>
    <ForumIcon fontSize="large" className="Forum__icon"/>
    </IconButton>
    
    </div>
  )
}

export default Header