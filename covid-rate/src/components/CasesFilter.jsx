import React from "react";
import CalendarSelect from "./UI/select/MyCalendarSelect";
import MySelect from "./UI/select/MySelect";


const CasesFilter = ({additional, filter, setFilter, sortstatus}) => {

    let status_options = [{value: "confirmed", label: "Confirmed"},
    {value: "deaths", label: "Deaths"},
    {value: "recovered", label: "Recovered"}];

    let query_options = [{value:"Up", label:"UpDate"},
                         {value:"Down", label:"DownDate"}]

    return (
        <div>
           <div className="select-block"> 
            <MySelect
                isDisabled = {false}
                onChange={e => setFilter({...filter, sort: e})}
                value={filter.sort}
                options={additional}
                placeholder={"Choose Country"}
                />
            <MySelect
                isDisabled = {false}
                onChange={e => setFilter({...filter, state_sort: e})}
                value={filter.state_sort}
                options={status_options}
                placeholder={"Choose Status"}
            />
            <MySelect
                isDisabled = {sortstatus}
                onChange={e => setFilter({...filter, query: e})}
                value={filter.query}
                options={query_options}
                placeholder={"Choose Filter"}
            />
            </div> 
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", marginBottom: "20px"}}>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", fontSize:"18px", width:"250px", marginLeft:"20px"}}>
                    <p>From</p>
                    <p>To</p>
                </div>
                <div style={{display:"flex", flexDirection:"row", fontSize:"18px"}}>
                    <CalendarSelect 
                        format= {"yyy-MM-dd"}
                        value={filter.data_from} 
                        onChange={e=> setFilter({...filter, data_from: e})}/>  
                    <CalendarSelect 
                        format= {"yyy-MM-dd"}
                        value={filter.data_to} 
                        onChange={e => setFilter({...filter, data_to: e})}/>
                </div>
            </div>
        </div>
    );

};

export default CasesFilter;