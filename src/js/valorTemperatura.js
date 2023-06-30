import { AvgTemperatura } from './avgTemperatura';

export function valorTemperatura(datosTiempo) {
    const contenedorTemperatura = document.querySelectorAll('.temperatura-real');
    for (let i = 0; i < 6; i++) {
      let direccionTemperaturaMax =
        datosTiempo.proximos_dias[i].temperatura.maxima;
      let direccionTemperaturaMin =
        datosTiempo.proximos_dias[i].temperatura.minima;
      let direccionTemperatura = [
        direccionTemperaturaMax,
        direccionTemperaturaMin,
      ];
  
      let temperatura = AvgTemperatura(direccionTemperatura);
      contenedorTemperatura[i + 1].innerText = 'ºC';
      contenedorTemperatura[i + 1].prepend(temperatura);
    }
  }