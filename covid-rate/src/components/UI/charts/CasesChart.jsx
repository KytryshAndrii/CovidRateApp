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

const CasesChart = (coviddata) => {

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

  var labels = []
  var data = []
  //console.log("covid data log in charts", coviddata.coviddata)
  coviddata.coviddata.map((element) => {
    labels.push(element.last_updated_at);
    data.push(element.cases);
  });

 var  chartData = {
    labels: labels,
    datasets: [
      {
        label: "Covid Cases",
        data: data,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1
        },
    ]};

  var chartOptions = {
    responsive: true,
      plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Covid Cases',
      },
      scales: {
        y:
          {
            min: 2500,
            max: 7000,
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
      <h1>Covid Rate Chart</h1>
      <div>
        <Line
          data={chartData}
          options={chartOptions}
        />
      </div>
    </div>
  ); };
export default CasesChart;
