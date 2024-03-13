import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = ["Daal", "Green Vegetables", "Roti", "Salad", "Milk"];

  

  return (
    // React.Fragment allows grouping of multiple elements without extra DOM nodes
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {/* map method renders lists from array data.
        Transforms array items into JSX.
        Inline rendering directly inside JSX  */}
        {/* we can not write lopps and if else statement in JSX */}
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
