/*import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';


const Doughnut = ({ id, data, legendVisiblity, height }) => {

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: 'white' }}
      height={height}
      background='#fff'
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;


import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Pie = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartData = {
      labels: ["May", "Jun", "Jul", "Aug", "Sept"],
      datasets: [
        {
          data: data, 
          backgroundColor: [
            "#FF5733", // Color for January
            "#FFC300", // Color for February
            "#4CAF50", // Color for March
            "#2196F3", // Color for April
            "#9C27B0", // Color for May
          ],
        },
      ],
    };

    new Chart(ctx, {
      type: "doughnut",
      data: chartData,
    });
  }, [data]);

  return (
    <div className="w-64 h-64">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Pie;*/

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Pie = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const chartData = {
      labels: ["May", "Jun", "Jul", "Aug", "Sept"],
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#FF6B6BAA","#6BFF6BAA","#6B6BFFAA ","#E67E22","#D64460",
          ],
        },
      ],
    };

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, [data]);
  return (
    <div className="w-40 h-40">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Pie;
