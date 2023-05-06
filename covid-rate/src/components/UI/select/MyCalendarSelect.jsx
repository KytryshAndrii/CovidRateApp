import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarSelect({value, onChange, format}){

    return (
        <DatePicker 
        dateFormat={format}
        selected={value} 
        onChange={(date) => onChange(date)} 
        showIcon
        />
    );
}

export default CalendarSelect;