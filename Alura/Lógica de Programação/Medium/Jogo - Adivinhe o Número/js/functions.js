function message(msg, number, temporary){
    messages[number].innerHTML = msg;
    messages[number].style.display = "block";
    if(temporary){
        setTimeout(function () {
            messages[number].style.display = "none";
        }, 4000);
    }
}

function updateSettings(){
    rangeMin.value = gameSettings.range.min;
    rangeMax.value = gameSettings.range.max;
    amountNumbers.value = gameSettings.numbersSorted;
    amountAttempts.value = gameSettings.attempts;
    restInfo.innerHTML = zeroLeft(gameSettings.numbersSorted);
    atualRangeInfo.innerHTML = `${zeroLeft(gameSettings.range.min)} - ${zeroLeft(gameSettings.range.max)}`;
}

function sort(numbersSorted, min, max){
    for(let i = 0; i < numbersSorted; i++){
        sortedNumbers[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(sortedNumbers[i]);
    }
    rest = sortedNumbers.length;
    console.log(sortedNumbers.length);
}

function checkNumber(number){
    for(let i = 0; i < sortedNumbers.length; i++){
        if(number == sortedNumbers[i]){
            clearInterval(cron);
            checkTime(clockTimeValue);
            rest--;
            if(rest == 0){
                gameInfo.innerHTML = "Parabéns, você acertou!"
                // salva o tempo
                setup = true;
                play.innerHTML = "Iniciar";
            }else{
                gameInfo.innerHTML = "Um já foi, falta os outros!"
            }

            sortedNumbers.pop(i);
        }else{
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

function attemptsMadeNumbers(){
    
};

function clockTime(date){
    cron = setInterval(() => { timer(); }, 1000);
};

function timer() {
    if ((second += 1) == 60) {
        second = 0;
        minute++;
    }

    clockTimeValue = `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
    clock.innerHTML =  clockTimeValue;
}

function checkTime(){

}

function bestTimeSave(){

};


// Game Info
/*
const tableNumbers = document.querySelector(".table")
const bestTimeBox = document.querySelector(".bestTimeBox");
*/

function updateGame(){
    attemptsMadeInfo.innerHTML = attemptsMade;
    auxAttempts = gameSettings.attempts - attemptsMade;
    attemptsInfo.innerHTML = auxAttempts; 
    restInfo.innerHTML = rest;
}

function zeroLeft(num){
    return num < 10 ? `0${num}` : num;
}


// reseta
function reset(){
    attemptsMade = 0;
}