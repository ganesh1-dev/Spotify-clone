let changePage = () => {
    let urlQuery = new URLSearchParams(document.location.search).get("albumID")
    console.log(urlQuery)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + urlQuery)
        .then(response => response.json())
        .then(body => {
            console.log(body)

            let jumbotronimage = document.querySelector(".jumbotron")

            jumbotronimage.innerHTML = `   <div class="col-2 jumbotronimage">
      <img id="hero-img" src="${body.artist.picture_xl}"
        class="jumbo-picture" style="height:300px; width:250px;"
        alt="Hybrid theory album cover"
      />
    </div>
      `


            let titlesection = document.querySelector(".title-section1")

            titlesection.innerHTML = `<div class="col-10 title-section1">
      <div class="d-flex flex-column justify-content-end h-100">
        <small>ALBUM</small>
        <h1>${body.label}</h1>
        <div>
          <p>
            <small
              ><strong>
                <img
                  src="${body.artist.picture_small}"
                  
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
        })
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
