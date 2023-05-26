import React from "react";
import CaseItem from "./UI/items/CaseItem";
import countryFlagEmoji from "country-flag-emoji";
import Key from "./utils/KeyGenerator";

const CasesList = (props) => {
    if(!props.cases){
        return (
        <h1 className="text-center font-semibold">No Cases were Found</h1>
        );
    }
    return(
        <div className="p-[15px] rounded-sm rounded-xl shadow-4xl border-2">
            <h1  className="text-center font-bold">
                {countryFlagEmoji.get(props.iso2).emoji} {props.country}
            </h1>
            {props.cases.map((elems, id)=>
                    <CaseItem cases={elems} key={Key(id)}/>
                )}
        </div>
    );
};

export default CasesList;