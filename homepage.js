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
      songs.innerHTML += `<div class="col-3 mb-2 d-flex">
                            <a href="./albumpage.html?albumID=${song.album.id}">
                              <div class="card mb-3">
                              <div class="row no-gutters">
                                <div class="col-md-4">
                                  <img class="img-fluid" src="${song.album.cover_medium}" alt="${song.album.title}">
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <p class="card-title align-middle">${song.album.title}</p>
                                  </div>
                                </div>
                              </div>
                              </div>
                            </a>
                          </div>`;
    });
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
      songs.innerHTML += `<div class="col-2 mb-2 ">
                              <a href="./albumpage.html?albumID=${song.album.id}">
                                <div class="card" >
                               
                                <img src="${song.album.cover_medium}" id="imgTop" class="card-img-top p-2" alt="${song.album.title}">
                                    <div class="card-body">
                                      <h5 class="card-title">${song.album.title}</h5>
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
      songs.innerHTML += `<div class="col-2 mb-2 ">
                              <a href="./albumpage.html?albumID=${song.album.id}">
                                <div class="card" >
                                    <img src="${song.album.cover_medium}" class="card-img-top" alt="${song.album.title}">
                                    <div class="card-body">
                                      <h5 class="card-title">${song.album.title}</h5>
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

    const displaySongs = data.slice(0, 6)
    displaySongs.forEach((song) => {
      const songs = document.getElementById("tryThis");
      songs.innerHTML += `<div class="col-2 mb-2 ">
                              <a href="./albumpage.html?albumID=${song.album.id}">
                                <div class="card" >
                                    <img src="${song.album.cover_medium}" class="card-img-top" alt="${song.album.title}">
                                    <div class="card-body">
                                      <h5 class="card-title">${song.album.title}</h5>
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

const displaySearch = () =>{
  const divNode = document.getElementById('search-div2')
  divNode.classList.remove('visibility-hidden')
  
}

const input = document.querySelector("input");
const button = document.querySelector(".search-btn")
const checkDiv = document.querySelector("#search-div2 .svg-check")

const findAlbum = (userEvent) => {
  if (userEvent.type === "click") {
    allSongs(input.value);
    alert('nice you added some music!')
  }
}
button.addEventListener("click", displaySearch)
checkDiv.addEventListener("click", findAlbum)




