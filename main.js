document.getElementById('play').addEventListener('click', play);

// funzione che gestisce il gioco

function play() {

    const NUMERO_BOMBE = 16

    console.log('Hai premuto play');

    const difficolta = document.getElementById('s-difficolta').value;

    let numeroCelle;
    let cellePerRiga;

    switch (difficolta) {
        case "facile":
            default:
            numeroCelle = 100;
            break;
        case "medio":
            numeroCelle = 81;
            break;
        case "difficile":
            numeroCelle = 49;
            break;    
        
    }

    const gioco = document.getElementById('gioco');

    gioco.innerHTML = "";

    //reset del gioco

    generaCampoGioco(numeroCelle);
    const bombe = generaBombe(NUMERO_BOMBE, numeroCelle);

    console.log(bombe)

    function generaCampoGioco(numeroCelle) {

        cellePerRiga = Math.sqrt(numeroCelle);
    
        for ( let i = 1; i <= numeroCelle; i++) {
    
            const nodo = document.createElement('div')
            nodo.classList.add('quadrato');
    
            const dimensione = `calc(100% / ${cellePerRiga })`;
    
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;
    
            nodo.innerText = i;
        
            nodo.addEventListener('click', handleCellClick);
        
            gioco.appendChild(nodo);
        }
        console.log("hai scelto" + cellePerRiga + "celle");
        return true;
    
    }

    function handleCellClick() {
        this.classList.add('clicked');
        console.log("hai premuto il numero" + this.innerText);
        // rimuovo la possibilita di cliccare piu volte la stessa casella
        this.removeEventListener('click' , handleCellClick );
    }
}

function generaBombe(numeroBombe, numeroCelle) {

    const bombeGenerate = [];

    while (bombeGenerate.length < numeroBombe) {

        const bomba = getRandomNumber(1, numeroCelle);

        if (!bombeGenerate.includes(bomba)) {
            bombeGenerate.push(bomba);
        }
    }
    return bombeGenerate;

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}