import React from "react";
import './App.css';
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
  const [todos, setTodos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');
  
  // searcherToDos.
  let searchedTodos = [];

  if (searchValue < 1) { 
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return searchedTodos = todoText.includes(searchText);
    })
  }
  

  return (

    <React.Fragment>
      <TodoUser />
      <TodoCounter />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <TodoCreateButton/>
    </React.Fragment>
  );
}

export default App;
