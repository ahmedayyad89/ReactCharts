import React from 'react';
import { Bar } from 'react-chartjs-2';

function SecondChart() {

    var clickHandle = function(event: any) {
        console.log('onClick:'+ event);      

    }

    const data: object = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      }
      
      const options: object = {
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  },
                  scaleLabel : {
                    display: true,
                    labelString: 'label'
                },
              }],
              xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 80,
                    minRotation: 80
                },
                scaleLabel : {
                    display: true,
                    labelString: 'label'
                },
              }]
          },
          onClick: clickHandle
      }

    return (
        <div className="chart1">
          <Bar data={data} options={options} />
        </div>
    );
}

export default SecondChart;