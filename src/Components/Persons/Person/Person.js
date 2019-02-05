import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
   constructor(props) { // creation related
      super(props);
      console.log("[Person.js] Inside constructor", props);
   }
   componentWillMount() { // creation related
      console.log("[Person.js] inside componentWillMount ");
   }
   componentDidMount() { // creation related
   console.log("[Person.js] Inside componentDidMount");
   }
   
   componentWillReceiveProps (nextProps) { // this executes in response to clicking on a name to remove it from the DOM. This is part of updating a component.
      console.log("UPDATE [Persons.js] Inside componentWillReceiveProps", nextProps); // the runs twice after removing a name from the list.
   }  

   render () {
      console.log("[Person.js] Inside render");
      return (
         <div className={classes.Person}>  
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
            <p>{this.props.children}</p> 
            <input   
               type="text" 
               onChange={this.props.changed} 
               value={this.props.name} /> 
         </div>
      )
   }
}

export default Person;


/* const Person = (props) => {
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
}; */