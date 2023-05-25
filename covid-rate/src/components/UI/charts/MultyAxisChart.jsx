import React from "react";
import { Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from "chart.js"
import { Line } from "react-chartjs-2";

const MultyAxisChart = (coviddata) => {

  if(!coviddata.coviddata){
    return (<p></p>);
  }

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    )

  var tmp;
  var first;
  var second; 
  var third;
  var everage;
  var labels = [];
  var data = [];
  //console.log("covid data log in charts", coviddata.coviddata)
  //console.log(delta);
  for (let i = 0; i < coviddata.coviddata.length; i=i+3) {
    tmp = coviddata.coviddata[i]
    labels.push(tmp.last_updated_at);
  }

  for(let i = 0; i < coviddata.coviddata.length -1 ; i++){
    first = coviddata.coviddata[i];
    second =  coviddata.coviddata[i+1];
    if (coviddata.coviddata[i+2]){ 
        third =  coviddata.coviddata[i+2];
        everage = (first.cases + second.cases + third.cases) / 3;
        data.push(everage);
    }else{
        everage = (first.cases + second.cases) / 2;
        data.push(everage);
    }
}

  var EverageStaticData ={
    labels: labels,
    datasets: [
      {
        label: "Avarage amount of cases",
        data: data,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1
        },
    ]};

  

  var EverageStaticOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Statistic',
        },
        scales: {
            y:
             {
                stepSize: 100,
            },
            x:
            {
            },
        },
    },
}


  return (
    <div className="Chart">
      <h1>Average Statistic Rate</h1>
      <div>
        <Line
            data={EverageStaticData}
            options={EverageStaticOptions}
        />
        </div>
    </div>
  ); };
export default MultyAxisChart;