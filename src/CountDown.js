import React from 'react'
import Countdown from 'react-countdown';
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import {correct_answer} from "./qusetionData"
import "./CountDown.css"
import {increaseScore,decreaseScore,halfScore, selectAnswers} from "./features/questionSlice"
import {testOver,selectTime} from "./features/userSlice"
function CountDown() {
    const time =useSelector(selectTime)
    const answers=useSelector(selectAnswers)
   const dispatch = useDispatch();
    const renderer = ({ hours, minutes, seconds,completed}) => {
        if (completed) {
           dispatch(testOver({
            endTest:true,
           }))
          //  console.log("called")
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
          } 

          return <span>{hours}:{minutes}:{seconds}</span>;
      };
    return (
        <div className="countDown">
            <Countdown date={time + 10000} renderer={renderer}/>    
        </div>
    )
}

export default CountDown
