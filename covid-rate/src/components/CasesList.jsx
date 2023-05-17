import React from "react";
import CaseItem from "./UI/items/CaseItem";
import countryFlagEmoji from "country-flag-emoji";
import Key from "./utils/KeyGenerator";

const CasesList = (cases) => {
    if(!cases.cases){
        return (
        <h1 className="text-center font-semibold">No Cases were Found</h1>
        );
    }
    return(
        <div>
            <h1  className="text-center font-semibold">
                {countryFlagEmoji.get(cases.cases[0].CountryCode).emoji} {cases.cases[0].Country}
            </h1>
            {cases.cases.map((elems, id)=>
                    <CaseItem cases={elems} key={Key(id)}/>
                )}
        </div>
    );
};

export default CasesList;