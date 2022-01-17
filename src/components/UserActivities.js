import React from "react";

const UserActivities = ({token, currentUser, routines}) => {

    
    // useEffect( async () =>{
    //     const result = await fetchUserActivities(token, currentUser)
    //     console.log('USER ROUTINES DATA', result)
    // })
    return (  
        <>
            <div>"USER ACTIVITIES"</div>
            {/* { activities ? activities.map((activity)=> {
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
        }) : null } */}
        </>
    )
}

export default UserActivities;