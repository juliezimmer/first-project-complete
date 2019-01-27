import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state =  {
      persons: [
         { name: "Julie", age: 35 },
         { name: "Gina", age: 18 },
         { name: "Zach" , age: 15 }
      ]
   } 
   // handlers defined here
   // if a function is assigned as the value of switchNameHandler, it becomes a method of the class
   switchNameHandler = () => {
      console.log("Switch Name button waas clicked");
      // reset the state
      // this.setState(() => {
      //  });
   }
   render() {
      return ( // name and age become the props that is passed to the Person component in Person.js
         <div className="App">
         <h1>Hi, I'm a react App!</h1>
         <p>This is actually working!</p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         
         <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
         
         <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>
               My hobby is writing Poetry.
            </Person>
         
            <Person 
               name={this.state.persons[2].name} 
               age={this.state.persons[2].age} />  
         </div>
      );
   }
}

export default App;
