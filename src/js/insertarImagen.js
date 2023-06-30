import { convertirArrayImagenes } from './convertirArrayImagenes';

export function insertarImagen(datosTiempo) 
{

    let valorCielo = convertirArrayImagenes(datosTiempo);
    if (valorCielo < 12) 
    {
      const sol = './assets/img/sunny.svg';
      const colorSol = 'color-sol';
      return [sol, colorSol];
    } 
    else if (valorCielo > 11 && valorCielo < 16) 
    {
      const solNubes = './assets/img/partly-cloudy.svg';
      const colorSolNubes = 'color-nubes';
      return [solNubes, colorSolNubes];
    } 
    else if (valorCielo > 15 && valorCielo < 31) 
    {
      const nubes = './assets/img/cloudy.svg';
      const colorNubes = 'color-nubes';
      return [nubes, colorNubes];
    } 
    else if (valorCielo > 30 && valorCielo < 49) 
    {
      const lluvia = './assets/img/rainy.svg';
      const colorLluvia = 'color-lluvia';
      return [lluvia, colorLluvia];
    } 
    else 
    {
      const tormenta = './assets/img/stormy.svg';
      const colorTormenta = 'color-tormenta';
      return [tormenta, colorTormenta];
    }
}