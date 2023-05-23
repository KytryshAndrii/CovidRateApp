import React from "react";

const WorldRateItem = (props) =>{
    return(
        <div className="p-wpad rounded-sm border-amber-400 border-2 w-600 -mt-[10px]">
            <h2 className=" font-semibold">{props.query} Covid Summary Rate</h2>
            <div className="flex justify-around justify-around m-2.5 text-xl">
                <div>
                    <p>Last time of update: </p>
                    <p>Total Confirmed Cases: </p>
                    <p>Total Deaths Cases: </p>
                    <p>New Recovered Cases: </p>
                    <p>New Active Cases: </p>
                </div>
                <div>
                    <p> {props.info.last_update}</p>
                    <p>{props.info.confirmed}</p>
                    <p>{props.info.deaths}</p>
                    <p>{props.info.recovered}</p>
                    <p>{props.info.active}</p>
                </div>
            </div>
           
        </div>
    ); 

};

export default WorldRateItem;