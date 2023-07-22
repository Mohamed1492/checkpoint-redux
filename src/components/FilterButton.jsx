import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleFilter } from '../redux/action';

const FilterButton = () => {
    const [filter, setFilter] = useState('All');
    const dispatch=useDispatch();
    dispatch(handleFilter(filter))
  return (
    <div>
        {/* droplist to filter according gender */}
      <select name="Choose task" className='filterInput' value={filter} onChange={(e)=> setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="NotDone">NotDone</option>
      </select>
    </div>
  )
}

export default FilterButton