
function move(bloc){
    let cloned = bloc.cloneNode(true) ;
    cloned.classList.add("isSelect") ;

    // clone près au déplacement :  réglé en absolute et en haut par z-index
    cloned.style.position = 'absolute'; // on sort le bloc du flux actuel de la page
    cloned.style.zIndex = 3;

    // pour le placer par rapport à body
    document.body.append(cloned);

    // Prendre la souris se place à gauche, au milieu du bloc clone
    function moveAt(pageX, pageY) {
        cloned.style.left = pageX - 10 + 'px';
        cloned.style.top = pageY - cloned.offsetHeight / 2 + 'px';
    }

    // déplacer notre clonede en positionnement absolu sous le pointeur
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        var listwasCloned = document.querySelectorAll(".hasBeenCloned") ;
        if(listwasCloned.length != 0){
            listwasCloned.forEach(e => {
                let tabPosition = e.getBoundingClientRect() ; // récupère les positions de (e) qui est un clone .hasBeenCloned
                let isSelect = document.querySelector(".isSelect") ; // celui que j'ai sous ma souris
                var blocToPut = document.querySelector(".blocToPut") ; // le bloc gris qui s'affiche à proximité
                //event.pageX correspond à la position de la souris
                if(event.pageX>tabPosition.left && event.pageX < tabPosition.left + 50 && event.pageY> tabPosition.top + 50 && event.pageY< tabPosition.top + 100 ){
                    blocToPut.style.display = "block " ;
                    blocToPut.style.top = tabPosition.top + 30 + "px" ;
                    blocToPut.style.left = tabPosition.left -20 + "px";
                }  else {
                    isSelect.style.border = "none" ;
                    blocToPut.style.display = "none " ;
                }        
            });
        }
    }

    // addEventListener écoute "qqch" ici document, d'un type "type" ici 'mousemove', et exécute la fonction onMouseMove
    document.addEventListener('mousemove', onMouseMove); // appel la fonction onMouseMove

    // lorsque je laisse tomber le bloc
    cloned.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        cloned.onmouseup = null;
        cloned.classList.remove("isSelect") ;
        cloned.classList.add("hasBeenCloned") ; // je change de class

        var blocToPut = document.querySelector(".blocToPut") ;
        let hasBeenCloned = document.querySelectorAll(".hasBeenCloned") ;
        if(hasBeenCloned.length !=0 && blocToPut.style.display == "none"){
            cloned.remove() ; // si il ne relache pas dans la bonne zone, alors le bloc disparait
        }
        // Enlever blocToPut
        if(blocToPut.style.display == "block") {
            let whereToPose = blocToPut.getBoundingClientRect() ;
            cloned.style.top = whereToPose.top + "px" ;
            cloned.style.left = whereToPose.left + 20 + "px" ;
            blocToPut.style.display = "none" ;
        }
    };
    cloned.ondragstart = function() {
        return false;
    };

};
