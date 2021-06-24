
import React from 'react';
import { selectId ,setAnswer} from './features/questionSlice';
import {questions} from './qusetionData'
import {useSelector} from "react-redux"
import { setId } from './features/questionSlice';
import {useDispatch} from "react-redux"
// import {correct_answer} from "./qusetionData"
import "./Question.css"
function Question() {
    const id=useSelector(selectId)
    const dispatch =useDispatch();
    const question=questions
    // const array=["","","","","","","","","",""]
    const prevent=(e)=>{
        e.preventDefault()
    }
    const setAnswers=(e)=>{
        
        var elements = document.getElementsByName('answer');
        elements.forEach(e => {
           
            if (e.checked) {
                dispatch(setAnswer({
                    answer:e.value
                }))
                console.log(e.value)
                // if(array[id-1]!=="yes") {
                //     array[id-1]="yes"
                //     if(e.value===correct_answer[id-1]){
                //         dispatch(increaseScore())
                //     }
                //   }
            }
        });
    
   

        const btn=document.getElementById(id)
        const name = "btn-2";
      const arr = btn.className.split(" ");
      if (arr.indexOf(name) === -1) {
      btn.className += " " + name;
     }

 
 
        if(id!==10){  dispatch(setId({
            id:id+1
        }))}
}
const nextQuestion=()=>{
    if(id!==10){  dispatch(setId({
        id:id+1
    }))}
}

    return (
        <div className="question">
         <h2>Q.{id} {question[id-1].question}</h2> 
         <form onSubmit={prevent}>
             {question[id-1].options.map((value, index) => {
               const k=`${id}${index}`
                    return <div><input  key={k} value={value} name="answer" type="radio"/>
                           <label className="lable">{value}</label><br></br>
                           
                       </div>
              })}
      <button className="btn-1"
             onClick={setAnswers}>Save and Next</button>
      </form>
      <button onClick={nextQuestion} className="btn-4">Don't save and next</button>
       
        </div>
    )
}

export default Question
