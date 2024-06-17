// Settings
const notLevel = document.querySelector("#not-level");  // *
const ease = document.querySelector("#ease");  // *
const medium = document.querySelector("#medium"); // *
const hard = document.querySelector("#hard"); // *
const custom = document.querySelector("#custom"); // *
const rangeMin = document.querySelector("#rangeMin");  // *
const rangeMax = document.querySelector("#rangeMax");  // *
const qtdNumbers = document.querySelector("#qtdNumbers");   // *
const qtdAttempts = document.querySelector("#qtdAttempts");  // *
const number = document.querySelector("#number");  

// play
const play = document.querySelector(".playButton"); // *

// info
const messageCustom = document.querySelector(".messageCustom"); // *
const messageLevel = document.querySelector(".messageLevel");
const messageRange = document.querySelector(".messageRange")
const messageQtd = document.querySelector(".messageQtd");
const levelTitle = document.querySelector("#levelTitle")
const gameInfo = document.querySelector(".info");
const restInfo = document.querySelector("#rest");
const atualRangeInfo = document.querySelector(".atualRangeInfo");
const tableNumbers = document.querySelector(".table")
const attemptsMadeInfo = document.querySelector(".attemptsMade");
const attemptsInfo = document.querySelector(".attempts");
const clock = document.querySelector(".clock");
const bestTimeBox = document.querySelector(".bestTimeBox");

const messages = [messageLevel, messageCustom, messageRange, messageQtd];
let setup = true;
const sortedNumbers = [];
let minute = 0;
let second = 0;
let cron;
let clockTimeValue;
let bestTimes = [];
let attemptsMade = 0;

let gameSettings = {
    level: "not-level",
    range: {
        min: 1,
        max: 50,
    },
    numbersSorted: 1,
    attempts: Infinity,
};

notLevel.addEventListener('click', function (){
    gameSettings = {
        level: "not-level",
        range: {
            min: 1,
            max: 50,
        },
        numbersSorted: 1,
        attempts: Infinity,
    };
    notLevel.classList.add("selected");
    levelTitle.classList.remove("selected");
    custom.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
});

levelTitle.addEventListener('click', function () {
    message("Selecione um nível:", 0, true);
});

ease.addEventListener('click', function (){
    gameSettings = {
        level: "ease",
        range: {
            min: 1,
            max: 20,
        },
        numbersSorted: 1,
        attempts: 7,
    };
    levelTitle.classList.add("selected");
    notLevel.classList.remove("selected");
    custom.classList.remove("selected");
    
    ease.classList.add("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
});

medium.addEventListener('click', function (){
    gameSettings = {
        level: "medium",
        range: {
            min: 1,
            max: 30,
        },
        numbersSorted: 1,
        attempts: 5,
    };
    levelTitle.classList.add("selected");
    notLevel.classList.remove("selected");
    custom.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.add("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
});

hard.addEventListener('click', function (){
    gameSettings = {
        level: "hard",
        range: {
            min: 1,
            max: 50,
        },
        numbersSorted: 1,
        attempts: 3,
    };
    levelTitle.classList.add("selected");
    notLevel.classList.remove("selected");
    custom.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.add("selectedLevel");
    updateSettings();
});

custom.addEventListener('click', function (){
    gameSettings = {
        level: "custom",
        range: {
            min: 0,
            max: 2,
        },
        numbersSorted: 1,
        attempts: 1,
    };
    custom.classList.add("selected");
    notLevel.classList.remove("selected");
    levelTitle.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
});

// Range
rangeMin.addEventListener('input', function (e) {
    if(!Number.isInteger(Number(e.target.value))){
        message("Insira um número inteiro", 2, false);
    }else{
        if(Number(e.target.value) >= gameSettings.range.max){
            message("Range Mínimo não pode ser maior que o Range Máximo", 2, false);
        }else{ 
            if((gameSettings.range.max - Number(e.target.value)) > 1){
                messages[2].innerHTML = "";
                gameSettings.range.min = Number(e.target.value);
            }else{
                message("Range tem que ter no mínimo um valor", 2, false);
            }
        }
        rangeMin.value = gameSettings.range.min;
        rangeMax.value = gameSettings.range.max;
    }   
});

rangeMax.addEventListener('input', function (e) {
    if(!Number.isInteger(Number(e.target.value))){
        message("Insira um número inteiro", 2, false);
    }else{
        if(Number(e.target.value) <= gameSettings.range.min){
            message("Range Máximo não pode ser menor que o Range Mínimo", 2, false); 
        }else{
            if((Number(e.target.value) - gameSettings.range.min) > 1){
                messages[2].innerHTML = "";
                gameSettings.range.max = Number(e.target.value);
            }else{
                message("Range tem que ter no mínimo um valor", 2, false);
            }
            rangeMax.value = gameSettings.range.max;
            rangeMin.value = gameSettings.range.min;
        }
    }   
});

qtdNumbers.addEventListener('input', function (e) {
    if(!Number.isInteger(Number(e.target.value))){
        message("Insira um número inteiro", 3, false);
    }else{
        if(Number(e.target.value) > 0){
            if(Number(e.target.value) > gameSettings.attempts){
                message("A quantidade de números sorteados não pode ser maior que o número de tentativas", 3, false);
            }else{
                messages[3].innerHTML = "";
                gameSettings.numbersSorted = Number(e.target.value);
            } 
        }else{
            message("A quantidade de números sorteados não pode menor ou igual a 0", 3, false);
        }
    }   
});

qtdAttempts.addEventListener('input', function (e) {
    if(!Number.isInteger(Number(e.target.value))){
        message("Insira um número inteiro", 3, false);
    }else{
        if(Number(e.target.value) > 0){
            if(Number(e.target.value) < gameSettings.numbersSorted){
                message("A quantidade de tentativas não pode ser menor que a quantia de números sortados", 3, false);
            }else{
                messages[3].innerHTML = "";
                gameSettings.attempts = Number(e.target.value);
            }  
        }else{
            message("A quantidade de tentativas não pode menor ou igual a 0", 3, false);
        }
    }   
});


// ---------------------------------------------------------------------
play.addEventListener('click', function (e) {
    if(gameSettings.level === "not-level"){
        notLevel.classList.add("selected");
        updateSettings();
    }
    
    if(setup){
        play.innerHTML = "Jogar";
        sort(gameSettings.numbersSorted, gameSettings.range.min, gameSettings.range.max);
        setup = false;
        clockTime();
    }else{
        checkNumber(number.value);
        attemptsMade++;     
    }
    updateGame();
    number.value = '';
});
// ---------------------------------------------------------------------


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
    qtdNumbers.value = gameSettings.numbersSorted;
    qtdAttempts.value = gameSettings.attempts;
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
            console.log("acertou");
            clearInterval(cron);
            checkTime(clockTimeValue);
            rest--;
        }else{
            console.log("errou");
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
const gameInfo = document.querySelector(".info");
const tableNumbers = document.querySelector(".table")
const bestTimeBox = document.querySelector(".bestTimeBox");
*/

function updateGame(){
    attemptsMadeInfo.innerHTML = attemptsMade;
    gameSettings.attempts = gameSettings.attempts - attemptsMade;
    attemptsInfo.innerHTML = gameSettings.attempts; 
    atualRangeInfo.innerHTML = `${gameSettings.range.min} - ${gameSettings.range.max}`;
    restInfo.innerHTML = rest;
}
