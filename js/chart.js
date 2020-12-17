var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    y: 15,
    data: {
        datasets: [{
            label: 'Glucose',
            data: [0, 1, 2, 3, 2, 1.5, 1, 0.5, 0, -0.2, -0.5],
            backgroundColor: 'transparent',
            borderColor: '#86898d',
        }, {
            label: 'Simpleat',
            data: [0, 0.5, 0.8, 1, 0.7, 0.5, 0.3, 0, -0.3, -0.2, 0],
            backgroundColor: 'transparent',
            borderColor: '#36c1b9'
        }],
        labels: ['', '', '', '30MIN', '', '', '60MIN', '', '', '', '', ],
        
    },
    options: {
        scales: {
            yAxes: [{
                
                ticks: {
                    max: 4,
                    min: -1,
                    stepSize: 1 
                }
            }]
        }
    }
});