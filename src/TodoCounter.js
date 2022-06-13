import React from "react";
import './TodoCounter.css';

function TodoCounter ( { totalTodos, todosCompleted } ) {
    return (
        <h2 className="TodoCounter"> Has completado {todosCompleted} de {totalTodos} ToDos </h2>
    );
}

export {TodoCounter} ;