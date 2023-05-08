import React from "react";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const DynamicChart = ({coviddata}) => {
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    let xValues = [];
    let confirmed = [];
    let deaths = [];

        setChartData({
          labels: xValues,
          datasets: [
            {
              label: "confirmed COVID cases",
              data: confirmed,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1
            },
            {
              label: "deaths",
              data: deaths,
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 0.2)"],
              borderWidth: 1
            }
          ]
        });
      }
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="Chart">
      <h1>Bar Chart</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
export default DynamicChart;
