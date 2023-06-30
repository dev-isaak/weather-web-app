
import { insertarImagen } from './insertarImagen';

export  function tiempoHoy(datosTiempo) {
    const { temperatura_actual, viento } = datosTiempo;
    const valorMax = datosTiempo.temperaturas.max;
    const valorMin = datosTiempo.temperaturas.min;
    const arrayCieloHoy = datosTiempo.stateSky.id;
    const valorPrecipitacion = datosTiempo.precipitacion;
    const descripcionCielo = datosTiempo.stateSky.description;
    const contenedorTemperatura = document.querySelectorAll('.temperatura-real');
    let contenedorTemperaturaMax = document.querySelectorAll('.temperatura-max');
    let contenedorTemperaturaMin = document.querySelectorAll('.temperatura-min');
    let contenedorImagenTemperatura = document.querySelectorAll('.imagen-temperatura');
    const valorViento = document.querySelector('.valor-viento');
    const cieloDescipcion = document.querySelector('.descripcion-cielo');
    let contenedorValorPrecipitacion = document.querySelectorAll('.valor-precipitacion');
    let contenedorInfo = document.querySelectorAll('.contenedor-info');
    const contenedorFoto = document.querySelector('.cnt-dibu-hoy');
  
    contenedorTemperatura[0].innerText = ' ºC';
    contenedorTemperatura[0].prepend(temperatura_actual);
    valorViento.innerText = ' km/h';
    valorViento.prepend(' ' + viento);
    cieloDescipcion.innerText = 'Cielo: ';
    cieloDescipcion.append(descripcionCielo);
    contenedorTemperaturaMax[0].innerText = ' ºC';
    contenedorTemperaturaMax[0].prepend(' ' + valorMax);
    contenedorTemperaturaMin[0].innerText = ' ºC';
    contenedorTemperaturaMin[0].prepend(' ' + valorMin);
    contenedorValorPrecipitacion[0].innerText = ' %';
    contenedorValorPrecipitacion[0].prepend(' ' + valorPrecipitacion + " ");
    const [tiempo, colorTiempo] = insertarImagen(arrayCieloHoy);
    
    let imagenHoy = document.createElement('img');
    imagenHoy.setAttribute('src', tiempo);
    imagenHoy.setAttribute('class', 'imagen-temperatura imagen-hoy');
    contenedorFoto.append(imagenHoy);
  
    contenedorInfo[0].setAttribute(
      "class",
      `${colorTiempo} contenedor-info info-hoy`
    );
  }
