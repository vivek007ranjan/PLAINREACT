//  const heading = document.createElement("h1");
//  heading.innerHTML ="Hello World using Javascript inline!"
//  const root = document.getElementById("root");
//  root.appendChild(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React CDN!"
// );


//Ways of writing functional component:

const number = 1000;

const HeadingComponent = () => <h1 id="headingComponent">This is a fucntional component</h1>;
const HeadingComponent2 = () => (
  <h1 id="headingComponent">
    This is also a way of writing fucntional component
  </h1>
);
const HeadingComponent3 = () => {
  return (
    <h1 id="headingComponent">
      This is most common way of writing fucntional component
    </h1>
  );
};

const HeadingComponent4 = function(){
  return (
    <h1 id="headingComponent">
     {number} : This is the way of using old function syntax without using Arrow function 
     {console.log("Any Javascript can be used here")}
    </h1>
  );
};


// Instead of React.createElement we will use the JSX which Babel will transpile
const heading = (
  <div id="heading" className="headingClass">
    Now onwards We will use JSX!
    <HeadingComponent/>
    <HeadingComponent2/>
    <HeadingComponent3/>
    <HeadingComponent4/>
      </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log("Debugging begins Here");
console.log(heading);
