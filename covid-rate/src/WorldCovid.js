import {React, useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";
import CasesService from "./API/CasesService";
import { useFetching } from "./components/hooks/useFetching";
import WorldRateItem from "./components/UI/items/CaseWorldItem";
import DynamicChart from "./components/UI/charts/ChartCovid";
import "./styles/index.css";


function WorldCovid(){

    const[cases, setCases] = useState([]);
    const [data, setData] = useState([{cases:"", last_updated_at: ""}]);   
    const [fetchCases, isCases, casesError] = useFetching(async ()=>{
        const chdata = await CasesService.getCovidRateByWorld();
        const global = await CasesService.getWorldSummaryCovidRate();
        console.log(chdata);
        setCases(global);
        setData(chdata);
        
    })


    useEffect(()=>{
        fetchCases();
    }, []); 
    return(
            <div className="relative flex justify-center top-[100px]">
              <div>
                {isCases && data
                    ? <div className="flex justify-center mt-40"><Loader/></div>
                    : <div><WorldRateItem info={cases} query={"World"}/><div className="mt-[50px] h-[500px]">
                        <DynamicChart coviddata={data}/></div></div>

                }
                </div>
            </div>
    );
}

export default WorldCovid;