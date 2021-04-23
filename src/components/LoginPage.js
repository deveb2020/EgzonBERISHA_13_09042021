import '../style/LoginPage.css'
import userPhoto from '../Images/person-icon.png'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'


const LoginPage = () => {

    const [userInput, setUserInput] = useState({})
    const userIsVerified = useSelector(state => state.logedIn )
    const dispatch = useDispatch() // this is how we use useDispatch hook
    const URL_LOGIN = 'http://localhost:3001/api/v1/user/login' 

    const ApiRequest = async () => {    
        await axios.post( URL_LOGIN, userInput )
        .then(res => {
            Cookies.set('accessToken', res.data.body.token) // JWT token sotred in a Cookie
            dispatch(// after we recive a succesul response from the server we store the TOKEN and LOGEDIN TRUE to the global state
                {
                    type: 'USER_AUTHENTIFICATION',
                    data: res.data.body.token,
                    logedIn: true,
                }
            )
        })
        .catch(err => console.log(err))
    } 

    const handleOnSumbit = (e) => {
        e.preventDefault()
        ApiRequest()// on submit call the ApiRequest function
    }
    
    // if the user is in the database redirect him to the profil page
    if ( userIsVerified ) { 
        return <Redirect to='/profil' />
    }

    return (
        <div className="bkg-color">
            <div className="form-box">
                <div className="user-photo"> <img src={userPhoto} alt="userphoto"/> </div>
                <h1 className="sign-in">Sign in</h1>
                <form onSubmit={(e) => handleOnSumbit(e)}>
                    <p>Email</p>
                    <input type="text"
                        onChange={(event) => {setUserInput({...userInput,...{"email": event.target.value}})}}
                        className="inputfield" 
                        autoComplete="username" />
                    <p>Password</p>
                    <input type="password" 
                        onChange={(event) => { setUserInput({...userInput,...{"password": event.target.value}})}}  
                        className="inputfield" 
                        autoComplete="current-password" /><br/>
                    <input  className="checkbox" type="checkbox"/>
                    <span className="checkbox-txt">Remember me!</span><br/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage


/* useSelector is used to select the state from the redux store and to display or just use
 for any condition as needed */

/* useDispatch is a hook used to fire the reducer function and update the state
 see exemples below */