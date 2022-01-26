const informations = document.querySelector('.informations');
const cellules = document.querySelectorAll('.cell');

let verrouillage = true;
let joueurEnCours = 'X'; // Le premier joueur utilise les X

informations.innerHTML = `Au tour de ${joueurEnCours}`;

// On stock les alignements gagnants dans un tableau de tableau
const alignementsGagnants = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// Tableau avec les cases qu'on va cocher par la suite (croix ou cercle).
let partieEnCours = ["", "", "", "", "", "", "", "", ""];

cellules.forEach(cell => {
    cell.addEventListener('click', clicSurCase);
})

function clicSurCase(e) {
    const caseCliquee = e.target; // Case sur laquelle on est en train de cliquer
    const caseDataIndex = caseCliquee.getAttribute('data-index');

    // Si j'ai déja cliqué sur une case et qu'il y a sonc quelque chose à l'intérieur, je return parce-que je ne veux pas que la fonction s'appelle à chaque fois.
    if (partieEnCours[caseDataIndex] !== "" || !verrouillage) {
        return;
    }

    partieEnCours[caseDataIndex] = joueurEnCours;
    caseCliquee.innerHTML = joueurEnCours;
    console.log(partieEnCours);

    validationResultat();
}

function validationResultat() {
    let finDePartie = false;

    // On va itérer à travers nos 8 combinaisons gagnantes
    for(let i = 0; i < alignementsGagnants.length; i++) {
        const checkWin = alignementsGagnants[i];
        // Première itération on est sur [0,1,2]
        // On va stocker les trois valeurs du tableau dans tois variables différentes et vérifier ensuite s'il s'agit d'un alignement gagnant ou non

        let a = partieEnCours[checkWin[0]];
        let b = partieEnCours[checkWin[1]];
        let c = partieEnCours[checkWin[2]];

        if (a === '' || b === '' || c === ''){
            continue;
        } // Si nos éléments sont alignés, si on a un alignement gagnant alors a, b et c seront tous les trois égaux.
        if (a === b && b === c){
            finDePartie = true;
            break;
        }    
    }

    if(finDePartie) {
        informations.innerText = `Le joueur ${joueurEnCours} a gagné !`
        verrouillage = false;
        return;
    }

    let matchNul = !partieEnCours.includes('');
    if(matchNul){
        informations.innerText = "Match nul !";
        verrouillage = false;
        return;
    }

    changementDeJoueur();
}

function changementDeJoueur() {
    joueurEnCours = (joueurEnCours === "X") ? "O" : "X";
    informations.innerText = `Au tour de ${joueurEnCours}`;
}