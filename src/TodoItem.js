import React from "react";
import './TodoItem.css';

function TodoItem (props) {
    return(
        <li className="TodoItem">
            <button className={`OverTaskButton ${(props.completed) && 'OverTaskButton--Active'}`} >✓</button>
            <ul>{props.text}</ul>
            <button className="FinishTaskButton">x</button>
        </li>
    );
};

export { TodoItem } ;