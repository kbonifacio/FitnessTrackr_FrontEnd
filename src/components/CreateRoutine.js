import React, { useState } from "react";
// import { CreateNewRoutine } from "../util";
import './CreateRoutine.css'

const CreateRoutine = ({token}) => {
    const blankRoutine = {name:'', goal:''}
    const [routine, setRoutine] = useState(blankRoutine)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token} `
                },
              body: JSON.stringify({
              name: routine.name,
              goal: routine.goal,
              isPublic: true
              
              })
            })
              const result = await response.json()
              setRoutine(result)
              return result;

          } catch (error) {
            throw error;
          }
    }


    return(
        <>
        <div className="newRoutineForm">
        <form onSubmit={handleSubmit}>
            <div className="RHeader">
                Create A New Routine
            </div>
            <div className="RL1">
                Routine Name: <input value={routine.name} placeholder="Type name" onChange={(event)=>{
                    setRoutine({...routine, name: event.target.value})
                }}></input>
            </div>
            <div className="RL2">
                Goal: <input value={routine.goal} placeholder='Goal of the routine' onChange={(event)=>{
                    setRoutine({...routine, goal: event.target.value})
                }}></input>
            </div>
            <button type='submit'>Create Routine</button>
        </form>
        </div>
        
        </>
    )
}

export default CreateRoutine;