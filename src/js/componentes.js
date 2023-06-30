import '../css/componentes.css';
import logo from '../assets/img/logo.png';

export const saludar = (nombre) => 
{
    const titulo = document.createElement('h1');
    titulo.innerText = `Hola, ${nombre}!!`;
    document.body.append( titulo );
        
    const img = document.createElement('img');
    img.src = logo;
    document.body.append(img);
}
