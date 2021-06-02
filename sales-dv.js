var ctx = document.getElementById('salesChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{
            label: "",
            borderColor: '#bc0303',
            data: ["20000000", "35000000", "47000000", "50000000", "55000000", "57000000", "60000000", "70000000", "75000000", "85000000", "89000000", "87000000", "78000000"],
            lineTension: 0,
            pointRadius: 5,
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },

        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    padding: 30
                },
                display: true,
                gridLines: {
                    zeroLineWidth: 1,
                    zeroLineColor:'rgba(255, 255, 255, 0.158)',
                    drawBorder: false,
                    color: 'rgba(255, 255, 255, 0.158)'
                }
            }],
            xAxes:[{
                ticks:{
                    fontColor: "white",
                }
            }]
        },
        
        elements:{
            point: {
                hitRadius: 5
            }
        }
    }
});