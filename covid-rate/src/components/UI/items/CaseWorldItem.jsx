import React from "react";

const WorldRateItem = (props) =>{
    return(
        <div className="p-wpad rounded-sm border-amber-400 border-2 w-600">
            <h2>{props.query} Covid Summary Rate</h2>
            <div className="flex, justify-around m-2.5 text-lg">
                <div>
                    <p>Total Confirmed Cases:</p>
                    <p>New Confirmed Cases: </p>
                    <p>Total Deaths Cases:</p>
                    <p>New Deaths Cases:</p>
                    <p>New Recovered Cases: </p>
                    <p>Total Recovered Cases: </p>
                </div>
                <div>
                    <p> {props.info.TotalConfirmed}</p>
                    <p>{props.info.NewConfirmed}</p>
                    <p>{props.info.TotalDeaths}</p>
                    <p>{props.info.NewDeaths}</p>
                    <p>{props.info.NewRecovered}</p>
                    <p>{props.info.TotalRecovered}</p>
                </div>
            </div>
           
        </div>
    ); 

};

export default WorldRateItem;