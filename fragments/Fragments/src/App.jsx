import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  let foodItems= ["Milk" ,"Coffee" ,"Salad","Tea"  ,"Shake"];

  return (
    <React.Fragment>
    <h1 className="food-heading">Healthy food</h1>
    <ErrorMessage>item={foodItems}</ErrorMessage>
     <FoodItems> items={foodItems}</FoodItems>
  
  

</React.Fragment>
  );
}

export default App;
