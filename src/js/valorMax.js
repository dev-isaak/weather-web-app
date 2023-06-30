export function valorMax(datosTiempo) {
    let contenedorTemperaturaMax = document.querySelectorAll('.temperatura-max');
    for (let i = 0; i < 6; i++) {
      let dirValorMax = datosTiempo.proximos_dias[i].temperatura.maxima;
      contenedorTemperaturaMax[i + 1].innerText = ' ºC';
      contenedorTemperaturaMax[i + 1].prepend(' ' + dirValorMax);
    }
  }