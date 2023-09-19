import { useState } from "react";
import {  Button } from "react-bootstrap";

function DateForm ({onSubmit}) {

    const [date, setDate] = useState("");

    const handleChange = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(date);
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="date-div">
            <label className="date-label date-form"><h4>Search by Date</h4></label>
            <input type="date" className="date-input date-form" onChange={handleChange} />
            <Button type="submit" value="Submit date-form" className="date-button">Search Date</Button>
          </div>
        </form>
    )
}

export default DateForm;