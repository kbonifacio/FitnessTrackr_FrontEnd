import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { CreateRoutine, CreateActivity, UserActivities, UserRoutines } from ".";
import './UserDashboard.css';

const UserDashboard = ({currentUser, setCurrentUser, token, setToken, isLoggedIn, setIsLoggedIn, routines, setRoutine, activity, setActivity}) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isLoggedIn) navigate('/login')
      }, [])
    
    const logout = () => {
        setToken('')
        setIsLoggedIn(false)
        setCurrentUser(false)
        navigate('/login')
    }
    
    return (
        <>
            <div className="dashHeaderContainer">
                <div className="dashL1">{`Welcome back ${currentUser}`}</div>
            </div>
            <div className="contentContainer">
                <div className="routinesContainer">
                    <div className="routineHead">
                        <div className="routineHeadContent">My Routines</div>
                    </div>
                    <CreateRoutine token={token} />
                    {/* <UserRoutines isLoggedIn={isLoggedIn} token={token} currentUser={currentUser} routines={routines} setRoutine={setRoutine}/> */}
                </div>
                <div className="activitiesContainer">
                    <div className="activityHead">
                        <div>My Activities</div>
                    </div>
                    <div>
                        <CreateActivity activity={activity} setActivity={setActivity} token={token} />
                    </div>
                    {/* <UserActivities /> */}
                </div>
            </div>
            <footer>
                <div>Be mindful of breaks </div>
                <button className="logout" onClick={logout}>Logout Here</button>
            </footer>
        </>
    )
}

export default UserDashboard;