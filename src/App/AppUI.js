import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoUser } from "../TodoUser/TodoUser";
import { TodoCreateButton } from "../TodoCreateButton/TodoCreateButton";

function AppUI({
    totalTodos,
    todosCompleted,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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
                    todosCompleted={() => todosCompleted(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            <TodoCreateButton/>
        </React.Fragment>
    );
};


export { AppUI }