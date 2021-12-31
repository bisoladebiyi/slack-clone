import React from 'react'
import { useNavigate } from 'react-router'
import { logOut } from '../utils'

const Dashboard = () => {
    const navigate = useNavigate()
    const logOutftn = () => {
      logOut().then((res)=> navigate("/login"))

    }
    return (
        <div>
            <button onClick={logOutftn}>Sign Out</button>
        </div>
    )
}

export default Dashboard
