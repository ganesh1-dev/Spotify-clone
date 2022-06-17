/** @format */


const loadAlbums = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 12)
    viewImages.forEach((song) => {
      const songs = document.getElementById("menu");
      songs.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 d-flex">
                            <a href="./albumpage.html?albumID=${song.album.id}">
                              <div class="card mb-3">
                              <div class="row no-gutters">
                                <div class="col-md-4">
                                  <img class="img-fluid" src="${song.album.cover_medium}" alt="${song.album.title}">
                                </div>
                                <div class="col-md-8 ">
                                  <div class="card-body px-2 py-3">
                                    <p class="card-title align-middle">${song.album.title}</p>
                                        
                                  </div>
                                </div>
                              </div>
                              </div>
                            </a>
                          </div>`;
    });
    // <button class="play-btn"></button> 
  } catch (error) {
    console.log(error);
  }
};

const loadRecently = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 6)
    viewImages.forEach((song) => {
      const songs = document.getElementById("recentlyViewed");
      songs.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 ">
                              <a href="./albumpage.html?albumID=${song.album.id}">
                                <div class="card" >
                               <div class="example">
                                <img src="${song.album.cover_medium}" id="imgTop" class="card-img-top" alt="${song.album.title}">
                                <button class="mybutton"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                  </svg></button>
                                  </div>
                                    <div class="card-body">
                                      <h5 class="card-title">${song.album.title}</h5>

                                      <p class="card-text">${song.artist.name} </p>                           

                                      <p class="card-text">${Math.floor(song.duration / 60)} min </p>    
                                                            

                                </div>
                                </div>
                              </a>      
                          </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};

const loadSongsToTry = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 6)
    viewImages.forEach((song) => {
      const songs = document.getElementById("tryThis");
      songs.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 ">
                              <a href="./albumpage.html?albumID=${song.album.id}">
                                <div class="card" >
                                  <div class="example">
                                    <img id="img-card" src="${song.album.cover_medium}" class="card-img-top" alt="${song.album.title}">
                                    <button class="mybutton"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                  </svg></button>
                                  </div>  
                                    <div class="card-body">
                                      <h5 class="card-title">${song.album.title}</h5>

                                      <p class="card-text">${song.artist.name}</p>                           

                                      <p class="card-text">${Math.floor(song.duration / 60)} min </p>      
                                           

                                    </div>
                                </div>
                              </a>       
                          </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};



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


window.onload = async () => {
  loadAlbums("love")
  loadRecently("folk")
  loadSongsToTry("country")
  favouriteSongs("romantic")
}


const allSongs = async (query) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      options
    );
    const response = await getSongs.json();

    const { data } = response
    const songs = document.getElementById("songsSearched");
    const displaySongs = data.slice(0, 6)
    songs.innerHTML = `<div class="col-12"><h2>${query} Album</h2></div>`
    displaySongs.forEach((song) => {

      songs.innerHTML += `<div class="col-2 mb-2 ">
                              <a href="./albumpage.html?albumID=${song.album.id}">
                                <div class="card" >
                                <div class="example">
                                    <img src="${song.album.cover_medium}" class="card-img-top" alt="${song.album.title}">
                                    <button class="mybutton"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                  </svg></button>
                                    </div>
                                    <div class="card-body">
                                      <h5 class="card-title">${song.album.title}</h5>

                                      <p class="card-text">${song.artist.name}</p >                           
                                    </div >
                                </div >
                              </a >       
                          </div > `;

                                      <p class="card-text">${Math.floor(song.duration / 60)} min </p>  
                                      
                                    </div>
                                </div>
                              </a>       
                          </div>`;

    });
  } catch (error) {
    console.log(error);
  }
};

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




songsSearched