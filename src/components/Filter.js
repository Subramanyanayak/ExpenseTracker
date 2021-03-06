import React from 'react'

const Filter = (props) => {

    const handleChange = (e) => {
        let year = e.target.value;
        props.onPassData(year);
    }
    
    return(
        <div className="container">
            <label className="lbl">Filter By Year</label>
            <select className="list" onChange={handleChange}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
            </select>
        </div>
    )
}

export default Filter;