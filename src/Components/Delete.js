import React from "react";

function Delete(props){

    function handleDelete(){
        // const transactions = props
        // console.log(`handleDelete ${transactions}`)
    }

    return(
        <button onClick={handleDelete}>Delete</button>
    )
}

export default Delete;