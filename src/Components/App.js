import React, { useState, useEffect} from "react";
import Navigation from "./Navigation";
import Form from "./Form";
import Table from "./Table";

function App (){

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch('https://flatironbank-6myj.onrender.com/transactions')
        .then(res => res.json())
        .then(data => {
            setTransactions(data)
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

  const deleteTransaction = (id) => {
    fetch(`https://flatironbank-6myj.onrender.com/transactions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction) => transaction.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

    return (
        <>
        <Navigation />
        <Form transactions={transactions} onFetchData={fetchData} />
        <Table transactions={transactions} onDeleteTransaction={deleteTransaction}/>
        </>
    )
    
}

export default App;