const totalLinhas = document.body.getElementsByTagName('p').length;

for(let i = 0; i < totalLinhas; i++){
    const pAux = document.body.getElementsByTagName('p')[i];
    if(/\d/.test(pAux.innerText)){
        pAux.classList.add("data-has-numbers");
    };
};