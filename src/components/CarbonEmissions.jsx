import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto';

const CarbonEmissions = () => {

    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if(chartRef.current) {
            if(chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: ['China', 'United States', 'India', 'European Union', 'Russia', 'Japan', 'Brazil', 'Iran', 'Indonesia','Mexico'],
                    datasets: [{
                        label: 'Carbon Emissions (in million Tonnes)',
                        data: [14, 6, 3.5, 3.4, 2, 1.17, 1.14, 1.13, 1.106, 0.8],
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(255, 50, 50, 0.6)',   // Red
                            'rgba(54, 162, 235, 0.6)',   // Blue
                            'rgba(255, 206, 86, 0.6)',   // Yellow
                            'rgba(75, 192, 192, 0.6)',   // Green
                            'rgba(153, 102, 255, 0.6)',  // Purple
                            'rgba(255, 159, 64, 0.6)',   // Orange
                            'rgba(255, 105, 180, 0.6)',  // HotPink
                            'rgba(240, 230, 140, 0.6)',  // Khaki
                            'rgba(32, 178, 170, 0.6)',   // LightSeaGreen
                            'rgba(148, 0, 211, 0.6)'     // DarkViolet
                        ],
                        borderColor: 'black',
                        tension: 0.1
                    }]
                },
                options: {
                    
                    responsive: true,
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    size: 16
                                }
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Top Carbon Emitting Countries (in million Tonnes)',
                            font: {
                                size: 25
                            }
                        },
                        legend: {
                            display: false
                        }
                    }

                }
            })
        }
        return () => {
            if (chartInstanceRef.current) {
              chartInstanceRef.current.destroy();
              chartInstanceRef.current = null;
            }
          };
    },[])

  return (
    <div className='d-flex justify-content-center py-4' style={{height: '700px', width: 'auto'}}>
      <canvas ref={chartRef} />
    </div>
  )
}

export default CarbonEmissions
