import React from "react";
import cl from './LoaderCSS.module.css';
const Loader = () => {
    return (
        <div className={cl.loader}></div>
    );
};

export default Loader;