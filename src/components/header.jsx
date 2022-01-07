// import { Accordion } from '@mui/material'
import React from 'react'
import { AccessTime, HeaderContainer, HeadingAvatar, SearchInput } from '../styledComponents'


const Header = ({photo, showPopUp}) => {
    return (
        <HeaderContainer>
            <div>
            <AccessTime />
          <SearchInput type="text" placeholder="Search" />
          <HeadingAvatar onClick={showPopUp} src={photo} />
            </div>
      
        </HeaderContainer>
    )
}


export default Header
