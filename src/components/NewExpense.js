import React, { useState } from 'react'
import Form from './Form'

const Newexpense = (props) => {

    const [newData,setNewData] = useState({})

    const myFunction = (obj) => {
        let obj2 = {
            ...obj,
            id: Math.random().toString()
        };
        setNewData({...newData, obj2});
        props.onPassData(obj2);
    };

    return(
        <div>
            <Form PassData={myFunction}/>
        </div>
    )
}

export default Newexpense;