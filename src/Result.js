import React from 'react'
import { useSelector} from 'react-redux'

import { selectYourScore} from "./features/questionSlice"
import "./Result.css"
function Result() {

   const score=useSelector(selectYourScore)
    return (
        <div className="result">
            <h1>Thank You !</h1>
            <h2>Test Ended</h2>
            <h2>Your Score:{score}</h2>
          
           
        </div>
    )
}

export default Result
