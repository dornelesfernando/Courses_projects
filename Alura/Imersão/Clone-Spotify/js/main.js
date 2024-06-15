const resultArtist = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlists')
const searchInput = document.getElementById('search-input');

function requestApi(searchTerm){
    fetch(`http://localhost:3000/artists?name=${searchTerm}`)
        .then((resp) => {
            resp.json();
            if(!resp.ok) throw new Error('Was not a valid response');
        })
        .then((result) => displayResults(result))
        .catch((err) => {
            console.warn(err.message);
        });
}

function displayResults (result) {
    playlistContainer.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.innerText = element.urlImg;
    });

    resultArtist.classList.remove('hidden');

}

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ''){
        resultArtist.classList.add('hidden');
        playlistContainer.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
});

