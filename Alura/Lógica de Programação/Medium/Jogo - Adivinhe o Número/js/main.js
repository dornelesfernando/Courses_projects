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

document.addEventListener('keyup', ({ key }) => {
    // console.log(key);
    if(!(numberFocus)){
        if (/^[0-9]$/.test(key)) {
            number.value += key;
        }

        switch(key){
            case "Backspace":
                number.value = number.value.slice(0, -1);
            break;
        };
    }

    if(key === "Enter") playGame();
});

function handleFocusBlur(event){
    numberFocus = event.type === 'focus';
};

number.addEventListener('focus', handleFocusBlur);
number.addEventListener('blur', handleFocusBlur);
rangeMin.addEventListener('focus', handleFocusBlur);
rangeMin.addEventListener('blur', handleFocusBlur);
rangeMax.addEventListener('focus', handleFocusBlur);
rangeMax.addEventListener('blur', handleFocusBlur);
amountNumbers.addEventListener('focus', handleFocusBlur);
amountNumbers.addEventListener('blur', handleFocusBlur);
amountAttempts.addEventListener('focus', handleFocusBlur);
amountAttempts.addEventListener('blur', handleFocusBlur);

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

    for(let i = 0; i < attemptsNumbers.length; i++){
        if(number.value == attemptsNumbers[i]){
            repeatedNumber = true;
        }
    }

    if(repeatedNumber){
        gameInfo.innerHTML = "Esse número já foi inserido!";
        repeatedNumber = false;
    }else{
        if(!number.value){
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
            attemptsNumbers.push(zeroLeft(number.value));
            attemptsMadeNumbers();
            attemptsMade++;     
        }
    }

    updateGame();
    number.value = '';
}

function checkNumber(number){
    for(let i = 0; i < sortedNumbers.length; i++){
        if(number == sortedNumbers[i]){
            rest--;
            if(rest == 0){
                pauseTime();
                attemptWin = true;
                gameInfo.innerHTML = "Parabéns, você acertou!";
                lastTimeSave();
                setup = true;
                play.innerHTML = "Iniciar";
            }else{
                gameInfo.innerHTML = "Um já foi, falta os outros!";
            }

            sortedNumbers.pop(i);
        }else{
            if(!(auxAttempts - 1)){
                gameInfo.innerHTML = "Não foi dessa vez...";
                pauseTime();
                return;
            }

            attemptWin = false;
            console.log("errou");
            if(rest == 1){
                if(number > sortedNumbers[i]){
                    gameInfo.innerHTML = `O número sorteado é menor que ${number}`;
                }else{
                    gameInfo.innerHTML = `O número sorteado é maior que ${number}`;
                }
            }else{
                if(number > sortedNumbers[i]){
                    gameInfo.innerHTML = `Um dos números sorteados é menor que ${number}`;
                }else{
                    gameInfo.innerHTML = `Um números sorteados é maior que ${number}`;
                }
            } 
        }
    }
}