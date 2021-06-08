function getCasts(){
    var casts = [];
    var ratings = [];
    var divisors = [];
    var totalRatings = [];
    fetch(`marveldatabase.json`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{

        casts = data.data[19].main_cast;
        // var movieLength = 21;
        // var castLength = 15;
        // for(var i = 0 ; i < castLength; i++){
        //     for(var j = 0; j < movieLength; j++){
        //         if()
        //     }
        // }

        
        // ratings.push(data.data[i].rating);

        var ctx = document.getElementById('castChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {

                labels: casts,
                datasets: [{
                    label: "",
                    backgroundColor: '#bc0303',
                    data: [9.8, 5.3, 9.3, 6.5, 4.4, 3.5],
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
            }
        });

    });
}