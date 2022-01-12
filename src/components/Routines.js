import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import './Routines.css'

const Routines = () => {
    const [routines, setRoutines] = useState([])
    const fetchAllRoutines = async () => {
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
                headers: {
                  'Content-Type': 'application/json',
                }
            })
            const result = await response.json();
            setRoutines(result)
            console.log('fetchAllRoutines',result)
        } catch (error) {
            throw error
        }
    } 
    useEffect ( fetchAllRoutines, [])
        
    return(
        <>
            <div className="topContainer">
                <div>"Routines. Push today, make it a habit."</div>
            </div>
            
            { routines.map((routine)=>{
                // Switch all the code for routine.isPublic ===true to the else portion of the statement once the 
                // user login stipulation has been coded. 
                // NOTE THAT EVERYTHING IN THE ARRAY RIGHT NOW IS SET TO TRUE, THERE ARE NO FALSE ENTRIES
                if (routine.isPublic===true){
                    return(
                        <>
                            <div className="routineContainer">
                                <div key={routine.id} className="routineContent">
                                    <div className="routineLBorder">
                                        <div><b>{routine.name.toUpperCase()}</b></div>
                                        <div><i>Creator: {routine.creatorName.toLowerCase()}</i></div>
                                        <div>{routine.goal}</div>
                                    </div>
                                </div>
                            </div>
                          
                        </>
                    )
                }
            })}
        </>
        
    )
}

export default Routines;