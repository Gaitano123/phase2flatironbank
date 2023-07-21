import React, {useState} from "react";

function Form(){

    const [formInputs, setFormInputs] = useState({
        id: "",
        category:"",
        description:"",
        amount:"",
        date:"",
    })

    function handleChange(event) {
        const key = event.target.id;
        setFormInputs((prevFormInputs) => ({
          ...prevFormInputs,
          [key]: event.target.value,
        }));
      }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted:", formInputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id
                <input id="id" type="number" value={formInputs.id} onChange={handleChange} />
            </label>
            <label htmlFor="category">Category
                <input id="category" type="text" value={formInputs.category} onChange={handleChange}/>
            </label>
            <label htmlFor="description">Description
                <input id="description" type="text" value={formInputs.description} onChange={handleChange}/>
            </label>
            <label htmlFor="amount">Amount
                <input id="amount" type="number" value={formInputs.amount} onChange={handleChange}/>
            </label>
            <label htmlFor="date">Date
                <input id="date" type="date" value={formInputs.date} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form