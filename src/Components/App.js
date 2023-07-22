import React, { useState, useEffect} from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import Table from "./Table";

function App (){

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(res => res.json())
        .then(data => {
            setTransactions(data)
        })
    }, [])

    return (
        <>
        <Navigation />
        <Form />
        <Table transactions={transactions}/>
        </>
    )
}

export default App;