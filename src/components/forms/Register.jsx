import React, { useState } from 'react';
import { API } from '../../data/data';


const Register = ({showLoginHandler}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleLogin = async(e)=>{
        e.preventDefault();

        try {
            const responce = await fetch(`${API}/admin/register`,{
                method : 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username, email, password,name})
            })
            const data = responce.json();
            if(responce.ok){
                setUsername("");
                setEmail("");
                setPassword("");
                setName("");
                alert(" Principal Register successfully..........!!!!!")
                showLoginHandler();
                console.log(data)
                
            }else {
                alert("Email Already Taken Or Admin Of The Pavan creative Hub is Already Exists");
                alert("Please Login Mr.Admin...")
            }
        } catch (error) {
            console.log(error);
            alert("Registration failed..........!!!")
        }
    }

  return (
    <div className='registerSection'>
        <form className="register-form" onSubmit={handleLogin}>
            <h3>Admin Register</h3>
            <label>User Name :</label>
            <input type="text" value={username} name='username' onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your User Name...!!'/>
            <label >Email :</label>
            <input type="email" name='email' id="" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email...!!'/>
            <label >Password :</label>
            <input type="password" name='password' id="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password...!!'/>
            <label >Name :</label>
            <input type="text" name='name' id="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name...!!'/>
            <div className="submitBtn">
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register
