const resultArtist = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlists')
const searchInput = document.getElementById('search-input');

function requestApi(searchTerm){
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((resp) => {
            resp.json()
            //console.log(resp);
            // Error checking 
            // 200 - 299
            if(!resp.ok) throw new Error('Was not a valid response')
        })
        .then((result) => displayResults(result))
        .catch((err) => {
            console.warn(err.message);
        });
}

function displayResults () {

}

searchInput.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ''){
        resultArtist.classList.add('hidden');
        playlistContainer.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
});

