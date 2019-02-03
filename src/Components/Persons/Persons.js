import React  from 'react'; 
import Person from './Person/Person';

const Persons = (props) => (
// props contains an array of Persons that need to be transformed into an array of JSX elements, just like what happened in App.js before the components were split into other files. 
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

export default Persons;