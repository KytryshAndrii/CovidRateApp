import {React, useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";
import CasesService from "./API/CasesService";
import { useFetching } from "./components/hooks/useFetching";
import WorldRateItem from "./components/UI/items/CaseWorldItem";
import DynamicChart from "./components/UI/charts/ChartCovid";
import "./styles/index.css";


function WorldCovid(){

    const[cases, setCases] = useState([]);
    const [data, setData] = useState([]);    
    const [fetchCases, isCases, casesError] = useFetching(async ()=>{
        const global = await CasesService.getWorldSummaryCovidRate();
        const chdata = await CasesService.getCovidRateByWorld();
        setCases(global);
        setData(chdata);
        
    })


    useEffect(()=>{
        fetchCases();
    }, []);

    return(
            <div className="relative flex justify-center top-[100px]">
              <div>
                {isCases
                    ? <div className="flex justify-center mt-40"><Loader/></div>
                    : <WorldRateItem info={cases} query={"World"}/>
                }
                <div className="mt-[50px] h-[500px]"><DynamicChart coviddata={data}/></div>
                </div>
            </div>
    );
}

export default WorldCovid;