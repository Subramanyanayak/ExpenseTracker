import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import Filter from './Filter'

function ItemList(props){

const [fyear,setFyear] = useState('2020')

    const myFunction = (fliterdata) => {
        setFyear(fliterdata);
    }

    const filteredExpense = props.arr.filter(obj => {return obj.date.getFullYear().toString() === fyear })

    return (
        <Card>
    <Filter onPassData={myFunction}/>
    {filteredExpense.length === 0 ? (<h3 style={{color: "white", textAlign:'center'}}>No Expenses found</h3>) :  filteredExpense.map(obj => (
        <ExpenseItem key={obj.id} date={obj.date} description={obj.description} price={obj.price} />
     ) )}
    </Card>
    )
}
export default ItemList;