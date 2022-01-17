import React, { useEffect } from "react";
import { Routines } from ".";
import { fetchUserData, fetchUserRoutines } from "../util";

const UserRoutines = ({token, currentUser, routines, setRoutine}) => {
    
        useEffect( async () =>{
            const result = await fetchUserRoutines(token, currentUser)
            // console.log('USER ROUTINES DATA', result)
            // setRoutine(result)
        })
        return (  
            <>
                <div>"USER ROUTINES"</div>
                {   routines ?
                    routines.map((routine)=> {
                        <div className="routineContainer">
                                <div className="indivRoutineContainer">
                                    <div key={routine.id} className="routineContent">
                                        <div className="routineLBorder">
                                            <div><b>{routine.name.toUpperCase()}</b></div>
                                            <div><i>Creator: {routine.creatorName.toLowerCase()}</i></div>
                                            <div>{routine.goal}</div>
                                            <div>Routine Activities</div>
                                            { routine.activities.map((activity) =>{
                                               return activity.name
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div> 

                    }) : null
                }
            </>
        )
    }

export default UserRoutines;