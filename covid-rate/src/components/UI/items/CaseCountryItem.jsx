import React from "react";

const CountryRateItem = (props) =>{
    return(
        <div className="p-wpad rounded-sm border-amber-400 border-2 w-[800px] -mt-[10px] rounded-xl shadow-4xl border-2">
            <h2 className="flex justify-center font-semibold">{props.query} Covid Summary Rate</h2>
            <div className="flex justify-around justify-around m-2.5 text-xl">
                <div>
                    <p>Last time of update: </p>
                    <p>Total Confirmed Cases: </p>
                    <p>Total Deaths Cases: </p>
                    <p>New Recovered Cases: </p>
                    <p>New Active Cases: </p>
                </div>
                <div>
                    <p> {props.info.last_updated_at}</p>
                    <p>{props.info.confirmed}</p>
                    <p>{props.info.deaths}</p>
                    <p>{props.info.recovered}</p>
                    <p>{props.info.active}</p>
                </div>
            </div>
           
        </div>
    ); 

};

export default CountryRateItem;