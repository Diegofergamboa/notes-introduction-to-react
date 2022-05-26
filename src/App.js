import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoUser } from "./TodoUser";
import { TodoCreateButton } from "./TodoCreateButton";

const defaultToDos = [
  {text : 'Primera tarea' , completed : true} ,
  {text : 'Segunda tarea' , completed : false} ,
  {text : 'Tercera tarea' , completed : true} ,
  {text : 'Cuarta tarea' , completed : false} ,
];


function App() {
  return (
    <React.Fragment>
      <TodoUser />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {defaultToDos.map(todo => (
          <TodoItem key={defaultToDos.text} text={todo.text}/>
        ))}
      </TodoList>
      <TodoCreateButton/>
    </React.Fragment>
  );
}

export default App;
