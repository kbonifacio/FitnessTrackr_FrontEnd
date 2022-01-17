import react, { useEffect, useState } from "react";
import { fetchAllActivities } from '../util';
import './Activities.css';

const Activities = () =>{
    const [ activities, setActivities ] = useState([])

    useEffect( async () =>{
      const result = await fetchAllActivities()
      setActivities(result)
    }, [])

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
                <div className="parentActivityContainer">
                    <div className='activityContainer'>
                    <div key={activity.id} className='activityContent'>
                        <div className="activityContentLBorder">
                            <div><b>{activity.name.toUpperCase()}</b></div>
                            <div>{activity.description}</div>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            )
        }) }
        </div>
        </>
        )
}

export default Activities;