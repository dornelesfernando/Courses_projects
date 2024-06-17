// Settings
const notLevel = document.querySelector("#not-level");  // *
const ease = document.querySelector("#ease");  // *
const medium = document.querySelector("#medium"); // *
const hard = document.querySelector("#hard"); // *
const rangeMin = document.querySelector("#rangeMin"); // *
const rangeMax = document.querySelector("#rangeMax"); // *
const qtdNumbers = document.querySelector("#qtdNumbers");
const number = document.querySelector("#number");

// play
const play = document.querySelector("playButton");

// info
const messageRange = document.querySelector(".messageRange")
const levelTitle = document.querySelector("#levelTitle")
const messageLevel = document.querySelector(".messageLevel");
const gameInfo = document.querySelector(".info");
const rest = document.querySelector("#rest");
const atualRange = document.querySelector(".atualRange");
const tableNumbers = document.querySelector(".table")
const attemptsMade = document.querySelector(".attemptsMade");
const attempts = document.querySelector(".attempts");
const clock = document.querySelector(".clock");
const bestTimeBox = document.querySelector(".bestTimeBox");

const levels = ["not-level", "ease", "medium", "hard"];
const messages = [messageLevel, messageRange];

let gameSettings = {
    level: "not-level",
    range: {
        min: 1,
        max: 50,
    },
    numbersSorted: 1,
    attempts: "~",
};

notLevel.addEventListener('click', function (){
    gameSettings = {
        level: "not-level",
        range: {
            min: 1,
            max: 50,
        },
        numbersSorted: 1,
        attempts: "~",
    };
    notLevel.classList.add("selected");
    levelTitle.classList.remove("selected");
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
});

// Range
rangeMin.addEventListener('input', function (e) {
    if(!Number.isInteger(Number(e.target.value))){
        message("Insira um número inteiro", 1, false);
    }else{
        if(!(Number(e.target.value) >= gameSettings.range.max)){
            messages[1].innerHTML = "";
            gameSettings.range.min = Number(e.target.value);
        }else{
            rangeMin.value = gameSettings.range.min;
            message("Range Mínimo não pode ser maior que o Range Máximo", 1, false);
        }
    }   
});

rangeMax.addEventListener('input', function (e) {
    if(!Number.isInteger(Number(e.target.value))){
        message("Insira um número inteiro", 1, false);
    }else{
        if(!(Number(e.target.value) <= gameSettings.range.min)){
            messages[1].innerHTML = "";
            gameSettings.range.max = Number(e.target.value);
        }else{
            rangeMax.value = gameSettings.range.max;
            message("Range Máximo não pode ser menor que o Range Mínimo", 1, false); 
        }
    }   
});






if(gameSettings.level === "ease") {
    
}else if(gameSettings.level === "medium"){

}else if(gameSettings.level === "hard"){

}else{
    console.log("Abacates");
}

function updateSettings(){

};

function attemptsMadeNumbers(){
    
};

function clockTime(){
    
};

function bestTimeSave(){

};
// caso seja selecionado 

function message(msg, number, temporary){
    messages[number].innerHTML = msg;
    messages[number].style.display = "block";
    if(temporary){
        setTimeout(function () {
            messages[number].style.display = "none";
        }, 4000);
    }
}