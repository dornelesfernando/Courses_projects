// Settings
const notLevel = document.querySelector("#not-level");  // *
const ease = document.querySelector("#ease");  // *
const medium = document.querySelector("#medium"); // *
const hard = document.querySelector("#hard"); // *
const custom = document.querySelector("#custom"); // *
const rangeMin = document.querySelector("#rangeMin");  // *
const rangeMax = document.querySelector("#rangeMax");  // *
const amountNumbers = document.querySelector("#amountNumbers");   // *
const amountAttempts = document.querySelector("#amountAttempts");  // *
const number = document.querySelector("#number");  

// play
const play = document.querySelector(".playButton"); // *

// info
const messageCustom = document.querySelector(".messageCustom"); // *
const messageLevel = document.querySelector(".messageLevel");
const messageRange = document.querySelector(".messageRange");
const messageAmount = document.querySelector(".messageAmount");
const rangeScale = document.querySelector(".rangeScale");
const rangeTitle = document.querySelector("#rangeTitle")
const levelTitle = document.querySelector("#levelTitle");
const gameInfo = document.querySelector(".info h1");
const restInfo = document.querySelector("#rest");
const atualRangeInfo = document.querySelector(".atualRangeInfo");
const tableNumbers = document.querySelector(".table")
const attemptsMadeInfo = document.querySelector(".attemptsMade");
const attemptsInfo = document.querySelector(".attempts");
const clock = document.querySelector(".clock");
const bestTimeBox = document.querySelector(".bestTimeBox");

const messages = [messageLevel, messageCustom, messageRange, messageAmount];
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