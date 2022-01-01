// import { Accordion } from '@mui/material'
import React from 'react'
import { AccessTime, HeaderContainer, HeadingAvatar, SearchInput } from '../styledComponents'


const Header = () => {
    return (
        <HeaderContainer>
            <div>
            <AccessTime />
          <SearchInput type="text" placeholder="Search" />
          <HeadingAvatar />
            </div>
          {/* <Accordion /> */}
      
        </HeaderContainer>
    )
}


export default Header
