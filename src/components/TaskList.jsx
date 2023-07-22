import React from 'react'
import { TaskCard } from './TaskCard'
import { useSelector } from 'react-redux'

export const TaskList = () => {
    const {todos}=useSelector(state=>state)
  return (
    <div>
        {React.Children.toArray(todos.map(el=><TaskCard el={el}/>))}
    </div>
  )
}
