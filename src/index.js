import './styles.css';
import {tiempoHoy} from './js/tiempoHoy'
import { diaActual } from './js/diaActual';
import { obtenerMunicipios } from './js/buscador';
import { valorMax } from './js/valorMax';
import { valorMin } from './js/valorMin';
import { valorPrecipitacion } from './js/valorPrecipitacion';
import { valorTemperatura } from './js/valorTemperatura';
import { imagenYColor } from './js/imagenColor';
import { pantallaDeCarga } from './js/pantallaCarga';
import { listaBuscador } from './js/listaBuscador';

let codProvi = '08';
let codMuni = '019';
let urlBusqueda = `/provincias/${codProvi}/municipios/${codProvi+codMuni}`;
const serverApi = 'https://www.el-tiempo.net/api/json/v2';
const tituloProvincia = document.querySelector('.titulo-provincia');

export async function obtenerDatos(url) {
  const resultadoTiempo = await fetch(url);
  try {
    if (resultadoTiempo.status === 200) 
    {
      let datosTiempo = await resultadoTiempo.json();
      diaActual();
      tiempoHoy(datosTiempo)
      valorMax(datosTiempo);
      valorMin(datosTiempo);
      valorPrecipitacion(datosTiempo);
      imagenYColor(datosTiempo);
      valorTemperatura(datosTiempo);
      listaBuscador();
      tituloProvincia.innerText = 'El tiempo en ';
      tituloProvincia.append(datosTiempo.breadcrumb[3].name + ', ' +datosTiempo.breadcrumb[1].name );
    }
    else 
    {
      console.error('Algún error ha ocurrido');
    }
  } catch (error) {
    console.log(error);
  }
}
pantallaDeCarga();
obtenerDatos(serverApi + urlBusqueda);

  
