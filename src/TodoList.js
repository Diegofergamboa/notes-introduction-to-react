import React from "react";
import './TodoList.css';
import { TodoItem } from "./TodoItem";


function TodoList (props) {

    

        return (
            <section className="TodoList">
                <ul>
                {props.children}
                </ul>
            </section>
        );    
};

export { TodoList } ;