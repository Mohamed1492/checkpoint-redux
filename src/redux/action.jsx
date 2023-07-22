import { ADD, DONETASK, EDIT, FILTER } from "./actionTypes"

export const addFunction =(newTask) => {
    return{
    type: ADD,
    payload: newTask,
    }

}
export const handleEdit =(editedTask) => {
    return{
    type: EDIT,
    payload: editedTask,
    }
}

export const handleDone =(ID) => {
    return{
    type: DONETASK,
    payload: ID,
    }
}

export const handleFilter =(filter) => {
    return{
    type: FILTER,
    payload: filter,
    }
}