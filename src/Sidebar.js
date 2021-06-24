import React from 'react'
import "./Sidebar.css"
import { setId } from './features/questionSlice';
import {useDispatch} from "react-redux"
function Sidebar() {
    const dispatch =useDispatch();
  const change1=()=>{
    dispatch(setId({
        id:1
    }))
}
const change2=()=>{
   
   
   
   
    dispatch(setId({
        id:2
    }))
}
const change3=()=>{
    dispatch(setId({
        id:3
    }))
}
const change4=()=>{
    dispatch(setId({
        id:4
    }))
}
const change5=()=>{
    dispatch(setId({
        id:5
    }))
}
const change6=()=>{
    dispatch(setId({
        id:6
    }))
}
const change7=()=>{
    dispatch(setId({
        id:7
    }))
}
const change8=()=>{
    dispatch(setId({
        id:8
    }))
}
const change9=()=>{
    dispatch(setId({
        id:9
    }))
}
const change10=()=>{
    dispatch(setId({
        id:10
    }))
}
    return (
        <div className="sideBar">
            <button id="1" className="" onClick={change1}>Q.1</button>
            <button id="2" className="" onClick={change2}>Q.2</button>
            <button id="3" className="" onClick={change3}>Q.3</button>
            <button id="4" className="" onClick={change4}>Q.4</button>
            <button id="5" className="" onClick={change5}>Q.5</button>
            <button id="6" className="" onClick={change6}>Q.6</button>
            <button id="7" className="" onClick={change7}>Q.7</button>
            <button id="8" className="" onClick={change8}>Q.8</button>
            <button id="9" className="" onClick={change9}>Q.9</button>
            <button id="10" className="" onClick={change10}>Q.10</button>
        </div>
    )
}

export default Sidebar
