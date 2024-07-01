import React from 'react'

const Sidebar = ({showprogramHandler, showAllprogramHandler}) => {
  return (
      <div className='sidebar'>
          <div  className="AddHod" >
            <h4 onClick={showprogramHandler}>Add Program</h4>
          </div>
          <div   className="AddEvents">
            <h4 onClick={showAllprogramHandler}>All Programs</h4>
          </div>
        </div>
  )
}

export default Sidebar
