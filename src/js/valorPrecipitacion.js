import { AvgTemperatura } from './avgTemperatura';

export function valorPrecipitacion(datosTiempo) {
    let contenedorValorPrecipitacion = document.querySelectorAll('.valor-precipitacion');

    for (let i = 0; i < 6; i++) {
      let dirValorPrecipitacion = datosTiempo.proximos_dias[i].prob_precipitacion;
      const avgPrecipitacion = AvgTemperatura(dirValorPrecipitacion); //comprobar si esto es correcto ???????
      contenedorValorPrecipitacion[i + 1].innerText = ' %';
      contenedorValorPrecipitacion[i + 1].prepend(' ' + avgPrecipitacion + ' ');
    }
  }