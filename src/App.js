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
   // event handler for Switch Name button onClick event
   switchNameHandler = (newName) => {
      // DO NOT DO THIS: this.state.persons[0].name = "Julie Z."
      // MUST use this.setState
      this.setState({
         persons: [
            { name: newName, age: 35 },
            { name: "Zach", age: 16 },
            { name: "Gina" , age: 18 }
         ]
      });
   }
   // this handler is passed to one of the Person components in the render method to be able to access it there, in the Person component.
   nameChangedHandler = (event) => {
      console.log(event.target.value);
      this.setState({
         persons: [
            { name: "Julie", age: 35 },
            { name: event.target.value, age: 16 },
            { name: "Gina" , age: 18 }
         ]
      });
   }
   
   render() {
      // inline styling for 'Switch Name' button
      const style = {
         backgroundColor: 'white',
         font: 'inherit',
         border: '1px solid blue',
         padding: '8px',
         cursor: 'pointer' 
      };
      return ( // name and age become the props that are passed to the Person component in Person.js
         <div className="App">
         <h1>Hi, I'm a react App!</h1>
         <p>This is actually working!</p> 
         <button 
            style={style}
            onClick={() => this.switchNameHandler("Julie!!!")}>Switch Name</button>
         
         <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
         
         <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,"Julie!")}
            changed={this.nameChangedHandler}   > 
            My hobby is writing poetry.
            </Person>
         
         <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />  
         </div>
      );
   }
}

export default App;
