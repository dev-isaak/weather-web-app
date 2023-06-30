import jsonMunicipios from '../json/municipios.json'
import { obtenerDatos } from '..';
import { capitalizar } from './capitalizarBusqueda';
import { encontrarMunicipio } from './encontrarMunicipio';
let inputBusqueda = document.querySelector('#input-buscar');
let btnBuscar = document.querySelector('#btn-buscar');
let contenedorFoto = document.querySelectorAll('.contenedor-fijo-dibujo').firstElementChild;
let codProvi = '08';
let codMuni = '019';
let urlBusqueda = `/provincias/${codProvi}/municipios/${codProvi+codMuni}`;
const serverApi = 'https://www.el-tiempo.net/api/json/v2';

export function obtenerMunicipios()
{
    btnBuscar.addEventListener('click', () => {  
         let valorCapitalizado = capitalizar(inputBusqueda.value);
         const mensajeError = document.querySelector('.mensaje-error');
         const resultadoBusqueda = document.querySelector('#resultado-busqueda');
         const resultado = encontrarMunicipio(jsonMunicipios, valorCapitalizado);
         [codProvi, codMuni] = resultado;

         if (resultado == -1)
         {
            mensajeError.innerText = '*Introduce un municipio válido';
            inputBusqueda.value = '';
            inputBusqueda.focus();
            resultadoBusqueda.style.display = 'none';
         }
         else
         {
            const cargando = document.querySelector('.barra-carga');
            cargando.innerText = 'Cargando...';
            mensajeError.innerText = '';
            urlBusqueda = `/provincias/${codProvi}/municipios/${codProvi + codMuni}`;
            obtenerDatos(serverApi + urlBusqueda);
            inputBusqueda.value = '';  
            resultadoBusqueda.style.display = 'none';
         }
        
     })

     document.addEventListener('keyup', (event) => {
        const resultadoBusquedaEnter = document.querySelector('#resultado-busqueda');

        if ( event.key === 'Enter' && inputBusqueda.value.length >= 1 ) 
        {
            let valorCapitalizado = capitalizar(inputBusqueda.value);
            const mensajeError = document.querySelector('.mensaje-error');
            const resultado = encontrarMunicipio(jsonMunicipios, valorCapitalizado);
            [codProvi, codMuni] = resultado;
            if (resultado == -1)
            {
               mensajeError.innerText = '*Introduce un municipio válido';
               inputBusqueda.value = '';
               inputBusqueda.focus();
               resultadoBusquedaEnter.style.display = 'none';
            }
            else
            {
               const cargando = document.querySelector('.barra-carga');
               cargando.innerText = 'Cargando...';
               mensajeError.innerText = '';
               urlBusqueda = `/provincias/${codProvi}/municipios/${codProvi + codMuni}`;
               obtenerDatos(serverApi + urlBusqueda);
               inputBusqueda.value = '';  
               resultadoBusquedaEnter.style.display = 'none';
            }
        }
    });
}

obtenerMunicipios();
