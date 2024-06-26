number.addEventListener('keyup', ({key}) => {
    if (key === "Enter") { 
        playGame();
    }
})

play.addEventListener('click', function (e) {
    playGame();
});