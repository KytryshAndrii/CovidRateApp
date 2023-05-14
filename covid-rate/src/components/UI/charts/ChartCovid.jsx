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

const DynamicChart = (coviddata) => {

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
  console.log(coviddata.coviddata)
  coviddata.coviddata.map((element) => {
    labels.push(element.Date.slice(0,-10));
    data.push(element.Cases);
  });

  console.log(data.splice((data.length)-100, data.length));
  console.log(labels.slice((labels.length)-100, labels.length));

 var  chartData = {
    labels: labels.slice((labels.length)-100, labels.length),
    datasets: [
      {
        label: "Covid Cases",
        data: data.splice((data.length)-100, data.length),
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
export default DynamicChart;
