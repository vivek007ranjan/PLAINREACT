//  const heading = document.createElement("h1");
//  heading.innerHTML ="Hello World using Javascript inline!"
//  const root = document.getElementById("root");
//  root.appendChild(heading);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React CDN!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log("Debugging begins Here");
console.log(heading);