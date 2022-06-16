/** @format */

const loadAlbums = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=all",
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 12)
    viewImages.forEach((song) => {
      const songs = document.getElementById("menu");
      songs.innerHTML += `<div class="col-2 mb-2 d-flex">
                                    <div class="album-img">
                                        <img class="img-fluid" src="${song.album.cover_small}" alt="${song.album.title}" >
                                        </div>
                                        <div class="col-10 album-name">
                                            <span>${song.artist.name}</span>
                                        </div>
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};

loadAlbums()

const loadRecently = async (value) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + value,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 6)
    viewImages.forEach((song) => {
      const songs = document.getElementById("recentlyViewed");
      songs.innerHTML += `<div class="col-2 mb-2 ">
                                    
                                        <img class="img-fluid" src="${song.album.cover_small}" alt="${song.album.title}" width="100%">
                                        
                                        <div class="col-10 album-name">
                                            <span>${song.album.title}</span>
                                        
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};

loadRecently("eminem")

const loadSongsToTry = async (value) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2RmMDdmZmQ0OTAwMTU4YTdhOWEiLCJpYXQiOjE2NTQ4NjUzOTMsImV4cCI6MTY1NjA3NDk5M30.2OFqiZlYFI8_pway6VuyyVMq_FoFqoK3aOgNgDlGntw",
      },
    };
    const getSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + value,
      options
    );

    const response = await getSongs.json();

    const { data } = response
    console.log(data);

    const viewImages = data.slice(0, 6)
    viewImages.forEach((song) => {
      const songs = document.getElementById("tryThis");
      songs.innerHTML += `<div class="col-2 mb-2 ">
                                    
                                        <img class="img-fluid" src="${song.album.cover_small}" alt="${song.album.title}" width="100%">
                                        
                                        <div class="col-10 album-name">
                                            <span>${song.album.title}</span>
                                        
                                </div>`;
    });
  } catch (error) {
    console.log(error);
  }
};

loadSongsToTry("eminem")









