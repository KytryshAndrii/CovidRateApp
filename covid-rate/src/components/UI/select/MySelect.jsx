import React from "react";
import Select from 'react-select';



const MySelect = ({options, value, onChange, isDisabled, placeholder}) => {

    var sortedOptions = options.sort((a,b)=> a.label.localeCompare(b.label))

    return(
       <Select
        isDisabled = {isDisabled}
        value={value}
        onChange={event => onChange(event)}
        options={sortedOptions}
        placeholder={placeholder}
       />
    );
};

export default MySelect;