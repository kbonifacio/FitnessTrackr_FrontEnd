import React, {useState} from "react";
import './CreateActivities.css'

const CreateActivity = ({token}) =>{
    const blankActivity = {name: '', description: ''}
    const [activities, setActivities] = useState(blankActivity)

        const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token} `
                  },
                body: JSON.stringify({
                    name: activities.name,
                    description: activities.description
        
                })
            })
            if (response.ok){
                const result = await response.json()
                setActivity(result)
            } else {
                alert("This activity already exists")
            }
            return result
        } catch (error) {

        }
    }
    return (
        <>
            <div className="newActivityForm">
                <form onSubmit={handleSubmit}>
                    <div className="AHeader">
                        Create A New Activity
                    </div>
                    <div className="AL1">
                        Activity Name: <input value={activities.name} placeholder="Type name" onChange={(event)=>{
                            setActivities({...activities, name: event.target.value})
                        }}></input>
                    </div>
                    <div className="AL2">
                        Description: <input value={activities.description} placeholder="Activity description" onChange={(event)=>{
                            setActivities({...activities, description: event.target.value})
                        }}></input>
                    </div>
                    <button type="submit">Create Activity</button>
                </form>
            </div>
        </>
    )
}

export default CreateActivity;