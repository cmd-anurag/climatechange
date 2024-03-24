import React, {useEffect, useRef} from 'react'
import { Chart } from 'chart.js/auto';


const EnergyConsumption = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    useEffect(() => {
        if(chartRef.current) {
            if(chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'radar',
                data: {
                    labels: [
                      'Transport',
                      'Industry',
                      'Residential',
                      'Commercial',
                      'Mining',
                      'Agriculture',
                      'Others'
                    ],
                    datasets: [{
                      label: 'World',
                      data: [28.9, 29, 21.2, 7, 1.1, 9.1, 3.7],
                      fill: true,
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgb(255, 99, 132)',
                      pointBackgroundColor: 'rgb(255, 99, 132)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(255, 99, 132)'
                    }, {
                      label: 'India',
                      data: [28, 48, 40, 19, 96, 27, 100],
                      fill: true,
                      backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor: 'rgb(54, 162, 235)',
                      pointBackgroundColor: 'rgb(54, 162, 235)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(54, 162, 235)'
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
                                    size: 10
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
                            text: 'Largest Carbon Emitting Countries (in million Tonnes)',
                            font: {
                                size: 25
                            }
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
    <div className='d-flex justify-content-center' style={{height: '800px', width: 'auto'}}>
      <canvas ref={chartRef}  />
    </div>
  );
};

export default EnergyConsumption
