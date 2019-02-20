import React, { PureComponent }  from 'react'; 
import Person from './Person/Person';


class Persons extends PureComponent {
   // static getDerivedStateFromProps(props, state){
   //    console.log("[Persons.js] Inside getDerivedStateFromProps");
   //    return state;
   // }
   
   // shouldComponentUpdate (nextProps, nextState) { 
   //    // returns true or false: true to continue updating; false to stop updating.
   //    // usually there is a condition inserted here that compares current props to nextProps.
   //    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate");
   //    if (nextProps.persons !== this.props.persons 
   //       || nextProps.changed !== this.props.changed 
   //       || nextProps.clicked !== this.props.clicked) { // if any of these is true
   //       return true;
   //    } else {
   //       return false;
   //    }
   // }

   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("[Persons.js] Inside getSnapshopBeforeUpdate");
      return { message: "snapshot"};
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("[Person.js] Inside componentDidUpdate");
      console.log(snapshot);
   }

   // use for clean-up
   componentWillUnmount (){
      console.log("[Persons.js] Inside componentWillUnmount");
   }

   render () {
      console.log("[Persons.js] Inside render");
      return this.props.persons.map((person, index) => {
         return (
            <Person 
               click={() => this.props.clicked(index)}
               name={person.name} 
               age={person.age}
               key={person.id}
               // name changed by entering text in the input element
               changed={event => this.props.changed(event, person.id)}
            />
         );
      })
   }
}
export default Persons;

// constructor(props) { // creation related
//    super(props);
//    console.log("[Persons.js] Inside constructor", props);
// }

// A NOTE ABOUT PROPS: props contains an array of Persons that need to be transformed into an array of JSX elements, just like what happened in App.js before the components were split into other files. //

