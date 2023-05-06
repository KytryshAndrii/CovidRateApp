import React from "react";

const CaseItem = (props) => {
    return(
        <div className ="case" style={{fontSize:"18px"}}>
            <div className = "case_counter">
                <strong> Date: {props.cases.Date.slice(0, 10)}</strong>
                <div>
                   <strong>Number of Cases</strong> : {props.cases.Cases}
                </div>
            </div>
        </div>

    );
};

export default CaseItem;