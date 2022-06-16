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
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
      options
    );

    const response = await getSongs.json();

    const {data} = response
    console.log(data);


    data.forEach((song) => {
      const songs = document.querySelector(".container > .row");

     const getSong = document.createElement("div")


      getSong.innerHTML = `<div class="col-2">
                                    
                                        <img src="${song.album.cover_medium}" alt="${song.album.title}">
                                        
                                            <span class>${song.album.title}</span>
                                    </div>  
                                </div> `;
      songs.appendChild(getSong)
    });
  } catch (error) {
    console.log(error);
  }
};

loadAlbums()



