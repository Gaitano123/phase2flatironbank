import React, {useEffect} from "react";
import Navigation from "./Navigation";
import Form from "./Form";

function App (){

    // useEffect(() => {
    //     fetch('http://localhost:3000/transactions')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // })

    return (
        <>
        <Navigation />
        <Form />
        </>
    )
}

export default App;