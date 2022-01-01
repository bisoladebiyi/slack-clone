import React from 'react'
import { useNavigate } from 'react-router'
import Header from '../components/header'
import SideMenu from '../components/side-menu'
import { Container } from '../styledComponents'
import { logOut } from '../utils'

const Dashboard = () => {
    const navigate = useNavigate()
    const logOutftn = () => {
      logOut().then((res)=> navigate("/login"))

    }
    return (
        <div className="Container">
            <Header />
           <Container>
           <SideMenu />
           </Container>
                
         
            <button onClick={logOutftn}>Sign Out</button>
        </div>
    )
}

export default Dashboard
