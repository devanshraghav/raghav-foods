const heading = React.createElement("h1", {}, "heading");

const divChild = React.createElement("div", { id: "child" }, heading);

const div = React.createElement("div", { id: "parent" }, divChild);

// Another way:

const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentDiv);
