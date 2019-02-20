import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context'; 

class App extends Component {
   constructor(props) {
      super(props);
      console.log("[App.js] Inside constructor");
   }
   // code initialized
   state =  {
      persons: [
         { id: '1', name: "Julie", age: 35 },
         { id: '2', name: "Gina", age: 18 },
         { id: '3', name: "Zach" , age: 15 }
      ],
      otherState: 'some other value',
      showPersons: false,   // default is nothing showing
      showCockpit: true,
      changeCounter: 0,
      authenticated: false  
   } 

   static getDerivedStateFromProps(state, props) {
      console.log("[App.js] inside getDerivedStateFromProps", props);
      return state;
   }
   
   componentDidMount() {
      console.log("[App.js] Inside componentDidMount");
      }
   
   shouldComponentUpdate(nextProps, nextState) { // updating
      console.log("[UPDATE App.js] Inside shouldComponentUpdate");   
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
      
      // Spread operator is used to create a new object to change. 
      // Spread Operatpor distributes all the properties in this.state.persons on the new object being created.
      // This is a copy of the state
      const person = {
         ...this.state.persons[personIndex]
      };
      // To change the name, use:
      person.name = event.target.value;

      // The state needs to be updated at the array index/position that was changed, by using the spread operator again:
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      // this guarantees an accurate previous state and a proper update with the latest information/data for the state object.
      this.setState((prevState, props) => {
         return  {
            persons: persons,
            changeCounter: prevState.changeCounter + 1
         };
      });
   };

   deletePersonHandler = personIndex => {
     // ES6 spread operator option: 
     const persons = [...this.state.persons];
      // splice the new copied array starting at personIndex and splicing/removing one element
      persons.splice(personIndex, 1); 
      // update the state object 
      this.setState({ persons: persons })
   }

   // this syntax creates a method; this syntax also ensures that the 'this' keyword inside this method always refers to this class. 
   togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
   };

   loginHandler = () => {
      this.setState({ authenticated: true });
   };
    
   render() {
      console.log("[App.js] Inside render method");
      let persons = null; 
      
      if (this.state.showPersons) { // if this.state.showPersons is true, set value of persons to this: 
         persons = (
            <Persons 
               persons={this.state.persons}
               clicked={this.deletePersonHandler}
               changed={this.nameChangedHandler} 
               isAuthenticated={this.state.authenticated}
            />
         );
      }
      return ( 
         <Aux> 
            <button 
               onClick={() => {this.setState({showCockpit: false});
               }} >Remove Cockpit
            </button>
            <AuthContext.Provider value={{
               authenticated: this.state.authenticated, 
               login: this.loginHandler
            }} >
               {this.state.showCockpit ? (
                  <Cockpit 
                     appTitle={this.props.title} // accesses the app.title attribute used in the <App /> in index.js.  This is then passed to the Cockpit component
                     showPersons={this.state.showPersons} // boolean 
                     personsLength={this.state.persons.length} 
                     clicked={this.togglePersonsHandler} 
                  />
               ) : null}
               {persons}
            </AuthContext.Provider>
         </Aux>   
      );
   }
}
// the regular function withClass() is called on the export default, App.
export default withClass(App, classes.App);
 


   