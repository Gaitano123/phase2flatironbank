import React, {useState} from "react";
import Search from "./Search";
import Delete from "./Delete";

function Table({transactions, onDeleteTransaction}){
  const [searchData, setSearchData] = useState("")

  function handleSearchData(value){
    setSearchData(value)
  }


   const filterTransactions = transactions.filter((transaction) => transaction.description.includes(searchData));

    return(
      <div>
        <Search search={ searchData } onSearch={handleSearchData}/>
        <h2 className="titles">TRANSACTION TABLE</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
              <tr>
                <th>NO</th>
                <th>CATEGORY</th>
                <th>DESCRIPTION</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                <th>REMOVE</th>
              </tr>
          </thead>
          {Array.isArray(filterTransactions) && filterTransactions.length > 0 ? (
            <tbody>
              {filterTransactions.map((transaction, index) => (
                <tr key={transaction.id}>
                  <td>{index + 1}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td><Delete remove={onDeleteTransaction} transactionId={transaction.id}/></td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="5">Loading....</td>
              </tr>
            </tbody>
          )}
            
        </table>
      </div>
    )
}

export default Table;
