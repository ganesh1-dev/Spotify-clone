let changePage = () => {
    let urlQuery = new URLSearchParams(document.location.search).get("id")
    console.log(urlQuery)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + urlQuery)
        .then(response => response.json())
        .then(body => {

            console.log(body)
        })
}

changePage()