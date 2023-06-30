export function valorMin(datosTiempo) {
    let contenedorTemperaturaMin = document.querySelectorAll('.temperatura-min');
    for (let i = 0; i < 6; i++) {
      let dirValorMin = datosTiempo.proximos_dias[i].temperatura.minima;
      contenedorTemperaturaMin[i + 1].innerText = ' ºC';
      contenedorTemperaturaMin[i + 1].prepend(' ' + dirValorMin);
    }
  }