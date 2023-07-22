import React from "react";
// import Delete from "./Delete";

function Table(props){
  const transactions = props.transactions;

  // function handleDelete(){
  //   console.log(`handleDelete ${transactions.id}`)
  // }

    return(
        <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>CATEGORY</th>
                  <th>DESCRIPTION</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
              </tr>
          </thead>
          {Array.isArray(transactions) && transactions.length > 0 ? (
              <tbody>
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td><button onClick={() => console.log("event click", transaction.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="5">No transactions found.</td>
              </tr>
            </tbody>
          )}
            
        </table>
    )
}

export default Table;