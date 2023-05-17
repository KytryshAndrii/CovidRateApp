import React from "react";

const CaseItem = (props) => {
    return(
        <div className ="flex justify-between items-center text-lg p-4 rounded-sm border-amber-400 border-2 mt-15">
            <div>
                <strong> Date: {props.cases.Date.slice(0, 10)}</strong>
                <div>
                   <strong>Number of Cases</strong> : {props.cases.Cases}
                </div>
            </div>
        </div>

    );
};

export default CaseItem;