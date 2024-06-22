number.addEventListener('keyup', ({key}) => {
    if (key === "Enter") { 
        playGame();
    }
})

play.addEventListener('click', function (e) {
    playGame();
});

rangeScale.addEventListener('mouseenter', (e) => {
    rangeTitle.classList.add('Hover');
});

rangeScale.addEventListener('mouseover', (e) => {
    rangeTitle.classList.remove('Hover');
});