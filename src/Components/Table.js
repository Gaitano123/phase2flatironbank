import React, {useState} from "react";

function Table(props){
  const transactions = props.transactions;
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
        <select value={selectCategory} onChange={handleFilterCategory}>
          <option value="All">Filter By Category</option>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Gift">Gift</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
        </select>
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
          {Array.isArray(filteredTransactions) && filteredTransactions.length > 0 ? (
              <tbody>
                {filteredTransactions.map(transaction => (
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
      </div>
    )
}

export default Table;