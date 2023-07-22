import React from "react";

function Search(){
    return(
        <select>
            <option value="All">Filter By Category</option>
            <option value="Income">Income</option>
            <option value="Food">Food</option>
            <option value="Fashion">Fashion</option>
            <option value="Gift">Gift</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Housing">Housing</option>
        </select>
    )
}

export default Search;