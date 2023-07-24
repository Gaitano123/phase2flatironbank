import React from "react";

function Delete({ remove, transactionId}){

    return(
        <button onClick={()=> remove(transactionId)} className="btn btn-danger">Delete</button>
    )
}

export default Delete;