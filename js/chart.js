var ctx = document.getElementById('myChart').getContext('2d');
let canvaResult = [240, 113, 108, 99, 82, 78,71, 104, 121, 170, 348, 205];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembre', 'Octobre', 'Novembre', 'December'],
        fontColor: '#000',
        datasets: [{
            label: 'Number of reported Confrentations in 2018',
            backgroundColor: 'rgb(204, 204, 204, 0.5)',
            borderColor: 'navy',
            data: canvaResult
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                 fontColor: '#000'
                }
             },
    //    title: {
    //        display: true,
    //        fontColor: '#fff',
    //    }     ,
       scales: {
           yAxes: [{
               ticks: {
                   fontColor: '#000'
               },
           }],
         xAxes: [{
               ticks: {
                   fontColor: '#000'
               },
           }]
       } 

    }
});

//2eme charte
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['State Forces', 'Rebel Forces', 'Plotical Militias', 'Identity Melitia', 'External forces'],
        datasets: [{
            label: '# of Reported deaths',
            data: [95556, 60297, 49991, 47747, 16527],
            backgroundColor: [
                'rgba(255, 0, 0)',
                'rgba(255, 0, 0)',
                'rgba(255, 0, 0)',
                'rgba(255, 0, 0)',
                'rgba(255, 0, 0)'
            ],
            borderColor: [
                'rgba(255, 0, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});