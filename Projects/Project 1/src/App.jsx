import AppName from "./components /AppName";
import AddTodo from "./components /AddTodo"; 
import TodoITEM1 from "./components /TodoITEM1";
import TodoITEM2 from "./components /TodoITEM2";
import "./App.css";
function App(){
  return (

  <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <div className="todo-items">
    <TodoITEM1></TodoITEM1>
    <TodoITEM2></TodoITEM2>
    </div>
  </center>
  );
}
export default App;