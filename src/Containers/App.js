import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
   constructor(props) {
      super(props);
      console.log("[App.js] Inside constructor", props);
   }
   
   // code initialized
   state =  {
      persons: [
         { id: '1', name: "Julie", age: 35 },
         { id: '2', name: "Gina", age: 18 },
         { id: '3', name: "Zach" , age: 15 }
      ],
      showPersons: false   // default is nothing showing.
   } 

   static getDerivedStateFromProps(state, props) {
      console.log("[App.js] inside getDerivedStateFromProps", props);
      return state;
   }
   
   componentDidMount() {
      console.log("[App.js] Inside componentDidMount");
      }
   
   shouldComponentUpdate(nextProps, nextState) { // updating
      console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);   
      // returns true or false
      // if true, updating continues
      // if false, updating is canceled
      return true;
   }

   componentDidUpdate () {
      console.log("[UPDATE App.js] Inside componenDidUpdate");
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
      // this is what the user entered in the input element.
      person.name = event.target.value;

      // The state needs to be updated at the array index/position that was changed, by using the spread operator again:
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({ persons: persons }); 
   }

   deletePersonHandler = (personIndex) => {
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
      console.log("[App.js] Inside render method");
      let persons = null; 
      
      if (this.state.showPersons) { // if this.state.showPersons is true, set value of persons to this: 
         persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
      }

      return ( 
         <Aux> 
            <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
               <Cockpit 
                  appTitle={this.props.title} // accesses the app.title attribute used in the <App /> in index.js.  This is then passed to the Cockpit component
                  showPersons={this.state.showPersons} // boolean 
                  persons={this.state.persons}  
                  clicked={this.togglePersonsHandler} />
            {persons}
         </Aux>   
      );
   }
}

export default withClass(App, classes.App);
 

// componentWillMount() {
   //    console.log("[App.js] Inside componentWillMount()");
   // }
   // 

   
   // componentWillUpdate(nextProps, nextState) {
   //    console.log("[UPDATE App.js] Inside componentWillUpdate", nextProps, nextState);
   // }
   