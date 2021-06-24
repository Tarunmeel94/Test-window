import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {submit} from "./features/userSlice"
import "./LogIn.css"
import { user } from './UserDetails';
function LogIn() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        if(name=== ""){
           alert("Please enter your name");
        }
      else  if(email=== ""){
            alert("Please enter your email");
         }
      else if(email!==""){
            if(email===user.email){
                if(password===user.password){ e.preventDefault();
                    dispatch(submit({
                        name:name,
                        email:email,
                        password:password,
                    }))
                    }
                  else{
                      alert("Incorrect password")
                  }  
                }
                else{
                    alert("Please enter a valid email")
                }
            }
         }
    

    return (
        <div className="head">
            <div className="heading">
                <h2>Please enter your details before starting the test</h2>
                    <hr/>   
            </div>
            <div className="formDetails">
                <form  className="Details" onSubmit={(e) =>handleSubmit(e)}>
                    <div className="list">
                        <h3>Full Name</h3>
                        <input value={name} type="name" onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className="list">
                        <h3>Email</h3>
                        <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="list">
                        <h3>password</h3>
                        <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn">Submit and proceed 🡆</button>
                </form>
            </div>
            
        </div>
    )
}

export default LogIn
