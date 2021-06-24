import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectName,selectEmail,timer, selectTime } from './features/userSlice'
import "./details.css"
import { user } from './UserDetails'
import {useDispatch} from "react-redux"


function Instructions() {
    
    const name=useSelector(selectName)
    const email=useSelector(selectEmail)
    const dispatch = useDispatch();
    const time=useSelector(selectTime)
    const setTime=(e)=>{
        if(time==null){
        dispatch(timer({
            time:Date.now()
        }))}
    }
    return (
        <div className="container">
            <h1>Hello {name} check your login details</h1>
            <hr/>
        <div className="details">
            <h3>Full Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>College: {user.college}</h3>
            <hr/>
            <h3 className="red">IMPORTANT---Saved Answer can't be change(Youe score will not change)</h3>
            <h2>Correct answer:+2</h2>
            <h2>No negative</h2>
            <Link to="/test">
        <button onClick={setTime} className="btn">Start Test ➨ </button> 
            </Link>
        </div>
        </div>
    )
}

export default Instructions
