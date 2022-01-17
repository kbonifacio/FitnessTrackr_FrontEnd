import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { fetchAllRoutines } from "../util";
import './Routines.css'

const Routines = ({routines, setRoutines}) => {
   
    useEffect ( async () =>{
        const result = await fetchAllRoutines()
        setRoutines(result)
    }, [])
        
    return(
        <>
            <div className="topContainer">
                <div>"Routines. Push today, make it a habit."</div>
            </div>
            <div className="parentRoutineScrollBox">
            <div className="routineScrollBox" >
            { routines.map((routine)=>{
                if (routine.isPublic===true){
                    return(
                        <>
                            <div className="routineContainer">
                                <div className="indivRoutineContainer">
                                    <div key={routine.id} className="routineContent">
                                        <div className="routineLBorder">
                                            <div><b>{routine.name.toUpperCase()}</b></div>
                                            <div><i>Creator: {routine.creatorName.toLowerCase()}</i></div>
                                            <div><i>Goal: </i>{routine.goal}</div>
                                            { routine.activities.map((activity) =>{
                                               return (
                                                    <>
                                                        <div className="activities">
                                                            <div><b>Activity Name:</b> {activity.name}</div>
                                                            <div className="detailsContainer">
                                                                <div className="duration">Duration: {activity.duration}</div>
                                                                <div className="count">Count: {activity.count}</div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    
                                                )
                                            })}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </>
                    )
                }
            })}
            </div>
            </div>
        </>
        
    )
}

export default Routines;