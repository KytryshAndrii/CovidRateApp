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
  var labels = [];
  var recovered = [];
  var death = [];
  var confirmed = [];
  var active = [];
  //console.log("covid data log in charts", coviddata.coviddata)
  //console.log(delta);
  for (let i = 0; i < coviddata.coviddata.length; i=i+3) {
    tmp = coviddata.coviddata[i]
    labels.push(tmp.last_updated_at);
  }

  coviddata.coviddata.map((element)=>{
    recovered.push(element.recovered);
    confirmed.push(element.confirmed);
    death.push(element.deaths);
    active.push(element.active);
  });

  const MultyData = {
  labels: labels,
  datasets: [
    {
      label: 'Confirmed',
      data: confirmed,
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
      yAxisID: 'y',
    },
    {
      label: 'Deaths',
      data: death,
      backgroundColor: ["blue"],
      borderColor: ["blue"],
      borderWidth: 1,
      yAxisID: 'y1',
    },
    {
      label: 'Active',
      data: active,
      backgroundColor: ["orange"],
      borderColor: ["orange"],
      borderWidth: 1,
      yAxisID: 'y2',
    },
    {
      label: 'Recovered',
      data: recovered,
      backgroundColor: ["purple"],
      borderColor: ["purple"],
      borderWidth: 1,
      yAxisID: 'y3',
    }
  ]
};

const MultyOptions = {
  type: 'line',
  data: MultyData,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'General Information'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: false,
        position: 'left'
      },
      y2: {
        type: 'linear',
        display: false,
        position: 'left'
      },
      y3: {
        type: 'linear',
        display: false,
        position: 'tight'
      }
    },
        // grid line settings
      grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    };



  return (
    <div className="Chart">
      <h1>General Information</h1>
      <div>
        <Line
            data={MultyData}
            options={MultyOptions}
        />
        </div>
    </div>
  ); };
export default MultyAxisChart;