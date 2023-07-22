import React from 'react'
import { useDispatch } from 'react-redux'
import EditTask from './EditTask'
import { handleDone } from '../redux/action'


export const TaskCard = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div>
        <h2>{el.action}</h2>
        <h3>{el.time}</h3>
        <button onClick={()=>dispatch(handleDone(el.id))} >{el.isDone?"Done":"NotDone"}</button>
        <EditTask el={el}/>
    </div>
  )
}
