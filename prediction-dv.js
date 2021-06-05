

function getFutureMovies(){
    var years = [];
    var titles = [];
    fetch(`marveldatabase.json`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        var i;
        var content = document.getElementById("myDiv");
        for(i = 0 ; i < data.data.length; i++){
            if(data.data[i].rating == 0 && data.data[i].cover_url != null ){
                content.insertAdjacentHTML('afterEnd', 
                `
                <div id="mydiv${i}" class="card mx-3">
                    <img src="" id="cover${i}" class="card-img-top" alt="${data.data[i].title} Cover"></img>
                    <div class="card-body">
                        <h6 id="title${i}" class="card-title"></h6>
                        <div class="text-left pb-3">
                            <span id="release_date${i}"></span>
                        </div>
                        <small id="casts${i}"></small>
                    </div>
                </div>`
                )
                document.querySelector(`#cover${i}`).src = (data.data[i].cover_url);        
                document.querySelector(`#title${i}`).innerHTML = data.data[i].title;
                document.querySelector(`#release_date${i}`).innerHTML = data.data[i].release_date;
                document.querySelector(`#casts${i}`).innerHTML = (data.data[i].main_cast);
                
                content = document.getElementById(`mydiv${i}`);

                var d = new Date(data.data[i].release_date);
                var y = d.getFullYear();
                years.push(y);
                titles.push(data.data[i].title);
            }
        }

    });
}


