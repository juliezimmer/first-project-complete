import React from 'react';
import Radium from 'radium';

import './Person.css';

const Person = (props) => {
   const style = {
      '@media (min-width: 500px)': {
         width: '450px'
      }
   };
   return(
      <div className="Person" style={style}>  
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

export default Radium(Person);