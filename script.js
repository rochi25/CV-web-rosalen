let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
       document.getElementById("nav").classList="";
       menuVisible = false; 
    }else{
       document.getElementById("nav").classList="responsive";
       menuVisible = true; 
    }
}

function seleccionar(){
    //Oculta el menú una vez seleccionada una opción
    document.getElementById(nav).classList = "";
    menuVisible = false;
}


document.getElementById('botonDescarga').addEventListener('click', function() {
    // Ruta al archivo PDF
    var pdfURL = 'CV_ROSALÉN_HERNÁNDEZ_QA.pdf';

    // Crear un enlace de descarga
    var enlaceAbrir = document.createElement('a');
    enlaceAbrir.href = pdfURL;
    enlaceAbrir.target = '_blank';

    // Establecer el nombre del archivo
    enlaceAbrir.download = 'CV_ROSALÉN_HERNÁNDEZ.pdf';

    // Añadir el enlace al documento
    document.body.appendChild(enlaceAbrir);

    // Simular el clic en el enlace para iniciar la descarga
    enlaceAbrir.click();

    // Eliminar el enlace del documento después de la descarga
    document.body.removeChild(enlaceAbrir);
});




