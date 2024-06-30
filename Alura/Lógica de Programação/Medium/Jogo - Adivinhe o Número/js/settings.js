// Not-level Settings
notLevel.addEventListener('click', function (){
    gameSettings = {
        level: "not-level",
        range: {
            min: 1,
            max: 50,
        },
        numbersSorted: 1,
        attempts: 9999999
    };
    notLevel.classList.add("selected");
    levelTitle.classList.remove("selected");
    custom.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
    gameInfo.innerHTML = `Clique em Iniciar para jogar.<br>Boa Sorte!`;
    pauseTime();
    reset();
});


// Level Settings
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
        attempts: 7
    };
    levelTitle.classList.add("selected");
    notLevel.classList.remove("selected");
    custom.classList.remove("selected");
    
    ease.classList.add("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
    gameInfo.innerHTML = `Clique em Iniciar para jogar.<br>Boa Sorte!`;
    atualRangeInfo.innerHTML = `${gameSettings.range.min} - ${gameSettings.range.max}`;
    pauseTime();
    reset();
});

medium.addEventListener('click', function (){
    gameSettings = {
        level: "medium",
        range: {
            min: 1,
            max: 30,
        },
        numbersSorted: 1,
        attempts: 5
    };
    levelTitle.classList.add("selected");
    notLevel.classList.remove("selected");
    custom.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.add("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
    gameInfo.innerHTML = `Clique em Iniciar para jogar.<br>Boa Sorte!`;
    atualRangeInfo.innerHTML = `${gameSettings.range.min} - ${gameSettings.range.max}`;
    pauseTime();
    reset();
});

hard.addEventListener('click', function (){
    gameSettings = {
        level: "hard",
        range: {
            min: 1,
            max: 50,
        },
        numbersSorted: 1,
        attempts: 3
    };
    levelTitle.classList.add("selected");
    notLevel.classList.remove("selected");
    custom.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.add("selectedLevel");
    updateSettings();
    gameInfo.innerHTML = `Clique em Iniciar para jogar.<br>Boa Sorte!`;
    atualRangeInfo.innerHTML = `${gameSettings.range.min} - ${gameSettings.range.max}`;
    pauseTime();
    reset();
});


// Custom Settings
custom.addEventListener('click', function (){
    customSettings();
});

function customSettings(){
    gameSettings.level = "custom",
    custom.classList.add("selected");
    notLevel.classList.remove("selected");
    levelTitle.classList.remove("selected");

    ease.classList.remove("selectedLevel");
    medium.classList.remove("selectedLevel");
    hard.classList.remove("selectedLevel");
    updateSettings();
    gameInfo.innerHTML = `Clique em Iniciar para jogar.<br>Boa Sorte!`;
    atualRangeInfo.innerHTML = `${gameSettings.range.min} - ${gameSettings.range.max}`;
    pauseTime();
    reset();
};

// Range Settings
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
    customSettings();  
    pauseTime();
    reset();
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
    customSettings();
    pauseTime();
    reset();
});


//  amount settings
amountNumbers.addEventListener('input', function (e) {
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
    customSettings(); 
    pauseTime();
    reset();
});

amountAttempts.addEventListener('input', function (e) {
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
    customSettings(); 
    pauseTime();
    reset();
});