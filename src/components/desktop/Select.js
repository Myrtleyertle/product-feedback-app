
import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/data/dataContext'

const Select = () => {
  const dataContext = useContext(DataContext)
  const {  setFilter, Filter } = dataContext
  return (
    <div className="dropdown" style={{display: 'flex'}}>
          <p>Sort By:</p>
          <select 
          style={{"width":"100px", height:"5 0px"}}
            onChange={(event) => setFilter(event)}
            
          >
            <option value="">All</option>
            <option value="upvotes">Most Upvotes</option>
            <option value="feature">feature</option>
            <option value="bug">bug</option>
            <option value="enhancement">enhancement</option>
          </select>
        </div>
  )
}

export default Select