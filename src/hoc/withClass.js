import React from 'react';

// another way to create a HOC
// This HOC adds a div with a certain CSS class around any element.
const withClass = (WrappedComponent, className) => {
   return props => (
      <div className={className}>
         <WrappedComponent {...props} /> 
      </div>
   );
};

export default withClass;

/* 
const WithClass = (props) => ( 
   <div className={props.classes}> 
      {props.children}
   </div>
);
*/

// This higher order component, WithClass, does ONE thing. It sets up a class on a div that wraps a component. 
// props.classes is a property that is expected to be on the higher order component.