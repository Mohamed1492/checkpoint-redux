import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFunction } from '../redux/action';

const AddNewTask = () => {
    const [action, setAction] = useState("Add task here");
    const [time, setTime] = useState("7:30")
    const dispatch= useDispatch();

    const handleSubmit = (e)=> {
        e.preventDefault();
        const task={
            id: Math.random(),
            action,
            time,
            isDone: false,
        }
        dispatch(addFunction(task))

        setAction("");
        setTime("");

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={action} onChange={e=>setAction(e.target.value) } />
            <input type="text" value={time} onChange={e=>setTime(e.target.value) } />
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default AddNewTask