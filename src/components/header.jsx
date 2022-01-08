// import { Accordion } from '@mui/material'
import React from 'react'
import { AccessTime, HeaderContainer, HeadingAvatar, SearchInput } from '../styledComponents'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Header = ({photo, showPopUp, showHideMenu, show}) => {
    return (
        <HeaderContainer>
            <div>
              <button onClick={showHideMenu}>
                { show ? <CloseRoundedIcon className="menuIcon" /> : <MenuRoundedIcon className='menuIcon' />}
              </button> 
            <AccessTime />
          <SearchInput type="text" placeholder="Search" />
          <HeadingAvatar onClick={showPopUp} src={photo} />
            </div>
      
        </HeaderContainer>
    )
}


export default Header
