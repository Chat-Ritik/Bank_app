/*import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../data/dummy';

const Stacked = ({ width, height }) => {

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background='#fff'
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;*/

/*import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Stacked = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <Bar data={chartData} options={chartOptions} />
  );
};

export default Stacked;*/

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Stacked() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Keep track of the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new Chart instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
        ],
        datasets: [
          {
            label: "Budget",
            data: [2200,2500, 2000, 2700, 2000, 2500, 3000, 3300],
            backgroundColor: "#38c0d2",
            //borderColor: '#38c0d2',
            borderWidth: 0,
          },
          {
            label: "Shared",
            data: [1600,1500, 1250, 1900, 1600, 1780, 2800, 2500],
            backgroundColor: "#4b5566",
            //borderColor: '326222e',
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Enable aspect ratio
        aspectRatio: 8 / 9,
        scales: {
          x: {
            stacked: true,
            barPercentage: 0.3,
          },
          y: {
            stacked: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                // Format the tooltip label with a dollar symbol
                return `$${context.formattedValue}`;
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default Stacked;
