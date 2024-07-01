import React from 'react'



const Navbar = ({showregisterhandler, showLoginHandler, logOutHandler, showLogOut}) => {
    const name = localStorage.getItem('adminName')
    return (
        <div className='navbar navbar-sidebar'>
          
          <div className="Principle">
            <h3>Admin Dashboard</h3>
          </div>
          <div className="Sankethika">
            <h3>Admin Name : <span style={{color: 'Orange', textTransform: 'uppercase'}}>{name}</span></h3>
          </div>
          <div className="login-register">

          {!showLogOut ? <><span onClick={showLoginHandler}>login /</span>
        <span onClick={showregisterhandler}>register</span>
        </> : <span onClick={logOutHandler}>Logout</span> }
          </div>

        </div>
      )
}

export default Navbar
