import React from 'react'
import styled from 'styled-components'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'




function SwipeButtons() {
  return (
    <Container>
    <IconButton className='swipeButtons_repeat'>
        <ReplayIcon fontSize='Large'/>
    </IconButton>

    
    <IconButton  className='swipeButtons_close'>
        <CloseIcon fontSize='Large'/>
    </IconButton>

    
    <IconButton  className='swipeButtons_Start'>
        <StarRateIcon fontSize='Large'/>
    </IconButton>

  
    <IconButton  className='swipeButtons_Favorite'>
        <FavoriteIcon fontSize='Large'/>
    </IconButton>

   
    <IconButton  className='swipeButtons_Flash'>
        <FlashOnIcon fontSize='Large'/>
    </IconButton>

    </Container>
  )
}

export default SwipeButtons

const Container=styled.div`
position:fixed;
bottom:10vh;
display:flex;
width:100%;
justify-content:space-evenly;

.swipeButtons_repeat,.swipeButtons_close,.swipeButtons_Start,.swipeButtons_Favorite,.swipeButtons_Flash{
    background-color:white;
    box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important;
}
.swipeButtons_repeat{
padding :3vw !important;
color:#f5b748 !important;
}

.swipeButtons_close{
padding :3vw !important;
color:#ec5e6f !important;
}

.swipeButtons_Start{
padding :3vw !important;
color:#62b4f9 !important;
}

.swipeButtons_Favorite{
padding :3vw !important;
color:#76e2b3 !important;
}

.swipeButtons_Flash{
padding :3vw !important;
color:#915dd1 !important;
}


`