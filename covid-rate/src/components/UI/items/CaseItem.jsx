import React from "react";

const CaseItem = (props) => {
    return(
        <div className ="flex justify-between items-center text-lg p-4 rounded-sm border-amber-400 border-2 mt-15 w-[400px] m-[20px]">
            <div>
                <strong> Date: {props.cases.last_updated_at}</strong>
                <div>
                { Object.keys(props.cases).length > 2 
                    ? <div>
                        <p><strong>Number of Recovered</strong> : {props.cases.recovered}</p>
                        <p><strong>Number of Confirmed</strong> : {props.cases.confirmed}</p>
                        <p><strong>Number of Active</strong> : {props.cases.active}</p>
                        <p><strong>Number of Death</strong> : {props.cases.deaths}</p>
                      </div>
                    : <p><strong>Number of Cases</strong> : {props.cases.cases}</p>
                    }
                </div>
            </div>
        </div>

    );
};

export default CaseItem;