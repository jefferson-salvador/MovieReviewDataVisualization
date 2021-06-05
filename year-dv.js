

function getMovies(){
    var years = [];
    var ratings = [];
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
                <div id="mydiv${i}" class="card mx-3">
                    <img src="" id="cover${i}" class="card-img-top" alt="${data.data[i].title} Cover"></img>
                    <div class="card-body">
                        <h6 id="title${i}" class="card-title"></h6>
                    </div>
                    <div class="card-footer">
                        <span id="release_date${i}"></span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rating${i}"></span>
                    </div>
                </div>`
                )
                document.querySelector(`#cover${i}`).src = (data.data[i].cover_url);        
                document.querySelector(`#title${i}`).innerHTML = data.data[i].title;
                document.querySelector(`#release_date${i}`).innerHTML = data.data[i].release_date;
                document.querySelector(`#rating${i}`).innerHTML = (data.data[i].rating) + "%";
                
                content = document.getElementById(`mydiv${i}`);

                var d = new Date(data.data[i].release_date);
                var y = d.getFullYear();
                years.push(y);
                ratings.push(data.data[i].rating);
                titles.push(data.data[i].title);
            }
        }

        
        var ctx = document.getElementById('yearChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: [...years],
                datasets: [{
                    label: "",
                    borderColor: '#bc0303',
                    data: [...ratings],
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
                            return tooltipItem.yLabel + '% = ' + titles[tooltipItem.index];
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
                        },
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


