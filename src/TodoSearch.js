import React from "react";
import './TodoSearch.css';

function TodoSearch ( {searchValue , setSearchValue} )  {
    
    // const settingValue = (searchValue) => {
    //     searchValue == 0 ? searchValue : setSearchValue
    // };
    

    return (
        <input 
        className="TodoSearchButton" 
        placeholder='Search your tasks to do'
        value={searchValue}
        onChange={searchValue}
        />
    );
};

export { TodoSearch } ;