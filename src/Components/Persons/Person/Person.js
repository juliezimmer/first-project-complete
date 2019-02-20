import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
   constructor(props) {
      super(props);
      this.inputElementRef = React.createRef();
   }

   // AuthContext is the context object
   static contextType = AuthContext;

   componentDidMount() {
      // this.inputElement.focus();
      this.inputElementRef.current.focus(); // provides access to current reference on line 11
      console.log(this.context.authenticated);
   }
   
   render () {
      console.log("[Person.js] Inside render");
      return ( 
         <Aux>
            {this.context.authenticated ? 
               ( <p>Authenticated</p> ) : ( <p>Please Login</p> )}
            
            <p onClick={this.props.click}>
               I'm {this.props.name} and I am {this.props.age}!
            </p>
            <p key="i2">{this.props.children}</p> 
            <input 
               key="i3"
               ref={this.inputElementRef}
               // ref={(inputEl) => {this.inputElement = inputEl}}type="text" 
               type="text"
               onChange={this.props.changed} 
               value={this.props.name} /> 
         </Aux>
      );
   }
}
// PropTypes defined for component
Person.propTypes = {
   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   changed: PropTypes.func
};

// withClass returns the functional component that wraps the Person component
export default withClass(Person, classes.Person);


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