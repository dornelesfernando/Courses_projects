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

function updateGame(){
    if(gameSettings.level === "not-level"){
        attemptsInfo.innerHTML = "Infinity"
    }else{
        auxAttempts = gameSettings.attempts - attemptsMade;
        attemptsInfo.innerHTML = zeroLeft(auxAttempts); 
    }
    attemptsMadeInfo.innerHTML = zeroLeft(attemptsMade);
    restInfo.innerHTML = zeroLeft(rest);
}

function zeroLeft(num){
    return num < 10 ? `0${num}` : num;
}

function pauseTime(){
    clearInterval(cron);
    checkTime(clockTimeValue);
}

// reseta
function reset(){
    attemptsMade = 0;
    tableNumbers.innerHTML = '';
    attemptsNumbers = [];
    second = 0;
    minute = 0;
}

function attemptsMadeNumbers(){
    if(attemptsNumbers.length > 12){ // Alterar para 12 
        moreAttemps.style.display = "flex"
    }else{
        moreAttemps.style.display = "none"
        const element = createElement(true);
        element.innerText = zeroLeft(number.value);
        tableNumbers.appendChild(element);
        assignId(tableNumbers.className);
    }
};

function lastTimeSave(){
    const element = createElement(false);
    element.innerText = clockTimeValue;
    lastTimeBox.appendChild(element);
    assignId(lastTimeBox.className);
};

function createElement(attempt){
    const p = document.createElement("p");
    attempt == true ? p.classList.add("playNumber") : p.classList.add("lastNumber");

    if(attemptWin && attempt){
        p.classList.add("attemptWin");
        attemptWin = false;
    }    
    return p;
}

function assignId(nameDiv){
    const items = document.querySelectorAll(`.${nameDiv} p`);
    const lengthItems = document.querySelectorAll(`.${nameDiv} p`).length;
    
    for(let i = 0; i < lengthItems; i++){
        items[i].setAttribute("id", `${zeroLeft(i)}`);
    }
    // pega todos os elementos e coloca os id todos dnv
}