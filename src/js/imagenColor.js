import { insertarImagen } from './insertarImagen';
const contenedorImg = document.querySelectorAll('.contenedor-fijo-dibujo');


export function imagenYColor(datosTiempo) 
{
    const cargando = document.querySelector('.barra-carga');
    let contenedorImagenTemperatura = document.querySelectorAll('.contenedor-fijo-dibujo');
    let contenedorInfo = document.querySelectorAll('.contenedor-info');
    let imagen;

    for (let i = 0; i < contenedorImg.length; i++)
    {
      contenedorImg[i].removeChild(contenedorImg[i].firstChild)
    }
    for (let j = 0; j < 6; j++) 
    {
      const [tiempoManana, colorTiempoManana] = insertarImagen(datosTiempo.proximos_dias[j].estado_cielo);

        imagen = document.createElement('img');
        imagen.setAttribute('src', tiempoManana);
        imagen.setAttribute('class', 'imagen-temperatura imagen-hoy');
        contenedorImagenTemperatura[j+1].append(imagen);
        contenedorInfo[j + 1].setAttribute(
          'class',
          `${colorTiempoManana} contenedor-info`
        );
    }
      cargando.innerText = ' ';
}