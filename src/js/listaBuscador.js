import json from '../json/municipios.json'
import { capitalizar } from './capitalizarBusqueda';
import { busqueda } from './buscador';
import { encontrarMunicipio } from './encontrarMunicipio';
import { obtenerDatos } from '..';
const buscador = document.querySelector('#input-buscar');
const resultado = document.querySelector('#resultado-busqueda');
const serverApi = 'https://www.el-tiempo.net/api/json/v2';

export function listaBuscador()
{
  // el erray de los nombres seleccionados
  let seleccionados = [];
  // cada vez que el valor del elemento input cambia
  buscador.addEventListener('input', () => 
  {
    //vacia el array de los nombres seleccionados
    if (buscador.value == '')
    {
      resultado.style.display = 'none';
    }
    else
    {
      resultado.style.display ='block';
    }
    seleccionados.length = 0;
    //para más eficiencia crea un nuevo fragmento
    let fragment = document.createDocumentFragment();
    //recuoera el valor del input y guardalo en una variable
    let elValor = capitalizar(buscador.value);
    //si hay un valor
    if (elValor.length > 0) 
    {
    // busca en el json si el nombre incluye (o empieza por) el valor
      json.forEach(j => {
        //if(j.nombre.startsWith(elValor))
        if (j.Column5.includes(elValor)) 
        {
          // si lo incluye agregalo al array de los seleccionados
          seleccionados.push(j.Column5);
        }
      });
      //para cada elemento selccionado
      seleccionados.forEach(s => 
        {
      //crea un nuevo elemento p
        let p = document.createElement('p');
        //cuyo innerHTML es el nombre seleccionado
        p.innerHTML = s;
        p.setAttribute('class','campo-busqueda');
        p.addEventListener('click',() => 
        {
          const mensajeError = document.querySelector('.mensaje-error');
          let codProvi, codMuni;
          buscador.value = s;
          resultado.style.display = 'none';
          let resultadoBusqueda = encontrarMunicipio( json, buscador.value );
          [codProvi, codMuni] = resultadoBusqueda;

             const cargando = document.querySelector('.barra-carga');
             cargando.innerText = 'Cargando...';
             let urlBusqueda = `/provincias/${codProvi}/municipios/${codProvi + codMuni}`;
             obtenerDatos(serverApi + urlBusqueda);
             buscador.value = '';  
             mensajeError.innerText = '';
          
        });
        //y agregalo al fragmento
          fragment.appendChild(p);      
      });     
      //vacía el resultado 
      resultado.innerHTML = '';
      //agrega el fragmento al resultado
      resultado.appendChild(fragment);
    }
  });
}