import React from "react";
import './App.css';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoUser } from "../TodoUser/TodoUser";
import { TodoCreateButton } from "../TodoCreateButton/TodoCreateButton";

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

    <React.Fragment>
      <TodoUser />
      <TodoCounter 
        totalTodos={totalTodos}
        todosCompleted={todosCompleted}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoCreateButton/>
    </React.Fragment>

  );
}

export default App;
