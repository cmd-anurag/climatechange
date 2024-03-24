import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GlobalTemperature = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // If there's a previous chart instance, destroy it
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }

      // Create a new chart
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: [
            1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
            1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
            2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
            2019, 2020, 2021, 2022
          ],
          datasets: [
            {
              label: "Annual Global Temperature (°C)",
              data: [
                11.5, 11.89, 11.83, 11.22, 11.89, 11.0, 12.0, 10.17, 12.61,
                12.17, 12.39, 11.89, 11.61, 11.83, 12.06, 12.11, 11.11, 12.78,
                11.17, 11.89, 12.11, 12.11, 11.06, 11.17, 11.5, 11.0, 13.67,
                11.83, 13.11, 13.5, 13.44, 13.39, 13.44, 12.0, 13.17, 13.5,
                13.28
              ],
              fill: false,
              backgroundColor: "rgb(255, 000, 000)",
              borderColor: "rgb(200, 000, 000)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false
          },
          scales: {
            y: {
              beginAtZero: false,
            },
          },
          plugins: {
            title: {
              display: true,
              text: 'Annual Global Temperature (in Celsius)',
              font: {
                size: 24
              }
            },
            legend: {
              display: false
            }
          }
        },
      });
    }

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []); // Add any dependencies here if necessary

  return (
    <div id="datacanvas">
      <canvas ref={chartRef} />
    </div>
  );
};

export default GlobalTemperature;
