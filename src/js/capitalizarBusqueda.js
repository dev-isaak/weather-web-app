
export const capitalizar = (texto) =>
{
    let palabras = [];
    for(let palabra of texto.split(' '))
    {
        if (palabra != 'de')
        {
            palabras.push(palabra[0].toUpperCase() + palabra.substring(1))
        }
        else
        {
            palabras.push(palabra);
        }
    }
    
    return palabras.join(' ');
}
 