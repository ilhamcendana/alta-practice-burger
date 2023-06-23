import React from "react";
import "./App.css";
import "./Burger.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="burger">
          <div className="bread-top">
            <div className="seeds" />
            <div className="seeds" />
          </div>
          <div className="ingredient lettuce" />
          <div className="ingredient cheese" />
          <div className="ingredient meat" />
          <div className="ingredient tomato" />
          <div className="bread-bottom" />
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <h3>Pick your ingredients</h3>

            {/* Ingredients Button Control */}
            <div></div>
          </div>
          <div className="col-6">
            <h3>Summary</h3>

            {/* Summary/Total */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
