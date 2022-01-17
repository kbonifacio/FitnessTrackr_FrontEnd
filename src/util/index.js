

export const fetchAllActivities = async () =>{
  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const result = await response.json()
    console.log(result)
    return result;
  } catch (error) {
    throw error
  }
}

export const fetchAllRoutines = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            headers: {
              'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        return result
    } catch (error) {
        throw error
    }
} 

export const fetchUserData = async (token) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token} `
            }
          })
        const result = response.json()
        return result;
    } catch (error) {
        
    }
}

export const fetchUserRoutines = async (token, currentUser) => {
    try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${currentUser}/routines`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token} `
            }
        })
        const result = response.json()
        return result
    } catch (error) {
        
    }
}

export const CreateNewRoutine = async (token) => {
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
    
  }

}
  


