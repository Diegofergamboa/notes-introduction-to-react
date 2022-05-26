import React from "react";
import { TodoCounter } from "./TodoCounter";
// import './App.css';

const defaultToDos = [
  {text : 'Primera tarea' , completed : true} ,
  {text : 'Segunda tarea' , completed : false} ,
  {text : 'Tercera tarea' , completed : true} ,
  {text : 'Cuarta tarea' , completed : false} ,
];


function App() {
  return (
    <React.Fragment>

      <TodoCounter />
      {/* <TodoSearch />
        <input placeholder='Search your tas to do'/>
      <TodoList>
        {defaultToDos.map(todo => (
          <TodoItem/>
          ))}
      </TodoList> ,
      <TodoCreateButton/>
      <button>+</button> */}

    </React.Fragment>
  );
}

export default App;
