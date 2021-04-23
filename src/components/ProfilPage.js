import '../style/ProfilPage.css'
import '../style/MobileState.css'
import { Redirect } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

const ProfilPage = () => {

    const [firstNameInput, setFirstNameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")
    const token = useSelector(state => state.token)
    const Name = useSelector(state => state.FirstName)
    const Surname = useSelector(state => state.LastName)
    const dispatch = useDispatch() 
    const userIsVerified = useSelector(state => state.logedIn ) 

    useEffect(() => {
        ApiRequest()
    }, [])

    const config = {
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    };

    const bodyParameters = {
        key: "value"
     };

    // display the FirstName and LastName by default each time the user is loged in
    const ApiRequest = async () => {    
        await axios.post( "http://localhost:3001/api/v1/user/profile", bodyParameters, config )
        .then(res => {
            dispatch({
                type: 'FIRST_NAME',
                FirstName: res.data.body.firstName,
            })
            dispatch({
                type: 'LAST_NAME',
                LastName: res.data.body.lastName,
            })
        })
        .catch(err => console.log(err))
    } 


    /* To post data use >>>> PUT method <<<<< */

    /* To modify the specfic data in a data object we can select it by using >>> data object <<< and then 
       specifying wich key value we want to change, see the exemple below */

    /* Store the FirstName and LastNanme in the global state */
  
    const handleEditName = async (e) => {
        e.preventDefault()
        await axios({
            method: "put",
            url: 'http://localhost:3001/api/v1/user/profile',
            data: { firstName: firstNameInput, lastName: lastNameInput},
            headers: { "Authorization": `Bearer ${token}` }
        })
        .then(res => {
            dispatch({
                type: 'FIRST_NAME',
                FirstName: res.data.body.firstName,
            })
            dispatch({
                type: 'LAST_NAME',
                LastName: res.data.body.lastName,
            })
        })
        .catch(err => console.log(err))
    }

    // If there is no Cookie redirect the user to the Login Page
    // Or if the user is not loged in
    // else if there is a Cookie give him acces to his Profil Page
    const cookieExist = document.cookie
    if ( !cookieExist || userIsVerified === false ) { 
      return <Redirect to='/login' />
    }

    return (
        <main class="main">
                
            <div class="header">
            <h1>Welcome back</h1>
            <h2 className="Name-and-surname"> {Name} {Surname} </h2>
            <form onSubmit={(e) => handleEditName(e)}>
                <input 
                    type="text" 
                    placeholder='First Name'
                    onChange={(event) => setFirstNameInput(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Last Name'
                    onChange={(event) => setLastNameInput(event.target.value)}
                /><br/>
                <button type="submit" class="edit-button">Edit Name</button>
            </form>
            </div>


            <h2 class="sr-only">Accounts</h2>
            <section class="account">
                <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                    <p class="account-amount">$2,082.79</p>
                    <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                    <p class="account-amount">$10,928.42</p>
                    <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p class="account-amount">$184.30</p>
                    <p class="account-amount-description">Current Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                </div>
            </section>
      </main>
    )
}

export default ProfilPage
