export let encontrarMunicipio = (datosMunicipio, busqueda) => {
    for (let i in datosMunicipio)
    {
        const municipio = datosMunicipio[i];
        if (municipio.Column5 === busqueda)
        {
            return [municipio.Column2, municipio.Column3];
        }
    }
    return[-1];
}