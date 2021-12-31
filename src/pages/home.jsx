import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Link to="/signup"><button>SignUp</button></Link>
            <Link to="login"><button>SignIn</button></Link>
        </div>
    )
}

export default Home
