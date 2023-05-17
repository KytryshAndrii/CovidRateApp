import React from "react";

const MyButton = ({children, ...props}) => {

    return(
        <button {...props} className="p-p-btn text-orange-950 text-xl rounded-md border-amber-400 border-2 cursor-pointer 
        hover:bg-amber-400 hover:text-slate-50 hover:ease-in-out hover:duration-50">
            {children}
        </button>
    );
};

export default MyButton;