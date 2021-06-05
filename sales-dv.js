


function getSales(){
    var years = [];
    var sales = [];
    var titles = [];
    fetch(`marveldatabase.json`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        var i;
        var content = document.getElementById("myDiv");
        for(i = 0 ; i < data.data.length; i++){
            if(data.data[i].rating != 0){
                content.insertAdjacentHTML('afterEnd', 
                `
                <tr id="mydiv${i}">
                    <td id="release_date${i}"></td>
                    <td id="sales${i}"></td>
                </tr>`
                )   

                var d = new Date(data.data[i].release_date);
                var y = d.getFullYear();
                years.push(y);
                sales.push(data.data[i].box_office);
                titles.push(data.data[i].title);

                document.querySelector(`#release_date${i}`).innerHTML = years[i];
                document.querySelector(`#sales${i}`).innerHTML = '$' + sales[i].toLocaleString();
                
                content = document.getElementById(`mydiv${i}`);
            }
        }

        var ctx = document.getElementById('salesChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: [...years],
                datasets: [{
                    label: "",
                    borderColor: '#bc0303',
                    data: [...sales],
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
                              return '$' + tooltipItem.yLabel.toLocaleString() + ' = ' + titles[tooltipItem.index];
                       }
                    }
                },
        
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function(tick) {
                                return '$' + tick.toLocaleString();
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

    });
}

