var isActiveCamera = false ;
function showWebCam(){
    const overlay = document.getElementById("popUp_overlay") ;
    overlay.style.display = "block" ;

    const webCam = document.getElementById("watchCamera") ;
    webCam.style.display= "block" ;
    isActiveCamera = true ;
}

function deleteWebCam() {
    if(isActiveCamera){
        const overlay = document.getElementById("popUp_overlay") ;
        overlay.style.display = "none" ;

        const webCam = document.getElementById("watchCamera") ;
        webCam.style.display= "none" ;
        isActiveCamera = false;
    }
}