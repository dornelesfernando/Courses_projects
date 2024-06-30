const titles = ["Vem Adivinhar o Número!", "Desistiu foi?", "Achou que seria fácil?", "Vem jogar!", "Hahaha Fraco!", "Só isso?", "Vamooooo"]
if (document.hidden !== undefined) {
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = titles[Math.floor(Math.random() * titles.length)];
            document.querySelector("link[rel='shortcut icon']").href = "./img/iconWhite.svg";
        } else {
            document.title = "Adivinhe o Número!"
            document.querySelector("link[rel='shortcut icon']").href = "./img/iconBlack.svg";
        }
    });
}

number.addEventListener('keyup', ({key}) => {
    if (key === "Enter") { 
        playGame();
    }
})

play.addEventListener('click', function (e) {
    playGame();
});

function playGame(){
    if(gameSettings.level === "not-level"){
        notLevel.classList.add("selected");
        updateSettings();
    }
    
    if(setup){
        reset();
        play.innerHTML = "Jogar";
        sort(gameSettings.numbersSorted, gameSettings.range.min, gameSettings.range.max);
        setup = false;
        clockTime();
        gameInfo.innerHTML = "Tenta a sorte!";
        auxAttempts = gameSettings.attempts;
    }

    if(number.value == 0 || number.value == null || number.value == undefined){
        if(!gameInfo.innerHTML.includes("Insira")){
            gameInfo.innerHTML += "<br> Insira um número!";
        }
    }else if(number.value > gameSettings.range.max){
        gameInfo.innerHTML = `Número ${number.value} maior que o range máximo!`;
    }else if(number.value < gameSettings.range.min){
        gameInfo.innerHTML = `Número ${number.value} menor que o range mínimo!`;        
    }else{
        console.log(number.value);
        checkNumber(number.value);
        attemptsMade++;     
    }

    updateGame();
    number.value = '';
}