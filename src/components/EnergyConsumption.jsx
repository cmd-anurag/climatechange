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
                type: 'doughnut',
                data: {
                  labels: [
                    'Industrial',
                    'Residential',
                    'Transport',
                    'Agriculture',
                    'Commercial',
                    'Electricity and Heat',
                    'Others'
                  ],
                  datasets: [{
                    label: 'Energy Consumption in %',
                    data: [25, 24.2, 23.9, 9.1, 7, 6.1, 3.7],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(75, 192, 192)',
                      'rgb(201, 203, 207)',
                      'rgb(20, 205, 86)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(255, 159, 64)'
                    ]
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
                            text: 'Energy Consumption by Sector in %',
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
    <div className='d-flex justify-content-center py-4' style={{height: '700px', width: 'auto'}}>
      <canvas ref={chartRef}  />
    </div>
  );
};

export default EnergyConsumption
