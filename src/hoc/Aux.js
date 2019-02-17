// import React from 'react';

// used in Cockpit.js to wrap the return
// This component exists only as and to be a wrapping component
 const Aux = (props) => props.children; 
// children is a special property that outputs whatever is entered between the opening and closing <Aux> </Aux> tags/component, which is actually used in Cockpit component in Cockpit.js.
// so props.children is the content between Aux tags.

// export default (props) => {
//    console.log(props.children)
//    return props.children
// }  
export default Aux;