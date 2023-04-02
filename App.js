import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h2>React Jsx Heading</h2>;

// Components:
// 1. Class Based Component  - OLD way
// 2. Functional Component   - NEW way

// Functional Component:  Just a normal js function-> Widely used (Arrow functions)

const FunctionComponent = () => {
  return (
    <div>
      {
        // we can write any js expression:
        heading
      }
      <h2>Functional Component</h2>
    </div>
  );
};

// Component Composition : A component inside a component is called component composition:
const Composition = () => (
  <div>
    <h1>Now we will render another component below.</h1>
    <FunctionComponent />
  </div>
);

// Using functional component inside js expressio:
// since in the end this functional component is a js function.

const NormalWay = () =>{
  return (
    <div>
      {Composition()}
    </div>
  );
}


// As the looks of it we can see that like we are enclosing everthing inside div
// since jsx can only have one parent.
// Due to this many unwanted div is injected in our code.

// So,to solve this issue we can use something known as React Fragment -> used from react library

const Fragment= ()=>{
  return (
    <React.Fragment>
      <h1>Using react Fragment</h1>
      <p>Easy to use</p>
    </React.Fragment>
  )
}
// Now, we can see that inside root there is no div. 
// This React fragment is just like an empty tag.

// Insted of writing React.Fragment everytime we can use 
// Empty tag instead.
const AnotherFragment = ()=>{
  return (
    <>
      <h1>Another way to use React fragment</h1>
      <p>Results is same.</p>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AnotherFragment />);
