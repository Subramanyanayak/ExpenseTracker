import Card from './Card'
import React, { useState } from 'react'

function ExpenseItem(props){

    const [title,setTitle] = useState(props.description)
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear();

    return (
        <Card className="container">
            <div className="date"><label className="lbl2">{month}/{day}/{year}</label></div>
            <div className="description">{title}</div>
            <div className="btn">
                <label className="lbl">${props.price}</label>
            </div>
        </Card>
    );
}

export default ExpenseItem;