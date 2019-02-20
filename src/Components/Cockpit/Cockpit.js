import React, { useEffect, useRef, useContext }from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
   const toggleBtnRef = useRef(null);
   // provides access to context
   const authContext = useContext(AuthContext);

   console.log(authContext.authenticated);

   useEffect(() => {
      console.log("[Cockpit.js] Inside useEffect");
      toggleBtnRef.current.click();
      return () => {
         console.log("[Cockpit.js] Clean up work in useEffect");   
      };
   }, []);

   useEffect(() => {
      console.log("[Cockpit.js] 2nd useEffect");
      return () => {
         console.log("[Cockpit.js] Clean up work in 2nd useEffect"); 
      };
   });

   const assignedClasses = [];
   let btnClass = '';
   if (props.showPersons) {
      // if props.showPersons is true, the button should be red
      btnClass = classes.Red; 
   }
  
   if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
   }

   if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
   }
   
   return (
      <div className={classes.Cockpit} >
         <h1>{props.appTitle}</h1> 
         <p className={assignedClasses.join('  ')}>
            This is really working!
         </p> 
         <button 
            ref={toggleBtnRef}
            className={btnClass} // variable defined on line 7
            onClick={props.clicked}>
            Toggle Persons 
         </button>
         <button onClick={authContext.login}>
            Log in
         </button>
      </div>
   );
};

export default React.memo(Cockpit);

//  Http request could go here... 
//  setTimeout(() => {
//   alert('Saved data to cloud');
// }, 1000);
