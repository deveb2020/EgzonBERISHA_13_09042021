import '../style/HomePage.css'
import logo from '../Images/argentBankLogo.png'
import userPhoto from '../Images/person-icon.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaSignOutAlt } from "react-icons/fa";


import React from 'react'

const HomePageNavbar = () => {

    const dispatch = useDispatch() 
    const userIsVerified = useSelector(state => state.logedIn )

    const handleSignOut = () => {
        dispatch(// Change the state to Log Out the user
            {
                type: 'USER_AUTHENTIFICATION',
                data: '',
                logedIn: false,
            }
        )
    }

    return (
        <nav>
            <Link to='/'>
                 <img src={logo} alt="logo"/>
            </Link>
            <div className="signin_btn_wrapper">
                <div className="user-photo-box"><img src={userPhoto} alt="userphoto"/></div>
                { userIsVerified ? <Link to="/login" onClick={() => handleSignOut()}><FaSignOutAlt className="log-out-icon" /> Sign Out </Link> : <Link to="/login" > Sign In </Link>}
            </div>
        </nav>
    )
}

export default HomePageNavbar
