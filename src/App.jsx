
import './App.css'
import AddNewTask from './components/AddNewTask'
import FilterButton from './components/FilterButton'
import { TaskList } from './components/TaskList'

function App() {

  return (
    <>
     <AddNewTask />
     <TaskList/>
     <FilterButton/>
    </>
  )
}

export default App
