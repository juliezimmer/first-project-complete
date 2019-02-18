import React from 'react';

// another way to create a HOC
// This HOC adds a div with a certain CSS class around any element.
// This starts with a regular JS function that takes in at least 2 arguments: WrappedComponent (must be uppercase first letter and can be any name), and what the hoc is returning, in this case, a CSS className.
// The function 'withClass' returns another function definition, which is a component function that takes in props and returns JSX.
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