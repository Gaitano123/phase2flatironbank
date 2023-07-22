import React, {useState} from "react";

function Form({ onFetchData }){

    const initialInputs = {
        id: "",
        category: "",
        description: "",
        amount: "",
        date: "",
    }

    const [formInputs, setFormInputs] = useState(initialInputs)
    const [submissionStatus, setSubmissionStatus] = useState(null)

    function handleChange(event) {
        const key = event.target.id;
        setFormInputs((prevFormInputs) => ({
          ...prevFormInputs,
          [key]: event.target.value,
        }));
    }

    function resetForm(){
        setFormInputs(initialInputs);
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(formInputs)
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            setSubmissionStatus("Success")
            resetForm()
            onFetchData()
        })
        .catch((error) => {
          console.error('Error:', error);
          setSubmissionStatus("Error")
        });
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
            {submissionStatus === "success" && <p>Form submitted successfully!</p>}
            {submissionStatus === "error" && <p>Error occurred. Please try again later.</p>}
        </form>
    )
}

export default Form