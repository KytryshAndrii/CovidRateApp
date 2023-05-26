import React from "react";
import CasesChart from "./CasesChart";
import StatisticChart from "./StatisticChart";
import MultyAxisChart from "./MultyAxisChart";

const DynamicChart = (coviddata) => {

  if(!coviddata.coviddata){
    return (<p></p>);
  }
  console.log(Object.keys(coviddata.coviddata[0]).length);
  if(Object.keys(coviddata.coviddata[0]).length < 3){
    return (
      <div className="Chart">
        <CasesChart coviddata={coviddata.coviddata}/>
        <StatisticChart coviddata={coviddata.coviddata}/>
      </div> ) 
  }else{
    return (
      <div className="Chart">
        <MultyAxisChart coviddata={coviddata.coviddata}/>
      </div> )
  }
}
export default DynamicChart;
