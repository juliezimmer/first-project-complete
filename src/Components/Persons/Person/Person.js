import React from 'react';
import classes from './Person.css';

const Person = (props) => {
   return( 
      <div className={classes.Person}>  
         <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
         <p>{props.children}</p> 
         <input   
            type="text" 
            onChange={props.changed} // points to changed={this.nameChangedHandler} in App.js as part of the Person component that is returned after it goes through the .map array method.
            value={props.name}
            /> 
      </div>
   );
}; 

export default Person;