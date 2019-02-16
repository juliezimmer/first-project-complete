// this file was set up to use React Hooks.
// It is the class-based component, App, that has been converted to a functional component to make use of useState() hooks 
// React 16.8.0 must be installed to use Hooks

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// This is a functional app class
const AppHook = (props) => {
   const [ personsState, setPersonsState ] = useState({ 
      // 'personsState' provides access to the state object.
      //  'this.state' should be changed to 'personsState' when useState() hook is used. 
      persons: [
         { name: "Julie", age: 35 },
         { name: "Gina", age: 18 },
         { name: "Zach" , age: 15 }
      ]
   });
   
   const [ otherState, setOtherState ] = useState({otherState: 'some other value'});

   console.log(personsState);

   const switchNameHandler = () => {
      setPersonsState({ 
         persons: [
            { name: "Julie", age: 35 },
            { name: "Gina", age: 18 },
            { name: "Zachary" , age: 15 }
         ]
      }); 
   };

   return (
      <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This really works!</p>
         <button onClick={switchNameHandler}>Switch Name</button>
         <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age} />
         <Person 
            name={personsState.persons[1].name}
            age={personsState.persons[1].age} >
            My Hobby: Scrapbooking
         </Person> 
         <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age} />
      </div>  
   )
}

export default AppHook;











   
