import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import './style.css'

import {
    Home,
    Routines,
    MyRoutines,
    Activities,
    UserDashboard,
    CreateRoutine
} from './components';
import AccountForm from './components/AccountForm';

const Main = () =>{
    const [token, setToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [routines, setRoutines] = useState([])
    const [activity, setActivity] = useState([])

    useEffect(() => {
        const savedToken = localStorage.getItem('token')

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
                        <NavLink to='/Account' className="link">Account</NavLink> 
                        <NavLink to='/Activities' className="link">Activities</NavLink> 
                        <NavLink to='/Routines' className="link">Routines</NavLink> 
                    </nav>
                </div>

                <Routes>
                    <Route path='/' exact element={
                        <Home/>
                    } />
                    <Route path='/Routines' exact element={
                        <Routines routines={routines} setRoutines={setRoutines}/>
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
                    <Route path='/Account' exact element={
                        <UserDashboard currentUser={currentUser} token={token} setToken={setToken} setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} routines={routines} setRoutines={setRoutines} activity={activity} setActivity={setActivity} />
                    } />
                    <Route path='/CreateRoutine' exact element={
                        <CreateRoutine token ={token} isLoggedIn={isLoggedIn}/>
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