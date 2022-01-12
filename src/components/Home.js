import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css';

const Home = () => {
    return(
        <>
       <div className="topContainer"></div> 
       <div className="welcomeContainer">
            <div className="innerWelcomeContainer">
                <div className="welcomeText">
                    <h3><p className="L1"> Welcome to Push, </p></h3>
                    <p className="L2">A <b className="b1">community</b> focused on health and wellbeing.</p>
                    <p className="L3">Find routines and activities to <b className="b1">get started.</b></p>
                    <p className="L4">Post new routines and activities to help <b className="b1">guide others.</b></p>
                    <p className="L5">Get ready for change and progression as we <b className="b1">push together.</b></p>
                    <h3><p className="L6">Glad to have you here.</p></h3>
                </div>
            </div>
            <div className="buttonContainer">
                <div className="buttons">
                    <NavLink to='/Join' className="innerJoinButton"><div className="joinButton"><h1 className="joinText">Join</h1></div></NavLink>
                    <NavLink to='/Login' className="innerLoginButton"><div className="loginButton"><h1 className="loginText">Login</h1></div></NavLink>
                </div>
            </div>
       </div>
       </>
    )
}

export default Home;