import {React, useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";
import CasesService from "./API/CasesService";
import { useFetching } from "./components/hooks/useFetching";
import MyButton from "./components/UI/button/MyButton";
import CasesFilter from "./components/CasesFilter";
import {useCases} from "./components/hooks/useCases";
import CasesList from "./components/CasesList"
import WorldRateItem from "./components/UI/items/CaseWorldItem";
import preparedata from "./components/utils/DatePrepare";
import "./styles/CountryRate.css"


function CustomCountryCovid(){

    const[cases, setCases] = useState();
    const[totalcases, setTotalCases] = useState([]);

    const[filter, setFilter] = useState({query:"", sort:"", state_sort:"", 
    data_from: new Date("2019-12-10T00:00:00Z"), data_to: new Date("2021-12-10T00:00:00Z")});
    
    const result = useCases(cases, filter.query);
    const[isdis, setIsdis] = useState(true);
    const[sortedAndSearchCases, setSortedAndSearchCases] = useState("");
    const [countries, setCountries] = useState([]);
    
    const [fetchCountry, isCountries, countryError] = useFetching(async ()=>{
    const response = await CasesService.getCountries();
        setCountries(response);
    })

    const [fetchCases, isCases, casesError] = useFetching(async ()=>{
        if(filter.sort !== "" && filter.state_sort !== ""){
            const date_info = preparedata(filter);
            const response = await CasesService.getCovidRateByCountry(date_info[0], date_info[1], filter.state_sort.value, filter.sort.value);
                const [global, byCountry] = await CasesService.getWorldSummaryCovidRate();
            if(response !== 0){
                setTotalCases(byCountry.find(item=>item.CountryCode === filter.sort.value));
                setCases(response);
                setIsdis(false);
                setSortedAndSearchCases(response); 
            }else{
                setCases(response);
                setSortedAndSearchCases(response);
            }
        }else{
            alert("It is obligatory to choose each selects value \n Please, choose each select value");
        }
        })

    useEffect(()=>{
        fetchCountry();
    }, []);

    useEffect(()=>{
        setSortedAndSearchCases(result);
    },[filter.query, result])

    return(
            <div className="CountryRate">
                <div className="blocks-container">
            {isCountries
                ?<div style={{position: "relative", right: "-46%", marginTop:"5%"}}><Loader/></div> 
                :<><div className="filter-block" style={{flexDirection:"column"}}><CasesFilter
                    additional={countries}
                    filter={filter}
                    setFilter={setFilter}
                    sortstatus = {isdis}    
                />
                <MyButton onClick={() => fetchCases()}>
                    Search Covid Cases
                </MyButton>
                </div> 
                {isCases
                    ? <div style={{display: 'flex', position: "relative", right: "45%", marginTop:"5%"}}><Loader/></div>
                    : 
                    <div className="stat-block">
                        <div className="stat-list">
                                <CasesList cases={sortedAndSearchCases}/>
                        </div>
                        <div className="general-stat">
                            <WorldRateItem info={totalcases} query={"Country"}/>
                        </div>
                    </div>
                }
                </>} 
                </div>
            </div>
    );
}

export default CustomCountryCovid;