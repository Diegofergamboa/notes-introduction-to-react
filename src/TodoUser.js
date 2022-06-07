import React from "react";
import './TodoUser.css';

function TodoUser () {
    return (
        <header className="TodoUser">
            <h1>¡Hi, "Here is your name"!</h1>
            <section>
            <button>Set</button>
            <img src="https://picsum.photos/200" />
            </section>
        </header>
    );
};

export { TodoUser } ;