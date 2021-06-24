import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './Details';
import { useSelector } from 'react-redux';
import { selectName,  selectEndTest } from './features/userSlice';
import LogIn from './LogIn';
import Test from './Test'
import Result from './Result'

function App() {
  const endTest=useSelector(selectEndTest)
  const name=useSelector(selectName)
 
  return (
    <Router>
    <div className="App"> 
    <Switch>
       <Route exact path="/">
          {(name!=="" ? ( <Details  />):(<LogIn/>))}
       </Route>
       <Route exact path="/test">
         {(endTest===false ?(<Test />):<Result/>)}
       </Route>
	  </Switch>
    
    </div>
    </Router>
  );
}

export default App;
