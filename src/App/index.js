import React from "react";
import { AppUI } from "./AppUI";
import './App.css'

const defaultToDos = [
  {text : 'Primera tarea' , completed : false} ,
  {text : 'Segunda tarea' , completed : false} ,
  {text : 'Tercera tarea' , completed : false} ,
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
  };

  // countingToDos.
  let totalTodos = todos.length;
  let todosCompleted = 0;
  todos.forEach(todo => {
    if (todo.completed) {return todosCompleted += 1 }
  });

  // Complete ToDos.
  const completeTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[indexTodo].completed = true;
    return setTodos[newTodos];
  };

  // Delete ToDos.
  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    return setTodos(newTodos)
  };

  return (
    <AppUI 
      totalTodos={totalTodos}
      todosCompleted={todosCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
