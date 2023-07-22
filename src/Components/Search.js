import React from "react";

function Search ({ search, onSearch}) {
  
  function handleSubmit(event){
    event.preventDefault();
  }

    return(
     <form>
        <label>Search
          <input type="text" value={ search } onChange={(event) => onSearch(event.target.value)}/>
        </label>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
    )
}

export default Search;