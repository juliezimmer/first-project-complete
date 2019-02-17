import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'; 

const Cockpit = (props) => {
   // useEffect(() => {
   //    console.log("[Cockpit.js] Inside useEffect");
   //    setTimeout(() => {
   //       alert('Saved data to cloud');
   //    }, 1000);
      // return () => {
      //    console.log("[Cockpit.js] Clean up work in useEffect"); 
      // }
   // }, []);

   // useEffect(() => {
   //    console.log("[Cockpit.js] 2nd useEffect");
   //    return () => {
   //       console.log("[Cockpit.js] Clean up work in 2nd useEffect"); 
   //       }
   // });

   const assignedClasses = [];
   let btnClass = '';
   if (props.showPersons) {
      btnClass = classes.Red; 
   }
  
   if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
   }

   if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold ); 
   }
   
   return (
      <Aux>
         <h1>{props.appTitle}</h1> 
         <p className={assignedClasses.join('  ')}>This is really working!</p> 
         <button 
            className={btnClass} // variable defined on line 7
            onClick={props.clicked}>
            Toggle Persons 
         </button>
      </Aux>
   );
};

export default Cockpit;