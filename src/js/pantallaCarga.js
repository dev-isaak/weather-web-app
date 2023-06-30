export function pantallaDeCarga(){
    
window.addEventListener('DOMContentLoaded', () => {
    function repeat(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
      }
    //si tamanoImagen = 29 entonces es OK, sino vuelve a ejecutar el addeventlistener
      async function comprobarImagenes(){
        const contenedorCarga = document.querySelector('.pantalla-carga');
        const loader = document.querySelector('.loader');
    
        if (document.images.length < 28){
          await repeat(500);
          return comprobarImagenes();
        }
        else{
          contenedorCarga.setAttribute('class','.none') ;
          loader.setAttribute('class','.none');
        }
      }
      comprobarImagenes();
    });
}