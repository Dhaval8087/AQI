import React from 'react';
import { Line } from 'react-chartjs-2';


export const AirQualityChart = ({ airData }) => {

    const data = {
        labels: airData.map(p => p.city),
        datasets: [
            {
                label: '# of AQI',
                data: airData.map(p => p.aqi),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <Line data={data} options={options} />
    )
}

