

 export const  reducerNotes = (state = [], action) =>{


  if(action.type === 'NEW_NOTE') {

    //  return [...state, action.data]

     return state.concat(action.data)

    //  return state

    

  }

  return state 
}



