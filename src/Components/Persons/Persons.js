import React, { PureComponent }  from 'react'; 
import Person from './Person/Person';

class Persons extends PureComponent {
   constructor(props) { // creation related
      super(props);
      console.log("[Persons.js] Inside constructor", props);
   }
   componentWillMount() { // creation related
      console.log("[Persons.js] inside componentWillMount()");
   }
   componentDidMount() { // creation related
      console.log("[Persons.js] Inside componentDidMount");
   }

   componentWillReceiveProps (nextProps) { // Updating
      console.log("[UPDATE Persons.js] Inside componentWillReceiveProps", nextProps);
   }
   // shouldComponentUpdate (nextProps, nextState) { // updating
   //    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate"); 
   //    // returns a boolean true or false and stops or allows the updating process to continue.
   //    return nextProps.persons !== this.props.persons;
   // }
   componentWillUpdate (nextProps, nextState) {
      console.log("[UPDATE Persons.js] Inside componentWillUpdate", nextProps, nextState);
   }
   
   componentDidUpdate(){
      console.log("[UPDATE Persons.js] Inside componentDidlUpdate");
   }
   render () {
      console.log("[Persons.js] Inside render");
      return (
         this.props.persons.map((person, index) => {
            return <Person 
               click={() => this.props.clicked(index)}
               name={person.name} 
               age={person.age}
               key={person.id}
               // name changed by entering text in the input element
               changed={(event) => this.props.changed(event, person.id)} 
            />
         }))
   }
}
export default Persons;

/* shouldComponentUpdate(nextProps, nextState) { // updating
      console.log("UPDATE [Persons.js] Inside shouldComponentUpdate", nextProps, nextState);   
      // returns true or false
      // if true, updating continues
      // if false, updating is canceled
      return nextProps.persons !== this.props.persons;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log("UPDATE [Persons.js] inside componentWillUpdate", nextProps, nextState);
   }
   componentDidUpdate () {
      console.log("UPDATE [Persons.js] Inside componentDidlUpdate");
   } */

// A NOTE ABOUT PROPS: props contains an array of Persons that need to be transformed into an array of JSX elements, just like what happened in App.js before the components were split into other files. //
/* 
const Person = (props) => (
   props.persons.map((person, index) => {
      return <Person 
         click={() => props.clicked(index)}
         name={person.name} 
         age={person.age}
         key={person.id}
         // name changed by entering text in the input element
         changed={(event) => props.changed(event, person.id)} 
      />
   })
);
*/
