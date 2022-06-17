let changePage = () => {
  let urlQuery = new URLSearchParams(document.location.search).get("albumID")


  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + urlQuery)
    .then(response => response.json())
    .then(body => {
      console.log(body)

      let jumbotronimage = document.querySelector(".jumbotron")
      jumbotronimage.innerHTML = ` <div class="col-2 jumbotronimage">
      <img id="hero-img" src="${body.cover_medium}"
        class="jumbo-picture"
        alt="Hybrid theory album cover"
      />
    </div>
      `


      let titlesection = document.querySelector(".title-section1")

      titlesection.innerHTML = `<div class="col-12 title-section1">
                                  <div class="d-flex flex-column">
                                    <small>ALBUM</small>
                                    <h2>${body.title}</h2>
                                    <div>
                                      <p>
                                        <small
                                          ><strong>
                                            <img class="mr-2"
                                              src="${body.cover_small}"
                                              
                                              alt=""
                                              style="border-radius: 2rem; height: 20px;"
                                              alt="Original Album Cover"
                                            />${body.artist.name}. </strong
                                           >${new Date(body.release_date).getFullYear()}<strong> . </strong>${body.nb_tracks} songs<strong>.
              </strong>${convertHrAndMin(body.duration)} <strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>`

      const arrayOfTracks = body.tracks.data;
      for (let i = 0; i < arrayOfTracks.length; i++) {
        const singleTrack = arrayOfTracks[i]
        let titleTime = document.querySelector(".titleTime")
        let titleBoby = document.querySelector(".titleBoby")
        let audioSong = document.querySelector(".audioSong")
        titleBoby.innerHTML += `<div class="ml-3 pb-4">
       
       
        <span class="track-num">${i + 1}</span>
       
      
        <span class="album-song ml-4"><strong class="track-decoration">
        ${singleTrack.title}</strong>
       
        <br /><span class="singer-name"> ${body.artist.name}</span></span>
    </div>
    `
    audioSong.innerHTML += `<audio controls>
    <source src=${singleTrack.preview} type="audio/ogg">
    <source src=${singleTrack.preview} type="audio/mpeg">
  Your browser does not support the audio element.
  </audio> `
        titleTime.innerHTML += ` <div class="ml-8 pb-5 ">${convertMinAndSec(singleTrack.duration)}</div> `
      }

    })

}

const favouriteSongs = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTUyMDM2MTMsImV4cCI6MTY1NjQxMzIxM30.ozVgl19lKNBmQ3TeP-LfrHL4ak2PqE9Lj3nhDMHEg0k",
      },
    }

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );

    const songs = await response.json();
    console.log(songs)
    const { data } = songs
    const displaySongs = data.slice(0, 20)
    displaySongs.forEach((song) => {
      const popularAlbums = document.getElementById("favourites")
      popularAlbums.innerHTML +=
        `<span><p>${song.artist.name}</p></span>`
    })


  } catch (err) {
    console.log(err)

  };
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

function convertHrAndMin(duration) {
  const sec = parseInt(duration)
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60);
  if (hours < 10) { hours = hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return hours + ' hr ' + minutes + ' min'; //  MM : SS
}

window.onload = () => {
  changePage()
  favouriteSongs("love")
}




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


const displaySearch = () => {
  const divNode = document.getElementById('search-div2')
  divNode.classList.remove('visibility-hidden')

}

const input = document.querySelector("input");
const button = document.querySelector(".search-btn")
const checkDiv = document.querySelector("#search-div2 .svg-check")

const findAlbum = (userEvent) => {
  if (userEvent.type === "click") {
    allSongs(input.value);
  }
}
button.addEventListener("click", displaySearch)
checkDiv.addEventListener("click", findAlbum)