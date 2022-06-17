let changePage = () => {
  let urlQuery = new URLSearchParams(document.location.search).get("albumID")


  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + urlQuery)
    .then(response => response.json())
    .then(body => {
      console.log(body)

      let jumbotronimage = document.querySelector(".jumbotron")
      jumbotronimage.innerHTML = `   <div class="col-2 jumbotronimage">
      <img id="hero-img" src="${body.cover_medium}"
        class="jumbo-picture" style="height:300px; width:250px;"
        alt="Hybrid theory album cover"
      />
    </div>
      `


      let titlesection = document.querySelector(".title-section1")

      titlesection.innerHTML = `<div class="col-10 title-section1">
      <div class="d-flex flex-column justify-content-end h-100">
        <small>ALBUM</small>
        <h1>${body.title}</h1>
        <div>
          <p>
            <small
              ><strong>
                <img
                  src="${body.cover_small}"
                  
                  alt=""
                  style="border-radius: 2rem; height: 20px;"
                  alt="Original Album Cover"
                />${body.artist.name}. </strong
              >${body.release_date}<strong> . </strong>22 songs<strong>
          </p>
        </div>
      </div>
    </div>
      `
      const arrayOfTracks = body.tracks.data;
      for (let i = 1; i < arrayOfTracks.length - 1; i++) {
        const singleTrack = arrayOfTracks[i]
        let titleTime = document.querySelector(".titleTime")
        let titleBoby = document.querySelector(".titleBoby")
        titleBoby.innerHTML += `<div class="ml-3 pb-4">
       
       
        <span class="track-num">${i}</span>
       
      
        <span class="album-song ml-4"><strong class="track-decoration">
        ${singleTrack.title}</strong>
       
        <br /><span class="singer-name"> ${body.artist.name}</span></span>
    </div>
    `
        titleTime.innerHTML += ` <div class="ml-8 pb-5 ">${convertMinAndSec(singleTrack.duration)}</div> `
      }

    })

}

function convertMinAndSec(duration) {
  const sec = parseInt(duration)
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60);
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return minutes + ':' + seconds; //  MM : SS
}


changePage()




var state = 'stop';
function buttonPlayPress() {

  if (state == 'stop') {
    state = 'play';

    var button = d3.select("#button_play").classed('btn-success', true);
    button.select("i").attr('class', "fa fa-pause");
  }
  else {
    state = 'stop';
    d3.select("#button_play i").attr('class', "fa fa-play");
  }

  console.log("button play pressed, play was " + state);
}
var heart = 'stop';
function buttonHeart() {
  if (heart == 'stop') {
    heart = 'play';
    var button = d3.select("#heart").classed('btn-success', true);
    button.select("i").attr('class', "bi bi-heart");
  }
  else {
    heart = 'stop';
    d3.select("#heart i").attr('class', "bi bi-heart-fill red-color");
  }

  console.log("button play pressed, play was " + heart);
}
