//  const heading = document.createElement("h1");
//  heading.innerHTML ="Hello World using Javascript inline!"
//  const root = document.getElementById("root");
//  root.appendChild(heading);

import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React CDN!"
// );

// Instead of React.createElement we will use the JSX which Babel will transpile 
const heading = <h1 id = "heading">Now onwards We will use JSX!</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log("Debugging begins Here");
console.log(heading);