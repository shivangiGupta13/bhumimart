import React from "react";
import { Bar } from "react-chartjs-2";
import "./App.css";
import Cardplace from "./Cardplace";
const Dashboard = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Assets Balance (in lakhs)",
        data: [190, 390, 600, 800, 1000, 1200, 1400, 1600, 1800, 1700],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(153, 103, 156, 1)",
          "rgba(70, 104, 255, 1)",
          "rgba(54, 105, 132, 1)",
          "rgba(60, 106, 205, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };
  const option = {
    title: {
      display: true,
      text: "no of years",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 1800,
            stepSize: 200,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="boxstyle">
        <h6 className="text-center">Annual Projection</h6>
        <div className="container contact-div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <Bar data={data} options={option} />
            </div>
          </div>
        </div>
      </div>

      <Cardplace />
    </>
  );
};
export default Dashboard;
