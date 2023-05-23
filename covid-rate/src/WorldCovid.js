import {React, useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";
import CasesService from "./API/CasesService";
import { useFetching } from "./components/hooks/useFetching";
import WorldRateItem from "./components/UI/items/CaseWorldItem";
import "./styles/index.css";


function WorldCovid(){

    const[cases, setCases] = useState([]);


    const [fetchCases, isCases, casesError] = useFetching(async ()=>{
        const global = await CasesService.getWorldSummaryCovidRate();
        setCases(global);
    })


    useEffect(()=>{
        fetchCases();
    }, []);

    return(
            <div className="relative flex justify-center top-1/4">
              <div>
                {isCases
                    ? <div className="flex justify-center mt-40"><Loader/></div>
                    : <WorldRateItem info={cases} query={"World"}/>
                } 
                </div>
            </div>
    );
}

export default WorldCovid;