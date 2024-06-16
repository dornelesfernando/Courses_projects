// Settings
const notLevel = document.querySelector("#not-level");
const ease = document.querySelector("#ease");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const rangeMin = document.querySelector("#rangeMin");
const rangeMax = document.querySelector("#rangeMax");
const qtdNumbers = document.querySelector("#qtdNumbers");
const number = document.querySelector("#number");

// play
const play = document.querySelector("playButton");

// info
const gameInfo = document.querySelector(".info");
const atualRange = document.querySelector(".atualRange");
const tableNumbers = document.querySelector(".table")
const attemptsMade = document.querySelector(".attemptsMade");
const attempts = document.querySelector(".attempts");
const clock = document.querySelector(".clock");
const bestTimeBox = document.querySelector(".bestTimeBox");

const levels = ["not-level", "ease", "medium", "hard"];

let gameSettings = {
    level: "not-level",
    range: {
        min: 0,
        max: 50,
    },
    numbersSorted: 1,
}

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