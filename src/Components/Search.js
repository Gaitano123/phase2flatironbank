import React from "react";

function Search ({ search, onSearch}) {
  
  function handleSubmit(event){
    event.preventDefault();
  }

    return(
      <div className="position">
      <form>
        <label>SEARCH DESCRIPTION
          <input type="text" value={ search } onChange={(event) => onSearch(event.target.value)}/>
        </label>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn_margin" >Search</button>
      </form>
      </div>
    )
}

export default Search;