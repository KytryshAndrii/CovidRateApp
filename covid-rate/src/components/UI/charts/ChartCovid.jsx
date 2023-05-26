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
      <div className="relative p-[20px]  mr-[100px] rounded-xl shadow-4xl border-2">
       <div className="mb-[30px]"><CasesChart coviddata={coviddata.coviddata}/>
       </div>
        <StatisticChart coviddata={coviddata.coviddata}/>
      </div> ) 
  }else{
    return (
      <div className="relative p-[20px]  mr-[100px] rounded-xl shadow-4xl border-2">
        <MultyAxisChart coviddata={coviddata.coviddata}/>
      </div> )
  }
}
export default DynamicChart;
