import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {
    const [date,setDate] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0)
    const [visible,setvisible] = useState(false)
    const [priceInvalid,setPriceInvalid] = useState(false);
    const [dateInvalid,setDateInvalid] = useState(false);
    const [descriptionInvalid,setDescriptionInvalid] = useState(false);

    const formSubmit = (e) =>{
        e.preventDefault();
        date === '' || description === '' || price === ''? alert("Inavlid!!"):
        props.PassData(data);
        setDate('');
        setDescription('');
        setPrice('');
        setvisible(!visible)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
        e.target.value === '' ? setPriceInvalid(true): setPriceInvalid(false)
    }

    const handleDate = (e) => {
        setDate(new Date(e.target.value))
        e.target.value === '' ? setDateInvalid(true): setDateInvalid(false)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
        e.target.value === '' ? setDescriptionInvalid(true): setDescriptionInvalid(false)
    }

    const toggleVisible = () => {
        setvisible(!visible);
    }

    const data = {
        date:date,
        description:description,
        price:price
    }

    return(
        <form className="container" onSubmit={formSubmit}>
            {visible === true ?<div className="main">
            <div className="date">
            <label>Date</label>
            <input type="date" style={{borderColor: dateInvalid ? "red" : null}} className="input" onChange={handleDate}></input>
            </div>
            <div className="description">
            <label>Description</label>
            <input type="text" style={{borderColor: descriptionInvalid ? "red" : null}} className="input" onChange={handleDescription}></input>
            </div>
            <div className="price">
            <label>Price</label>
            <input type="number" style={{borderColor: priceInvalid ? "red" : null}} className="input" onChange={handlePrice}></input>
            </div>
            <button type="submit">Add</button>
            <input type="button" value="Cancel" onClick={() => setvisible(!visible)}></input>
            </div>:
            <input type="button" className="addnew" value="Add New Expense" onClick={toggleVisible}></input>}
        </form>
    )
}

export default Form;