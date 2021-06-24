import React from 'react'
import Question from './Question'
import CountDown from './CountDown'
import "./Test.css"
import {correct_answer} from "./qusetionData"
import { useSelector } from 'react-redux';
import { selectName } from './features/userSlice';
import Sidebar from './Sidebar';
import {useDispatch} from 'react-redux'
import {testOver} from "./features/userSlice"
import {increaseScore,decreaseScore, selectAnswers} from "./features/questionSlice"
function Test() {
    window.onbeforeunload = function() {
  return "Dude, are you sure you want to leave? Think of the kittens!";
}
    const answers=useSelector(selectAnswers)
    const name=useSelector(selectName)
    const id=0;
    const dispatch = useDispatch();
    const setTestEnd=()=>{
         dispatch(testOver({
             endTest:true
         }))
         const yourScore=()=>{
            for(let i=0;i<10;i++){
              if(correct_answer[i]===answers[i].answer){
                    console.log("correct")
                    dispatch(increaseScore())
              }
              else if(answers[i].answer!=="" && correct_answer[i]!==answers[i].answer ){
                  dispatch(decreaseScore())
                console.log("incorrect")
              }
            }
      }
      yourScore()
    }
    
    return (
        <div className="test">
            <div className="header">
                <h3>username:{name}</h3>
                    <CountDown/>
                <button  onClick={setTestEnd}>End Test</button>    
            </div>
            <div className="content">
                <div className="sidebar">
                    <Sidebar/>
                </div>
            <div className="questions">
                <Question id={id}/>
                
            </div>
            </div>
            <h3><span className="bgd_green">Q.</span>---Saved Answer can't be change(Youe score will not change) </h3>
            
           
        </div>
    )
}

export default Test
