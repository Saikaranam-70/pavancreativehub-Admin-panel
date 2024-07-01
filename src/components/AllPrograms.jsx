import React, { useEffect, useState } from 'react'
import { API } from '../data/data'

const AllPrograms = () => {
  const [attendence, setAttendence] = useState([])

  const handleAttendence = async()=>{
    const hodId = localStorage.getItem('adminId')
    try {
      const responce = await fetch(`${API}/program/all-programs/${hodId}`)
      const data = await responce.json();
      setAttendence(data.program)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    handleAttendence();
  },[])

  const deleteAttendence = async(attendenceId)=>{
    try {
      const responce = await fetch(`${API}/program/delete-program/${attendenceId}`,{
        method:'DELETE'
      })
      if(responce.ok){
        setAttendence(attendence.filter(att => att._id !==attendenceId))
        confirm("are you sure, you want to delete?");
        alert("Event Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      alert("Failed to Delete Events")
    }
  }
  return (
    <div className='sai'>
      <h2 className='note'>Programs</h2>
      {
        !attendence ? (
          <p>Program not found</p>
        ):(

          
          <table className="eventTable">
        <thead>
          <th>Project Name</th>
          <th>Image</th>
          
          <th>Delete Program</th>
        </thead>
        <tbody>
          {
            attendence.map((item)=>{
              return(
                <>
                <tr key={item._id}>
            <td>{item.projectname}</td>
            <td>
              {item.image && 
                     <img style={{width: '100px', height:'50px'}} src={`${API}/program/uploads/${item.image}`} alt={item.projectname} />

              }</td>
            <td>
              
              <button className='table-Btn' onClick={()=>deleteAttendence(item._id)} >Delete</button>
            </td>
          </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
        )
      }
    </div>
  )
}

export default AllPrograms
