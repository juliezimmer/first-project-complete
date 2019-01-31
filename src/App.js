import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state =  {
      persons: [
         { id: '1', name: "Julie", age: 35 },
         { id: '2', name: "Gina", age: 18 },
         { id: '3', name: "Zach" , age: 15 }
      ],
      showPersons: false   // default is nothing showing.
   } 
  
   nameChangedHandler = (event, id ) => {
      const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
      });  
      // To avoid mutating the state directly, create a new object and use the spread operator.  The spread operator will distribute all of the properties of this.state.persons into the person object being created. 
      // This is a copy of the state
      const person = {
         ...this.state.persons[personIndex]
      };
      // To change the name:
      person.name = event.target.value;

      // The state needs to be updated at the array index/position that was changed, by using the spread operator again:
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons }); 
   }

   deletePersonHandler = (personIndex) => {
      // make a copy of the persons array using the slice method without any arguments passed in.
     // const persons = this.state.persons.slice();

     // ES6 spread operator option: 
     const persons = [...this.state.persons];
      // splice the new copied array starting at personIndex and splicing/removing one element
      persons.splice(personIndex, 1); 
      // update the state object 
      this.setState({ persons: persons })
   }

   // this syntax creates a method; this syntax also ensures that the 'this' keyword inside this method always returns to this class. 
   togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
   };
   
   render() {
      // inline styling for 'Switch Name' button
      const style = {
         backgroundColor: 'white',
         font: 'inherit',
         border: '1px solid blue',
         padding: '8px',
         cursor: 'pointer' 
      };
      // by default, the variable is null 
      let persons = null;
      // if this.state.showPersons is true
      if (this.state.showPersons) {
         // if true, set the value of persons to this:
         persons = (
            <div>
               {this.state.persons.map((person, index) => {
                  return <Person 
                     click={() => this.deletePersonHandler(index)}
                     name={person.name} 
                     age={person.age}
                     key={person.id} 
                     changed={(event) => this.nameChangedHandler(event,person.id)} 
                     // In Person.js, onChange={props.changed} as an attribute of the <input /> element. 
                     // Here, changed is an anonymous function and the first function to be executed. 
                  />
               })}
            </div> 
         );
      }

      return ( // name and age become the props that are passed to the Person component in Person.js
         <div className="App">
            <h1>Hi, I'm a react App!</h1>
            <p>This is actually working!</p> 
            <button 
               style={style}
               onClick={this.togglePersonsHandler}>
               Toggle Persons 
            </button>
            {persons}
         </div>
      );
   }
}

export default App;
