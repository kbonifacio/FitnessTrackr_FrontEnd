
const CreateActivity = () => {
    // const blankActivity = {name:'', description:''}
    // const [activity, setActivity] = useState(blankActivity)

    // const handleSubmit = async (event, token) => {
    //     event.preventDefault()
    //     const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token} `
    //           },
    //         body: JSON.stringify({
    //         activity: activity
    
    //         })
    //     })
    //     const result = await response.json()
    //     return result;

    // }

    return <div>"Hello World</div>
    (
        <>
        
        {/* <div className="newActivityForm">
        <form onSubmit={handleSubmit}>
            <div className="AHeader">
                Create A New Routine
            </div>
            <div className="AL1">
                Activity Name: <input value={activity.name} placeholder="Type name" onChange={(event)=>{
                    setActivity({...activity, name: event.target.value})
                }}></input>
            </div>
            <div className="AL2">
                Goal: <input value={activity.goal} placeholder='Goal of the routine' onChange={(event)=>{
                    setActivity({...activity, goal: event.target.value})
                }}></input>
            </div>
            <div className="AL3">
                <input type='checkbox' value='yes' onChange={(event)=>{
                    setActivity({...activity, isPublic: event.target.value})
                }}></input> Make this activity available to non-members?
            </div>

            <button type='submit'>Create Activity</button>
        </form>
        </div> */}
        </>
    )
}

export default CreateActivity;
