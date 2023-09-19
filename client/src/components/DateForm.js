import { useState } from "react";
import {  Button } from "react-bootstrap";

function DateForm ({onSubmit}) {
    var today = new Date().toDateString();
    const [dateLabel,setdateLabel] = useState(today);
    const [date, setDate] = useState("");

    const handleChange = (event) => {
        console.log(event);
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(date);

        console.log(date);
        var newdate = date;
        const correctFormat = newdate.replace("-","/")
        const updatedDate = new Date(correctFormat).toDateString();
        setdateLabel(updatedDate);
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="date-div">
            <span className="square bg-primary rounded-pill">
              <h2 className="date-title">{dateLabel}</h2> 
            </span>
            <label className="date-label date-form"><h4>Search by Date</h4></label>
            <input type="date" className="date-input date-form" onChange={handleChange} />
            <Button type="submit" value="Submit" className="date-button">Search Date</Button>
          </div>
        </form>
    )
}

export default DateForm;