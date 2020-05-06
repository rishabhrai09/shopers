export const ADD_GROCERY="ADD_GROCERY";
export const REMOVE_GROCERY="REMOVE_GROCERY"

export const addgroceryById=id=>{
    const action={
        type:ADD_GROCERY,
        id
    }
    return action
}


export const removeGrocery=id=>{
    const action={
 type:REMOVE_GROCERY,
 id
    }
    return action
}