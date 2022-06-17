import React from "react";
import './TodoSearch.css';

function TodoSearch ( {searchValue , setSearchValue} )  {
    
    const settingValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return (
        <input 
        className="TodoSearchButton" 
        placeholder='Search your tasks to do'
        value={searchValue}
        onChange={settingValue}
        />
    );
};

export { TodoSearch } ;