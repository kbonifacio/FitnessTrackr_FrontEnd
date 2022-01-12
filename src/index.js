import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import './style.css'

import {
    Home,
    Routines,
    MyRoutines,
    Activities
} from './components';
import AccountForm from './components/AccountForm';

const Main = () =>{
    const [token, setToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const savedToken = localStorage.getItem('token')
        console.log('token exists')
        if (savedToken) {
            setToken(savedToken)
            setIsLoggedIn(true)
        }
    })
    
    return (
        <>
            <div>
                <div className='header'>
                    <nav>
                        <NavLink to='/' className="homeLink">Home</NavLink> 
                        <NavLink to='/Join' className="link">Join</NavLink>
                        <NavLink to='/Login' className="link">Login</NavLink>
                        <NavLink to='/Account' className="link">Account</NavLink> 
                        <NavLink to='/Activities' className="link">Activities</NavLink> 
                        <NavLink to='/Routines' className="link">Routines</NavLink> 
                        <NavLink to='/MyRoutines' className="link">My Routines</NavLink> 
                    </nav>
                </div>

                <Routes>
                    <Route path='/' exact element={
                        <Home/>
                    } />
                    <Route path='/Routines' exact element={
                        <Routines/>
                    } />
                    <Route path='/MyRoutines' exact element={
                        <MyRoutines/>
                    }/>
                    <Route path='/Activities' exact element={ 
                        <Activities/>
                    } />
                    <Route path='/Join' exact element={
                        <AccountForm action='register' setToken={setToken} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser}/>
                    } />
                    <Route path='/Login' exact element={
                        <AccountForm setToken={setToken} action="login" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} />  
                    } />
                </Routes>
            </div>
        </>
    )
}


ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.querySelector('#app')
)