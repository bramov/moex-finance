import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";


function ChartComponent(props) {
  console.log(props.items);
  const dataFirst = [];
  /* dataFirst is for candlestick */
  const dataSecond = [];
  /*dataSecond is for line*/
  let arrForLow = [];
  let arrForHigh = [];
  for (let i = 50; i < props.items.length; i++) {
    arrForLow.push(props.items[i][3]);
    arrForHigh.push(props.items[i][2]);
    dataFirst.push({
      x: new Date(props.items[i][6].replace(/-/g, '/')),
      y: [props.items[i][0], props.items[i][2], props.items[i][3], props.items[i][1]]
    })

    let acc = 0;
    for (let j = i - 50; j < i; j++) {
      acc += Number(props.items[j][1]);
    }
    dataSecond.push({
      x: new Date(props.items[i][6].replace(/-/g, '/')),
      y: acc/50
    })
  }
  const lowestValue = Math.min(...arrForLow);
  const highestValue = Math.max(...arrForHigh);
  console.log(dataFirst);

  const data = {
    series: [{
      name: 'свеча',
      type: 'candlestick',
      data: dataFirst
    }, {
      name: 'скользящая средняя',
      type: 'line',
      data: dataSecond
    }],
    options: {
      chart: {
        type: 'candlestick',
      },
      title: {
        text: `Динамика ценной бумаги ${props.ticketname} за 1 год`,
        align: 'left'
      },
      stroke: {
        width: [2, 1]
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        type: 'category',
        min: lowestValue,
        max: highestValue,
        tooltip: {
          enabled: true
        }
      }
    },
  }



  return (
    <div id="chart">
      <ReactApexChart options={data.options} series={data.series} type="candlestick" height={500}/>
    </div>
  )
}

export default ChartComponent;
