function getCasts(){
    var casts = [];
    var ratings = new Array(29).fill(0);
    var divisors = new Array(29).fill(0);
    var totalRatings =  new Array(29).fill(0.00);
    var castLength;
    var movieLength = 21;
    fetch(`marveldatabase.json`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{

        casts = data.data[19].main_cast;
        castLength = data.data[19].main_cast.length;

        for(var i = 0; i < castLength ; i++){
            for(var j = 0; j < movieLength ; j++){
                if(data.data[j].main_cast.includes(casts[i])){
                    ratings[i] = ratings[i] + data.data[j].rating;
                    divisors[i] = divisors[i] + 1;
                }
            }
            
        }

        for(var i = 0; i < castLength; i++){
            totalRatings[i] = (ratings[i]/divisors[i]).toFixed(2);
        }


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
                    data: totalRatings,
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
                            return tooltipItem.yLabel + "%";
                    }
                    }
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(tick) {
                                return tick.toString() + '%';
                            },
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
                            autoSkip: false
                        }
                    }]
                },
            }
        });

    });
}