export function AvgTemperatura(datosAConvertir) 
{
    let temperaturaConvertida = [];
    //parseamos cada número
    if (datosAConvertir === '100') 
    {
      return parseInt(datosAConvertir);
    } 
    else if (datosAConvertir.length >= 2) 
    {
      for (let i = 0; datosAConvertir.length > i; i++) 
      {
        temperaturaConvertida.push(parseInt(datosAConvertir[i]));
      }
      //hacemos la media de todas las temperaturas
      let valoresTemperatura = temperaturaConvertida.length;
      let valorAvgTemperaturas = temperaturaConvertida.reduce(
        (previo, actual) => (actual += previo),
        0
      );
      valorAvgTemperaturas /= valoresTemperatura;
      valorAvgTemperaturas = parseInt(valorAvgTemperaturas);
      return valorAvgTemperaturas;
    } 
    else 
    {
      return parseInt(datosAConvertir);
    }
}