import React, {  useEffect, useRef } from 'react';
import classes from './Cockpit.css';
// import Aux from '../../hoc/Aux'; 

const Cockpit = props => {
   // const toggleBtnRef = useRef(null);

   // useEffect(() => {
   //   console.log("[Cockpit.js] Inside useEffect");
   // setTimeout removed
   //   toggleBtnRef.current.click();
   //   return () => {
   //   console.log("[Cockpit.js] Clean up work in useEffect");//    };
   // }, []);

   // useEffect(() => {
   //    console.log("[Cockpit.js] 2nd useEffect");
   //    return () => {
   //       console.log("[Cockpit.js] Clean up work in 2nd useEffect"); 
   //    }
   // });

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
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
   }
   
   return (
      <div className={classes.Cockpit} >
      <h1>{props.appTitle}</h1> 
         <p className={assignedClasses.join('  ')}>
            This is really working!
         </p> 
         <button 
            // ref={toggleBtnRef}
            className={btnClass} // variable defined on line 7
            onClick={props.clicked}>
            Toggle Persons 
         </button>
         </div>
   );
};

export default React.memo(Cockpit);

//  Http request could go here... 
//  setTimeout(() => {
//   alert('Saved data to cloud');
// }, 1000);
