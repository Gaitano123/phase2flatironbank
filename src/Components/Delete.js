import React from "react";

function Delete({ remove, transactionId}){

    return(
        <button onClick={()=> remove(transactionId)}>Delete</button>
    )
}

export default Delete;