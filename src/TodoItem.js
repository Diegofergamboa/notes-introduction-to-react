import React from "react";

function TodoItem (props) {
    return(
        <li>
            <ul>{props.text}</ul>
        </li>
    );
};

export  { TodoItem } ;