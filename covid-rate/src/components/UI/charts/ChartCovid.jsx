import React from "react";
import { Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale} from "chart.js"
import { Line } from "react-chartjs-2";

const DynamicChart = (coviddata) => {

  if(!coviddata.coviddata){
    return (<p></p>);
  }

  Chart.register(
    CategoryScale, 
    LineController,
    LineElement, 
    PointElement, 
    LinearScale, 
  )

  var labels = []
  var data = []
  console.log(coviddata.coviddata)
  coviddata.coviddata.map((element) => {
    labels.push(element.Date);
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

  return (
    <div className="Chart">
      <h1>Bar Chart</h1>
      <div>
        <Line
          data={chartData}
        />
      </div>
    </div>
  ); };
export default DynamicChart;
