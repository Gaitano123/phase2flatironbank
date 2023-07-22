import React, {useState} from "react";
import Select from "./Select";

function Table({transactions, onDeleteTransaction}){
  const [selectCategory, setSelectCategory] = useState("All")

  function handleFilterCategory(event){
    setSelectCategory(event.target.value)
  }

  const filteredTransactions = 
   selectCategory === "All"
   ? transactions
   : transactions.filter((
    (transaction) => transaction.category === selectCategory
   ))

    return(
      <div>
        <Select value={selectCategory} onChange={handleFilterCategory} />
        <form>
          <label>Search
            <input type="text"/>
          </label>
          <button type="submit">Search</button>
        </form>
        <table>
          <thead>
              <tr>
                  <th>NO</th>
                  <th>CATEGORY</th>
                  <th>DESCRIPTION</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
                  <th>REMOVE</th>
              </tr>
          </thead>
          {Array.isArray(filteredTransactions) && filteredTransactions.length > 0 ? (
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr key={transaction.id}>
                    <td>{index + 1}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td><button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button></td>
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
      </div>
    )
}

export default Table;