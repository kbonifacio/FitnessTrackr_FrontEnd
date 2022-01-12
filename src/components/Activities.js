import react, { useEffect, useState } from "react";
// import { fetchAllActivities } from '../util';
import './Activities.css';

const Activities = () =>{
    const [ activities, setActivities ] = useState([])

    const fetchAllActivities = async () =>{
        try {
          const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            headers: {
              'Content-Type': 'application/json',
            }
          })
          const result = await response.json()
          setActivities(result)
        //   console.log(result)
        } catch (error) {
          throw error
        }
      }

    useEffect( fetchAllActivities, [])

    return(
        <>
        <div>
            <div className="topContainer">
                <div className="topContainerContent">
                    "Activities. Create your own path."
                </div>
            </div>    
        { activities.map((activity)=> {
            return (
                <>
                <div className='activityContainer'>
                  <div key={activity.id} className='activityContent'>
                    <div className="activityContentLBorder">
                        <div><b>{activity.name.toUpperCase()}</b></div>
                        <div>{activity.description}</div>
                    </div>
                  </div>
                </div>
                </>
            )
        })}
        </div>
        </>
        )
}

export default Activities;