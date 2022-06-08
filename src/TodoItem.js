import React from "react";

function TodoItem (props) {
    return(
        <li>
            <button className="OverTaskButton">✓</button>
            <ul>{props.text}</ul>
            <button className="FinishTaskButton">x</button>
        </li>
    );
};

export  { TodoItem } ;