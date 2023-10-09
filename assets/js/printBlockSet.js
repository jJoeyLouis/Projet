
// Tableau des blocs que je veux tester 
// Les clefs de tableBlock doivent correspondre avec le <aside> dans index.html
const tableBlock = {
    "Arduino" : ["Clignoter 1 seconde", "Arreter 3 secondes", "Cloignoter 0.1 miliseconde", "Arreter 5 secondes", "Autres tests"],
    "Tourner" : ["Tourner à droite 3 fois","Tourner à droite 5 fois", "Tourner à droite 10 fois", "Tourner à gauche 3 fois", "Tourner à gauche 5 fois","Tourner à gauche 10 fois"],
    "Déplacer" : ["Avancer de 10", "Avancer de 20", "Reculer de 10", "Reculer de 20"],
    "Attraper" : ["Resserrer la pince"] ,
    "Relacher" : ["Déserrer la pince"]
}

function changeOfSet(p){
    // Pour la couleur dans le aside
    const divActive = document.querySelector(".divActive");
    divActive.classList.remove("divActive") ;
    const parentP = p.parentElement ;
    parentP.classList.add("divActive") ;

    // Pour le changement des blocs
    const newSet = String(p.textContent);

    var containBlock = document.getElementById('contain-bloc') ;
    containBlock.innerHTML = '' ; //je vide d'abord le contenu
    var typeSet = document.getElementById("typeSetOfBlock");
    typeSet.innerHTML = '' ;
    typeSet.textContent = newSet ;

    printSetBlock(newSet,containBlock);

    
}


function printSetBlock(type, containBlock) {
    var listBlock = tableBlock[type] ;
    listBlock.forEach(e => {
        var divBlock = document.createElement("div");
        divBlock.classList.add("bloc") ;
        divBlock.classList.add(type) ;
        divBlock.onclick = function() {move(this) ; };
        divBlock.textContent = e ;
        containBlock.appendChild(divBlock);
    });
}