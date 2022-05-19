
import React from 'react'

const Select = ({setFilter}) => {
  console.log(setFilter)
  return (
    <div className="dropdown" style={{display: 'flex'}}>
          <p>Sort By:</p>
          <select 
          style={{"width":"100px", height:"5 0px"}}
            onChange={(event) => {
              setFilter(event.target.value);
            }}
            
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