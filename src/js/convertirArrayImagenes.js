
export function convertirArrayImagenes(estadoCielo) 
{
    //recorrer array y hacer media. de esa media en función del número devolverá una dirección de imagen u otra
    if (estadoCielo.length <= 3) 
    {
      //si no es un array solo mostrará el número
      return parseInt(estadoCielo);
    } 
    else 
    {
      // si es un array hará la media de todos los datos
      let datosCielo = [];
      for (let i = 0; estadoCielo.length > i; i++) 
      {
        datosCielo.push(parseInt(estadoCielo[i]));
      }
      //media de todos los estados ( comprobar que pasa con los estados que contienen letra)
      let valoresDatosCielo = datosCielo.length;
      let valorAvgDatosCielo = datosCielo.reduce(
        (previo, actual) => (actual += previo),
        0
      );
      valorAvgDatosCielo /= valoresDatosCielo;
      valorAvgDatosCielo = parseInt(valorAvgDatosCielo);
  
      return valorAvgDatosCielo;
    }
}