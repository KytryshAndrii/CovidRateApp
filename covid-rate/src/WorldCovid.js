import {React, useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";
import CasesService from "./API/CasesService";
import { useFetching } from "./components/hooks/useFetching";
import WorldRateItem from "./components/UI/items/CaseWorldItem";
import "./styles/World.css"


function WorldCovid(){

    const[cases, setCases] = useState([]);


    const [fetchCases, isCases, casesError] = useFetching(async ()=>{
        const [global, byCountry] = await CasesService.getWorldSummaryCovidRate();
        setCases(global);
        })

    useEffect(()=>{
        fetchCases();
    }, []);

    return(
            <div className="WorldCovid">
              <div style={{position:"center"}}>
                {isCases
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                    : <WorldRateItem info={cases} query={"World"}/>
                } 
                </div>
            </div>
    );
}

export default WorldCovid;