import React, { useState } from 'react'
import { API } from '../../data/data';



const AddProgram = () => {
  const [projectname, setProjectname] = useState("");
  const [description, setdescription] = useState("");
  const [file, setFile] = useState(null);

  const handleAddAttendence = async(e)=>{
    e.preventDefault();

    try {
      const hodToken = localStorage.getItem('loginToken')
      if(!hodToken){
        alert("You Are Not Logged In...!!")
      }
      const formData = new FormData();
      formData.append('projectname', projectname)
      formData.append('description', description)
      formData.append('image', file)

      const responce = await fetch(`${API}/program/add-program`, {
        method:'POST',
        headers:{
          'token': `${hodToken}`
        },
        body: formData
      })
      const data =  await responce.json();
      if(responce.ok){
        alert("Project Added Successfully...!!!")
        setProjectname("");
        setdescription("");
        setFile(null);
      }
    } catch (error) {
      alert("Adding Project is failed")
    }
  }
  return (
    <div className='registerSection Notification-Section'>
      <form className="register-form" onSubmit={handleAddAttendence}>
        <h3>Add Project</h3>
        <label>Project name: </label>
        <input type="text" name="projectname" value={projectname} id="" placeholder='Enter Your Project Name..!!!' onChange={(e)=>setProjectname(e.target.value)} />
        <label>Description: </label>
        <input type="text" name="description" value={description} id="" placeholder='Enter Your description for this project..!!!' onChange={(e)=>setdescription(e.target.value)}/>
        <label >Image</label>
        <input type="file" name="file" id="" onChange={(e)=>setFile(e.target.files[0])} />
        <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProgram;

